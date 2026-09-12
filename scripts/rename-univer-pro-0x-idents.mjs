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
    .replace(/\(function\s*\(\s*\)\s*\{\(\)\)/g, "(function(){})")
    .replace(/\(function\s*\(\s*\)\s*\{,/g, "(function(){")
    .replace(/\[\];,((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"))\s*:/g, "{$1:")
    .replace(/\}function\b/g, "};function")
    .replace(/\}async\s+function\b/g, "};async function");
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

function renameHexBindings(ast, traverse, counter = { value: 0 }, skipNames = new Set()) {
  const jobs = [];
  const seen = new Set();
  traverse(ast, {
    Scopable(path) {
      const scope = path.scope;
      for (const name of Object.keys(scope.bindings)) {
        if (!HEX_IDENT.test(name) || !scope.hasOwnBinding(name)) continue;
        if (skipNames.has(name)) continue;
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

const CUT_AFTER_BRACE = /^(?:;?(?:async\s+)?function|class|var|let|const|export|import)\b/;

export function splitTopLevel(src) {
  const events = [];
  let i = 0;
  const n = src.length;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let str = null;
  while (i < n) {
    const c = src[i];
    if (str) {
      if (c === "\\") {
        i += 2;
        continue;
      }
      if (c === str) str = null;
      i += 1;
      continue;
    }
    if (c === "'" || c === '"') {
      str = c;
      i += 1;
      continue;
    }
    if (c === "`") {
      str = "`";
      i += 1;
      continue;
    }
    if (c === "/" && src[i + 1] === "/") {
      i += 2;
      while (i < n && src[i] !== "\n") i += 1;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      i += 2;
      while (i < n - 1 && !(src[i] === "*" && src[i + 1] === "/")) i += 1;
      i += 2;
      continue;
    }
    if (c === "/" && /[=(,;:{[!&|?]$/.test(src[i - 1] ?? ";")) {
      i += 1;
      while (i < n) {
        if (src[i] === "\\") {
          i += 2;
          continue;
        }
        if (src[i] === "/") {
          i += 1;
          while (i < n && /[gimsuy]/.test(src[i])) i += 1;
          break;
        }
        if (src[i] === "\n") break;
        i += 1;
      }
      continue;
    }
    if (c === "(") paren += 1;
    else if (c === ")") paren -= 1;
    else if (c === "[") bracket += 1;
    else if (c === "]") bracket -= 1;
    else if (c === "{") brace += 1;
    else if (c === "}") {
      brace -= 1;
      if (paren === 0 && bracket === 0 && brace >= 0) {
        const rest = src.slice(i + 1, i + 20);
        if (CUT_AFTER_BRACE.test(rest)) events.push({ at: i + 1, depth: brace });
      }
    }
    i += 1;
  }
  if (events.length === 0) return [src];
  const depth0 = events.filter((e) => e.depth === 0);
  const cutsAt = depth0.length > 0 ? depth0 : events.filter((e) => e.depth === Math.min(...events.map((x) => x.depth)));
  const cuts = [0, ...cutsAt.map((e) => e.at), n];
  const chunks = [];
  for (let k = 0; k < cuts.length - 1; k += 1) {
    const part = src.slice(cuts[k], cuts[k + 1]);
    if (part.length) chunks.push(part);
  }
  return chunks.length ? chunks : [src];
}

function parseMaybeHealed(src) {
  try {
    return { ast: parseSource(src), src };
  } catch (firstErr) {
    const healed = healForParse(src);
    if (healed === src) return { error: firstErr, src };
    try {
      return { ast: parseSource(healed), src: healed };
    } catch {
      return { error: firstErr, src };
    }
  }
}

const GEN_OPTS = {
  comments: true,
  compact: true,
  jsescOption: { quotes: "double", minimal: true }
};

function generateNodes(nodes) {
  const { generate } = loadBabel();
  return nodes.map((node) => generate(node, GEN_OPTS).code).join("");
}

function isIdentChar(c) {
  return c != null && /[A-Za-z0-9_$]/.test(c);
}

function isKeywordAt(src, i, word) {
  if (i < 0 || i + word.length > src.length) return false;
  if (src.slice(i, i + word.length) !== word) return false;
  if (isIdentChar(src[i - 1]) || isIdentChar(src[i + word.length])) return false;
  return true;
}

/**
 * Walk source, tracking strings/templates/comments/regex. `onCode(i)` runs
 * for every character index that is executable code (not inside a literal).
 */
function walkCode(src, onCode) {
  const n = src.length;
  let i = 0;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let str = null;
  const tmplExpr = [];
  while (i < n) {
    const c = src[i];
    if (str === "`") {
      if (c === "\\") {
        i += 2;
        continue;
      }
      if (c === "`") {
        str = null;
        i += 1;
        continue;
      }
      if (c === "$" && src[i + 1] === "{") {
        tmplExpr.push(brace);
        brace += 1;
        str = null;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }
    if (str) {
      if (c === "\\") {
        i += 2;
        continue;
      }
      if (c === str) str = null;
      i += 1;
      continue;
    }
    if (c === "'" || c === '"') {
      str = c;
      i += 1;
      continue;
    }
    if (c === "`") {
      str = "`";
      i += 1;
      continue;
    }
    if (c === "/" && src[i + 1] === "/") {
      i += 2;
      while (i < n && src[i] !== "\n") i += 1;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      i += 2;
      while (i < n - 1 && !(src[i] === "*" && src[i + 1] === "/")) i += 1;
      i += 2;
      continue;
    }
    if (c === "/" && /[=(,;:{[!&|?]$/.test(src[i - 1] ?? ";")) {
      i += 1;
      while (i < n) {
        if (src[i] === "\\") {
          i += 2;
          continue;
        }
        if (src[i] === "/") {
          i += 1;
          while (i < n && /[gimsuy]/.test(src[i])) i += 1;
          break;
        }
        if (src[i] === "\n") break;
        i += 1;
      }
      continue;
    }
    if (c === "(") paren += 1;
    else if (c === ")") paren -= 1;
    else if (c === "[") bracket += 1;
    else if (c === "]") bracket -= 1;
    else if (c === "{") brace += 1;
    else if (c === "}") {
      brace -= 1;
      if (tmplExpr.length && brace === tmplExpr[tmplExpr.length - 1]) {
        tmplExpr.pop();
        str = "`";
        i += 1;
        continue;
      }
    }
    onCode(i, { paren, brace, bracket });
    i += 1;
  }
}

function matchCompleteFunction(src, start) {
  let i = start;
  if (isKeywordAt(src, i, "async")) {
    i += 5;
    while (src[i] === " " || src[i] === "\t" || src[i] === "\n") i += 1;
  }
  if (!isKeywordAt(src, i, "function")) return null;
  i += 8;
  if (src[i] === "*") i += 1;
  while (src[i] === " " || src[i] === "\t" || src[i] === "\n") i += 1;
  if (isIdentChar(src[i])) {
    i += 1;
    while (isIdentChar(src[i])) i += 1;
  }
  while (src[i] === " " || src[i] === "\t" || src[i] === "\n") i += 1;
  if (src[i] !== "(") return null;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let str = null;
  const tmplExpr = [];
  let started = false;
  const n = src.length;
  for (; i < n; i += 1) {
    const c = src[i];
    if (str === "`") {
      if (c === "\\") {
        i += 1;
        continue;
      }
      if (c === "`") {
        str = null;
        continue;
      }
      if (c === "$" && src[i + 1] === "{") {
        tmplExpr.push(brace);
        brace += 1;
        str = null;
        i += 1;
        continue;
      }
      continue;
    }
    if (str) {
      if (c === "\\") {
        i += 1;
        continue;
      }
      if (c === str) str = null;
      continue;
    }
    if (c === "'" || c === '"') {
      str = c;
      continue;
    }
    if (c === "`") {
      str = "`";
      continue;
    }
    if (c === "/" && src[i + 1] === "/") {
      i += 1;
      while (i < n && src[i] !== "\n") i += 1;
      continue;
    }
    if (c === "/" && src[i + 1] === "*") {
      i += 1;
      while (i < n - 1 && !(src[i] === "*" && src[i + 1] === "/")) i += 1;
      i += 1;
      continue;
    }
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
    } else if (c === "}") {
      if (started) {
        brace -= 1;
        if (tmplExpr.length && brace === tmplExpr[tmplExpr.length - 1]) {
          tmplExpr.pop();
          str = "`";
          continue;
        }
        if (brace === 0) return { start, end: i + 1 };
      }
    }
  }
  return null;
}

function scanCompleteFunctions(src) {
  const out = [];
  walkCode(src, (i) => {
    if (isKeywordAt(src, i, "async") || isKeywordAt(src, i, "function")) {
      if (isKeywordAt(src, i, "async")) {
        let j = i + 5;
        while (src[j] === " " || src[j] === "\t" || src[j] === "\n") j += 1;
        if (!isKeywordAt(src, j, "function")) return;
      }
      const found = matchCompleteFunction(src, i);
      if (found && (out.length === 0 || out[out.length - 1].start !== found.start)) {
        out.push(found);
      }
    }
  });
  return out;
}

function skipProgramFunctionIds(ast) {
  const skipNames = new Set();
  for (const node of ast.program.body) {
    if (node.type === "FunctionDeclaration" && node.id && HEX_IDENT.test(node.id.name)) {
      skipNames.add(node.id.name);
    }
  }
  return skipNames;
}

function emitRenamed(src, ast, counter, { skipNames = new Set() } = {}) {
  const { traverse, generate } = loadBabel();
  const abort = findAbortReason(ast, traverse);
  if (abort) return { aborted: true, reason: abort, src, renamed: 0 };
  const renamed = renameHexBindings(ast, traverse, counter, skipNames) + renameHexLabels(ast, traverse);
  if (renamed === 0) return { aborted: false, src, renamed: 0, changed: false };
  const out = generate(ast, GEN_OPTS).code;
  const next = out.endsWith("\n") ? out : `${out}\n`;
  return { aborted: false, src: next, renamed, changed: next !== src };
}

function tryParseVariants(src) {
  const healed = healForParse(src);
  const variants = [src];
  if (healed !== src) variants.push(healed);
  const trimmed = src.trimStart();
  if (/^(?:async\s+)?function\s*\*?\s*\(/.test(trimmed)) {
    variants.push(`(${src});`);
    if (healed !== src) variants.push(`(${healed});`);
  }
  for (const variant of variants) {
    try {
      return { ast: parseSource(variant), src: variant, wrapped: variant.startsWith("(") && variant !== src };
    } catch {
      // try next
    }
  }
  return { error: true, src };
}

function tryRenameIsolatedFunction(src, counter) {
  if (countTokens(src) === 0) return { src, renamed: 0, changed: false };
  const parsed = tryParseVariants(src);
  if (!parsed.ast) return { error: true, src, renamed: 0 };
  const { traverse, generate } = loadBabel();
  const abort = findAbortReason(parsed.ast, traverse);
  if (abort) return { aborted: true, reason: abort, src, renamed: 0 };
  const skipNames = skipProgramFunctionIds(parsed.ast);
  const renamed =
    renameHexBindings(parsed.ast, traverse, counter, skipNames) + renameHexLabels(parsed.ast, traverse);
  if (renamed === 0) return { src, renamed: 0, changed: false };
  const body = parsed.ast.program.body;
  let next;
  if (parsed.wrapped && body[0]?.type === "ExpressionStatement") {
    next = generate(body[0].expression, GEN_OPTS).code;
  } else {
    next = generateNodes(body);
  }
  return { src: next, renamed, changed: next !== src, aborted: false };
}

function processFunctionsIn(src, counter, includeTop) {
  const fns = scanCompleteFunctions(src);
  const candidates = includeTop
    ? fns
    : fns.filter((f) => !(f.start === 0 && f.end === src.length));
  const tops = candidates.filter(
    (f) => !candidates.some((o) => o.start < f.start && o.end > f.end)
  );
  let result = src;
  let renamed = 0;
  for (const f of [...tops].sort((a, b) => b.start - a.start)) {
    const piece = result.slice(f.start, f.end);
    const inner = processFunctionsIn(piece, counter, false);
    renamed += inner.renamed;
    const renamedPiece = tryRenameIsolatedFunction(inner.src, counter);
    if (renamedPiece.aborted) continue;
    const nextPiece = renamedPiece.error ? inner.src : renamedPiece.src;
    renamed += renamedPiece.renamed ?? 0;
    result = result.slice(0, f.start) + nextPiece + result.slice(f.end);
  }
  return { src: result, renamed, changed: result !== src };
}

function splitAtTopLevelExportImport(src) {
  const starts = [];
  walkCode(src, (i, depth) => {
    if (depth.paren !== 0 || depth.brace !== 0 || depth.bracket !== 0) return;
    if (isKeywordAt(src, i, "export") || isKeywordAt(src, i, "import")) starts.push(i);
  });
  const cuts = [...new Set(starts.filter((s) => s > 0))];
  if (cuts.length === 0) return [src];
  const points = [0, ...cuts, src.length];
  const parts = [];
  for (let k = 0; k < points.length - 1; k += 1) {
    const part = src.slice(points[k], points[k + 1]);
    if (part.length) parts.push(part);
  }
  return parts.length ? parts : [src];
}

function shouldWrapAsFunction(src) {
  const t = src.trimStart();
  if (/^(?:export|import|class)\b/.test(t)) return false;
  if (/^(?:async\s+)?function\b/.test(t)) return false;
  return /(?:\breturn\b|\bcontinue\b|\bbreak\b)/.test(src) || /^(?:let|const|var)\b/.test(t);
}

function looksLikeClassMethod(src) {
  const t = src.trimStart();
  if (/^(?:export|import|class|function|let|const|var|async\s+function)\b/.test(t)) return false;
  return /^(?:async\s+)?[_$A-Za-z][\w]*\s*\([^;{]*\)\s*\{/.test(t);
}

function splitLastExport(src) {
  const idxBrace = src.lastIndexOf(";export{");
  const idxSpace = src.lastIndexOf(";export {");
  const at = Math.max(idxBrace, idxSpace);
  if (at < 0) return null;
  const prefix = src.slice(0, at + 1);
  const tail = src.slice(at + 1);
  if (!prefix.trim() || !tail.trim()) return null;
  return [prefix, tail];
}

function tryRenameWrappedFragment(src, counter) {
  const wrapName = "__uw";
  const wrapped = `function ${wrapName}(){${src}\n}`;
  const parsed = parseMaybeHealed(wrapped);
  if (!parsed.ast) return { error: parsed.error, src, renamed: 0 };
  const result = emitRenamed(parsed.src, parsed.ast, counter);
  if (result.aborted) return result;
  if (!result.renamed) return { src, renamed: 0, changed: false };
  try {
    const ast2 = parseSource(result.src);
    const fn = ast2.program.body.find(
      (n) => n.type === "FunctionDeclaration" && n.id?.name === wrapName
    );
    if (!fn || fn.body.type !== "BlockStatement") return { error: true, src, renamed: 0 };
    return { src: generateNodes(fn.body.body), renamed: result.renamed, changed: true, aborted: false };
  } catch {
    return { error: true, src, renamed: 0 };
  }
}

function tryRenameClassMethod(src, counter) {
  const wrapped = `class __C{${src}}`;
  const parsed = parseMaybeHealed(wrapped);
  if (!parsed.ast) return { error: true, src, renamed: 0 };
  const result = emitRenamed(parsed.src, parsed.ast, counter);
  if (result.aborted || !result.renamed) return { src, renamed: result.renamed ?? 0, changed: false };
  try {
    const ast2 = parseSource(result.src);
    const cls = ast2.program.body.find((n) => n.type === "ClassDeclaration" && n.id?.name === "__C");
    if (!cls || cls.body.type !== "ClassBody") return { error: true, src, renamed: 0 };
    return { src: generateNodes(cls.body.body), renamed: result.renamed, changed: true, aborted: false };
  } catch {
    return { error: true, src, renamed: 0 };
  }
}

function renameChunkDeep(src, counter, depth = 0) {
  const first = renameOneUnit(src, counter);
  if (!first.error && !first.aborted) return first;
  if (first.aborted) return first;

  if (depth < 4) {
    const parts = splitAtTopLevelExportImport(src);
    if (parts.length > 1) {
      let renamed = 0;
      const out = [];
      for (const part of parts) {
        const r = renameChunkDeep(part, counter, depth + 1);
        if (r.aborted) return r;
        out.push(r.error && !(r.renamed > 0) ? part : r.src);
        renamed += r.renamed ?? 0;
      }
      if (renamed > 0) {
        const next = out.join("");
        return { src: next, renamed, changed: true, aborted: false };
      }
    }
    const inner = splitTopLevel(healForParse(src));
    if (inner.length > 1) {
      let renamed = 0;
      const out = [];
      for (const part of inner) {
        const r = renameChunkDeep(part, counter, depth + 1);
        if (r.aborted) return r;
        out.push(r.error && !(r.renamed > 0) ? part : r.src);
        renamed += r.renamed ?? 0;
      }
      if (renamed > 0) {
        const next = out.join("");
        return { src: next, renamed, changed: true, aborted: false };
      }
    }
  }

  let current = src;
  let renamed = 0;
  const nested = processFunctionsIn(src, counter, true);
  renamed += nested.renamed;
  current = nested.src;

  const again = renameOneUnit(current, counter);
  if (!again.error && !again.aborted) {
    return { src: again.src, renamed: renamed + (again.renamed ?? 0), changed: true, aborted: false };
  }
  if (again.aborted) return again;

  if (depth < 4) {
    const exportParts = splitLastExport(current);
    if (exportParts) {
      const [prefix, tail] = exportParts;
      const r = renameChunkDeep(prefix, counter, depth + 1);
      if (r.aborted) return r;
      if ((r.renamed ?? 0) > 0 || (!r.error && r.changed)) {
        renamed += r.renamed ?? 0;
        current = (r.error ? prefix : r.src) + tail;
        if (renamed > 0) {
          return { src: current, renamed, changed: true, aborted: false };
        }
      }
    }
  }

  if (countTokens(current) > 0 && shouldWrapAsFunction(current)) {
    const wrapped = tryRenameWrappedFragment(current, counter);
    if (!wrapped.error && !wrapped.aborted && wrapped.renamed) {
      renamed += wrapped.renamed;
      current = wrapped.src;
    }
  }

  if (countTokens(current) > 0 && looksLikeClassMethod(current)) {
    const method = tryRenameClassMethod(current, counter);
    if (!method.error && method.renamed) {
      renamed += method.renamed;
      current = method.src;
    }
  }

  if (renamed === 0) {
    return { error: first.error, src, renamed: 0, changed: false, aborted: false };
  }
  return { src: current, renamed, changed: current !== src, aborted: false };
}

function renameOneUnit(src, counter) {
  const parsed = parseMaybeHealed(src);
  if (!parsed.ast) return { ...parsed, renamed: 0, changed: false, aborted: false };
  return emitRenamed(parsed.src, parsed.ast, counter);
}

export function rename0xIdents(src) {
  const hitsBefore = countTokens(src);
  if (hitsBefore === 0) {
    return { src, changed: false, aborted: false, reason: null, hitsBefore, hitsAfter: 0, renamed: 0 };
  }
  const counter = { value: 0 };
  const whole = renameOneUnit(src, counter);
  if (whole.aborted) {
    return { src, changed: false, aborted: true, reason: whole.reason, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
  }
  if (whole.ast !== undefined || whole.renamed > 0 || whole.changed || !whole.error) {
    if (!whole.error) {
      if (whole.renamed === 0) {
        return { src: whole.src, changed: false, aborted: false, reason: null, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
      }
      return {
        src: whole.src,
        changed: whole.changed ?? whole.src !== src,
        aborted: false,
        reason: null,
        hitsBefore,
        hitsAfter: countTokens(whole.src),
        renamed: whole.renamed
      };
    }
  }

  const chunks = splitTopLevel(src);
  const units = chunks.length > 1 ? chunks : [src];
  const out = [];
  let renamed = 0;
  let chunkAbort = null;
  for (const chunk of units) {
    const result = renameChunkDeep(chunk, counter);
    if (result.aborted) {
      chunkAbort = result.reason;
      break;
    }
    if (result.error && result.renamed === 0) {
      const tok = chunk.match(TOKEN_RE)?.[0];
      const msg = result.error?.message?.split("\n")[0] ?? "unparseable";
      console.warn(`SKIP chunk ${tok ?? "?"} (${msg})`);
      out.push(chunk);
      continue;
    }
    out.push(result.src);
    renamed += result.renamed ?? 0;
  }
  if (chunkAbort) {
    return { src, changed: false, aborted: true, reason: chunkAbort, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
  }
  if (renamed === 0) {
    return {
      src,
      changed: false,
      aborted: false,
      reason: `parse failed: ${whole.error?.message ?? "unparseable chunks"}`,
      hitsBefore,
      hitsAfter: hitsBefore,
      renamed: 0
    };
  }
  let next = out.join("");
  if (!next.endsWith("\n")) next += "\n";
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
