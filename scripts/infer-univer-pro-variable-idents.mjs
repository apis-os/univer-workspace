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
import { healForParse } from "./rename-univer-pro-0x-idents.mjs";

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
const { LosslessFusionParser } = await import(
  pathToFileURL(path.join(AST_REFACTOR, "packages/lst/src/parser/LosslessFusionParser.js")).href
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
  }
  used.add(name);
  return name;
}

function skipStringOrComment(src, i) {
  const c = src[i];
  const n = src[i + 1];
  if (c === "/" && n === "/") {
    let j = i + 2;
    while (j < src.length && src[j] !== "\n") j += 1;
    return j;
  }
  if (c === "/" && n === "*") {
    const j = src.indexOf("*/", i + 2);
    return j < 0 ? src.length : j + 2;
  }
  if (c === "'" || c === '"' || c === "`") {
    const q = c;
    let j = i + 1;
    while (j < src.length) {
      if (src[j] === "\\") {
        j += 2;
        continue;
      }
      if (src[j] === q) return j + 1;
      j += 1;
    }
    return src.length;
  }
  return i;
}

function isIdentStart(c) {
  return c != null && /[A-Za-z_$]/.test(c);
}

function isIdentChar(c) {
  return c != null && /[\w$]/.test(c);
}

function readIdentAt(src, i) {
  if (!isIdentStart(src[i])) return null;
  let j = i + 1;
  while (isIdentChar(src[j])) j += 1;
  return { name: src.slice(i, j), start: i, end: j };
}

function skipWs(src, i) {
  while (src[i] === " " || src[i] === "\t" || src[i] === "\n" || src[i] === "\r") i += 1;
  return i;
}

function keywordAt(src, i, word) {
  if (!src.startsWith(word, i)) return false;
  if (isIdentChar(src[i + word.length])) return false;
  if (i > 0 && isIdentChar(src[i - 1])) return false;
  return true;
}

function readDeclIdent(src, i) {
  if (keywordAt(src, i, "function")) {
    let j = skipWs(src, i + 8);
    if (src[j] === "*") j = skipWs(src, j + 1);
    return readIdentAt(src, j);
  }
  if (keywordAt(src, i, "class")) {
    return readIdentAt(src, skipWs(src, i + 5));
  }
  if (keywordAt(src, i, "const") || keywordAt(src, i, "let")) {
    const word = src.startsWith("const", i) ? "const" : "let";
    return readIdentAt(src, skipWs(src, i + word.length));
  }
  return null;
}

/**
 * Duplicate `function fn_…sigD23F` / `const var_…sig0D46` decls from loc-slice
 * Bloom collisions make Babel throw before leftover vNNNN can infer. Rename 2nd+
 * same-scope function/class/const/let names only (skip strings/comments).
 */
export function uniqueifyCollidingInferredNames(src) {
  const used = new Set();
  const jobs = [];
  let i = 0;
  let brace = 0;
  let paren = 0;
  while (i < src.length) {
    const next = skipStringOrComment(src, i);
    if (next !== i) {
      i = next;
      continue;
    }
    const c = src[i];
    if (c === "{") {
      brace += 1;
      i += 1;
      continue;
    }
    if (c === "}") {
      brace -= 1;
      i += 1;
      continue;
    }
    if (c === "(") {
      paren += 1;
      i += 1;
      continue;
    }
    if (c === ")") {
      paren -= 1;
      i += 1;
      continue;
    }
    if (brace === 0 && paren <= 0) {
      const ident = readDeclIdent(src, i);
      if (ident) {
        const isFn = keywordAt(src, i, "function") || keywordAt(src, i, "class");
        if (isFn || /^(?:fn_|var_)/.test(ident.name)) {
          if (used.has(ident.name)) {
            let n = 1;
            let to;
            do {
              to = `${ident.name}_${n}`;
              n += 1;
            } while (used.has(to));
            jobs.push({ start: ident.start, end: ident.end, to });
            used.add(to);
          } else {
            used.add(ident.name);
          }
          i = ident.end;
          continue;
        }
      }
    }
    i += 1;
  }
  if (jobs.length === 0) return { src, changed: false };
  let out = src;
  for (const job of jobs.sort((a, b) => b.start - a.start)) {
    out = `${out.slice(0, job.start)}${job.to}${out.slice(job.end)}`;
  }
  return { src: out, changed: true, renamed: jobs.length };
}

