#!/usr/bin/env node
/**
 * Scope-aware rename of leftover javascript-obfuscator `_0x[hex]` locals
 * in decoded @univerjs-pro vendor files. Uses Babel `scope.rename` only —
 * never rewrites string literals or public export names.
 *
 * Usage:
 *   node scripts/rename-univer-pro-0x-idents.mjs --file <path> [--write] [--apply]
 *   node scripts/rename-univer-pro-0x-idents.mjs --largest-es <n> [--write] [--apply]
 *
 * Default is dry-run (no write). lib/cjs and lib-root copies are left alone.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VENDOR_PRO = path.join(ROOT, "vendor/univer-pro");
const PRO_NM = path.join(ROOT, "apps/workspace/node_modules/@univerjs-pro");
const HEX_IDENT = /^_0x[0-9a-f]+$/i;
const TOKEN_RE = /\b_0x[0-9a-f]+\b/gi;
const FILE_TIMEOUT_MS = 10 * 60 * 1000;
const T9_SKIP = [
  "scripts/edge-smoke.mjs",
  "apps/workspace/web/src/features/editor/collaboration-editor.tsx",
  "apps/workspace/web/src/render-main.tsx",
  "src/integrations/browser-rendering.ts"
];

let babel = null;

function unwrap(mod) {
  return mod?.default ?? mod;
}

function loadBabel() {
  if (babel) return babel;
  const pnpm = path.join(ROOT, "node_modules/.pnpm");
  const dirs = fs.readdirSync(pnpm).filter((d) => d.startsWith("@babel+core@"));
  if (dirs.length === 0) {
    throw new Error("pnpm @babel/core not found; cannot rename without Babel");
  }
  dirs.sort();
  const preferred = dirs.find((d) => /@babel\+core@7\./.test(d)) ?? dirs[dirs.length - 1];
  const req = createRequire(path.join(pnpm, preferred, "node_modules/@babel/core/package.json"));
  babel = {
    parser: req("@babel/parser"),
    traverse: unwrap(req("@babel/traverse")),
    generate: unwrap(req("@babel/generator"))
  };
  return babel;
}

function countTokens(src) {
  const matches = src.match(TOKEN_RE);
  return matches ? matches.length : 0;
}

function parseSource(src) {
  const { parser } = loadBabel();
  const plugins = ["importAttributes"];
  const opts = {
    sourceType: "unambiguous",
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    errorRecovery: false,
    plugins
  };
  try {
    return parser.parse(src, opts);
  } catch {
    return parser.parse(src, { ...opts, sourceType: "module" });
  }
}

/**
 * Decode leftover unglue mistakes that make Babel unparseable.
 * Does not rewrite `_0x` tokens; only rejoins `delete` + Ident that
 * unglueKeywords split, and empty rotator IIFE residue.
 */
