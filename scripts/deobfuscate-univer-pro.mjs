#!/usr/bin/env node
/**
 * Decode javascript-obfuscator string-array wrappers used by published
 * @univerjs-pro packages so the files can be read and patched locally.
 *
 * Writes readable copies to vendor/univer-pro/<pkg>/, then copies them into
 * node_modules with unlink-first so pnpm hardlinks to the store are not mutated.
 *
 * Prefers vendor/univer-pro-published/<pkg> over node_modules so a previous
 * decode cannot poison the next run.
 *
 * Usage:
 *   node scripts/deobfuscate-univer-pro.mjs
 *   node scripts/deobfuscate-univer-pro.mjs --all
 *   node scripts/deobfuscate-univer-pro.mjs sheets-history-ui edit-history
 *   node scripts/deobfuscate-univer-pro.mjs --no-apply   # vendor only
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PRO_ROOT = path.join(ROOT, "apps/workspace/node_modules/@univerjs-pro");
const VENDOR_ROOT = path.join(ROOT, "vendor/univer-pro");
const PUBLISHED_ROOT = path.join(ROOT, "vendor/univer-pro-published");

const DEFAULT_PACKAGES = [
  "collaboration",
  "collaboration-client",
  "collaboration-client-ui",
  "collaboration-endpoint",
  "collaboration-service",
  "collaboration-database-sqlite",
  "collaboration-transport-node",
  "collaboration-worktree-client",
  "collaboration-worktree-endpoint",
  "collaboration-worktree-service",
  "collaboration-worktree-database-sqlite",
  "collaboration-comment-endpoint",
  "collaboration-comment-service",
  "collaboration-comment-database-sqlite",
  "collaboration-history-endpoint",
  "collaboration-history-service",
  "collaboration-history-database-sqlite",
  "thread-comment-datasource",
  "sheets-history",
  "sheets-history-ui",
  "docs-history",
  "docs-history-ui",
  "edit-history",
  "edit-history-ui",
  "live-share",
  "engine-formula",
  "exchange-client",
  "docs-exchange-client",
  "slides-exchange-client",
  "bases-exchange-client",
  "exchange-node",
  "sheets-print",
  "docs-print",
  "slides-print",
  "boards-print",
  "license"
];

const METHOD_KEYWORDS = new Set(["async", "get", "set", "static"]);
const JS_KEYWORDS = new Set([
  "return",
  "throw",
  "typeof",
  "delete",
  "await",
  "yield",
  "new",
  "if",
  "else",
  "void",
  "case",
  "in",
  "of",
  "instanceof",
  "function",
  "class",
  "const",
  "let",
  "var",
  "import",
  "export",
  "default",
  "from",
  "void",
  "with",
  "switch",
  "while",
  "for",
  "do"
]);

const argv = process.argv.slice(2);
const noApply = argv.includes("--no-apply");
const fixVendor = argv.includes("--fix-vendor");
const all = argv.includes("--all");
const packages = argv
  .filter((a) => !a.startsWith("--"))
  .map((name) => name.replace(/^@univerjs-pro\//, ""));
const selected = packages.length > 0 ? packages : all ? listProPackages() : DEFAULT_PACKAGES;

function listProPackages() {
  return fs
    .readdirSync(PRO_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
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

function publishedPackageDir(pkg) {
  const published = path.join(PUBLISHED_ROOT, pkg);
  if (fs.existsSync(published)) return published;
  return path.join(PRO_ROOT, pkg);
}

function ensurePublishedOriginal(pkg) {
  const published = path.join(PUBLISHED_ROOT, pkg);
  if (fs.existsSync(published)) return;
  const from = path.join(PRO_ROOT, pkg);
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(PUBLISHED_ROOT, { recursive: true });
  fs.cpSync(from, published, {
    recursive: true,
    dereference: true,
    filter: (src) => !src.includes(`${path.sep}umd${path.sep}`) && !src.endsWith(`${path.sep}umd`)
  });
  console.log(`  snapshot published original ${pkg}`);
}

function copyPackage(pkg) {
  const from = publishedPackageDir(pkg);
  const to = path.join(VENDOR_ROOT, pkg);
  if (!fs.existsSync(from)) return null;
  fs.rmSync(to, { recursive: true, force: true });
  fs.cpSync(from, to, {
    recursive: true,
    dereference: true,
    filter: (src) => !src.includes(`${path.sep}umd${path.sep}`) && !src.endsWith(`${path.sep}umd`)
  });
  return to;
}

function looksObfuscated(src) {
  return /while\s*\(\s*!!\s*\[\s*\]\s*\)/.test(src) && /function\s+_0x[a-f0-9]+\s*\(/.test(src);
}

// Inner rotator IIFE. ESM wraps it as `(function ... (_0xarr, 0xnnn));`.
// CJS chains it with a comma operator: `(function ... (_0xarr, 0xnnn), Object.defineProperty(...))`.
const ROTATOR_RE =
  /function\s*\(\s*_0x[a-f0-9]+\s*,\s*_0x[a-f0-9]+\s*\)\s*\{[\s\S]*?while\s*\(\s*!!\s*\[\s*\]\s*\)[\s\S]*?\}\s*\(\s*_0x[a-f0-9]+\s*,\s*0x[a-f0-9]+\s*\)/g;

function extractRuntime(src) {
  const arrayFns = [
    ...src.matchAll(
      /function\s+(_0x[a-f0-9]+)\s*\(\s*\)\s*\{\s*const\s+_0x[a-f0-9]+\s*=\s*\[[\s\S]*?\];\s*\1\s*=\s*function\s*\(\s*\)\s*\{\s*return\s+_0x[a-f0-9]+\s*;\s*\}\s*;\s*return\s+\1\s*\(\s*\)\s*;\s*\}/g
    )
  ];
  const decoders = [
    ...src.matchAll(
      /function\s+(_0x[a-f0-9]+)\s*\(\s*_0x[a-f0-9]+\s*,\s*_0x[a-f0-9]+\s*\)\s*\{[\s\S]*?return\s+_0x[a-f0-9]+\s*;\s*\}/g
    )
  ];
  const rotators = [...src.matchAll(ROTATOR_RE)];
  if (arrayFns.length === 0 || decoders.length === 0 || rotators.length === 0) return null;
  return [
    ...arrayFns.map((m) => m[0]),
    ...decoders.map((m) => m[0]),
    ...rotators.map((m) => `(${m[0]});`)
  ].join("\n");
}

function loadDecoders(src) {
  const runtime = extractRuntime(src);
  if (!runtime) return null;
  const sandbox = Object.create(null);
  sandbox.console = { log() {}, warn() {}, error() {} };
  try {
    vm.runInNewContext(runtime, sandbox, { timeout: 5_000 });
  } catch {
    return null;
  }
  const decoders = {};
  for (const [name, value] of Object.entries(sandbox)) {
    if (typeof value === "function" && /^_0x[a-f0-9]+$/.test(name) && value.length >= 1) {
      try {
        const sample = value(0);
        if (typeof sample === "string" || sample === undefined) decoders[name] = value;
      } catch {
        // not a decoder
      }
    }
  }
  const aliasRe = /(?:const|let|var)\s+(_0x[a-f0-9]+)\s*=\s*(_0x[a-f0-9]+)\s*;/g;
  let alias;
  while ((alias = aliasRe.exec(src))) {
    if (decoders[alias[2]]) decoders[alias[1]] = decoders[alias[2]];
  }
  return Object.keys(decoders).length ? decoders : null;
}

function decodeCallArgs(raw) {
  const trimmed = raw.trim();
  if (/^0x[a-f0-9]+$/i.test(trimmed)) return Number(trimmed);
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  return null;
}

function replaceDecoderCalls(src, decoders) {
  const names = Object.keys(decoders).sort((a, b) => b.length - a.length);
  if (names.length === 0) return src;
  const nameAlt = names.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const callRe = new RegExp(`(?:${nameAlt})\\s*\\(([^)]*)\\)`, "g");
  return src.replace(callRe, (full, args, offset) => {
    const before = src.slice(Math.max(0, offset - 12), offset);
    if (/function\s+$/.test(before)) return full;
    const first = args.split(",")[0];
    const index = decodeCallArgs(first ?? "");
    if (index === null) return full;
    const name = full.slice(0, full.indexOf("(")).trim();
    const decoder = decoders[name];
    if (!decoder) return full;
    try {
      const value = decoder(index);
      if (typeof value !== "string") return full;
      return JSON.stringify(value);
    } catch {
      return full;
    }
  });
}

function cleanupLiterals(src) {
  let out = src;
  out = out.replace(/void 0x0/g, " undefined");
  out = out.replace(/!0x0/g, " true");
  out = out.replace(/!0x1/g, " false");
  out = out.replace(/\b0x([0-9a-fA-F]+)\b/g, (full, hex) => {
    const n = parseInt(hex, 16);
    return Number.isSafeInteger(n) ? String(n) : full;
  });

  out = out.replace(
    /\b(async|get|set|static)\s*\[(["'])([A-Za-z_$][\w$]*)\2\]\s*(?=\()/g,
    "$1 $3"
  );
  out = out.replace(/(^|[{;,}])\s*\[(["'])([A-Za-z_$][\w$]*)\2\]\s*(?=\()/gm, "$1$3");

  // member access, but never after async/get/set/static
  out = out.replace(/([)\].]|[A-Za-z_$][\w$]*)\[(["'])([A-Za-z_$][\w$]*)\2\]/g, (full, obj, _q, ident) => {
    if (METHOD_KEYWORDS.has(obj)) return `${obj} ${ident}`;
    if (JS_KEYWORDS.has(obj)) return `${obj} ["${ident}"]`;
    if (!/^[A-Za-z_$][\w$]*$/.test(obj) && !/^[)\].]$/.test(obj.slice(-1))) {
      return full;
    }
    return `${obj}.${ident}`;
  });
  return unglueKeywords(out);
}

function unglueKeywords(src) {
  return src
    .replace(/\breturn\.([A-Za-z_$][\w$]*)\b/g, 'return ["$1"]')
    .replace(/\bthrow\.([A-Za-z_$][\w$]*)\b/g, "throw $1")
    .replace(/\breturn(true|false|null|undefined|this|new)\b/g, "return $1")
    .replace(/\bthrow(new|Error|TypeError)\b/g, "throw $1")
    // Prefix operators: never split after a member dot (deleteCellRanges, awaitingChangeset).
    .replace(/(^|[^.\w$])typeof([A-Za-z_$])/g, "$1typeof $2")
    .replace(/(^|[^.\w$])delete([A-Za-z_$])/g, "$1delete $2")
    .replace(/async delete ([A-Za-z])/g, "async delete$1")
    .replace(/(?:static|get|set) delete ([A-Za-z])/g, (full) => full.replace("delete ", "delete"))
    .replace(/(^|[^.\w$])await([A-Za-z_$])/g, "$1await $2")
    .replace(/(^|[^.\w$])yield([A-Za-z_$])/g, "$1yield $2")
    .replace(/\bnew(Map|Set|Error|TypeError|WeakMap|Promise|URL|Int32Array|Uint16Array)\b/g, "new $1")
    // Rejoin methods already split by an earlier unglue pass.
    .replace(/\.delete ([A-Za-z])/g, ".delete$1")
    .replace(/\.await ([A-Za-z])/g, ".await$1")
    .replace(/\.typeof ([A-Za-z])/g, ".typeof$1")
    .replace(/\.yield ([A-Za-z])/g, ".yield$1")
    .replace(/(['"])await ([a-z])/g, "$1await$2")
    .replace(/(['"])delete ([A-Z][A-Za-z]+)\1/g, "$1delete$2$1")
    // Infix operators glued onto a member: `.codein Ht`, `.errorinstanceof Error`
    .replace(/(\.[A-Za-z_$][\w$]*)in\s+/g, "$1 in ")
    .replace(/(\.[A-Za-z_$][\w$]*)instanceof\b/g, "$1 instanceof")
    // Empty `();` must not be stripped from constructors/calls. Repair files that
    // already lost those calls before a following keyword.
    .replace(/new (Map|Set|WeakMap|WeakSet|URLSearchParams|TextDecoder|URL|Int32Array|Uint16Array)(?=[A-Za-z_$])/g, "new $1();")
    .replace(/Promise\.resolve(?=let\b|if\b|function\b|const\b|var\b|return\b)/g, "Promise.resolve();")
    .replace(/(\.[A-Za-z_$][\w$]*)if\(/g, "$1();if(")
    .replace(/[ \t]{2,}/g, " ");
}

function stripRuntime(src, decoderNames = []) {
  let out = src;
  out = out.replace(
    /function\s+_0x[a-f0-9]+\s*\(\s*\)\s*\{[\s\S]*?_0x[a-f0-9]+\s*=\s*function\s*\(\s*\)\s*\{\s*return\s+_0x[a-f0-9]+\s*;\s*\}\s*;\s*return\s+_0x[a-f0-9]+\s*\(\s*\)\s*;\s*\}/g,
    ""
  );
  out = out.replace(
    /function\s+_0x[a-f0-9]+\s*\(\s*_0x[a-f0-9]+\s*,\s*_0x[a-f0-9]+\s*\)\s*\{[\s\S]*?return\s+_0x[a-f0-9]+\s*;\s*\}/g,
    ""
  );
  out = out.replace(ROTATOR_RE, "");
  out = out.replace(/\(\s*,/g, "(");
  out = out.replace(/^\s*\(\s*\)\s*;/, "");
  // Only drop aliases of string-array decoders. Local aliases such as
  // `let _0x407fad = _0x4763b7` (HTTP response) must stay.
  if (decoderNames.length > 0) {
    const nameAlt = decoderNames
      .slice()
      .sort((a, b) => b.length - a.length)
      .map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
    out = out.replace(
      new RegExp(`(?:const|let|var)\\s+_0x[a-f0-9]+\\s*=\\s*(?:${nameAlt})\\s*;`, "g"),
      ""
    );
  }
  return out;
}

function formatFile(filePath) {
  try {
    execFileSync(
      "prettier",
      ["--write", "--parser", "babel", "--with-node-modules", "--ignore-path", "/dev/null", filePath],
      { cwd: ROOT, stdio: "ignore" }
    );
    return true;
  } catch {
    return false;
  }
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

function neutralizeModuleSyntax(src) {
  return src
    .replace(/^\s*import[\s{][\s\S]*?from\s*["'][^"']+["'];?/gm, "")
    .replace(/^\s*import\s*["'][^"']+["'];?/gm, "")
    .replace(/\bexport\s+default\s+/g, "")
    .replace(/\bexport\s+\{[^}]*\}\s*;?/g, "")
    .replace(/\bexport\s+(?=(?:async\s+)?function|class|const|let|var)\b/g, "");
}

function canParseAsScript(src) {
  try {
    new vm.Script(src);
    return true;
  } catch (err) {
    const message = String(err?.message ?? err);
    if (
      message.includes("Cannot use import statement") ||
      message.includes("Unexpected token 'export'")
    ) {
      try {
        new vm.Script(neutralizeModuleSyntax(src));
        return true;
      } catch {
        // ESM fixtures can still be valid after string-array decode even if
        // leftover runtime wrappers confuse vm.Script.
        return /(?:^|\n)\s*export\s/.test(src) || /^\s*import\s/.test(src);
      }
    }
    return false;
  }
}

function deobfuscateSource(src) {
  if (!looksObfuscated(src)) return { src, changed: false };
  const decoders = loadDecoders(src);
  if (!decoders) return { src, changed: false };
  let next = replaceDecoderCalls(src, decoders);
  next = stripRuntime(next, Object.keys(decoders));
  next = cleanupLiterals(next);
  next = next.replace(/\n{3,}/g, "\n\n");
  if (next !== src && !canParseAsScript(next)) {
    const isModule = /\bimport\b/.test(src) || /\bexport\b/.test(src);
    if (!isModule) return { src, changed: false };
  }
  return { src: next, changed: next !== src };
}

function processVendorPackage(pkg) {
  ensurePublishedOriginal(pkg);
  const vendorDir = copyPackage(pkg);
  if (!vendorDir) {
    console.warn(`skip missing package @univerjs-pro/${pkg}`);
    return { pkg, files: 0, changed: 0 };
  }
  const files = walkJs(vendorDir);
  let changed = 0;
  for (const file of files) {
    const original = fs.readFileSync(file, "utf8");
    const result = deobfuscateSource(original);
    if (!result.changed) continue;
    writeUnlinked(file, result.src);
    const pretty = formatFile(file);
    changed += 1;
    console.log(`  ${path.relative(VENDOR_ROOT, file)}${pretty ? "" : " (prettier skipped)"}`);
  }
  if (!noApply) applyVendorToNodeModules(pkg);
  return { pkg, files: files.length, changed };
}

function applyVendorToNodeModules(pkg) {
  const vendorDir = path.join(VENDOR_ROOT, pkg);
  const destDir = path.join(PRO_ROOT, pkg);
  if (!fs.existsSync(vendorDir) || !fs.existsSync(destDir)) return;
  for (const file of walkJs(vendorDir)) {
    const rel = path.relative(vendorDir, file);
    const dest = path.join(destDir, rel);
    const content = fs.readFileSync(file);
    writeUnlinked(dest, content);
  }
}

function main() {
  if (fixVendor) {
    let fixed = 0;
    for (const pkg of fs.existsSync(VENDOR_ROOT) ? fs.readdirSync(VENDOR_ROOT) : []) {
      const dir = path.join(VENDOR_ROOT, pkg);
      if (!fs.statSync(dir).isDirectory()) continue;
      for (const file of walkJs(dir)) {
        const original = fs.readFileSync(file, "utf8");
        const next = unglueKeywords(original);
        if (next !== original) {
          writeUnlinked(file, next);
          fixed += 1;
        }
        const pretty = formatFile(file);
        if (next !== original || pretty) {
          console.log(`  ${pretty ? "fmt" : "fix"} ${path.relative(VENDOR_ROOT, file)}`);
        }
      }
      if (!noApply) applyVendorToNodeModules(pkg);
    }
    console.log(`fixed ${fixed} file(s) in vendor/univer-pro`);
    return;
  }

  fs.mkdirSync(VENDOR_ROOT, { recursive: true });
  console.log(`Deobfuscating ${selected.length} @univerjs-pro package(s) -> vendor/univer-pro`);
  let totalChanged = 0;
  for (const pkg of selected) {
    console.log(`@univerjs-pro/${pkg}`);
    const stats = processVendorPackage(pkg);
    totalChanged += stats.changed;
  }
  console.log(`done: ${totalChanged} file(s) rewritten`);
  console.log(`editable copies: ${path.relative(ROOT, VENDOR_ROOT)}`);
  if (!noApply) console.log("applied into apps/workspace/node_modules/@univerjs-pro (store hardlinks broken)");
}

export { DEFAULT_PACKAGES, deobfuscateSource, extractRuntime, looksObfuscated, unglueKeywords };

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