const WRAP_SUFFIXES = ["", "}", "}}", "}}}", "})}", "})}}", "});", "})};", ")}", "})", ");", "();"];

function parses(src) {
  try {
    parseSource(src);
    return true;
  } catch {
    return false;
  }
}

function shortestWrap(src) {
  for (const suffix of WRAP_SUFFIXES) {
    if (parses(src + suffix)) return suffix;
  }
  return null;
}

function isIdentStartChar(c) {
  return c != null && /[A-Za-z_$]/.test(c);
}

/**
 * Statement-like mega-line cuts from source offsets (strings/comments skipped).
 * Does not walk Babel/ESTree. Cut starts are the residue token (`})(),` / `;}(),` / `},ident=`).
 */
export function statementLikeCutOffsets(src) {
  const cuts = [];
  let i = 0;
  while (i < src.length) {
    const next = skipStringOrComment(src, i);
    if (next !== i) {
      i = next;
      continue;
    }
    if (src.startsWith("})(),", i) && isIdentStartChar(src[i + 5])) {
      cuts.push(i);
    } else if (src.startsWith(")(),", i) && src[i - 1] !== "}" && isIdentStartChar(src[i + 4])) {
      cuts.push(i);
    } else if (src.startsWith(";}(),", i) && isIdentStartChar(src[i + 5])) {
      cuts.push(i);
    } else if (src[i] === "}" && src[i + 1] === ",") {
      const ident = readIdentAt(src, i + 2);
      if (ident) {
        const after = src.slice(ident.end);
        if (after.startsWith("=function") || after.startsWith("= function") || after.startsWith(".prototype")) {
          cuts.push(i);
        }
      }
    }
    i += 1;
  }
  return [...new Set(cuts)].sort((a, b) => a - b);
}

function lstStatementOffsets(src, hintPath) {
  try {
    if (src.length > 80_000 && !parses(src)) return [];
    const wrap = shortestWrap(src);
    if (wrap === null) return [];
    const lst = LosslessFusionParser.parse(src + wrap, {
      sourcePath: hintPath || "piece.js",
      errorRecovery: true
    });
    return (lst.statements || [])
      .map((s) => s?.loc?.start)
      .filter((off) => Number.isInteger(off) && off > 0 && off < src.length);
  } catch {
    return [];
  }
}

function pieceCandidates(src) {
  const out = [{ raw: src, prefix: "", sep: "" }];
  const seps = ["})(),", ";}(),", "},"];
  for (const sep of seps) {
    if (!src.startsWith(sep)) continue;
    const rest = src.slice(sep.length);
    out.push({ raw: rest, prefix: "", sep });
    if (/^[A-Za-z_$][\w$]*=/.test(rest)) {
      out.push({ raw: `var ${rest}`, prefix: "var ", sep });
    }
  }
  if (src.startsWith(")(),") && isIdentStartChar(src[4])) {
    const rest = src.slice(4);
    out.push({ raw: rest, prefix: "", sep: ")()," });
    if (/^[A-Za-z_$][\w$]*=/.test(rest)) {
      out.push({ raw: `var ${rest}`, prefix: "var ", sep: ")()," });
    }
  }
  return out;
}

function restoreInferredPiece(inferred, cand) {
  let body = inferred;
  if (cand.wrap && body.endsWith(cand.wrap)) body = body.slice(0, -cand.wrap.length);
  if (cand.prefix === "var ") body = body.replace(/^var\s+/, "");
  return `${cand.sep}${body}`;
}

