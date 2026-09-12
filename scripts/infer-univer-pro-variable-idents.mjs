#!/usr/bin/env node
/**
 * Variable-name inference for leftover vNNNN / ox<hex> bindings, using the
 * same ast-refactor pipeline functions use:
 *   exports (public `as` / import alias) → human baseName
 *   usage + initializer types (inferParamType / inferParamTypeFromUsage /
 *     evaluateExpressionType) → register / domain role
 *   computeTypeBloomSignature → collision-free suffix
 * Binding-aware Babel scope.rename only. Never rewrites string literals or
 * Comb keys. Split uses ast-refactor LST module clusters (LosslessFusionParser).
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const AST_REFACTOR = "/home/gabriel/Documentos/ast-refactor";
const VENDOR_PRO = path.join(ROOT, "vendor/univer-pro");
const BACKUP_ROOT = path.join(ROOT, "vendor/univer-pro-0x-backup");
const PRO_NM = [
  path.join(ROOT, "apps/workspace/node_modules/@univerjs-pro"),
  path.join(ROOT, "packages/dsh-univer-workspace-plugin/node_modules/@univerjs-pro")
];
const SKIP_PKGS = new Set(["collaboration-client-ui"]);
const CRYPTIC = /^(?:v\d+|ox[0-9a-f]+)$/i;
const BUILTIN = new Set([
  "undefined",
  "NaN",
  "Infinity",
  "arguments",
  "console",
  "Math",
  "JSON",
  "Object",
  "Array",
  "Map",
  "Set",
  "Date",
  "Promise",
  "Error",
  "TypeError",
  "Symbol",
  "Reflect",
  "Proxy",
  "Number",
  "String",
  "Boolean",
  "RegExp",
  "parseInt",
  "parseFloat",
  "isNaN",
  "eval",
  "require",
  "module",
  "exports",
  "globalThis",
  "window",
  "document",
  "process",
  "Buffer",
  "URL",
  "fetch"
]);

const astReq = createRequire(path.join(AST_REFACTOR, "package.json"));
const {
  inferParamType,
  inferParamTypeFromUsage,
  evaluateExpressionType,
  inferFunctionSignature
} = astReq("./scripts/L0_core/ast-inference.service.js");
const { computeTypeBloomSignature } = astReq("./scripts/L0_core/ast-bloom.codec.js");
const { splitHugeModuleLst } = await import(
  pathToFileURL(path.join(AST_REFACTOR, "scripts/L2_services/lst-split.service.mjs")).href
);
function synthesizeChunkBridges(body, exported) {
  if (!exported.length) return body.endsWith("\n") ? body : `${body}\n`;
  const footer = `\nexport { ${exported.join(", ")} };\n`;
  if (new RegExp(`export\\s+(?:async\\s+)?function\\s+(?:${exported.join("|")})\\b`).test(body)) {
    return body.endsWith("\n") ? body : `${body}\n`;
  }
  return `${body.endsWith("\n") ? body : `${body}\n`}${footer}`;
}

let babel = null;

function unwrap(mod) {
  return mod?.default ?? mod;
}

function loadBabel() {
  if (babel) return babel;
  const pnpm = path.join(ROOT, "node_modules/.pnpm");
  const dirs = fs.existsSync(pnpm)
    ? fs.readdirSync(pnpm).filter((d) => d.startsWith("@babel+core@"))
    : [];
  if (dirs.length === 0) {
    babel = {
      parser: astReq("@babel/parser"),
      traverse: unwrap(astReq("@babel/traverse")),
      generate: unwrap(astReq("@babel/generator")),
      types: astReq("@babel/types")
    };
    return babel;
  }
  dirs.sort();
  const preferred = dirs.find((d) => /@babel\+core@7\./.test(d)) ?? dirs[dirs.length - 1];
  const req = createRequire(path.join(pnpm, preferred, "node_modules/@babel/core/package.json"));
  babel = {
    parser: req("@babel/parser"),
    traverse: unwrap(req("@babel/traverse")),
    generate: unwrap(req("@babel/generator")),
    types: req("@babel/types")
  };
  return babel;
}

function parseSource(src) {
  const { parser } = loadBabel();
  const opts = {
    sourceType: "unambiguous",
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    errorRecovery: true,
    plugins: ["importAttributes"]
  };
  try {
    return parser.parse(src, opts);
  } catch {
    return parser.parse(src, { ...opts, sourceType: "module" });
  }
}

function inferDomain(filePath = "") {
  const norm = filePath.replace(/\\/g, "/").toLowerCase();
  if (norm.includes("auth")) return "auth";
  if (norm.includes("db") || norm.includes("store") || norm.includes("storage")) return "db";
  if (norm.includes("net") || norm.includes("http") || norm.includes("transport")) return "net";
  if (norm.includes("rpc") || norm.includes("protocol")) return "rpc";
  if (norm.includes("crypto") || norm.includes("hash")) return "crypto";
  if (norm.includes("ast") || norm.includes("parser")) return "ast";
  if (norm.includes("type") || norm.includes("schema")) return "types";
  if (norm.includes("base")) return "db";
  return "core";
}

function exportedName(spec) {
  if (spec.type !== "ExportSpecifier") return null;
  const exported = spec.exported;
  if (exported.type === "Identifier") return exported.name;
  if (exported.type === "StringLiteral") return exported.value;
  return null;
}

function localName(spec) {
  return spec.local?.type === "Identifier" ? spec.local.name : null;
}

function importedName(spec) {
  if (spec.type !== "ImportSpecifier") return null;
  const imported = spec.imported;
  if (imported.type === "Identifier") return imported.name;
  if (imported.type === "StringLiteral") return imported.value;
  return null;
}

function findBareCrypticExport(ast, traverse) {
  let reason = null;
  traverse(ast, {
    ExportNamedDeclaration(path) {
      if (reason) return;
      for (const spec of path.node.specifiers) {
        const exported = exportedName(spec);
        const local = localName(spec);
        if (exported && local && exported === local && CRYPTIC.test(exported)) {
          reason = `export { ${exported} } with no public alias`;
        }
      }
    }
  });
  return reason;
}

function collectAliasMaps(ast, traverse) {
  const exportAs = new Map();
  const importAs = new Map();
  traverse(ast, {
    ExportNamedDeclaration(path) {
      for (const spec of path.node.specifiers) {
        const local = localName(spec);
        const exported = exportedName(spec);
        if (local && exported && local !== exported && CRYPTIC.test(local) && !CRYPTIC.test(exported)) {
          exportAs.set(local, exported);
        }
      }
    },
    ImportDeclaration(path) {
      for (const spec of path.node.specifiers) {
        const local = localName(spec);
        const imported = importedName(spec);
        if (local && imported && local !== imported && CRYPTIC.test(local) && !CRYPTIC.test(imported)) {
          importAs.set(local, imported);
        }
      }
    }
  });
  return { exportAs, importAs };
}

function isNowCall(node, t) {
  return (
    t.isCallExpression(node) &&
    t.isMemberExpression(node.callee) &&
    !node.callee.computed &&
    t.isIdentifier(node.callee.property, { name: "now" })
  );
}

function typeAtom(type) {
  const raw = String(type || "*").toLowerCase();
  if (raw.includes("date") || raw.includes("time")) return "timestampMs";
  if (raw.includes("map")) return "itemsMap";
  if (raw.includes("set")) return "itemsSet";
  if (raw.includes("array") || raw.includes("[]")) return "itemsList";
  if (raw.includes("string")) return "strVal";
  if (raw.includes("number") || raw === "num") return "countVal";
  if (raw.includes("bool")) return "isFlag";
  if (raw.includes("function")) return "callback";
  if (raw.includes("regexp")) return "pattern";
  if (raw.includes("url")) return "url";
  if (raw.includes("object") || raw.includes("record")) return "targetObj";
  return "value";
}

function uniqueIdent(scope, wanted, used) {
  let name = wanted;
  let n = 0;
  while (
    !name ||
    !/^[A-Za-z_$][\w$]*$/.test(name) ||
    scope.hasBinding(name) ||
    scope.hasGlobal(name) ||
    used.has(name) ||
    BUILTIN.has(name)
  ) {
    n += 1;
    name = `${wanted}${n}`;
    if (n > 50) {
      name = `${wanted}_${computeTypeBloomSignature([], "*", wanted)}`;
      break;
    }
  }
  used.add(name);
  return name;
}

function inferFromInit(init, t) {
  if (!init) return null;
  if (isNowCall(init, t)) return "timestampMs";
  if (t.isNewExpression(init) && t.isIdentifier(init.callee)) {
    const c = init.callee.name;
    if (c === "Map") return "itemsMap";
    if (c === "Set") return "itemsSet";
    if (c === "Date") return "timestampMs";
    if (c === "URL") return "url";
    if (c === "RegExp") return "pattern";
  }
  const typed = evaluateExpressionType(init);
  if (typed && typed !== "*" && typed !== "void") return typeAtom(typed);
  return null;
}

function inferFromUsage(name, fnNode, binding) {
  if (fnNode) {
    const used = inferParamTypeFromUsage(name, fnNode.body);
    if (used) return typeAtom(used);
    const typed = inferParamType(name, null, null, fnNode);
    if (typed && typed !== "*") return typeAtom(typed);
  }
  if (!binding?.referencePaths) return null;
  let mutated = false;
  let props = false;
  let abortish = false;
  for (const ref of binding.referencePaths) {
    const parent = ref.parentPath;
    if (!parent) continue;
    if (parent.isMemberExpression() && parent.node.object === ref.node) {
      props = true;
      const prop = !parent.node.computed && parent.node.property?.name;
      if (prop === "aborted" || prop === "addEventListener") abortish = true;
    }
    if (parent.isAssignmentExpression() && parent.node.left === ref.node) mutated = true;
    if (parent.isUpdateExpression()) mutated = true;
  }
  if (abortish) return "signal";
  if (mutated) return "target";
  if (props) return "options";
  return null;
}

function functionBaseName(fnNode, filePath) {
  const sig = inferFunctionSignature(fnNode || { async: false, body: { body: [] } });
  const domain = inferDomain(filePath);
  const base = "routine";
  const bloom = computeTypeBloomSignature(
    (fnNode?.params || []).map((p) => ({ name: p.name || "arg", type: "*" })),
    sig.returnType || "*",
    base
  );
  const stratum = sig.isAsync ? "L2" : "L0";
  const purity = sig.isAsync ? "async" : "pure";
  return `fn_${stratum}_${domain}_endo_${base}_${purity}_O1_zalloc_nothrow_sig${bloom}`;
}

function inferWantedName({ name, binding, scope, filePath, t }) {
  const fnPath = scope.path;
  const fnNode =
    fnPath?.isFunction?.() || fnPath?.isArrowFunctionExpression?.()
      ? fnPath.node
      : binding.path.parentPath?.isFunction?.()
        ? binding.path.parent.node
        : null;

  if (binding.path.isFunctionDeclaration() || binding.path.isFunctionExpression()) {
    return functionBaseName(binding.path.node, filePath);
  }

  const init = binding.path.isVariableDeclarator() ? binding.path.node.init : null;
  const fromInit = inferFromInit(init, t);
  const fromUsage = inferFromUsage(name, fnNode, binding);
  const role = fromInit || fromUsage || "value";
  const domain = inferDomain(filePath);
  const bloom = computeTypeBloomSignature([{ name, type: role }], "*", name);
  if (/^[A-Za-z][A-Za-z0-9]*$/.test(role) && role !== "value") {
    return uniqueIdent(scope, role, new Set());
  }
  return uniqueIdent(scope, `var_${domain}_${role}_sig${bloom}`, new Set());
}

function renameBinding(scope, from, to) {
  if (!from || !to || from === to) return false;
  if (!scope.hasOwnBinding(from)) return false;
  if (scope.hasBinding(to) || scope.hasGlobal(to)) return false;
  try {
    scope.rename(from, to);
    return true;
  } catch {
    return false;
  }
}

export function inferMeaningfulIdents(src, options = {}) {
  try {
    return runInferMeaningfulIdents(src, options);
  } catch (err) {
    if (String(err.message || err).includes("Duplicate declaration") && !options.skipImportAlias) {
      return runInferMeaningfulIdents(src, { ...options, skipImportAlias: true });
    }
    return { src, changed: false, aborted: true, reason: String(err.message || err), matchedPublicAs: 0 };
  }
}

function runInferMeaningfulIdents(src, { filePath = "", skipImportAlias = false } = {}) {
  const { traverse, generate, types: t } = loadBabel();
  let ast;
  try {
    ast = parseSource(src);
  } catch (err) {
    return { src, changed: false, aborted: true, reason: String(err.message), matchedPublicAs: 0 };
  }
  const bare = findBareCrypticExport(ast, traverse);
  if (bare) {
    return { src, changed: false, aborted: true, reason: bare, matchedPublicAs: 0 };
  }

  const { exportAs, importAs } = collectAliasMaps(ast, traverse);
  const takenLocals = new Set();
  traverse(ast, {
    ImportDeclaration(path) {
      for (const spec of path.node.specifiers) {
        const local = localName(spec);
        const imported = importedName(spec) || spec.local?.name;
        if (local && !CRYPTIC.test(local)) takenLocals.add(local);
        if (imported && local === imported) takenLocals.add(imported);
      }
    }
  });
  let matchedPublicAs = 0;
  const jobs = [];

  traverse(ast, {
    Scopable(path) {
      const scope = path.scope;
      for (const name of Object.keys(scope.bindings)) {
        if (!scope.hasOwnBinding(name) || !CRYPTIC.test(name)) continue;
        const binding = scope.getOwnBinding(name);
        if (!binding) continue;
        const exportName = exportAs.get(name);
        if (exportName && !takenLocals.has(exportName)) {
          takenLocals.add(exportName);
          jobs.push({ scope, from: name, to: exportName, publicAs: true, depth: 0 });
          continue;
        }
        const importName = skipImportAlias ? null : importAs.get(name);
        if (importName) {
          const camel = importName.charAt(0).toLowerCase() + importName.slice(1);
          const to = camel === name ? `${camel}Local` : camel;
          if (!takenLocals.has(to)) {
            takenLocals.add(to);
            jobs.push({ scope, from: name, to, publicAs: true, depth: 0 });
            continue;
          }
        }
        const wanted = inferWantedName({ name, binding, scope, filePath, t });
        if (!wanted) continue;
        let depth = 0;
        for (let s = scope; s.parent; s = s.parent) depth += 1;
        jobs.push({ scope, from: name, to: wanted, publicAs: false, depth });
      }
    }
  });

  jobs.sort((a, b) => b.depth - a.depth || Number(b.publicAs) - Number(a.publicAs));
  const used = new Set();
  for (const job of jobs) {
    const to = uniqueIdent(job.scope, job.to, used);
    if (renameBinding(job.scope, job.from, to)) {
      if (job.publicAs) matchedPublicAs += 1;
    }
  }


  const out = generate(ast, {
    comments: true,
    compact: false,
    jsescOption: { quotes: "double", minimal: true }
  }).code;
  const next = out.endsWith("\n") ? out : `${out}\n`;
  return {
    src: next,
    changed: next !== src,
    aborted: false,
    reason: null,
    matchedPublicAs,
    renamed: jobs.length
  };
}

function collectTopLevelBindings(ast) {
  const names = [];
  for (const node of ast.program.body) {
    const decl = node.type === "ExportNamedDeclaration" ? node.declaration : node;
    if (decl?.type === "FunctionDeclaration" && decl.id) names.push(decl.id.name);
    if (decl?.type === "ClassDeclaration" && decl.id) names.push(decl.id.name);
    if (decl?.type === "VariableDeclaration") {
      for (const d of decl.declarations) {
        if (d.id?.type === "Identifier") names.push(d.id.name);
      }
    }
  }
  return [...new Set(names)];
}

function collectPublicExportNames(ast) {
  const names = [];
  for (const node of ast.program.body) {
    if (node.type !== "ExportNamedDeclaration") continue;
    if (node.declaration?.type === "FunctionDeclaration" && node.declaration.id) {
      names.push(node.declaration.id.name);
    } else if (node.declaration?.type === "ClassDeclaration" && node.declaration.id) {
      names.push(node.declaration.id.name);
    } else if (node.declaration?.type === "VariableDeclaration") {
      for (const d of node.declaration.declarations) {
        if (d.id?.type === "Identifier") names.push(d.id.name);
      }
    }
    for (const spec of node.specifiers || []) {
      const n = exportedName(spec);
      if (n) names.push(n);
    }
  }
  return [...new Set(names)];
}

function collectReferencedIdents(ast, traverse) {
  const refs = new Set();
  traverse(ast, {
    Identifier(path) {
      if (path.parent.type === "ImportSpecifier" && path.parent.imported === path.node) return;
      if (path.parent.type === "ExportSpecifier" && path.parent.exported === path.node && path.parent.exported !== path.parent.local) {
        return;
      }
      if (path.parent.type === "MemberExpression" && path.parent.property === path.node && !path.parent.computed) {
        return;
      }
      if (BUILTIN.has(path.node.name)) return;
      if (!path.scope.hasBinding(path.node.name)) refs.add(path.node.name);
    }
  });
  return refs;
}

function chunkRel(base, index, total) {
  if (total <= 1) return base;
  const ext = path.extname(base) || ".js";
  const stem = ext ? base.slice(0, -ext.length) : base;
  return `${stem}.${String(index + 1).padStart(2, "0")}${ext}`;
}

export function splitHugeModule(src, { filePath = "index.js", maxLines = 800 } = {}) {
  return splitHugeModuleLst(src, { filePath, maxLines });
}

function posixRel(filePath) {
  return path.relative(ROOT, path.resolve(filePath)).split(path.sep).join("/");
}

function isForbidden(filePath) {
  const rel = posixRel(filePath);
  if (rel.includes("/umd/") || rel.startsWith("vendor/univer-pro-published/")) return true;
  const vendorRel = path.relative(VENDOR_PRO, path.resolve(filePath));
  if (!vendorRel.startsWith("..") && SKIP_PKGS.has(vendorRel.split(path.sep)[0])) return true;
  return false;
}

function writeUnlinked(filePath, content) {
  try {
    fs.unlinkSync(filePath);
  } catch {
    // new file
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function backupVendorFile(filePath) {
  const rel = path.relative(VENDOR_PRO, path.resolve(filePath));
  if (rel.startsWith("..")) return false;
  const dest = path.join(BACKUP_ROOT, rel);
  if (fs.existsSync(dest)) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(filePath, dest);
  return true;
}

function applyOverlay(vendorFile) {
  const rel = path.relative(VENDOR_PRO, vendorFile);
  if (rel.startsWith("..")) return false;
  const pkg = rel.split(path.sep)[0];
  let applied = false;
  for (const proNm of PRO_NM) {
    if (!fs.existsSync(path.join(proNm, pkg))) continue;
    writeUnlinked(path.join(proNm, rel), fs.readFileSync(vendorFile));
    applied = true;
  }
  return applied;
}

function countV(src) {
  return (src.match(/\bv\d+\b/g) || []).length;
}

function count0x(src) {
  return (src.match(/\b_0x[0-9a-f]+\b/gi) || []).length;
}

export function processVendorFile(filePath, { write = false, apply = false, split = false, maxLines = 800 } = {}) {
  if (isForbidden(filePath)) {
    return { rel: posixRel(filePath), skipped: true };
  }
  const original = fs.readFileSync(filePath, "utf8");
  const beforeV = countV(original);
  const before0x = count0x(original);
  const inferred = inferMeaningfulIdents(original, { filePath });
  if (inferred.aborted) {
    return { rel: posixRel(filePath), aborted: true, reason: inferred.reason, beforeV, before0x };
  }
  let next = inferred.src;
  let splitFiles = null;
  if (split) {
    const result = splitHugeModule(next, { filePath, maxLines });
    splitFiles = result.files;
    const barrel = result.files.find((f) => f.rel === path.basename(filePath));
    if (barrel) next = barrel.code;
  }
  if (write) {
    backupVendorFile(filePath);
    if (splitFiles && splitFiles.length > 1) {
      const dir = path.dirname(filePath);
      for (const file of splitFiles) {
        const dest = path.join(dir, file.rel);
        writeUnlinked(dest, file.code);
        if (apply) applyOverlay(dest);
      }
    } else {
      writeUnlinked(filePath, next);
      if (apply) applyOverlay(filePath);
    }
  }
  const after = write ? fs.readFileSync(filePath, "utf8") : next;
  return {
    rel: posixRel(filePath),
    changed: inferred.changed,
    matchedPublicAs: inferred.matchedPublicAs,
    beforeV,
    afterV: countV(after),
    before0x,
    after0x: count0x(after),
    splitCount: splitFiles ? splitFiles.length : 1,
    written: Boolean(write)
  };
}

function main() {
  const argv = process.argv.slice(2);
  const args = { write: false, apply: false, split: false, file: null, maxLines: 800 };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--write") args.write = true;
    else if (a === "--apply") args.apply = true;
    else if (a === "--split") args.split = true;
    else if (a === "--file") args.file = argv[++i];
    else if (a === "--max-lines") args.maxLines = Number(argv[++i]) || 800;
  }
  if (!args.file) {
    console.error("Usage: infer-univer-pro-variable-idents.mjs --file <path> [--write] [--apply] [--split]");
    process.exit(1);
  }
  const result = processVendorFile(path.resolve(ROOT, args.file), args);
  console.log(JSON.stringify(result, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main();
}