export function healForParse(src) {
  return src
    .replace(/\bas\s+delete\s+([A-Z][A-Za-z0-9_]*)/g, "as delete$1")
    .replace(/([,{])delete\s+([A-Z][A-Za-z0-9_]*)\s+as\b/g, "$1delete$2 as")
    .replace(/([{};,])\s*delete\s+([A-Z][A-Za-z0-9_]*)\s*\(/g, "$1delete$2(")
    .replace(/\(function\s*\(\s*\)\s*\{\(\)\)/g, "(function(){})");
}

function exportedName(spec) {
  if (spec.type !== "ExportSpecifier") return null;
  const exported = spec.exported;
  if (exported.type === "Identifier") return exported.name;
  if (exported.type === "StringLiteral") return exported.value;
  return null;
}

function isExportsObject(node) {
  if (node.type === "Identifier" && node.name === "exports") return true;
  return (
    node.type === "MemberExpression" &&
    !node.computed &&
    node.object.type === "Identifier" &&
    node.object.name === "module" &&
    node.property.type === "Identifier" &&
    node.property.name === "exports"
  );
}

function findAbortReason(ast, traverse) {
  let reason = null;
  traverse(ast, {
    ExportNamedDeclaration(path) {
      if (reason) return;
      for (const spec of path.node.specifiers) {
        const name = exportedName(spec);
        if (name && HEX_IDENT.test(name)) {
          reason = `export { ${name} } with no public alias`;
          return;
        }
      }
      const decl = path.node.declaration;
      if (!decl) return;
      if (
        (decl.type === "FunctionDeclaration" || decl.type === "ClassDeclaration") &&
        decl.id &&
        HEX_IDENT.test(decl.id.name)
      ) {
        reason = `exported declaration ${decl.id.name}`;
        return;
      }
      if (decl.type === "VariableDeclaration") {
        for (const d of decl.declarations) {
          if (d.id.type === "Identifier" && HEX_IDENT.test(d.id.name)) {
            reason = `exported binding ${d.id.name}`;
            return;
          }
        }
      }
    },
    AssignmentExpression(path) {
      if (reason) return;
      const left = path.node.left;
      if (left.type !== "MemberExpression" || left.computed) return;
      if (!isExportsObject(left.object)) return;
      if (left.property.type === "Identifier" && HEX_IDENT.test(left.property.name)) {
        reason = `exports.${left.property.name}`;
      }
    },
    CallExpression(path) {
      if (reason) return;
      const { callee, arguments: args } = path.node;
      if (callee.type !== "MemberExpression" || callee.computed) return;
      if (callee.object.type !== "Identifier" || callee.object.name !== "Object") return;
      if (callee.property.type !== "Identifier" || callee.property.name !== "defineProperty") {
        return;
      }
      if (args.length < 2 || !isExportsObject(args[0])) return;
      const key = args[1];
      if (key.type === "StringLiteral" && HEX_IDENT.test(key.value)) {
        reason = `defineProperty(exports, "${key.value}")`;
      }
    }
  });
  return reason;
}

function allocName(scope, counter) {
  let name;
  do {
    counter.value += 1;
    name = `v${counter.value}`;
  } while (scope.hasBinding(name) || scope.hasGlobal(name));
  return name;
}

function renameHexBindings(ast, traverse) {
  const jobs = [];
  const seen = new Set();
  traverse(ast, {
    Scopable(path) {
      const scope = path.scope;
      for (const name of Object.keys(scope.bindings)) {
        if (!HEX_IDENT.test(name) || !scope.hasOwnBinding(name)) continue;
        const binding = scope.getOwnBinding(name);
        if (!binding || seen.has(binding)) continue;
        seen.add(binding);
        let depth = 0;
        for (let s = scope; s.parent; s = s.parent) depth += 1;
        jobs.push({ scope, name, depth });
      }
    }
  });
  jobs.sort((a, b) => b.depth - a.depth);
  const counter = { value: 0 };
  for (const { scope, name } of jobs) {
    if (!scope.hasOwnBinding(name)) continue;
    scope.rename(name, allocName(scope, counter));
  }
  return jobs.length;
}

function renameHexLabels(ast, traverse) {
  const map = new Map();
  let n = 0;
  traverse(ast, {
    LabeledStatement(path) {
      const old = path.node.label.name;
      if (!HEX_IDENT.test(old)) return;
      if (!map.has(old)) map.set(old, `L${++n}`);
      path.node.label.name = map.get(old);
    }
  });
  if (map.size === 0) return 0;
  traverse(ast, {
    BreakStatement(path) {
      const name = path.node.label?.name;
      if (name && map.has(name)) path.node.label.name = map.get(name);
    },
    ContinueStatement(path) {
      const name = path.node.label?.name;
      if (name && map.has(name)) path.node.label.name = map.get(name);
    }
  });
  return map.size;
}

export function rename0xIdents(src) {
  const hitsBefore = countTokens(src);
  if (hitsBefore === 0) {
    return { src, changed: false, aborted: false, reason: null, hitsBefore, hitsAfter: 0, renamed: 0 };
  }
  let ast;
  try {
    ast = parseSource(src);
  } catch (firstErr) {
    const healed = healForParse(src);
    try {
      ast = parseSource(healed);
      src = healed;
    } catch {
      return {
        src,
        changed: false,
        aborted: true,
        reason: `parse failed: ${firstErr.message}`,
        hitsBefore,
        hitsAfter: hitsBefore,
        renamed: 0
      };
    }
  }
  const { traverse, generate } = loadBabel();
  const abort = findAbortReason(ast, traverse);
  if (abort) {
    return { src, changed: false, aborted: true, reason: abort, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
  }
  const renamedBindings = renameHexBindings(ast, traverse);
  const renamedLabels = renameHexLabels(ast, traverse);
  const renamed = renamedBindings + renamedLabels;
  if (renamed === 0) {
    return { src, changed: false, aborted: false, reason: null, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
  }
  const out = generate(ast, {
    comments: true,
    compact: true,
    jsescOption: { quotes: "double", minimal: true }
  }).code;
  const next = out.endsWith("\n") ? out : `${out}\n`;
  return {
    src: next,
    changed: next !== src,
    aborted: false,
    reason: null,
    hitsBefore,
    hitsAfter: countTokens(next),
    renamed
  };
}

function posixRel(filePath) {
  return path.relative(ROOT, path.resolve(filePath)).split(path.sep).join("/");
}

export function isForbiddenPath(filePath) {
  const rel = posixRel(filePath);
  if (T9_SKIP.includes(rel) || rel.includes("wrangler")) return true;
  if (rel.includes("/umd/") || rel.endsWith("/umd")) return true;
  if (rel.startsWith("vendor/univer-pro-published/")) return true;
  if (rel.startsWith("vendor/univer/")) return true;
  if (rel.includes("/.pnpm/") || rel.includes("node_modules/.pnpm/")) return true;
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

function applyEsFileToNodeModules(vendorFile) {
  const rel = path.relative(VENDOR_PRO, vendorFile);
  if (rel.startsWith("..")) return false;
  const dest = path.join(PRO_NM, rel);
  const pkg = rel.split(path.sep)[0];
  if (!fs.existsSync(path.join(PRO_NM, pkg))) {
    console.warn(`skip apply: @univerjs-pro/${pkg} missing in node_modules`);
    return false;
  }
  writeUnlinked(dest, fs.readFileSync(vendorFile));
  return true;
}

function walkJs(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "types" || entry.name === "node_modules" || entry.name === "umd") continue;
      walkJs(full, out);
    } else if (/\.(js|mjs|cjs)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

export function listLibEsFiles() {
  const files = [];
  if (!fs.existsSync(VENDOR_PRO)) return files;
  for (const pkg of fs.readdirSync(VENDOR_PRO)) {
    const esDir = path.join(VENDOR_PRO, pkg, "lib/es");
    if (!fs.existsSync(esDir)) continue;
    walkJs(esDir, files);
  }
  return files;
}

function hitsForFile(file) {
  return countTokens(fs.readFileSync(file, "utf8"));
}

export function orderLargestEs(files) {
  const withHits = files
    .map((file) => ({ file, hits: hitsForFile(file), rel: posixRel(file) }))
    .filter((row) => row.hits > 0);
  const take = (suffix) => withHits.find((row) => row.rel.endsWith(suffix));
  const shape = take("engine-shape/lib/es/index.js");
  const chart = take("engine-chart/lib/es/index.js");
  const rest = withHits
    .filter((row) => row !== shape && row !== chart)
    .sort((a, b) => b.hits - a.hits);
  return [shape, chart, ...rest].filter(Boolean);
}

export function processVendorFile(filePath, { write = false, apply = false } = {}) {
  const rel = posixRel(filePath);
  if (isForbiddenPath(filePath)) {
    console.warn(`SKIP forbidden ${rel}`);
    return { rel, skipped: true, skippedReason: "forbidden" };
  }
  const original = fs.readFileSync(filePath, "utf8");
  const started = Date.now();
  let result;
  try {
    result = rename0xIdents(original);
  } catch (err) {
    console.warn(`ABORT ${rel} (${err.message})`);
    return { rel, aborted: true, reason: String(err.message), hitsBefore: countTokens(original) };
  }
  const ms = Date.now() - started;
  if (result.aborted) {
    console.warn(`ABORT ${rel} (${result.reason})`);
    return { rel, aborted: true, reason: result.reason, hitsBefore: result.hitsBefore, ms };
  }
  if (!result.changed) {
    console.log(`UNCHANGED ${rel} hits=${result.hitsBefore} ${ms}ms`);
    return { rel, changed: false, hitsBefore: result.hitsBefore, hitsAfter: result.hitsAfter, ms };
  }
  if (write) {
    writeUnlinked(filePath, result.src);
    if (apply) applyEsFileToNodeModules(filePath);
  }
  const mode = write ? "WRITE" : "DRY";
  console.log(
    `${mode} ${rel} ${result.hitsBefore} -> ${result.hitsAfter} renamed=${result.renamed} ${ms}ms`
  );
  return {
    rel,
    changed: true,
    written: Boolean(write),
    applied: Boolean(write && apply),
    hitsBefore: result.hitsBefore,
    hitsAfter: result.hitsAfter,
    renamed: result.renamed,
    ms
  };
}

function parseArgs(argv) {
  const args = { write: false, apply: false, file: null, largestEs: null, child: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--write") args.write = true;
    else if (a === "--apply") args.apply = true;
    else if (a === "--file") args.file = argv[++i];
    else if (a === "--largest-es") args.largestEs = Number(argv[++i]);
    else if (a === "--child") args.child = true;
  }
  return args;
}

function runChildFile(file, { write, apply }) {
  const script = fileURLToPath(import.meta.url);
  const args = [script, "--child", "--file", file];
  if (write) args.push("--write");
  if (apply) args.push("--apply");
  const env = { ...process.env };
  const extra = "--max-old-space-size=8192";
  env.NODE_OPTIONS = env.NODE_OPTIONS ? `${env.NODE_OPTIONS} ${extra}` : extra;
  const r = spawnSync(process.execPath, args, {
    cwd: ROOT,
    encoding: "utf8",
    timeout: FILE_TIMEOUT_MS,
    maxBuffer: 32 * 1024 * 1024,
    env
  });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  if (r.error?.code === "ETIMEDOUT") {
    return { rel: posixRel(file), timedOut: true };
  }
  if (r.status !== 0) {
    return { rel: posixRel(file), childFailed: true, status: r.status };
  }
  return { rel: posixRel(file), childOk: true };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.file && !args.largestEs) {
    console.log(`Usage:
  node scripts/rename-univer-pro-0x-idents.mjs --file <path> [--write] [--apply]
  node scripts/rename-univer-pro-0x-idents.mjs --largest-es <n> [--write] [--apply]
Default is dry-run. Writes lib/es only; never umd/, published, or OSS vendor.`);
    process.exitCode = 1;
    return;
  }
  if (args.file) {
    const file = path.resolve(ROOT, args.file);
    const result = processVendorFile(file, { write: args.write, apply: args.apply });
    if (result.aborted || result.timedOut) process.exitCode = 2;
    return;
  }
  const n = Number.isFinite(args.largestEs) && args.largestEs > 0 ? args.largestEs : 5;
  const ordered = orderLargestEs(listLibEsFiles());
  const candidates = ordered.slice(0, Math.max(n * 3, n));
  console.log(`largest lib/es candidates: ${candidates.length} (target ${n} writes)`);
  for (const row of candidates) {
    console.log(`  ${row.hits} ${row.rel}`);
  }
  let written = 0;
  for (const row of candidates) {
    if (written >= n) break;
    const started = Date.now();
    const result = args.child
      ? processVendorFile(row.file, { write: args.write, apply: args.apply })
      : runChildFile(row.file, { write: args.write, apply: args.apply });
    if (result.timedOut) {
      console.warn(`TIMEOUT ${row.rel} (>${FILE_TIMEOUT_MS}ms) left untouched; stopping batch`);
      process.exitCode = 3;
      return;
    }
    if (result.aborted || result.childFailed) {
      continue;
    }
    if (result.changed || result.childOk || result.written) {
      written += 1;
    }
    if (Date.now() - started > FILE_TIMEOUT_MS) {
      console.warn(`STOP after ${row.rel} exceeded ${FILE_TIMEOUT_MS}ms`);
      return;
    }
  }
  console.log(`batch done: ${written} file(s) processed`);
}

export { HEX_IDENT, countTokens, FILE_TIMEOUT_MS };

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