function tryInferPiece(src, hintPath) {
  for (const cand of pieceCandidates(src)) {
    if (cand.raw.length > 100_000 && !cand.sep && !cand.prefix) {
      if (!parses(cand.raw)) continue;
    }
    const wrap = parses(cand.raw) ? "" : shortestWrap(cand.raw);
    if (wrap === null && !parses(cand.raw)) continue;
    const used = wrap ? cand.raw + wrap : cand.raw;
    const inferred = inferMeaningfulIdents(used, { filePath: hintPath });
    if (inferred.aborted) continue;
    return {
      ok: true,
      src: restoreInferredPiece(inferred.src, { ...cand, wrap: wrap || "" })
    };
  }
  return { ok: false };
}

function splitPieces(src, cuts) {
  const pieces = [];
  let prev = 0;
  for (const c of cuts) {
    if (c > prev) pieces.push(src.slice(prev, c));
    prev = c;
  }
  if (prev < src.length) pieces.push(src.slice(prev));
  return pieces.filter((p) => p.length);
}

function matchCompleteFunctionAt(src, start) {
  if (!keywordAt(src, start, "function") && !keywordAt(src, start, "async")) return null;
  let i = start;
  if (keywordAt(src, i, "async")) {
    i = skipWs(src, i + 5);
    if (!keywordAt(src, i, "function")) return null;
  }
  i += 8;
  if (src[i] === "*") i += 1;
  i = skipWs(src, i);
  const name = readIdentAt(src, i);
  if (name) i = name.end;
  i = skipWs(src, i);
  if (src[i] !== "(") return null;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let started = false;
  for (; i < src.length; i += 1) {
    const skipped = skipStringOrComment(src, i);
    if (skipped !== i) {
      i = skipped - 1;
      continue;
    }
    const c = src[i];
    if (c === "(") paren += 1;
    else if (c === ")") paren -= 1;
    else if (c === "[") bracket += 1;
    else if (c === "]") bracket -= 1;
    else if (c === "{") {
      if (!started && paren === 0 && bracket === 0) {
        started = true;
        brace = 1;
        continue;
      }
      if (started) brace += 1;
    } else if (c === "}" && started) {
      brace -= 1;
      if (brace === 0) return { start, end: i + 1, name: name?.name || null };
    }
  }
  return null;
}

function inferInnerCrypticFunctions(src, hintPath) {
  let out = src;
  let inferred = 0;
  for (let pass = 0; pass < 12; pass += 1) {
    const fns = [];
    for (let i = 0; i < out.length; ) {
      const next = skipStringOrComment(out, i);
      if (next !== i) {
        i = next;
        continue;
      }
      if (keywordAt(out, i, "function") || keywordAt(out, i, "async")) {
        const found = matchCompleteFunctionAt(out, i);
        if (found) {
          fns.push(found);
          i = found.start + 1;
          continue;
        }
      }
      i += 1;
    }
    const innermost = fns.filter((f) => !fns.some((o) => o.start > f.start && o.end < f.end));
    let passInferred = 0;
    for (const f of innermost.sort((a, b) => b.start - a.start)) {
      const piece = out.slice(f.start, f.end);
      if (!/\bv\d+\b/.test(piece) && !/\box[0-9a-f]+\b/i.test(piece)) continue;
      const result = inferMeaningfulIdents(piece, { filePath: `${hintPath}#fn${f.start}` });
      if (result.aborted || !result.changed) continue;
      out = `${out.slice(0, f.start)}${result.src}${out.slice(f.end)}`;
      passInferred += 1;
      inferred += 1;
    }
    if (passInferred === 0) break;
  }
  return { src: out, inferred };
}

/**
 * Cut unparseable mega-lines at statement-like IIFE/assignment residue, infer each
 * parseable piece (LST statement locs when a wrap parses), splice back.
 */
export function inferStatementLikePieces(src, hintPath = "index.js", depth = 0) {
  if (!src) return { src, inferred: 0, failed: 0 };
  if (depth === 0) src = healForParse(src);
  const unique = uniqueifyCollidingInferredNames(src);
  src = unique.src;
  const whole = tryInferPiece(src, hintPath);
  if (whole.ok) return { src: whole.src, inferred: 1, failed: 0 };
  if (depth >= 8) {
    const innerFns = inferInnerCrypticFunctions(src, hintPath);
    return { src: innerFns.src, inferred: innerFns.inferred, failed: innerFns.inferred ? 0 : 1 };
  }
  const cuts = [...new Set([...statementLikeCutOffsets(src), ...lstStatementOffsets(src, hintPath)])].sort(
    (a, b) => a - b
  );
  const pieces = splitPieces(src, cuts);
  if (pieces.length <= 1) {
    const innerFns = inferInnerCrypticFunctions(src, hintPath);
    return {
      src: innerFns.src,
      inferred: innerFns.inferred,
      failed: innerFns.inferred ? 0 : 1
    };
  }
  let out = "";
  let inferred = 0;
  let failed = 0;
  for (let i = 0; i < pieces.length; i += 1) {
    const inner = inferStatementLikePieces(pieces[i], `${hintPath}.p${i}`, depth + 1);
    out += inner.src;
    inferred += inner.inferred;
    failed += inner.failed;
  }
  if (/\bv\d+\b/.test(out) || /\box[0-9a-f]+\b/i.test(out)) {
    const innerFns = inferInnerCrypticFunctions(out, hintPath);
    out = innerFns.src;
    inferred += innerFns.inferred;
  }
  return { src: out, inferred, failed };
}

export function functionBodyStatementSlices(src, hintPath = "fn.js") {
  try {
    const lst = LosslessFusionParser.parse(src, {
      sourcePath: hintPath,
      errorRecovery: true
    });
    const fn = (lst.statements || []).find((s) => s?.body && Array.isArray(s.body.statements));
    if (!fn) return null;
    const stmts = fn.body.statements.filter((s) => s.loc && Number.isInteger(s.loc.start));
    if (stmts.length < 2) return null;
    const slices = [];
    for (let i = 0; i < stmts.length; i += 1) {
      const start = stmts[i].loc.start;
      const next = stmts[i + 1];
      const rawEnd = next && next.loc && Number.isInteger(next.loc.start) ? next.loc.start : stmts[i].loc.end;
      const end = Math.min(Math.max(start, rawEnd), src.length);
      if (end <= start) continue;
      slices.push({ start, end, code: src.slice(start, end) });
    }
    return slices.length >= 2 ? slices : null;
  } catch {
    return null;
  }
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
      try {
        return runInferMeaningfulIdents(src, { ...options, skipImportAlias: true });
      } catch (retryErr) {
        return {
          src,
          changed: false,
          aborted: true,
          reason: String(retryErr.message || retryErr),
          matchedPublicAs: 0
        };
      }
    }
    return { src, changed: false, aborted: true, reason: String(err.message || err), matchedPublicAs: 0 };
  }
}

function runInferMeaningfulIdents(src, { filePath = "", skipImportAlias = false } = {}) {
  const unique = uniqueifyCollidingInferredNames(src);
  src = unique.src;
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
  let inferred = inferMeaningfulIdents(original, { filePath });
  let next = inferred.src;
  let pieceInferred = 0;
  if (inferred.aborted) {
    const pieces = inferStatementLikePieces(original, filePath);
    next = pieces.src;
    pieceInferred = pieces.inferred || 0;
    inferred = {
      src: pieces.src,
      changed: pieces.src !== original,
      aborted: pieces.inferred === 0 && (pieces.failed || 0) > 0 && pieces.src === original,
      reason: inferred.reason,
      matchedPublicAs: 0,
      renamed: pieces.inferred || 0
    };
    if (inferred.aborted) {
      return { rel: posixRel(filePath), aborted: true, reason: inferred.reason, beforeV, before0x };
    }
  }
  let splitFiles = null;
  if (split && parses(next)) {
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
    pieceInferred,
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
