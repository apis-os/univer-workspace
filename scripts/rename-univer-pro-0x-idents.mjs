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
const T0B_SKIP_PKGS = ["collaboration-client-ui"];

let babel = null;
let acornLoose = null;

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

function loadAcornLoose() {
  if (acornLoose) return acornLoose;
  const pkg = path.join(ROOT, "scripts/vendor/loose-parse/node_modules/acorn-loose/package.json");
  if (!fs.existsSync(pkg)) {
    throw new Error("vendored acorn-loose not found; cannot loose-parse unclosed _0x functions");
  }
  acornLoose = createRequire(pkg)(".");
  return acornLoose;
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
 * unglueKeywords split, empty rotator IIFE residue, extra `};ident`
 * after a closed function, `;}(),ident=` IIFE-comma after `;}()`,
 * `;}()),ident=` extra-paren IIFE residue, same-ident `;;Ctor.prototype` /
 * `};Ctor.prototype` sibling methods, extra `}` in `})(),ident=`
 * (e.g. `})(),rd=function`) at brace depth < 0,
 * Object.entries / typeof== splits, and `for(var` residue that lost `fo`.
 */
const STMT_AFTER_VALUE = ["function", "class", "const", "let", "var", "if", "for", "while", "switch", "try"];

function braceSinceLastFunction(src, end) {
  const before = src.slice(Math.max(0, end - 16000), end);
  const lastFn = before.lastIndexOf("=function");
  if (lastFn < 0) return 0;
  const afterFn = before.slice(lastFn);
  let brace = 0;
  let str = null;
  for (let i = 0; i < afterFn.length; i += 1) {
    const c = afterFn[i];
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
    if (c === "{") brace += 1;
    else if (c === "}") brace -= 1;
  }
  return brace;
}

function continueSameIdentPrototype(match, ident, offset, whole) {
  const before = whole.slice(Math.max(0, offset - 16000), offset);
  const owners = [...before.matchAll(/([A-Za-z_$][\w$]*)\.prototype/g)];
  const prev = owners.length ? owners[owners.length - 1][1] : null;
  if (prev && prev !== ident) return match;
  const brace = braceSinceLastFunction(whole, offset);
  if (brace <= 0) return match;
  // Statement close, not comma: `},Ctor.prototype` is only valid inside a
  // still-open return-comma list and otherwise becomes Unexpected token.
  // Close every leftover block in the previous method (nested ifs) so the
  // next same-ident prototype is a sibling, not a nested assignment.
  return `;${"};".repeat(brace)}${ident}.prototype`;
}

function healElseMissingSemicolons(src) {
  if (!src.includes("else{") && !src.includes("else {")) return src;
  const ranges = [];
  walkCode(src, (i) => {
    if (!isKeywordAt(src, i, "else")) return;
    const j = skipWs(src, i + 4);
    if (src[j] !== "{") return;
    const balanced = matchBalancedBrace(src, j);
    ranges.push({ start: j + 1, end: balanced ? balanced.end - 1 : src.length });
  });
  if (ranges.length === 0) return src;
  const inserts = [];
  walkCode(src, (i) => {
    if (!ranges.some((r) => i >= r.start && i < r.end)) return;
    if (!STMT_AFTER_VALUE.some((word) => isKeywordAt(src, i, word))) return;
    let k = i - 1;
    while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) k -= 1;
    if (k < 0) return;
    const prev = src[k];
    if (prev === ";") return;
    const proven = /[0-9]/.test(prev) || prev === ")" || prev === "]" || prev === '"' || prev === "'";
    if (!proven) return;
    inserts.push(i);
  });
  if (inserts.length === 0) return src;
  let out = src;
  for (const at of [...new Set(inserts)].sort((a, b) => b - a)) {
    out = `${out.slice(0, at)};${out.slice(at)}`;
  }
  return out;
}

function healEmptyForIfBreak(src) {
  if (!src.includes("for(") || !src.includes("break")) return src;
  const drops = [];
  walkCode(src, (i) => {
    if (!isKeywordAt(src, i, "for")) return;
    const head = skipWs(src, i + 3);
    if (src[head] !== "(") return;
    let paren = 0;
    let str = null;
    let close = -1;
    for (let j = head; j < src.length; j += 1) {
      const c = src[j];
      if (str) {
        if (c === "\\") {
          j += 1;
          continue;
        }
        if (c === str) str = null;
        continue;
      }
      if (c === "'" || c === '"') {
        str = c;
        continue;
      }
      if (c === "(") paren += 1;
      else if (c === ")") {
        paren -= 1;
        if (paren === 0) {
          close = j;
          break;
        }
      }
    }
    if (close < 0) return;
    const semi = skipWs(src, close + 1);
    if (src[semi] !== ";") return;
    const next = skipWs(src, semi + 1);
    if (!isKeywordAt(src, next, "if")) return;
    const ifParen = skipWs(src, next + 2);
    if (src[ifParen] !== "(") return;
    let ifClose = -1;
    paren = 0;
    str = null;
    for (let j = ifParen; j < src.length; j += 1) {
      const c = src[j];
      if (str) {
        if (c === "\\") {
          j += 1;
          continue;
        }
        if (c === str) str = null;
        continue;
      }
      if (c === "'" || c === '"') {
        str = c;
        continue;
      }
      if (c === "(") paren += 1;
      else if (c === ")") {
        paren -= 1;
        if (paren === 0) {
          ifClose = j;
          break;
        }
      }
    }
    if (ifClose < 0) return;
    const body = skipWs(src, ifClose + 1);
    if (src[body] !== "{") return;
    const balanced = matchBalancedBrace(src, body);
    if (!balanced) return;
    const inner = src.slice(body, balanced.end);
    if (!/\bbreak\b/.test(inner) && !/\bcontinue\b/.test(inner)) return;
    drops.push(semi);
  });
  if (drops.length === 0) return src;
  let out = src;
  for (const at of [...new Set(drops)].sort((a, b) => b - a)) {
    out = `${out.slice(0, at)}${out.slice(at + 1)}`;
  }
  return out;
}

function matchParenBack(src, close) {
  const from = Math.max(0, close - 80000);
  let str = null;
  const stack = [];
  for (let i = from; i <= close; i += 1) {
    const c = src[i];
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
    if (c === "(") stack.push(i);
    else if (c === ")") {
      if (i === close) return stack.length ? stack[stack.length - 1] : -1;
      stack.pop();
    }
  }
  return -1;
}

function keywordImmediatelyBefore(src, i) {
  let k = i - 1;
  while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) k -= 1;
  const ident = identEndsBefore(src, k + 1);
  return ident ? ident.name : null;
}

function skipMemberCalleeBack(src, parenOpen) {
  let k = parenOpen - 1;
  while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) k -= 1;
  for (;;) {
    if (k < 0 || !isIdentChar(src[k])) return k;
    while (k >= 0 && isIdentChar(src[k])) k -= 1;
    while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) k -= 1;
    if (src[k] !== ".") return k;
    k -= 1;
    while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) k -= 1;
  }
}

function isGuardedElse(src, closeParen) {
  const open = matchParenBack(src, closeParen);
  if (open < 0) return false;
  const kw = keywordImmediatelyBefore(src, open);
  if (kw === "if" || kw === "else") return true;
  const beforeCallee = skipMemberCalleeBack(src, open);
  if (src[beforeCallee] !== ")") return false;
  const ifOpen = matchParenBack(src, beforeCallee);
  if (ifOpen < 0) return false;
  const ifKw = keywordImmediatelyBefore(src, ifOpen);
  return ifKw === "if" || ifKw === "else";
}

function lastOpenNamedFunctionStart(src, end) {
  const from = Math.max(0, end - 80000);
  let str = null;
  let best = -1;
  for (let i = from; i < end; i += 1) {
    const c = src[i];
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
    if (isKeywordAt(src, i, "function") && countBraceRange(src, i, end) > 0) {
      const afterFn = skipWs(src, i + 8);
      if (isIdentChar(src[afterFn]) && !/[0-9]/.test(src[afterFn])) best = i;
    }
  }
  return best;
}

function leftoverElseJunkEnd(src, braceAt) {
  let brace = 0;
  let str = null;
  let lastSemi = -1;
  let sawNeg = false;
  let sawCloseIf = false;
  for (let j = braceAt; j < src.length; j += 1) {
    const c = src[j];
    if (str) {
      if (c === "\\") {
        j += 1;
        continue;
      }
      if (c === str) str = null;
      continue;
    }
    if (c === "'" || c === '"') {
      str = c;
      continue;
    }
    if (c === "{") brace += 1;
    else if (c === "}") {
      brace -= 1;
      if (brace < 0) sawNeg = true;
    } else if (c === ";") lastSemi = j;
    if (src.startsWith("}}if", j) || src.startsWith("}} if", j)) sawCloseIf = true;
    if (j > braceAt && brace <= 0 && isKeywordAt(src, j, "function")) {
      const afterFn = skipWs(src, j + 8);
      const named = isIdentChar(src[afterFn]) && !/[0-9]/.test(src[afterFn]);
      if (!named) continue;
      if (sawNeg || sawCloseIf) return lastSemi > braceAt ? lastSemi + 1 : j;
      return null;
    }
  }
  return null;
}

function pickCloseBeforeFunction(src, insertAt) {
  const fnAt = lastOpenNamedFunctionStart(src, insertAt);
  const head = src.slice(fnAt >= 0 ? fnAt : Math.max(0, insertAt - 8000), insertAt);
  let parser;
  try {
    parser = loadBabel().parser;
  } catch {
    return "});}";
  }
  const opts = {
    sourceType: "unambiguous",
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    errorRecovery: false,
    plugins: ["importAttributes"]
  };
  const closes = ["});}", "});", "}", "});};", ");}", "}}", "}}}"];
  for (const close of closes) {
    try {
      parser.parse(`${head}${close}function _n(){}`, opts);
      return close;
    } catch {
      // walker under-closes registerAction callbacks before a sibling function
    }
  }
  return "});}";
}

function healLeftoverElseAfterCall(src) {
  if (!src.includes(");else{") && !src.includes(");else {")) return src;
  const drops = [];
  walkCode(src, (i) => {
    if (src[i] !== ")" || src[i + 1] !== ";" || !isKeywordAt(src, i + 2, "else")) return;
    const afterElse = skipWs(src, i + 6);
    if (src[afterElse] !== "{") return;
    if (isGuardedElse(src, i)) return;
    const junkEnd = leftoverElseJunkEnd(src, afterElse);
    const registerActionElse =
      junkEnd != null &&
      junkEnd - afterElse < 800 &&
      src.slice(Math.max(0, i - 400), i).includes("registerAction");
    if (registerActionElse) {
      drops.push({
        start: i + 2,
        end: junkEnd,
        to: pickCloseBeforeFunction(src, i + 2)
      });
      return;
    }
    drops.push({ start: i + 2, end: afterElse, to: "" });
  });
  if (drops.length === 0) return src;
  let out = src;
  for (const { start, end, to } of [...drops].sort((a, b) => b.start - a.start)) {
    out = `${out.slice(0, start)}${to}${out.slice(end)}`;
  }
  return out;
}

export function healForParse(src) {
  return closeUpdateInnerText(healLeftoverElseAfterCall(healEmptyForIfBreak(
    healIifeCommaAndExtraBrace(
    src
      .replace(/\bas\s+delete\s+([A-Z][A-Za-z0-9_]*)/g, "as delete$1")
      .replace(/([,{])delete\s+([A-Z][A-Za-z0-9_]*)\s+as\b/g, "$1delete$2 as")
      .replace(/([{};,])\s*delete\s+([A-Z][A-Za-z0-9_]*)\s*\(/g, "$1delete$2(")
      .replace(/\bawait\s+([A-Z][A-Za-z0-9_]*)\s+as\b/g, "await$1 as")
      .replace(/URL\(\);SearchParams/g, "URLSearchParams")
      .replace(/\(function\s*\(\s*\)\s*\{\(\)\)/g, "(function(){})")
      .replace(/\(function\s*\(\s*\)\s*\{,/g, "(function(){")
      // Unique engine-chart leftover: constructor body starts with `{,Ctor.prototype`.
      // Drop the comma so the prototype assignment is a statement, not a list item.
      .replace(
        /function ([A-Za-z_$][\w$]*)\(([^)]*)\)\{,(?=[A-Za-z_$][\w$]*\.prototype)/g,
        "function $1($2){"
      )
      .replace(/=\(\s*function\s*\(\s*\)\s*\{\s*else\b/g, "=(function(){")
      .replace(/\[\];,((?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"))\s*:/g, "{$1:")
      // Unique leftover comma after an empty-array statement before a
      // sibling prototype assignment (`ident=[];,Ctor.prototype`).
      .replace(/\[\];,(?=[A-Za-z_$][\w$]*\.prototype)/g, "[];")
      .replace(/\}function\b/g, "};function")
      // Unique leftover: nO is still open after protoInitialize
      // `})();su(...);F_(oO,Qw)`. Close nO before sibling `function sO`.
      .replace(/F_\(oO,Qw\);function sO\b/g, "F_(oO,Qw);};function sO")
      // Unique leftover: VO is still open after the loading
      // `});}});var gk=new rd(),_k={}`. Close remaining wrappers
      // before sibling `function Hse`.
      .replace(
        /var gk=new rd\(\),_k=\{\};function Hse\b/g,
        "var gk=new rd(),_k={};}});function Hse"
      )
      // Unique leftover: uM=function is still open after the
      // decoratedMethods object. `;;` already closed earlier
      // methods. Replace `}},8B1A;}(Hj)` with `}}}}}(Hj)` so dM
      // is a sibling. Dropping the leftover nests dM through
      // the barrel. pickIifeCloseCount is not used here.
      .replace(
        /\}\},fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A;\}\(Hj\);Hj\.registerClass/g,
        "}}}}}(Hj);Hj.registerClass"
      )
      // Unique leftover: fM=function is still open after the last
      // method + `.type="interval"` comma. Replace
      // `,550B;}(Hj)` with `;}}(Hj)` so registerClass/ple are
      // siblings. Dropping the leftover nests hM through the barrel.
      .replace(
        /\.type="interval",fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B;\}\(Hj\);Hj\.registerClass/g,
        '.type="interval";}}(Hj);Hj.registerClass'
      )
      // Unique leftover: Nbe's return object is done; sibling `zbe`
      // must not stay nested inside Nbe through the barrel export.
      .replace(
        /,'boundary':([A-Za-z_$][\w$]*)\};function zbe\b/g,
        ",'boundary':$1};};function zbe"
      )
      // Unique leftover: $9's return object is done; close remaining
      // uye IIFE wrappers before the barrel `export{` (not a lone `;`).
      .replace(/minFillFontSize\)\};\}export\{/g, "minFillFontSize)};}}})();export{")
      // Unique leftover: wae IIFE still open before sibling `var hd=`.
      // Close remaining wrappers at this boundary, not at Pd/xge/EOF.
      .replace(/CANVAS";\n\}\nvar hd=/g, "CANVAS\";\n}\n}}})();\nvar hd=")
      .replace(/\}async\s+function\b/g, "};async function")
      .replace(/([,{])\s*delete\s+([A-Za-z_$][\w$]*)\s*:/g, "$1delete$2:")
      .replace(/async\s*'handler'/g, "async handler")
      .replace(/async'handler'/g, "async handler")
      .replace(/\n}\n};(?=[A-Za-z_$])/g, "\n}\n")
      .replace(/fromEntries\(Object\);\n\}\n\.entries\(/g, "fromEntries(Object.entries(")
      .replace(/\btypeof\s+([A-Za-z_$][\w$]*);\n==/g, "typeof $1==")
      .replace(/\n}\nr\(var /g, "\n}\nfor(var ")
      // unglue + error-recovery generate can emit `fo;` then extra closers
      // before the real `for(` body of the same method.
      .replace(/\bfo;\s*\};(?:\s*\};)*\s*\}\s*for\(/g, "for(")
      .replace(/\},([A-Za-z_$][\w$]*)\.prototype/g, ";$1.prototype")
      .replace(/\);,([A-Za-z_$][\w$]*)\.prototype/g, ");$1.prototype")
      .replace(/;\(\)\),(?=[A-Za-z_$][\w$]*=)/g, ";")
      .replace(/\];\),(?=[A-Za-z_$][\w$]*=[^;]*;[^;]*;\s*[A-Za-z_$][\w$]*\+\+\))/g, "];for(")
      .replace(/;\),(?=[A-Za-z_$][\w$]*\[)/g, ";")
      .replace(/\}\);\},'index':[A-Za-z_$][\w$]*\};\}\);/g, "});")
      // Unique leftover after a completed `return 0;`: extra `})`, a
      // `{'data':ident}` object, and extra closes before sibling `function`.
      .replace(
        /return 0;\}\),\{'data':[A-Za-z_$][\w$]*\};\}\};function\b/g,
        "return 0;};function"
      )
      // Unique pretty leftover after a closed function: `}\n\n},'pan':O2(function`.
      // Drop `},'key':` so the factory call is a statement. Do not touch
      // compact `},'key':function` object methods.
      .replace(
        /\}\n\n\},('(?:\\.|[^'\\])*'):([A-Za-z_$][\w$]*)\(function\b/g,
        "}\n\n$2(function"
      )
      .replace(
        /\}\),'((?:\\.|[^'\\])*)':([A-Za-z_$][\w$]*)\(function\b/g,
        "})\n$2(function"
      )
      .replace(/\.index\];\}\);\}else\{/g, ".index];});{")
      .replace(/\);\}\);\)\);\}\);for\(/g, ");for(")
      .replace(
        /:([A-Za-z_$][\w$]*)\(([A-Za-z_$][\w$]*,[A-Za-z_$][\w$]*,[A-Za-z_$][\w$]*)\);\}\);};function\b/g,
        ":$1($2);function"
      )
      // Newline leftover `};\n},ident=`. Compact `};},ident=` stays
      // (rest object, comma-arrow sibling). Only the unique leftover
      // `};},ident = function` after a closed inverse return is dropped.
      .replace(/\};(\s*\n\s*)\},([A-Za-z_$][\w$]*)\s*=/g, "};$1$2 =")
      .replace(/\};\},([A-Za-z_$][\w$]*)\s*=\s*function\b/g, "};$1 = function")
      // Unique leftover: `return Ctor;},Ctor.initDefaultProps=` keeps
      // initDefaultProps nested in a comma expression. Drop only that
      // comma+brace. Do not eat I_ `return ident;},ident.getClass=` /
      // `getClassesByMainType=` comma-assignments (drops a `}`).
      .replace(
        /return ([A-Za-z_$][\w$]*);},([A-Za-z_$][\w$]*)\.initDefaultProps=/g,
        (match, value, ident) =>
          /^(?:false|true|null|this|undefined)$/.test(value)
            ? match
            : `return ${value};${ident}.initDefaultProps=`
      )
      // Nested `;;Ctor.prototype` siblings (same constructor as the
      // enclosing assignment). Do not undo `},OtherCtor.prototype` → `;`.
      .replace(/;;([A-Za-z_$][\w$]*)\.prototype/g, continueSameIdentPrototype)
      // Unique leftover: empty hook bodies `=function(...){;Ctor.prototype`
      // (beforeUpdate/afterUpdate/traverse). Close the method so the
      // sibling is not nested inside zh's still-open grouping.
      .replace(
        /=function\(([^)]*)\)\{;([A-Za-z_$][\w$]*)\.prototype/g,
        "=function($1){};$2.prototype"
      )
      // Unique leftover: getPaintRect is a completed `{return null;}`
      // method; the comma before `Ctor.initDefaultProps=` must not keep
      // the IIFE nested in a comma expression.
      .replace(
        /\{return null;\},([A-Za-z_$][\w$]*)\.initDefaultProps=/g,
        "{return null;};$1.initDefaultProps="
      )
      // Extra `}` before a same-ident sibling (`}};Ctor.prototype`).
      // Do not match a lone `};Ctor.prototype` — that is already a closed method.
      .replace(/\}};([A-Za-z_$][\w$]*)\.prototype/g, continueSameIdentPrototype)
      // Unique leftover: Ad `_doTrack` / Fm `removeClip` still have the
      // `if` close as the method close, so sibling `_recognize` /
      // `removeAnimator` stay nested. Close the previous method at this
      // boundary. Do not apply to every `};Ctor.prototype`.
      .replace(
        /\};([A-Za-z_$][\w$]*)\.prototype(\["_recognize"\]|\._recognize\b|\["removeAnimator"\]|\.removeAnimator\b)/g,
        "};};$1.prototype$2"
      )
      .replace(/\},\s*([A-Za-z_$][\w$]*)\s*;\s*\)\(\),/g, "};return $1;}();")
      .replace(/\},\s*([A-Za-z_$][\w$]*)\s*;\s*\)\(\)/g, "};return $1;}()")
      .replace(/(:\s*(?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"));function\b/g, "$1};function")
      .replace(/;;function\b/g, ";};function")
      // Unique leftover: Pf's easing object/comma list is done; sibling
      // `function Zf` must not stay nested inside Pf.
      .replace(/Xf=Lu\(\);function Zf\b/g, "Xf=Lu();};function Zf")
      // Unique leftover: eh inherit wrapper calls `R(ox3990ce,ox57f762)`
      // then sibling `function Oh` must not stay nested. Close + invoke
      // here. Do not rename the ox* idents.
      .replace(
        /R\(ox3990ce,ox57f762\);function Oh\b/g,
        "R(ox3990ce,ox57f762);}();function Oh"
      )
      .replace(/\};\}\}\};function\b/g, "};function")
      // Unique leftover: collapse above eats DM's if/else closes
      // before sibling `function OM`. Restore the three leftover
      // closes here — same shape as the Pd restore below.
      .replace(
        /\[var_core_value_sigAA3E\(505\)\]\(var_core_value_sig4C37\);\};function OM\b/g,
        "[var_core_value_sigAA3E(505)](var_core_value_sig4C37);};}}};function OM"
      )
      // Unique leftover: collapse above eats Nd's pinch closes before
      // sibling `function Pd`. Restore if2/if1/pinch/Nd closes here.
      // Do not insert `})();` at Pd (Unexpected token in the full file).
      .replace(
        /'event':([A-Za-z_$][\w$]*)\};function Pd\b/g,
        "'event':$1};}}}};function Pd"
      )
      .replace(
        /return ([A-Za-z_$][\w$]*);\}\}\};function\b/g,
        (match, ident) =>
          /^(?:false|true|null|this|undefined)$/.test(ident)
            ? match
            : `return ${ident};}}});function`
      )
      .replace(
        /\}([;\s]*)\}\)\(\),([A-Za-z_$][\w$]*)\}\)\(\),(?=[A-Za-z_$])/g,
        "}$1"
      )
      .replace(/return ([A-Za-z_$][\w$]*)\}\)\(\),/g, "return $1;}(),")
      .replace(/([A-Za-z_$][\w$]*)\}\)\(\),/g, "$1}(),")
      // `;;function` emits `;}function`; re-apply ASI so Babel can parse the sibling.
      .replace(/\}function\b/g, "};function")
      .replace(/\}async\s+function\b/g, "};async function")
    )
  )));
}

function closeUpdateInnerText(src) {
  // Unique leftover: updateInnerText is one block short before sibling
  // canBeInsideText. Apply after the IIFE walker so a short slice with
  // brace<0 cannot drop this close.
  return src
    // Unique leftover: continueSameIdentPrototype skips this
    // `;;sig8B1A.prototype` when a different .prototype owner
    // sits in the 16k lookback (full file only). Apply after
    // the walker so earlier `},Ctor.prototype` → `;` cannot
    // recreate `;;`. Close getTicks' previous method so uM's
    // remaining depth matches the isolated slice.
    .replace(
      /var_core_value_sig31F4;;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A\.prototype/g,
      "var_core_value_sig31F4;};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig8B1A.prototype"
    )
    // Same skip: fM's parse→getConfig `;;` is kept when a different
    // .prototype owner sits in the 16k lookback. Close parse so
    // fM's remaining depth matches the isolated slice.
    .replace(
      /Number\(var_core_value_sigB6F9\);;fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B\.prototype/g,
      "Number(var_core_value_sigB6F9);};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig550B.prototype"
    )
    .replace(
      /\[var_core_value_sig5082\(580\)\]\(true\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["canBeInsideText"\]/g,
      "[var_core_value_sig5082(580)](true);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype[\"canBeInsideText\"]"
    )
    .replace(
      /\};([A-Za-z_$][\w$]*)\.prototype\.canBeInsideText\b/g,
      "};};$1.prototype.canBeInsideText"
    )
    // Unique leftover: zh `initDefaultProps=(function(){` grouping is
    // done at the assignment list; sibling inner `function …sig81AF`
    // (and the synthetic Inner helper) must not stay nested. Close +
    // invoke here — not at Pd/xge, and not as barrel/EOF braces.
    .replace(
      /var_core_value_sig8721\[var_core_value_sigB008\(1701\)\]=1;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig81AF\b/g,
      "var_core_value_sig8721[var_core_value_sigB008(1701)]=1;})();function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig81AF"
    )
    .replace(
      /proto\.n=1;function Inner\b/g,
      "proto.n=1;})();function Inner"
    )
    // Unique leftover: _savePrimaryToNormal's for-close is used as the
    // method close, so sibling hasState stays nested.
    .replace(
      /this\[var_core_value_sigE470\]\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['hasState'\]/g,
      "this[var_core_value_sigE470]);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype['hasState']"
    )
    .replace(
      /\};([A-Za-z_$][\w$]*)\.prototype\.hasState\b/g,
      "};};$1.prototype.hasState"
    )
    // Unique leftover: sig81AF's defineProperty statement is done,
    // then zh's grouping is done. Sibling `function Vh` must not stay
    // nested. Close the function and invoke-close zh here. Do not
    // insert `})();` at Pd/xge.
    .replace(
      /ox4cabed\(this,var_core_value_sig4A8E\);\}\}\);function Vh\b/g,
      "ox4cabed(this,var_core_value_sig4A8E);}});};})();function Vh"
    )
    .replace(
      /this\.x=v;\}\}\);function Vh\b/g,
      "this.x=v;}});};function Vh"
    )
    // Unique leftovers: several zh Element methods still use an inner
    // block close as the method close. Close each at its sibling
    // prototype assignment. Do not apply to every `};Ctor.prototype`.
    .replace(
      /this\.__dirty&=-2\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["isSilent"\]/g,
      "this.__dirty&=-2);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype[\"isSilent\"]"
    )
    .replace(
      /var_core_value_sig63DE\.targetName\]\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["removeState"\]/g,
      "var_core_value_sig63DE.targetName]);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype[\"removeState\"]"
    )
    .replace(
      /\]\(var_core_value_sig88FB\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["replaceState"\]/g,
      "](var_core_value_sig88FB);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype[\"replaceState\"]"
    )
    .replace(
      /var_core_value_sig3DCD\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['_attachComponent'\]/g,
      "var_core_value_sig3DCD);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype['_attachComponent']"
    )
    .replace(
      /var_core_value_sig958D\.__hostTarget=this;\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["_detachComponent"\]/g,
      "var_core_value_sig958D.__hostTarget=this;};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype[\"_detachComponent\"]"
    )
    .replace(
      /\"addSelfToZr\"\]\(var_core_value_sig5333\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\["removeSelfFromZr"\]/g,
      "\"addSelfToZr\"](var_core_value_sig5333);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype[\"removeSelfFromZr\"]"
    )
    .replace(
      /removeSelfFromZr\"\]\(var_core_value_sigC91D\);\};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6\.prototype\['animate'\]/g,
      "removeSelfFromZr\"](var_core_value_sigC91D);};};fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig70E6.prototype['animate']"
    )
    .replace(
      /\};([A-Za-z_$][\w$]*)\.prototype\.isSilent\b/g,
      "};};$1.prototype.isSilent"
    )
    // Unique leftover: Xh inherit wrapper calls
    // `R(fn_…sigD5FF,var_…C9E7)` then sibling `function fn_…sigD5FF`
    // must not stay nested. Close + invoke here (same shape as eh).
    .replace(
      /R\(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7\);function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF\b/g,
      "R(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF,var_core_value_sigC9E7);}();function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD5FF"
    )
    // Unique leftover: Group ctor (sigD5FF) is one block short before
    // sibling `$h`. The Zh/Qh cache inits are the sibling boundary.
    .replace(
      /var Zh=\{\},Qh=\{\};+function \$h\b/g,
      "var Zh={},Qh={};};function $h"
    )
    // Unique leftover: ZRender `eg` dispose is one block short before
    // sibling `function ng`. Close at the IIFE comma-return boundary.
    .replace(
      /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;\}\(\);function ng\b/g,
      "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig0515;}();};function ng"
    )
    // Unique leftover: Lg is done at `return var_…sig815B`; sibling
    // `function …sig45C9` (and the synthetic Inner helper) must not
    // stay nested. Close here — not at o_/barrel/EOF.
    .replace(
      /return var_core_value_sig815B;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\b/g,
      "return var_core_value_sig815B;};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9"
    )
    .replace(
      /return arr;function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\b/g,
      "return arr;};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9"
    )
    // Unique leftover: sig45C9 is one close, one extra `}` before
    // sibling `function Rg`. Drop the extra brace only — do not dump
    // more at o_/barrel/EOF.
    .replace(
      /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\(var_core_value_sig84ED,var_core_value_sigCAE7,1\)\);\}\};function Rg\b/g,
      "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9(var_core_value_sig84ED,var_core_value_sigCAE7,1));};function Rg"
    )
    .replace(
      /fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9\(a,b,1\)\);\}\};function Rg\b/g,
      "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig45C9(a,b,1));};function Rg"
    )
    // Unique leftover: qae's return tuple is done; sibling
    // `function …sigA4C5` must not stay nested. Close here. Do not
    // rename the ox* idents.
    .replace(
      /\[ox6170fa\(var_core_value_sigE1FA\),ox6170fa\(var_core_value_sigF4F7\)\];function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5\b/g,
      "[ox6170fa(var_core_value_sigE1FA),ox6170fa(var_core_value_sigF4F7)];};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5"
    )
    .replace(
      /\[ox6170fa\(x\),ox6170fa\(y\)\];function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5\b/g,
      "[ox6170fa(x),ox6170fa(y)];};function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigA4C5"
    );
  // Do not close ooe's class-extend inherit at `R(…9973,…8107);function
  // …sigD23F`. Child is nested inside `return ooe(parent)?ident=
  // function(super){ R(...); function Child(){...} return Child;}(parent)
  // :(else)`. Inserting `}();` there yields Unexpected token, expected ":".
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i);
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
  const healed = healForParse(src);
  try {
    return { ast: parseSource(healed), src: healed };
  } catch (firstErr) {
    if (healed === src) return { error: firstErr, src };
    try {
      return { ast: parseSource(src), src };
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

function readIdent(src, i) {
  if (i == null || i < 0 || i >= src.length) return null;
  if (!isIdentChar(src[i]) || /[0-9]/.test(src[i])) return null;
  let j = i + 1;
  while (isIdentChar(src[j])) j += 1;
  return src.slice(i, j);
}

function identEndsBefore(src, end) {
  let j = end - 1;
  if (j < 0 || !isIdentChar(src[j])) return null;
  while (j >= 0 && isIdentChar(src[j])) j -= 1;
  const start = j + 1;
  if (/[0-9]/.test(src[start] || "")) return null;
  return { start, name: src.slice(start, end) };
}

function isKeywordAt(src, i, word) {
  if (i < 0 || i + word.length > src.length) return false;
  if (src.slice(i, i + word.length) !== word) return false;
  if (isIdentChar(src[i + word.length])) return false;
  const prev = src[i - 1];
  if (prev == null) return true;
  if (/[A-Za-z_$]/.test(prev)) return false;
  if (/[0-9]/.test(prev)) {
    let d = i - 1;
    while (d >= 0 && /[0-9]/.test(src[d])) d -= 1;
    if (d >= 0 && /[A-Za-z_$]/.test(src[d])) return false;
    return true;
  }
  return !isIdentChar(prev);
}

const REGEX_AFTER_KEYWORD =
  /^(?:return|throw|case|typeof|void|delete|new|await|yield|else|in|of|instanceof)$/;

function canStartRegex(src, slashIndex) {
  let k = slashIndex - 1;
  while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
    k -= 1;
  }
  if (k < 0) return true;
  const prev = src[k];
  if (/[=(,;:{[!&|?~+\-*%<>^,]/.test(prev)) return true;
  if (!/[A-Za-z]/.test(prev)) return false;
  let start = k;
  while (start >= 0 && /[A-Za-z]/.test(src[start])) start -= 1;
  return REGEX_AFTER_KEYWORD.test(src.slice(start + 1, k + 1));
}

function skipRegexLiteral(src, slashIndex) {
  const n = src.length;
  let i = slashIndex + 1;
  while (i < n) {
    if (src[i] === "\\") {
      i += 2;
      continue;
    }
    if (src[i] === "/") {
      i += 1;
      while (i < n && /[gimsuy]/.test(src[i])) i += 1;
      return i;
    }
    if (src[i] === "\n") return i;
    i += 1;
  }
  return i;
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i);
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

/**
 * `;}(),ident=` is a grouping-paren IIFE that lost `)` (`(function(){...})(),ident=`).
 * Extra `};ident` after a closed function is a leftover `}` at brace depth < 0.
 * Extra `}` in `})(),ident=` at brace < 0 is the same leftover after a pretty-printer
 * already closed the IIFE (`})(),rd=function` on a mega-line fragment).
 * `;}()),ident=` is the same grouping IIFE with the invoke `()` before the
 * leftover close-paren (`(function(){...}()),ident=` → `(function(){...})(),ident=`).
 * Walk skips strings/comments so Comb keys and literals stay intact.
 */
function countBraceRange(src, start, end) {
  let brace = 0;
  let str = null;
  for (let i = start; i < end; i += 1) {
    const c = src[i];
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
    if (c === "{") brace += 1;
    else if (c === "}") brace -= 1;
  }
  return brace;
}

function isAssignmentIife(src, start) {
  let k = start - 1;
  while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
    k -= 1;
  }
  return src[k] === "=";
}

function groupingIifeStillOpen(src, start, end) {
  let paren = 0;
  let brace = 0;
  let str = null;
  let seenFnBrace = false;
  for (let i = start; i < end; i += 1) {
    const c = src[i];
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
    if (c === "(") paren += 1;
    else if (c === ")") {
      paren -= 1;
      if (seenFnBrace && brace <= 0 && paren <= 0) return false;
    } else if (c === "{") {
      brace += 1;
      seenFnBrace = true;
    } else if (c === "}") brace -= 1;
  }
  return seenFnBrace && paren > 0;
}

function prevIifeIndex(window, idx) {
  if (idx <= 0) return -1;
  return window.lastIndexOf("(function", idx - 1);
}

function lastAssignmentIifeStart(src, end) {
  const from = Math.max(0, end - 250000);
  const window = src.slice(from, end);
  let idx = window.lastIndexOf("(function");
  while (idx >= 0) {
    const start = from + idx;
    if (isAssignmentIife(src, start)) return start;
    idx = prevIifeIndex(window, idx);
  }
  return -1;
}

function openIifeStart(src, end) {
  const from = Math.max(0, end - 250000);
  const window = src.slice(from, end);
  let idx = window.lastIndexOf("(function");
  let fallback = -1;
  while (idx >= 0) {
    const start = from + idx;
    if (groupingIifeStillOpen(src, start, end)) {
      if (isAssignmentIife(src, start)) return start;
      if (fallback < 0) fallback = start;
    }
    idx = prevIifeIndex(window, idx);
  }
  return fallback;
}

function braceSinceOpenIife(src, end) {
  const start = openIifeStart(src, end);
  return start < 0 ? 0 : countBraceRange(src, start, end);
}

function iifeCloseAfterOpenIife(iifeBrace, paren, commaNext) {
  const n = Math.max(1, Math.min(iifeBrace, 64));
  return `${"}".repeat(n)}${paren > 0 ? ")" : ""}()${commaNext ? "," : ";"}`;
}

const IIFE_STMT_NEXT = /^(?:for|function|var|let|const|class|export|[A-Za-z_$][\w$]*\s*\()/;

function sliceAssignIife(src, iifeStart, closeAt) {
  let k = iifeStart - 1;
  while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
    k -= 1;
  }
  if (src[k] !== "=") return src.slice(iifeStart, closeAt);
  k -= 1;
  while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
    k -= 1;
  }
  while (k >= 0 && /[A-Za-z0-9_$]/.test(src[k])) k -= 1;
  return src.slice(k + 1, closeAt);
}

function iifeArgClose(n, paren, arg) {
  const k = Math.max(1, Math.min(n, 64));
  return `${"}".repeat(k)}${paren > 0 ? ")" : ""}(${arg})`;
}

function pickIifeCloseCount(src, closeAt, paren, commaNext, minN, invokeArg) {
  const openIife = openIifeStart(src, closeAt);
  const probeStart = openIife >= 0 ? openIife : lastAssignmentIifeStart(src, closeAt);
  const probeBrace = probeStart >= 0 ? countBraceRange(src, probeStart, closeAt) : 0;
  let n = Math.max(1, Math.min(Math.max(minN || 1, probeBrace), 64));
  if (probeStart < 0) return n;
  let parser;
  try {
    parser = loadBabel().parser;
  } catch {
    return n;
  }
  const opts = {
    sourceType: "unambiguous",
    allowReturnOutsideFunction: true,
    allowAwaitOutsideFunction: true,
    errorRecovery: false,
    plugins: ["importAttributes"]
  };
  const heads = [];
  if (closeAt <= 30000 && /^(?:var|let|const)\b/.test(src)) {
    heads.push(src.slice(0, closeAt));
  }
  heads.push(`var x=${sliceAssignIife(src, probeStart, closeAt)}`);
  const tail = commaNext
    ? "Nm=1;"
    : invokeArg
      ? "V(['click'],function(){});"
      : "function _n(){}";
  const closeOf = (k) =>
    invokeArg ? iifeArgClose(k, paren, invokeArg) : iifeCloseAfterOpenIife(k, paren, commaNext);
  const startK = invokeArg ? 1 : n;
  for (const head of heads) {
    for (let k = startK; k <= 8; k += 1) {
      try {
        parser.parse(head + closeOf(k) + tail, opts);
        return k;
      } catch {
        // walker under-counts leftover blocks (B3ED needs }}})(),)
      }
    }
  }
  return n;
}

function iifeCommaReturnAfterIdent(src, afterIdent) {
  if (src.startsWith(";}()),", afterIdent) && /[A-Za-z_$]/.test(src[afterIdent + 6] || "")) {
    return { end: afterIdent + 6, commaNext: true };
  }
  if (
    src.startsWith(";}());", afterIdent) &&
    IIFE_STMT_NEXT.test(src.slice(afterIdent + 6))
  ) {
    return { end: afterIdent + 6, commaNext: false };
  }
  return null;
}

const DEPTH3_INHERIT_COMMA_RETURN = new Set([
  "var_core_value_sigB728",
  "var_core_value_sigDDE3",
  "var_core_value_sigF954",
  "var_core_value_sig705D",
  "var_core_value_sigFE3F",
  "var_core_value_sig8A41",
  "var_core_value_sigB49B",
  "var_core_value_sig4598",
  "var_core_value_sigB268"
]);

function healIifeCommaAndExtraBrace(src, depth = 0) {
  if (
    !src.includes(";}(),") &&
    !src.includes(";}()),") &&
    !src.includes(";}());") &&
    !src.includes(";}(") &&
    !src.includes("};") &&
    !src.includes("})(),")
  ) {
    return src;
  }
  const splices = [];
  walkCode(src, (i, { brace, paren }) => {
    if (src[i] === "}") {
      if (src.startsWith("}(),var_core_value_sig0AE7;}()),FE=", i)) {
        // Unique leftover: PE=function is still open after sig92F8.
        // Keep `}()` so PE invokes, drop only `,0AE7;}())` so FE is
        // a sibling. Dropping `}()` too nests FE through bO/barrel.
        // pickIifeCloseCount turns `;}()),FE=` into `0AE7}}})(),FE=`.
        splices.push({
          start: i + 4,
          end: i + "}(),var_core_value_sig0AE7;}()),".length,
          to: ""
        });
        return;
      }
      let extra = 0;
      while (src[i + extra] === "}") extra += 1;
      if (src[i + extra] === ",") {
        const ident = readIdent(src, i + extra + 1);
        const afterIdent = ident ? i + extra + 1 + ident.length : -1;
        if (ident && src.startsWith(";}(", afterIdent)) {
          const arg = readIdent(src, afterIdent + 3);
          const afterArg = arg ? afterIdent + 3 + arg.length : -1;
          if (
            !arg &&
            extra === 1 &&
            src.startsWith(";}();", afterIdent) &&
            /^function\b/.test(src.slice(afterIdent + 5)) &&
            ident === "var_core_value_sigF138"
          ) {
            // g_=function: regex `;;Ctor.prototype` already closed
            // reset. Replace `},F138;}();` with `}}();` (method + g_).
            let end = afterIdent + 4;
            if (src[end] === ";") end += 1;
            splices.push({
              start: i,
              end,
              to: "}}();"
            });
            return;
          }
          if (
            !arg &&
            extra === 1 &&
            src.startsWith(";}();", afterIdent) &&
            /^function\b/.test(src.slice(afterIdent + 5)) &&
            ident === "var_core_value_sig94CD"
          ) {
            // ST=function: regex `;;Ctor.prototype` already closed
            // getColorFromPalette. Replace `},94CD;}();` with `}}();`
            // (method + ST). Dropping the leftover leaves ST/Tw open
            // through function NT.
            let end = afterIdent + 4;
            if (src[end] === ";") end += 1;
            splices.push({
              start: i,
              end,
              to: "}}();"
            });
            return;
          }
          if (
            !arg &&
            extra === 1 &&
            src.startsWith(";}();", afterIdent) &&
            /^function\b/.test(src.slice(afterIdent + 5)) &&
            ident === "var_core_value_sigA101"
          ) {
            // zT=function: getMediaOption is already closed.
            // Replace `},A101;}();` with `}}();` (method + zT).
            // Dropping the leftover leaves zT open through vE/bO
            // and the barrel export.
            let end = afterIdent + 4;
            if (src[end] === ";") end += 1;
            splices.push({
              start: i,
              end,
              to: "}}();"
            });
            return;
          }
          if (
            arg &&
            src[afterArg] === ")" &&
            extra === 1 &&
            (arg === "Qv" || arg === "av") &&
            src[afterArg + 1] === ";" &&
            /^[A-Za-z_$][\w$]*\.prototype/.test(src.slice(afterArg + 2))
          ) {
            // Path subclasses: regex `;;Ctor.prototype` already closed
            // getDefaultShape/createStyle. Replace `},Ctor;}(Qv|av)`
            // with `}}(arg)` (method + wrapper). pickIifeCloseCount
            // dumps leftover `}`. Pretty-printed A192 is already
            // closed — drop only.
            if (
              ident === "var_core_value_sigFFC9" ||
              DEPTH3_INHERIT_COMMA_RETURN.has(ident)
            ) {
              splices.push({
                start: i,
                end: afterArg + 1,
                to: `}}(${arg})`
              });
              return;
            }
            splices.push({ start: i + extra, end: afterArg + 1, to: "" });
            return;
          }
          if (
            arg &&
            src[afterArg] === ")" &&
            extra === 1 &&
            (arg === "oO" || arg === "U0" || arg === "Qw") &&
            src[afterArg + 1] === "," &&
            /^[A-Za-z_$][\w$]*=/.test(src.slice(afterArg + 2)) &&
            (
              ident === "var_core_value_sig7DD1" ||
              ident === "var_core_value_sig718D" ||
              ident === "var_core_value_sig88B7" ||
              ident === "var_core_value_sig6476" ||
              ident === "var_core_value_sig4346" ||
              ident === "var_core_value_sig2A99"
            )
          ) {
            // Series/marker defaults already closed. Replace
            // `},Ctor;}(arg)` with `}}(arg)` so the inherit
            // wrapper invokes before the comma sibling.
            splices.push({
              start: i,
              end: afterArg + 1,
              to: `}}(${arg})`
            });
            return;
          }
          if (
            arg &&
            src[afterArg] === ")" &&
            extra === 1 &&
            ident === "var_core_value_sig93E2" &&
            arg === "av" &&
            src.startsWith(",Cx=", afterArg + 1)
          ) {
            // Sx=function: regex `;;Ctor.prototype` already closed
            // earlier methods. Replace `},93E2;}(av)` with `}}(av)`
            // so Sx invokes before sibling Cx. Dropping the leftover
            // leaves Sx open through function NT and the barrel.
            splices.push({
              start: i,
              end: afterArg + 1,
              to: "}}(av)"
            });
            return;
          }
          if (
            arg &&
            src[afterArg] === ")" &&
            extra === 1 &&
            ident === "var_core_value_sig5197" &&
            arg === "Qv" &&
            src.startsWith(",dx=", afterArg + 1)
          ) {
            // ux=function: regex `;;Ctor.prototype` already closed
            // _updatePathDirty. Replace `},5197;}(Qv)` with `}}(Qv)`
            // so ux invokes before sibling dx. Dropping the leftover
            // leaves ux open through the barrel export.
            splices.push({
              start: i,
              end: afterArg + 1,
              to: "}}(Qv)"
            });
            return;
          }
          if (
            arg &&
            src[afterArg] === ")" &&
            extra === 1 &&
            ident === "var_core_value_sigFD74" &&
            arg === "av" &&
            src.startsWith(",Joe=", afterArg + 1)
          ) {
            // Unique leftover: makeFont is already closed. Drop
            // `,FD74;}(av)` so Joe stays a sibling assignment.
            splices.push({ start: i + extra, end: afterArg + 1, to: "" });
            return;
          }
          if (
            arg &&
            src[afterArg] === ")" &&
            src[afterArg + 1] === ";" &&
            IIFE_STMT_NEXT.test(src.slice(afterArg + 2))
          ) {
            // Unique leftover: Qv=function still has 3 open braces at
            // getDefaultShape. Close those and invoke with 805A.
            // pickIifeCloseCount dumps `}}}}}}}})(805A)` (Unexpected token).
            if (
              extra === 1 &&
              ident === "var_core_value_sigF9A9" &&
              arg === "var_core_value_sig805A" &&
              /^for\b/.test(src.slice(afterArg + 2))
            ) {
              splices.push({
                start: i,
                end: afterArg + 1,
                to: "}}}(var_core_value_sig805A)"
              });
              return;
            }
            if (
              extra === 1 &&
              /^function\b/.test(src.slice(afterArg + 2)) &&
              (src[i - 1] === ";" || src[i - 1] === '"' || src[i - 1] === "'")
            ) {
              splices.push({ start: i, end: afterArg + 1, to: "}" });
              return;
            }
            const openIife = openIifeStart(src, i);
            const localParen = openIife >= 0 && isAssignmentIife(src, openIife) ? 1 : 0;
            const iifeBrace = braceSinceOpenIife(src, i) || braceSinceLastFunction(src, i);
            const n = pickIifeCloseCount(src, i, localParen, false, iifeBrace, arg);
            splices.push({
              start: i,
              end: afterArg + 1,
              to: iifeArgClose(n, localParen, arg)
            });
            return;
          }
        }
        const tail = ident ? iifeCommaReturnAfterIdent(src, afterIdent) : null;
        if (tail) {
          // `}+,Ctor;}()),next=` / `}+,Ctor;}());function`: drop leftover
          // comma-return, including extra `}` piled before `,Ctor`. Close
          // leftover IIFE blocks, then invoke.
          const iifeBrace = braceSinceOpenIife(src, i) || braceSinceLastFunction(src, i);
          const n = pickIifeCloseCount(src, i, paren, tail.commaNext, iifeBrace);
          splices.push({
            start: i,
            end: tail.end,
            to: iifeCloseAfterOpenIife(n, paren, tail.commaNext)
          });
          return;
        }
      }
    }
    if (src.startsWith("}})(),", i) && /[A-Za-z_$]/.test(src[i + 6] || "")) {
      if (src[i - 1] === ")") {
        return;
      }
      const iifeBrace = braceSinceOpenIife(src, i) || braceSinceLastFunction(src, i);
      const n = pickIifeCloseCount(src, i, paren, true, Math.max(iifeBrace, 2));
      if (n > 2) {
        splices.push({
          start: i,
          end: i + 6,
          to: iifeCloseAfterOpenIife(n, paren, true)
        });
        return;
      }
    }
    if (src.startsWith("})(),", i) && /[A-Za-z_$]/.test(src[i + 5] || "")) {
      const ident = readIdent(src, i + 5);
      const afterIdent = ident ? i + 5 + ident.length : -1;
      if (ident && src[afterIdent] === "=" && src[afterIdent + 1] !== ">") {
        // Extra-paren after a completed call: `foo(a,b);}()),next=` → `foo(a,b)})(),next=`.
        // That residue is already an IIFE invoke. Expanding dumps leftover `}` (lX).
        // Constructor comma-return `Ctor;}()),Nm=` still expands (prev is an ident).
        if (src[i - 1] === ")") {
          return;
        }
        // Extra-paren n=2 after a completed call: `foo)}})(),ident=function`.
        // The inner `})(),` must not probe n — that dumps a third `}` (lX).
        if (src[i - 1] === "}" && src[i - 2] === ")") {
          return;
        }
        const n = pickIifeCloseCount(src, i, paren, true, 1);
        if (n > 1) {
          splices.push({
            start: i,
            end: i + 4,
            to: iifeCloseAfterOpenIife(n, paren, true).replace(/,$/, "")
          });
          return;
        }
      }
    }
    if (
      src.startsWith("}})();", i) &&
      IIFE_STMT_NEXT.test(src.slice(i + 6))
    ) {
      const iifeBrace = braceSinceOpenIife(src, i) || braceSinceLastFunction(src, i);
      const n = pickIifeCloseCount(src, i, paren, false, Math.max(iifeBrace, 2));
      if (n > 2) {
        splices.push({
          start: i,
          end: i + 6,
          to: iifeCloseAfterOpenIife(n, paren, false)
        });
        return;
      }
    }
    if (src.startsWith(";}()),", i) && /[A-Za-z_$]/.test(src[i + 6] || "")) {
      const inheritIdent = readIdent(src, i + 6);
      const afterInherit = inheritIdent ? i + 6 + inheritIdent.length : -1;
      if (inheritIdent && src.startsWith(";}(", afterInherit)) {
        const arg = readIdent(src, afterInherit + 3);
        const afterArg = arg ? afterInherit + 3 + arg.length : -1;
        if (arg && src[afterArg] === ")") {
          if (
            inheritIdent === "ox5f4c14" &&
            arg === "Qw" &&
            src.startsWith(";su(oO,JE)", afterArg + 1)
          ) {
            // Unique leftover: protoInitialize=(function is still
            // open after the 3129 assignment. Keep `})();` and drop
            // `,ox5f4c14;}(Qw)` so sO is a sibling. Dropping `})()`
            // nests sO through bO and the barrel export.
            splices.push({
              start: i,
              end: afterArg + 2,
              to: "})();"
            });
            return;
          }
          splices.push({ start: i, end: afterArg + 1, to: "" });
          return;
        }
      }
      if (
        inheritIdent &&
        src[i - 1] === ")" &&
        src[afterInherit] === "=" &&
        src.startsWith("function", afterInherit + 1)
      ) {
        splices.push({ start: i, end: i + 6, to: ";" });
        return;
      }
    }
    if (
      paren > 0 &&
      src.startsWith(";}()),", i) &&
      /[A-Za-z_$]/.test(src[i + 6] || "")
    ) {
      const ident = identEndsBefore(src, i);
      if (ident && src[ident.start - 1] === "," && src[ident.start - 2] === "}") {
        return;
      }
      // `foo(a,b);}()),ident=function` is a completed call plus leftover extra-paren.
      // Emit `})()` only (n=1). A second `}` over-closes the engine-chart mega-line (lX).
      splices.push({ start: i, end: i + 5, to: "})()" });
      return;
    }
    if (
      paren > 0 &&
      src.startsWith(";}());", i) &&
      IIFE_STMT_NEXT.test(src.slice(i + 6))
    ) {
      const ident = identEndsBefore(src, i);
      if (ident && src[ident.start - 1] === "," && src[ident.start - 2] === "}") {
        return;
      }
      if (ident && src[ident.start - 1] === ",") {
        if (ident.start >= 5 && src.startsWith("})()", ident.start - 5)) {
          return;
        }
        const openIife = openIifeStart(src, i);
        const localParen = openIife >= 0 && isAssignmentIife(src, openIife) ? 1 : 0;
        const iifeBrace = braceSinceOpenIife(src, i) || braceSinceLastFunction(src, i);
        const closeAt = ident.start - 1;
        const n = pickIifeCloseCount(src, closeAt, localParen, false, iifeBrace);
        splices.push({
          start: closeAt,
          end: i + 6,
          to: iifeCloseAfterOpenIife(n, localParen, false)
        });
        return;
      }
      splices.push({ start: i, end: i + 5, to: "})()" });
      return;
    }
    if (
      paren > 0 &&
      src[i] === ";" &&
      src[i + 1] === "}" &&
      src[i + 2] === "(" &&
      src[i + 3] === ")" &&
      src[i + 4] === "," &&
      /[A-Za-z_$]/.test(src[i + 5] || "")
    ) {
      splices.push({ start: i, end: i + 2, to: "})" });
      return;
    }
    if (src.startsWith("})(),", i) && /[A-Za-z_$]/.test(src[i + 5] || "")) {
      const ident = readIdent(src, i + 5);
      const afterIdent = ident ? i + 5 + ident.length : -1;
      if (
        ident &&
        (src.startsWith("})();", afterIdent) || src.startsWith("})(),", afterIdent)) &&
        (src.startsWith("})(),", afterIdent)
          ? /[A-Za-z_$]/.test(src[afterIdent + 5] || "")
          : IIFE_STMT_NEXT.test(src.slice(afterIdent + 5)))
      ) {
        let k = i - 1;
        while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
          k -= 1;
        }
        const afterClosedFn = src[k] === ";" && src[k - 1] === "}";
        const extraClose = brace < 0 || afterClosedFn;
        splices.push({
          start: extraClose ? i : i + 4,
          end: extraClose ? afterIdent + 5 : afterIdent + 4,
          to: ""
        });
        return;
      }
      if (
        ident &&
        src.startsWith(";}());", afterIdent) &&
        IIFE_STMT_NEXT.test(src.slice(afterIdent + 6))
      ) {
        // Unique leftover: Rv `=(function(){` is still open after
        // E03B.initDefaultProps. Keep `})()` and drop only the
        // leftover `,var_…E03B;}())` before sibling `function zv`.
        // Dropping `})()` too nests zv through the barrel export.
        if (
          ident === "var_core_value_sigE03B" &&
          /^function zv\b/.test(src.slice(afterIdent + 6))
        ) {
          splices.push({
            start: i + 4,
            end: afterIdent + 6,
            to: ";"
          });
          return;
        }
        if (
          ident === "var_core_value_sigC0A6" &&
          /^function bO\b/.test(src.slice(afterIdent + 6))
        ) {
          // Unique leftover: yO=(function is still open after
          // protoInitialize `};` and the 268B heal. Keep `})()` and
          // drop only `,C0A6;}())` before sibling `function bO`.
          // Dropping `})()` nests bO through the barrel export.
          splices.push({
            start: i + 4,
            end: afterIdent + 6,
            to: ";"
          });
          return;
        }
        let k = i - 1;
        while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
          k -= 1;
        }
        const afterClosedFn = src[k] === ";" && src[k - 1] === "}";
        const extraClose = brace < 0 || afterClosedFn;
        splices.push({
          start: extraClose ? i : i + 4,
          end: afterIdent + 6,
          to: ""
        });
        return;
      }
      if (
        ident === "var_core_value_sigB7BE" &&
        src.startsWith(";}()),AD=", afterIdent)
      ) {
        splices.push({
          start: i + 4,
          end: afterIdent + 6,
          to: ";"
        });
        return;
      }
      if (ident && src.startsWith(";}(", afterIdent)) {
        const arg = readIdent(src, afterIdent + 3);
        const afterArg = arg ? afterIdent + 3 + arg.length : -1;
        if (arg && src[afterArg] === ")") {
          // Unique leftover: Qv initDefaultProps is still open at
          // `__dirty=7})(),var_…805A;}(av),Boe=`. Close the method and
          // keep `}(av)` so Boe/$v are siblings. Dropping `})()` too
          // nests Boe inside initDefaultProps through function bO.
          if (
            ident === "var_core_value_sigB431" &&
            arg === "rC" &&
            src.startsWith(";function NT", afterArg + 1)
          ) {
            // Unique leftover: Tw=(function is still open at depth
            // brace 3 / paren 1 after ST/OT/kT pretty-print. Keep
            // the IIFE invoke and close the remaining wrappers
            // before sibling `function NT`. A single `})();` leaves
            // two braces open and surfaces Missing semicolon at NT.
            splices.push({
              start: i,
              end: afterArg + 2,
              to: "}}})();"
            });
            return;
          }
          if (
            ident === "var_core_value_sigDDC8" &&
            arg === "av" &&
            src.startsWith(";$v.prototype", afterArg + 1)
          ) {
            // Unique leftover: $v inherit is `$v=function(parent){R(...);...`.
            // Keep `}(av)` so the wrapper invokes. Keeping `})();` is a
            // grouping close that does not match this assignment.
            splices.push({
              start: i,
              end: afterArg + 1,
              to: "}(av)"
            });
            return;
          }
          if (
            ident === "var_core_value_sig805A" &&
            arg === "av" &&
            src.startsWith(",Boe=", afterArg + 1)
          ) {
            splices.push({
              start: i,
              end: afterArg + 1,
              to: ";}(av)"
            });
            return;
          }
          // `})(),ident;}(arg)` leftover comma-return + extra invoke.
          // After `};` the IIFE is already closed — drop `})()` too.
          let k = i - 1;
          while (k >= 0 && (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r")) {
            k -= 1;
          }
          const afterClosedFn = src[k] === ";" && src[k - 1] === "}";
          const precededByLiteral = /[0-9"'`]/.test(src[i - 1] || "");
          const precededByCall = src[i - 1] === ")";
          const extraClose = brace < 0 || afterClosedFn || precededByLiteral || precededByCall;
          let end = afterArg + 1;
          if (extraClose && src[end] === "," && !precededByLiteral && !precededByCall) end += 1;
          splices.push({
            start: extraClose ? i : i + 4,
            end,
            to: ""
          });
          return;
        }
      }
    }
    if (
      brace < 0 &&
      src.startsWith("})(),", i) &&
      /[A-Za-z_$]/.test(src[i + 5] || "")
    ) {
      splices.push({ start: i, end: i + 1, to: "" });
      return;
    }
    if (src[i] !== "}" || brace >= 0 || src[i + 1] !== ";") return;
    let k = i + 2;
    while (src[k] === " " || src[k] === "\t" || src[k] === "\n" || src[k] === "\r") k += 1;
    if (/[A-Za-z_$]/.test(src[k] || "")) splices.push({ start: i, end: i + 1, to: "" });
  });
  if (splices.length === 0) return src;
  splices.sort((a, b) => a.start - b.start);
  const job = splices[0];
  if (job.to === src.slice(job.start, job.end)) return src;
  const out = `${src.slice(0, job.start)}${job.to}${src.slice(job.end)}`;
  if (out === src) return src;
  if (depth >= 511) return out;
  return healIifeCommaAndExtraBrace(out, depth + 1);
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
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

function skipWs(src, i) {
  while (src[i] === " " || src[i] === "\t" || src[i] === "\n" || src[i] === "\r") i += 1;
  return i;
}

function matchCompleteClass(src, start) {
  if (!isKeywordAt(src, start, "class")) return null;
  let i = skipWs(src, start + 5);
  if (isIdentChar(src[i]) && !isKeywordAt(src, i, "extends")) {
    i += 1;
    while (isIdentChar(src[i])) i += 1;
    i = skipWs(src, i);
  }
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
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

function scanCompleteClasses(src) {
  const out = [];
  walkCode(src, (i) => {
    if (!isKeywordAt(src, i, "class")) return;
    const found = matchCompleteClass(src, i);
    if (found && (out.length === 0 || out[out.length - 1].start !== found.start)) {
      out.push(found);
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
  const healedTrim = healed.trimStart();
  if (/^(?:async\s+)?function\s*\*?\s*\(/.test(trimmed)) {
    variants.push(`(${src});`);
    if (healed !== src) variants.push(`(${healed});`);
  }
  if (/^class\s+(?:extends\b|\{)/.test(trimmed)) {
    variants.push(`let __c=${src};`);
  }
  if (healed !== src && /^class\s+(?:extends\b|\{)/.test(healedTrim)) {
    variants.push(`let __c=${healed};`);
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

function hexFunctionDeclName(src) {
  const t = src.trimStart();
  const m = /^(?:async\s+)?function\s*\*?\s*(_0x[0-9a-f]+)/i.exec(t);
  return m ? m[1] : null;
}

function functionDeclName(src) {
  const t = src.trimStart();
  const m = /^(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)/.exec(t);
  return m ? m[1] : null;
}

function rewriteHexIdents(src, from, to) {
  if (!from || !to || from === to) return src;
  const spans = scanHexIdentSpans(src).filter((s) => s.name === from);
  if (spans.length === 0) return src;
  let out = src;
  for (const span of [...spans].sort((a, b) => b.start - a.start)) {
    out = `${out.slice(0, span.start)}${to}${out.slice(span.end)}`;
  }
  return out;
}

function tryRenameIsolatedFunction(src, counter) {
  if (countTokens(src) === 0) return { src, renamed: 0, changed: false };
  const parsed = tryParseVariants(src);
  if (!parsed.ast) return { error: true, src, renamed: 0 };
  const { traverse, generate } = loadBabel();
  const abort = findAbortReason(parsed.ast, traverse);
  if (abort) return { aborted: true, reason: abort, src, renamed: 0 };
  const renamed =
    renameHexBindings(parsed.ast, traverse, counter) + renameHexLabels(parsed.ast, traverse);
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
    const oldName = hexFunctionDeclName(piece);
    const inner = processFunctionsIn(piece, counter, false);
    renamed += inner.renamed;
    const renamedPiece = tryRenameIsolatedFunction(inner.src, counter);
    if (renamedPiece.aborted) continue;
    const nextPiece = renamedPiece.error ? inner.src : renamedPiece.src;
    renamed += renamedPiece.renamed ?? 0;
    result = result.slice(0, f.start) + nextPiece + result.slice(f.end);
    if (oldName && nextPiece) {
      const newName = functionDeclName(nextPiece);
      if (newName && newName !== oldName) result = rewriteHexIdents(result, oldName, newName);
    }
  }
  return { src: result, renamed, changed: result !== src };
}

function collectBodyStatementCuts(src, openBrace, maxEnd) {
  const cuts = [];
  let i = openBrace;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let str = null;
  const tmplExpr = [];
  let started = false;
  const n = Math.min(src.length, maxEnd);
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
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
        if (brace === 0) return cuts;
      }
    } else if (c === ";" && started && brace === 1 && paren === 0 && bracket === 0) {
      cuts.push(i + 1);
    }
  }
  return cuts;
}

function longestParseableHexFunctionPrefix(src, start) {
  const open = src.indexOf("{", start);
  if (open < 0) return null;
  const id = hexFunctionDeclName(src.slice(start));
  if (!id) return null;
  const maxEnd = Math.min(src.length, open + 1 + 80_000);
  const cuts = collectBodyStatementCuts(src, open, maxEnd);
  if (cuts.length === 0) return null;
  let best = 0;
  let tries = 0;
  const MAX_TRIES = 120;
  for (const cut of cuts) {
    if (tries >= MAX_TRIES) break;
    tries += 1;
    const wrapped = `${src.slice(start, cut)}}`;
    const parsed = tryParseVariants(wrapped);
    if (parsed.ast) best = cut;
  }
  if (best === 0) return null;
  return { start, cut: best, wrapped: `${src.slice(start, best)}}`, id };
}

function processUnclosedHexFunctions(src, counter) {
  const starts = [];
  walkCode(src, (i) => {
    if (isKeywordAt(src, i, "async")) {
      let j = skipWs(src, i + 5);
      if (!isKeywordAt(src, j, "function")) return;
    } else if (!isKeywordAt(src, i, "function")) return;
    const id = hexFunctionDeclName(src.slice(i));
    if (!id) return;
    const complete = matchCompleteFunction(src, i);
    if (complete) {
      const piece = src.slice(complete.start, complete.end);
      if (tryParseVariants(piece).ast) return;
    }
    if (starts[starts.length - 1] !== i) starts.push(i);
  });
  let result = src;
  let renamed = 0;
  for (const start of [...starts].sort((a, b) => b - a)) {
    const prefix = longestParseableHexFunctionPrefix(result, start);
    if (!prefix) continue;
    const renamedPiece = tryRenameIsolatedFunction(prefix.wrapped, counter);
    if (renamedPiece.aborted || renamedPiece.error || !(renamedPiece.renamed > 0)) continue;
    const generated = renamedPiece.src.trimEnd().replace(/;+$/, "");
    const stripped = generated.endsWith("}") ? generated.slice(0, -1) : generated;
    result = result.slice(0, prefix.start) + stripped + result.slice(prefix.cut);
    renamed += renamedPiece.renamed;
    const newName = functionDeclName(stripped);
    if (prefix.id && newName && newName !== prefix.id) {
      result = rewriteHexIdents(result, prefix.id, newName);
    }
  }
  return { src: result, renamed, changed: result !== src };
}

function skipProgramClassIds(ast) {
  const skipNames = new Set();
  for (const node of ast.program.body) {
    if (node.type === "ClassDeclaration" && node.id && HEX_IDENT.test(node.id.name)) {
      skipNames.add(node.id.name);
    }
    if (node.type === "VariableDeclaration") {
      for (const d of node.declarations) {
        if (d.id?.type === "Identifier" && d.id.name === "__c") continue;
      }
    }
  }
  return skipNames;
}

function tryRenameIsolatedClass(src, counter) {
  if (countTokens(src) === 0) return { src, renamed: 0, changed: false };
  const parsed = tryParseVariants(src);
  if (!parsed.ast) return { error: true, src, renamed: 0 };
  const { traverse, generate } = loadBabel();
  const abort = findAbortReason(parsed.ast, traverse);
  if (abort) return { aborted: true, reason: abort, src, renamed: 0 };
  const skipNames = skipProgramClassIds(parsed.ast);
  const renamed =
    renameHexBindings(parsed.ast, traverse, counter, skipNames) + renameHexLabels(parsed.ast, traverse);
  if (renamed === 0) return { src, renamed: 0, changed: false };
  const body = parsed.ast.program.body;
  let next;
  if (parsed.src.startsWith("let __c=") && body[0]?.type === "VariableDeclaration") {
    const init = body[0].declarations[0]?.init;
    next = init ? generate(init, GEN_OPTS).code : generateNodes(body);
  } else if (parsed.wrapped && body[0]?.type === "ExpressionStatement") {
    next = generate(body[0].expression, GEN_OPTS).code;
  } else {
    next = generateNodes(body);
  }
  return { src: next, renamed, changed: next !== src, aborted: false };
}

function processClassesIn(src, counter, includeTop) {
  const classes = scanCompleteClasses(src);
  const candidates = includeTop
    ? classes
    : classes.filter((f) => !(f.start === 0 && f.end === src.length));
  const tops = candidates.filter(
    (f) => !candidates.some((o) => o.start < f.start && o.end > f.end)
  );
  let result = src;
  let renamed = 0;
  for (const f of [...tops].sort((a, b) => b.start - a.start)) {
    const piece = result.slice(f.start, f.end);
    const innerFns = processFunctionsIn(piece, counter, true);
    renamed += innerFns.renamed;
    const innerCls = processClassesIn(innerFns.src, counter, false);
    renamed += innerCls.renamed;
    const renamedPiece = tryRenameIsolatedClass(innerCls.src, counter);
    if (renamedPiece.aborted) continue;
    const nextPiece = renamedPiece.error ? innerCls.src : renamedPiece.src;
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
  const patterns = [";export{", ";export {", "}export{", "}export {"];
  let at = -1;
  for (const p of patterns) {
    const i = src.lastIndexOf(p);
    if (i > at) at = i;
  }
  if (at < 0) return null;
  const prefix = src.slice(0, at + 1);
  const tail = src.slice(at + 1);
  if (!prefix.trim() || !tail.trim()) return null;
  return [prefix, tail];
}

function splitAtInnerModuleSlice(src) {
  let lastExport = -1;
  let firstInner = -1;
  walkCode(src, (i, depth) => {
    const isExport = isKeywordAt(src, i, "export");
    const isImport = isKeywordAt(src, i, "import");
    if (!isExport && !isImport) return;
    const nested = depth.brace !== 0 || depth.paren !== 0 || depth.bracket !== 0;
    if (nested && firstInner < 0) firstInner = i;
    if (isExport) lastExport = i;
  });
  const cut = firstInner > 0 ? firstInner : lastExport;
  if (cut <= 0) return null;
  const prefix = src.slice(0, cut);
  const suffix = src.slice(cut);
  if (!prefix.trim() || !suffix.trim()) return null;
  if (!/^\s*(?:export|import)\b/.test(suffix)) return null;
  if (countTokens(prefix) === 0 && !prefix.includes("else{")) return null;
  return [prefix, suffix];
}

function scanHexIdentSpans(src) {
  const spans = [];
  walkCode(src, (i) => {
    if (src[i] !== "_" || src[i + 1] !== "0" || (src[i + 2] !== "x" && src[i + 2] !== "X")) return;
    if (isIdentChar(src[i - 1])) return;
    let j = i + 3;
    while (j < src.length && /[0-9a-fA-F]/.test(src[j])) j += 1;
    if (j === i + 3) return;
    if (isIdentChar(src[j])) return;
    const name = src.slice(i, j);
    if (!HEX_IDENT.test(name)) return;
    spans.push({ start: i, end: j, name });
  });
  return spans;
}

function collectBoundHexNames(src) {
  const names = new Set();
  walkCode(src, (i) => {
    if (isKeywordAt(src, i, "function")) {
      let j = skipWs(src, i + 8);
      if (src[j] === "*") j = skipWs(src, j + 1);
      const id = readIdent(src, j);
      if (id && HEX_IDENT.test(id)) names.add(id);
      return;
    }
    if (isKeywordAt(src, i, "class")) {
      let j = skipWs(src, i + 5);
      if (isKeywordAt(src, j, "extends")) return;
      const id = readIdent(src, j);
      if (id && HEX_IDENT.test(id)) names.add(id);
      return;
    }
    if (isKeywordAt(src, i, "const") || isKeywordAt(src, i, "let") || isKeywordAt(src, i, "var")) {
      const kwLen = src.startsWith("const", i) ? 5 : 3;
      collectDeclaratorHexNames(src, skipWs(src, i + kwLen), names);
      return;
    }
    if (isKeywordAt(src, i, "import")) {
      collectImportLocalHexNames(src, i, names);
      return;
    }
    if (isKeywordAt(src, i, "catch")) {
      let j = skipWs(src, i + 5);
      if (src[j] === "(") {
        const id = readIdent(src, skipWs(src, j + 1));
        if (id && HEX_IDENT.test(id)) names.add(id);
      }
    }
  });
  return names;
}

function collectDeclaratorHexNames(src, start, names) {
  let i = start;
  let depth = 0;
  let str = null;
  let afterEq = false;
  const n = src.length;
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
    if (c === "'" || c === '"' || c === "`") {
      str = c;
      i += 1;
      continue;
    }
    if (c === "(" || c === "{" || c === "[") {
      depth += 1;
      i += 1;
      continue;
    }
    if (c === ")" || c === "}" || c === "]") {
      if (depth === 0) break;
      depth -= 1;
      i += 1;
      continue;
    }
    if (depth === 0 && (c === ";" || (c === "\n" && afterEq))) break;
    if (depth === 0 && !afterEq && (isKeywordAt(src, i, "of") || isKeywordAt(src, i, "in"))) break;
    if (depth === 0 && c === ",") {
      afterEq = false;
      i += 1;
      continue;
    }
    if (depth === 0 && c === "=") {
      afterEq = true;
      i += 1;
      continue;
    }
    if (!afterEq && depth === 0 && isIdentChar(src[i]) && !isIdentChar(src[i - 1])) {
      const id = readIdent(src, i);
      if (id && HEX_IDENT.test(id)) names.add(id);
      i += id ? id.length : 1;
      continue;
    }
    i += 1;
  }
}

function collectImportLocalHexNames(src, start, names) {
  const fromAt = src.indexOf("from", start);
  const slice = src.slice(start, fromAt > start ? fromAt : start + 200);
  for (const m of slice.matchAll(/\bas\s+(_0x[0-9a-f]+)\b/gi)) names.add(m[1]);
  const def = slice.match(/^import\s+(_0x[0-9a-f]+)\b/i);
  if (def) names.add(def[1]);
  const star = slice.match(/\*\s+as\s+(_0x[0-9a-f]+)\b/i);
  if (star) names.add(star[1]);
}

function isExportAsPublicSpan(src, span) {
  let k = span.start - 1;
  while (k >= 0 && /\s/.test(src[k])) k -= 1;
  if (k < 1) return false;
  if (src.slice(k - 1, k + 1) === "as" && isKeywordAt(src, k - 1, "as")) return true;
  return k >= 1 && src[k - 1] === "a" && src[k] === "s" && isKeywordAt(src, k - 1, "as");
}

function hasBareHexExport(src) {
  let abort = false;
  walkCode(src, (i) => {
    if (abort || !isKeywordAt(src, i, "export")) return;
    let j = skipWs(src, i + 6);
    if (src[j] !== "{") return;
    j = skipWs(src, j + 1);
    while (j < src.length && src[j] !== "}") {
      const id = readIdent(src, j);
      if (!id) {
        j += 1;
        continue;
      }
      j = skipWs(src, j + id.length);
      if (HEX_IDENT.test(id) && !isKeywordAt(src, j, "as")) {
        abort = true;
        return;
      }
      if (isKeywordAt(src, j, "as")) {
        j = skipWs(src, j + 2);
        const exported = readIdent(src, j);
        j = skipWs(src, j + (exported?.length ?? 0));
      }
      if (src[j] === ",") j = skipWs(src, j + 1);
      else break;
    }
  });
  return abort;
}

function allocUnboundName(old, src, used) {
  const hex = old.replace(/^_0x/i, "");
  let candidate = `ox${hex}`;
  let n = 0;
  while (used.has(candidate) || identExistsInCode(src, candidate)) {
    n += 1;
    candidate = `ox${hex}_${n}`;
  }
  used.add(candidate);
  return candidate;
}

function identExistsInCode(src, name) {
  let found = false;
  walkCode(src, (i) => {
    if (found) return;
    if (src.startsWith(name, i) && !isIdentChar(src[i - 1]) && !isIdentChar(src[i + name.length])) {
      found = true;
    }
  });
  return found;
}

function isCtorProtoOrCallUse(src, span) {
  let k = span.start - 1;
  while (k >= 0 && /\s/.test(src[k])) k -= 1;
  if (k >= 2 && isKeywordAt(src, k - 2, "new")) return true;
  const after = skipWs(src, span.end);
  if (src[after] !== ".") return false;
  const prop = readIdent(src, skipWs(src, after + 1));
  return prop === "prototype" || prop === "call" || prop === "apply";
}

export function renameUnboundHexIdents(src) {
  const spans = scanHexIdentSpans(src);
  if (spans.length === 0) return { src, renamed: 0, changed: false };
  const bound = collectBoundHexNames(src);
  const ctorProtoNames = new Set();
  for (const span of spans) {
    if (isCtorProtoOrCallUse(src, span)) ctorProtoNames.add(span.name);
  }
  const map = new Map();
  const used = new Set();
  for (const span of spans) {
    if (bound.has(span.name) && !ctorProtoNames.has(span.name)) continue;
    if (isExportAsPublicSpan(src, span)) continue;
    if (!map.has(span.name)) map.set(span.name, allocUnboundName(span.name, src, used));
  }
  if (map.size === 0) return { src, renamed: 0, changed: false };
  let out = src;
  for (const span of [...spans].sort((a, b) => b.start - a.start)) {
    const next = map.get(span.name);
    if (!next) continue;
    out = out.slice(0, span.start) + next + out.slice(span.end);
  }
  return { src: out, renamed: map.size, changed: out !== src };
}

function matchBalancedBrace(src, openIndex) {
  if (src[openIndex] !== "{") return null;
  let brace = 0;
  let paren = 0;
  let bracket = 0;
  let str = null;
  const tmplExpr = [];
  const n = src.length;
  for (let i = openIndex; i < n; i += 1) {
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
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
        continue;
      }
      if (brace === 0 && paren === 0 && bracket === 0) return { start: openIndex, end: i + 1 };
    }
  }
  return null;
}

function matchCompleteFor(src, start) {
  if (!isKeywordAt(src, start, "for")) return null;
  let i = skipWs(src, start + 3);
  if (isKeywordAt(src, i, "await")) i = skipWs(src, i + 5);
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
      continue;
    }
    if (c === "(") paren += 1;
    else if (c === ")") {
      paren -= 1;
      if (!started && paren === 0 && brace === 0 && bracket === 0) {
        let j = skipWs(src, i + 1);
        if (src[j] !== "{") return { start, end: j };
        started = true;
        i = j;
        brace = 1;
        continue;
      }
    } else if (c === "[") bracket += 1;
    else if (c === "]") bracket -= 1;
    else if (c === "{") {
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

const CONCISE_METHOD_SKIP = new Set([
  "if",
  "for",
  "while",
  "switch",
  "catch",
  "function",
  "class",
  "return",
  "switch",
  "with",
  "do",
  "else",
  "try",
  "finally",
  "typeof",
  "void",
  "delete",
  "new",
  "await",
  "yield",
  "case",
  "throw",
  "in",
  "of",
  "instanceof",
  "async"
]);

function matchConciseMethod(src, start) {
  const id = readIdent(src, start);
  if (!id || CONCISE_METHOD_SKIP.has(id)) return null;
  let i = skipWs(src, start + id.length);
  if (isKeywordAt(src, start, "async")) {
    const next = readIdent(src, i);
    if (!next || CONCISE_METHOD_SKIP.has(next) || next === "function") return null;
    i = skipWs(src, i + next.length);
  }
  if (src[i] !== "(") return null;
  const found = matchCompleteFunction(src, start);
  if (found) return null;
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
      continue;
    }
    if (c === "(") paren += 1;
    else if (c === ")") {
      paren -= 1;
    } else if (c === "[") bracket += 1;
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

function scanCompleteFors(src) {
  const out = [];
  walkCode(src, (i) => {
    if (!isKeywordAt(src, i, "for")) return;
    const found = matchCompleteFor(src, i);
    if (found && (out.length === 0 || out[out.length - 1].start !== found.start)) out.push(found);
  });
  return out;
}

function scanConciseMethods(src) {
  const out = [];
  walkCode(src, (i) => {
    if (!isIdentChar(src[i]) || isIdentChar(src[i - 1])) return;
    const found = matchConciseMethod(src, i);
    if (found && (out.length === 0 || out[out.length - 1].start !== found.start)) out.push(found);
  });
  return out;
}

function scanObjectLiterals(src) {
  const out = [];
  walkCode(src, (i) => {
    if (src[i] !== "{") return;
    const found = matchBalancedBrace(src, i);
    if (!found || found.end - found.start < 8) return;
    if (out.length && out[out.length - 1].start === found.start) return;
    out.push(found);
  });
  return out;
}

function tryRenameObjectLiteral(src, counter) {
  if (countTokens(src) === 0) return { src, renamed: 0, changed: false };
  const wrapped = `(${src});`;
  const parsed = parseMaybeHealed(wrapped);
  if (!parsed.ast) return { error: true, src, renamed: 0 };
  const result = emitRenamed(parsed.src, parsed.ast, counter);
  if (result.aborted) return result;
  if (!result.renamed) return { src, renamed: 0, changed: false };
  try {
    const ast2 = parseSource(result.src);
    const stmt = ast2.program.body[0];
    if (!stmt || stmt.type !== "ExpressionStatement") return { error: true, src, renamed: 0 };
    const { generate } = loadBabel();
    return { src: generate(stmt.expression, GEN_OPTS).code, renamed: result.renamed, changed: true, aborted: false };
  } catch {
    return { error: true, src, renamed: 0 };
  }
}

function processWindows(src, counter, scan, renamePiece, includeTop) {
  let result = src;
  let renamed = 0;
  for (let round = 0; round < 12; round += 1) {
    const found = scan(result);
    const candidates = includeTop ? found : found.filter((f) => !(f.start === 0 && f.end === result.length));
    const bounded = candidates.filter((f) => f.end - f.start < 80_000);
    const leaves = bounded.filter((f) => !bounded.some((o) => o.start > f.start && o.end < f.end));
    if (leaves.length === 0) break;
    let progress = false;
    for (const f of [...leaves].sort((a, b) => b.start - a.start)) {
      const piece = result.slice(f.start, f.end);
      const renamedPiece = renamePiece(piece, counter);
      if (renamedPiece.aborted) continue;
      if (renamedPiece.error || !(renamedPiece.renamed > 0)) continue;
      renamed += renamedPiece.renamed ?? 0;
      result = result.slice(0, f.start) + renamedPiece.src + result.slice(f.end);
      progress = true;
    }
    if (!progress) break;
  }
  return { src: result, renamed, changed: result !== src };
}

function matchCompleteVarStatement(src, start) {
  if (!(isKeywordAt(src, start, "var") || isKeywordAt(src, start, "let") || isKeywordAt(src, start, "const"))) {
    return null;
  }
  let i = start;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  let str = null;
  const tmplExpr = [];
  const n = Math.min(src.length, start + 8_000);
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
    if (c === "/" && canStartRegex(src, i)) {
      i = skipRegexLiteral(src, i) - 1;
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
        continue;
      }
      if (brace < 0) return null;
    } else if (c === ";" && paren === 0 && brace === 0 && bracket === 0) {
      return { start, end: i + 1 };
    }
  }
  return null;
}

function scanHexVarStatements(src) {
  const out = [];
  walkCode(src, (i) => {
    if (!(isKeywordAt(src, i, "var") || isKeywordAt(src, i, "let") || isKeywordAt(src, i, "const"))) return;
    const found = matchCompleteVarStatement(src, i);
    if (!found) return;
    if (countTokens(src.slice(found.start, found.end)) === 0) return;
    if (out.length === 0 || out[out.length - 1].start !== found.start) out.push(found);
  });
  return out;
}

function declaratorIds(stmt) {
  const names = [];
  let i = 0;
  if (isKeywordAt(stmt, 0, "const")) i = skipWs(stmt, 5);
  else if (isKeywordAt(stmt, 0, "let") || isKeywordAt(stmt, 0, "var")) i = skipWs(stmt, 3);
  else return names;
  let depth = 0;
  let str = null;
  let afterEq = false;
  while (i < stmt.length) {
    const c = stmt[i];
    if (str) {
      if (c === "\\") {
        i += 2;
        continue;
      }
      if (c === str) str = null;
      i += 1;
      continue;
    }
    if (c === "'" || c === '"' || c === "`") {
      str = c;
      i += 1;
      continue;
    }
    if (c === "(" || c === "{" || c === "[") {
      depth += 1;
      i += 1;
      continue;
    }
    if (c === ")" || c === "}" || c === "]") {
      if (depth === 0) break;
      depth -= 1;
      i += 1;
      continue;
    }
    if (depth === 0 && (c === ";" || isKeywordAt(stmt, i, "of") || isKeywordAt(stmt, i, "in"))) break;
    if (depth === 0 && c === ",") {
      afterEq = false;
      i += 1;
      continue;
    }
    if (depth === 0 && c === "=") {
      afterEq = true;
      i += 1;
      continue;
    }
    if (!afterEq && depth === 0 && isIdentChar(stmt[i]) && !isIdentChar(stmt[i - 1])) {
      const id = readIdent(stmt, i);
      if (id) {
        names.push(id);
        i += id.length;
        continue;
      }
    }
    i += 1;
  }
  return names;
}

function processHexVarStatements(src, counter) {
  const found = scanHexVarStatements(src);
  let result = src;
  let renamed = 0;
  for (const f of [...found].sort((a, b) => b.start - a.start)) {
    const piece = result.slice(f.start, f.end);
    const oldIds = declaratorIds(piece).filter((n) => HEX_IDENT.test(n));
    if (oldIds.length === 0) continue;
    const renamedPiece = tryRenameWrappedFragment(piece, counter);
    if (renamedPiece.aborted || renamedPiece.error || !(renamedPiece.renamed > 0)) continue;
    result = result.slice(0, f.start) + renamedPiece.src + result.slice(f.end);
    renamed += renamedPiece.renamed;
    const newIds = declaratorIds(renamedPiece.src);
    if (oldIds.length === newIds.length) {
      for (let k = 0; k < oldIds.length; k += 1) {
        if (oldIds[k] !== newIds[k]) result = rewriteHexIdents(result, oldIds[k], newIds[k]);
      }
    }
  }
  return { src: result, renamed, changed: result !== src };
}

function processElseTails(src, counter) {
  const tails = [];
  walkCode(src, (i) => {
    if (!isKeywordAt(src, i, "else")) return;
    const j = skipWs(src, i + 4);
    if (src[j] !== "{") return;
    const balanced = matchBalancedBrace(src, j);
    const end = balanced ? balanced.end : src.length;
    const innerStart = j + 1;
    const innerEnd = balanced ? balanced.end - 1 : src.length;
    if (innerEnd <= innerStart) return;
    tails.push({ start: innerStart, end: innerEnd });
  });
  const tops = tails.filter((f) => !tails.some((o) => o.start < f.start && o.end > f.end));
  let result = src;
  let renamed = 0;
  for (const f of [...tops].sort((a, b) => b.start - a.start)) {
    const piece = result.slice(f.start, f.end);
    if (countTokens(piece) === 0) continue;
    const wrapped = tryRenameWrappedFragment(piece, counter);
    if (wrapped.aborted || wrapped.error || !(wrapped.renamed > 0)) continue;
    renamed += wrapped.renamed;
    result = result.slice(0, f.start) + wrapped.src + result.slice(f.end);
  }
  return { src: result, renamed, changed: result !== src };
}

function skipHexFunctionDeclNames(ast, traverse, extraSkip = new Set()) {
  const skipNames = new Set(extraSkip);
  traverse(ast, {
    FunctionDeclaration(path) {
      const name = path.node.id?.name;
      if (name && HEX_IDENT.test(name)) skipNames.add(name);
    }
  });
  return skipNames;
}

function tryRenameWrappedFragment(src, counter) {
  const wrapName = "__uw";
  const wrapped = `function ${wrapName}(){${src}\n}`;
  const parsed = parseMaybeHealed(wrapped);
  if (!parsed.ast) return { error: parsed.error, src, renamed: 0 };
  const skipNames = new Set([wrapName]);
  const result = emitRenamed(parsed.src, parsed.ast, counter, { skipNames });
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

function joinRenamedParts(parts, counter, depth) {
  let renamed = 0;
  const out = [];
  for (const part of parts) {
    const r = renameChunkDeep(part, counter, depth + 1);
    if (r.aborted) return r;
    out.push(r.error && !(r.renamed > 0) && !r.changed ? part : r.src);
    renamed += r.renamed ?? 0;
  }
  return { src: out.join(""), renamed, changed: renamed > 0, aborted: false };
}

function renameChunkDeep(src, counter, depth = 0) {
  const first = renameOneUnit(src, counter);
  if (!first.error && !first.aborted) return first;
  if (first.aborted) return first;

  if (depth < 5) {
    const innerMod = splitAtInnerModuleSlice(src);
    if (innerMod) {
      const joined = joinRenamedParts(innerMod, counter, depth);
      if (joined.aborted) return joined;
      if (joined.renamed > 0 || joined.src !== src) {
        const unbound = renameUnboundHexIdents(joined.src);
        return {
          src: unbound.src,
          renamed: joined.renamed + unbound.renamed,
          changed: true,
          aborted: false
        };
      }
    }
    const parts = splitAtTopLevelExportImport(src);
    if (parts.length > 1) {
      const joined = joinRenamedParts(parts, counter, depth);
      if (joined.aborted) return joined;
      if (joined.renamed > 0) return { ...joined, changed: true };
    }
    const inner = splitTopLevel(healForParse(src));
    if (inner.length > 1) {
      const joined = joinRenamedParts(inner, counter, depth);
      if (joined.aborted) return joined;
      if (joined.renamed > 0) return { ...joined, changed: true };
    }
  }

  let current = src;
  let renamed = 0;
  const nested = processFunctionsIn(src, counter, true);
  renamed += nested.renamed;
  current = nested.src;
  const unclosed = processUnclosedHexFunctions(current, counter);
  renamed += unclosed.renamed;
  current = unclosed.src;
  const vars = processHexVarStatements(current, counter);
  renamed += vars.renamed;
  current = vars.src;
  const nestedCls = processClassesIn(current, counter, true);
  renamed += nestedCls.renamed;
  current = nestedCls.src;
  const methods = processWindows(current, counter, scanConciseMethods, tryRenameClassMethod, true);
  renamed += methods.renamed;
  current = methods.src;
  const fors = processWindows(current, counter, scanCompleteFors, tryRenameWrappedFragment, true);
  renamed += fors.renamed;
  current = fors.src;
  const objects = processWindows(
    current,
    counter,
    (s) => scanObjectLiterals(s).filter((b) => b.end - b.start < 80_000),
    tryRenameObjectLiteral,
    true
  );
  renamed += objects.renamed;
  current = objects.src;
  const elseTails = processElseTails(current, counter);
  renamed += elseTails.renamed;
  current = elseTails.src;

  const again = renameOneUnit(current, counter);
  if (!again.error && !again.aborted) {
    return { src: again.src, renamed: renamed + (again.renamed ?? 0), changed: true, aborted: false };
  }
  if (again.aborted) return again;

  if (depth < 5) {
    const exportParts = splitLastExport(current) ?? splitAtInnerModuleSlice(current);
    if (exportParts) {
      const [prefix, tail] = exportParts;
      const r = renameChunkDeep(prefix, counter, depth + 1);
      if (r.aborted) return r;
      const prefixOut = (r.error && !(r.renamed > 0) ? prefix : r.src) + tail;
      renamed += r.renamed ?? 0;
      if ((r.renamed ?? 0) > 0 || prefixOut !== current) {
        current = prefixOut;
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

const LOOSE_DUMMY = "✖";

function walkEstree(node, fn, parent = null) {
  if (!node || typeof node !== "object") return;
  fn(node, parent);
  for (const key of Object.keys(node)) {
    if (key === "start" || key === "end" || key === "loc" || key === "range" || key === "type") continue;
    const val = node[key];
    if (Array.isArray(val)) {
      for (const child of val) {
        if (child && typeof child === "object" && child.type) walkEstree(child, fn, node);
      }
    } else if (val && typeof val === "object" && val.type) {
      walkEstree(val, fn, node);
    }
  }
}

function collectPatternIds(pat, into) {
  if (!pat) return;
  if (pat.type === "Identifier") {
    if (pat.name && pat.name !== LOOSE_DUMMY && HEX_IDENT.test(pat.name)) into.add(pat.name);
    return;
  }
  if (pat.type === "AssignmentPattern") {
    collectPatternIds(pat.left, into);
    return;
  }
  if (pat.type === "RestElement") {
    collectPatternIds(pat.argument, into);
    return;
  }
  if (pat.type === "ArrayPattern") {
    for (const el of pat.elements || []) collectPatternIds(el, into);
    return;
  }
  if (pat.type === "ObjectPattern") {
    for (const prop of pat.properties || []) {
      if (prop.type === "RestElement") collectPatternIds(prop.argument, into);
      else collectPatternIds(prop.value, into);
    }
  }
}

function isNonRefIdentifier(node, parent) {
  if (!parent) return false;
  if (parent.type === "MemberExpression" && parent.property === node && !parent.computed) return true;
  if (
    (parent.type === "Property" ||
      parent.type === "PropertyDefinition" ||
      parent.type === "MethodDefinition" ||
      parent.type === "ClassProperty") &&
    parent.key === node &&
    !parent.computed &&
    !parent.shorthand
  ) {
    return true;
  }
  if (parent.type === "ExportSpecifier" && parent.exported === node && parent.exported !== parent.local) {
    return true;
  }
  if (parent.type === "ImportSpecifier" && parent.imported === node && parent.imported !== parent.local) {
    return true;
  }
  if (parent.type === "MetaProperty") return true;
  return false;
}

function parseLooseAst(src) {
  const loose = loadAcornLoose();
  const opts = { ecmaVersion: "latest", allowAwaitOutsideFunction: true, allowHashBang: true };
  try {
    return loose.parse(src, { ...opts, sourceType: "module" });
  } catch {
    try {
      return loose.parse(src, { ...opts, sourceType: "script" });
    } catch {
      return null;
    }
  }
}

function findLooseAbortReason(ast) {
  let reason = null;
  walkEstree(ast, (node) => {
    if (reason || node.type !== "ExportNamedDeclaration") return;
    for (const spec of node.specifiers || []) {
      if (spec.type !== "ExportSpecifier") continue;
      const exported = spec.exported?.type === "Identifier" ? spec.exported.name : null;
      const local = spec.local?.type === "Identifier" ? spec.local.name : null;
      if (exported && HEX_IDENT.test(exported) && exported === local) {
        reason = `export { ${exported} } with no public alias`;
        return;
      }
    }
  });
  return reason;
}

function allocLooseName(counter, used) {
  let name;
  do {
    counter.value += 1;
    name = `v${counter.value}`;
  } while (used.has(name));
  used.add(name);
  return name;
}

/**
 * Parse-only acorn-loose tree: collect Identifier ranges for bound `_0x`
 * names, then splice replacements into the original source. Never generates
 * code and never writes closing braces.
 */
function renameViaLooseParse(src, counter) {
  if (countTokens(src) === 0) return { src, renamed: 0, changed: false, aborted: false };
  const ast = parseLooseAst(src);
  if (!ast) return { src, renamed: 0, changed: false, aborted: false };
  const abort = findLooseAbortReason(ast);
  if (abort) return { src, renamed: 0, changed: false, aborted: true, reason: abort };

  const bound = new Set();
  walkEstree(ast, (node) => {
    if (
      node.type === "FunctionDeclaration" ||
      node.type === "FunctionExpression" ||
      node.type === "ClassDeclaration" ||
      node.type === "ClassExpression"
    ) {
      collectPatternIds(node.id, bound);
    }
    if (
      node.type === "FunctionDeclaration" ||
      node.type === "FunctionExpression" ||
      node.type === "ArrowFunctionExpression"
    ) {
      for (const p of node.params || []) collectPatternIds(p, bound);
    }
    if (node.type === "VariableDeclarator") collectPatternIds(node.id, bound);
    if (node.type === "CatchClause") collectPatternIds(node.param, bound);
    if (
      node.type === "ImportSpecifier" ||
      node.type === "ImportDefaultSpecifier" ||
      node.type === "ImportNamespaceSpecifier"
    ) {
      collectPatternIds(node.local, bound);
    }
  });
  if (bound.size === 0) return { src, renamed: 0, changed: false, aborted: false };

  const used = new Set();
  walkEstree(ast, (node) => {
    if (node.type === "Identifier" && node.name && node.name !== LOOSE_DUMMY) used.add(node.name);
  });
  const map = new Map();
  for (const name of bound) {
    map.set(name, allocLooseName(counter, used));
  }

  const spans = [];
  walkEstree(ast, (node, parent) => {
    if (node.type !== "Identifier") return;
    const next = map.get(node.name);
    if (!next) return;
    if (typeof node.start !== "number" || typeof node.end !== "number") return;
    if (src.slice(node.start, node.end) !== node.name) return;
    if (isNonRefIdentifier(node, parent)) return;
    spans.push({ start: node.start, end: node.end, name: node.name });
  });
  if (spans.length === 0) return { src, renamed: 0, changed: false, aborted: false };

  let out = src;
  for (const span of [...spans].sort((a, b) => b.start - a.start)) {
    out = `${out.slice(0, span.start)}${map.get(span.name)}${out.slice(span.end)}`;
  }
  return { src: out, renamed: map.size, changed: out !== src, aborted: false };
}

const CQ_METHOD_RE = /(?:^|[^\w$])([A-Za-z_$][\w$]*)\s*\(\s*\)\s*\{/g;
const CQ_REGISTER_RE = /\["registerRenderModule"\]|\.registerRenderModule\s*\(/;

function lastNamedEmptyishMethod(src, wantedName) {
  CQ_METHOD_RE.lastIndex = 0;
  let last = null;
  let match;
  while ((match = CQ_METHOD_RE.exec(src))) {
    if (wantedName && match[1] !== wantedName) continue;
    const open = match.index + match[0].length - 1;
    const balanced = matchBalancedBrace(src, open);
    const end = balanced ? balanced.end : src.length;
    last = { name: match[1], start: open, end, body: src.slice(open, end) };
  }
  return last;
}

function extractCqStubMethod(src) {
  const named = lastNamedEmptyishMethod(src, "_registerRenderModules");
  if (named) return named;
  const initAt = src.lastIndexOf("_initRegisterCommand");
  if (initAt === -1) return null;
  const before = src.slice(0, initAt);
  const fallback = lastNamedEmptyishMethod(before, null);
  if (!fallback) return null;
  if (fallback.end !== before.length && before.slice(fallback.end).trim() !== "") return null;
  return fallback;
}

function cqStubBodyIsEmpty(body) {
  if (body == null) return false;
  if (CQ_REGISTER_RE.test(body)) return false;
  const inner = body.replace(/^\{/, "").replace(/\}$/, "");
  return inner.replace(/;/g, "").trim() === "";
}

export function abortIfCqStubRestored(original, next) {
  const origMethod = extractCqStubMethod(original);
  if (!origMethod || origMethod.name !== "_registerRenderModules" || !cqStubBodyIsEmpty(origMethod.body)) {
    return { aborted: false, src: next };
  }
  const nextMethod = extractCqStubMethod(next);
  if (nextMethod && cqStubBodyIsEmpty(nextMethod.body)) {
    return { aborted: false, src: next };
  }
  return {
    aborted: true,
    reason: "would restore CQ registerRenderModule",
    src: original
  };
}

export function rename0xIdents(src) {
  const original = src;
  const hitsBefore = countTokens(src);
  if (hitsBefore === 0) {
    return { src, changed: false, aborted: false, reason: null, hitsBefore, hitsAfter: 0, renamed: 0 };
  }
  if (hasBareHexExport(src)) {
    const reason = "export { _0x } with no public alias";
    const match = src.match(/\bexport\s*\{\s*(_0x[0-9a-f]+)/i);
    return {
      src: original,
      changed: false,
      aborted: true,
      reason: match ? `export { ${match[1]} } with no public alias` : reason,
      hitsBefore,
      hitsAfter: hitsBefore,
      renamed: 0
    };
  }
  const counter = { value: 0 };
  src = healElseMissingSemicolons(healForParse(src));
  const whole = renameOneUnit(src, counter);
  if (whole.aborted) {
    return { src: original, changed: false, aborted: true, reason: whole.reason, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
  }
  let next = src;
  let renamed = 0;
  if (whole.ast !== undefined || whole.renamed > 0 || whole.changed || !whole.error) {
    if (!whole.error) {
      next = whole.src;
      renamed = whole.renamed ?? 0;
    }
  }
  if (whole.error) {
    const chunks = splitTopLevel(src);
    const units = chunks.length > 1 ? chunks : [src];
    const out = [];
    let chunkAbort = null;
    renamed = 0;
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
      return { src: original, changed: false, aborted: true, reason: chunkAbort, hitsBefore, hitsAfter: hitsBefore, renamed: 0 };
    }
    next = out.join("");
  }

  const unbound = renameUnboundHexIdents(next);
  next = unbound.src;
  renamed += unbound.renamed;

  if (countTokens(next) > 0) {
    const loose = renameViaLooseParse(next, counter);
    if (loose.aborted) {
      return {
        src: original,
        changed: false,
        aborted: true,
        reason: loose.reason,
        hitsBefore,
        hitsAfter: hitsBefore,
        renamed: 0
      };
    }
    next = loose.src;
    renamed += loose.renamed;
  }

  if (renamed === 0) {
    return {
      src: original,
      changed: false,
      aborted: false,
      reason: whole.error ? `parse failed: ${whole.error?.message ?? "unparseable chunks"}` : null,
      hitsBefore,
      hitsAfter: hitsBefore,
      renamed: 0
    };
  }
  if (!next.endsWith("\n")) next += "\n";
  const cq = abortIfCqStubRestored(original, next);
  if (cq.aborted) {
    return {
      src: original,
      changed: false,
      aborted: true,
      reason: cq.reason,
      hitsBefore,
      hitsAfter: hitsBefore,
      renamed: 0
    };
  }
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
  const vendorRel = path.relative(VENDOR_PRO, path.resolve(filePath));
  if (!vendorRel.startsWith("..")) {
    const pkg = vendorRel.split(path.sep)[0];
    if (T0B_SKIP_PKGS.includes(pkg)) return true;
  }
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
  const pkg = rel.split(path.sep)[0];
  const roots = [
    PRO_NM,
    path.join(ROOT, "packages/dsh-univer-workspace-plugin/node_modules/@univerjs-pro")
  ];
  let applied = false;
  for (const proNm of roots) {
    if (!fs.existsSync(path.join(proNm, pkg))) continue;
    writeUnlinked(path.join(proNm, rel), fs.readFileSync(vendorFile));
    applied = true;
  }
  if (!applied) {
    console.warn(`skip apply: @univerjs-pro/${pkg} missing in node_modules`);
  }
  return applied;
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

export function listCjsTwinsOfCleanEs() {
  const twins = [];
  if (!fs.existsSync(VENDOR_PRO)) return twins;
  for (const pkg of fs.readdirSync(VENDOR_PRO)) {
    if (T0B_SKIP_PKGS.includes(pkg)) continue;
    const esDir = path.join(VENDOR_PRO, pkg, "lib/es");
    const cjsDir = path.join(VENDOR_PRO, pkg, "lib/cjs");
    const libDir = path.join(VENDOR_PRO, pkg, "lib");
    if (!fs.existsSync(esDir)) continue;
    const esFiles = walkJs(esDir, []);
    for (const esFile of esFiles) {
      if (hitsForFile(esFile) > 0) continue;
      const rel = path.relative(esDir, esFile);
      for (const twin of [path.join(cjsDir, rel), path.join(libDir, rel)]) {
        if (!fs.existsSync(twin)) continue;
        if (twin.includes(`${path.sep}umd${path.sep}`)) continue;
        if (twin.includes(`${path.sep}es${path.sep}`) || twin.includes(`${path.sep}cjs${path.sep}`)) {
          if (twin !== path.join(cjsDir, rel)) continue;
        }
        if (hitsForFile(twin) === 0) continue;
        twins.push(twin);
      }
    }
  }
  return twins
    .map((file) => ({ file, hits: hitsForFile(file), rel: posixRel(file) }))
    .sort((a, b) => b.hits - a.hits);
}

export function listLibRootTwinsOfRewrittenEs() {
  const twins = [];
  if (!fs.existsSync(VENDOR_PRO)) return twins;
  for (const pkg of fs.readdirSync(VENDOR_PRO)) {
    if (T0B_SKIP_PKGS.includes(pkg)) continue;
    const esDir = path.join(VENDOR_PRO, pkg, "lib/es");
    const libDir = path.join(VENDOR_PRO, pkg, "lib");
    if (!fs.existsSync(esDir) || !fs.existsSync(libDir)) continue;
    const esFiles = walkJs(esDir, []);
    for (const esFile of esFiles) {
      const rel = path.relative(esDir, esFile);
      const twin = path.join(libDir, rel);
      if (!fs.existsSync(twin)) continue;
      if (twin.includes(`${path.sep}es${path.sep}`) || twin.includes(`${path.sep}cjs${path.sep}`)) continue;
      const esHits = hitsForFile(esFile);
      const libHits = hitsForFile(twin);
      if (libHits === 0) continue;
      if (esHits > libHits) continue;
      if (esHits === libHits && esHits > 0) continue;
      twins.push(twin);
    }
  }
  return twins
    .map((file) => ({ file, hits: hitsForFile(file), rel: posixRel(file) }))
    .sort((a, b) => b.hits - a.hits);
}

export function listDirtyCjsTwins() {
  const twins = [];
  if (!fs.existsSync(VENDOR_PRO)) return twins;
  for (const pkg of fs.readdirSync(VENDOR_PRO)) {
    if (T0B_SKIP_PKGS.includes(pkg)) continue;
    const esDir = path.join(VENDOR_PRO, pkg, "lib/es");
    const cjsDir = path.join(VENDOR_PRO, pkg, "lib/cjs");
    if (!fs.existsSync(esDir) || !fs.existsSync(cjsDir)) continue;
    const esFiles = walkJs(esDir, []);
    for (const esFile of esFiles) {
      const rel = path.relative(esDir, esFile);
      const twin = path.join(cjsDir, rel);
      if (!fs.existsSync(twin)) continue;
      const cjsHits = hitsForFile(twin);
      if (cjsHits === 0) continue;
      twins.push(twin);
    }
  }
  return twins
    .map((file) => ({ file, hits: hitsForFile(file), rel: posixRel(file) }))
    .sort((a, b) => b.hits - a.hits);
}

export function listDistLeftoverFiles() {
  const files = [];
  if (!fs.existsSync(VENDOR_PRO)) return files;
  for (const pkg of fs.readdirSync(VENDOR_PRO)) {
    if (T0B_SKIP_PKGS.includes(pkg)) continue;
    const distDir = path.join(VENDOR_PRO, pkg, "dist");
    if (!fs.existsSync(distDir)) continue;
    for (const file of walkJs(distDir, [])) {
      if (file.includes(`${path.sep}umd${path.sep}`)) continue;
      if (hitsForFile(file) === 0) continue;
      files.push(file);
    }
  }
  return files
    .map((file) => ({ file, hits: hitsForFile(file), rel: posixRel(file) }))
    .sort((a, b) => b.hits - a.hits);
}

const BACKUP_ROOT = path.join(ROOT, "vendor/univer-pro-0x-backup");

function backupVendorFile(filePath) {
  const rel = path.relative(VENDOR_PRO, path.resolve(filePath));
  if (rel.startsWith("..") || rel.startsWith(`..${path.sep}`)) return false;
  const dest = path.join(BACKUP_ROOT, rel);
  if (fs.existsSync(dest)) return false;
  const hits = hitsForFile(filePath);
  const size = fs.statSync(filePath).size;
  if (hits < 400 && size < 80_000) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(filePath, dest);
  console.warn(`BACKUP ${posixRel(dest)} hits=${hits}`);
  return true;
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
  const cqWrite = abortIfCqStubRestored(original, result.src);
  if (cqWrite.aborted) {
    console.warn(`ABORT ${rel} (${cqWrite.reason})`);
    return { rel, aborted: true, reason: cqWrite.reason, hitsBefore: result.hitsBefore, ms };
  }
  if (write) {
    backupVendorFile(filePath);
    writeUnlinked(filePath, result.src);
    const writtenSrc = fs.readFileSync(filePath, "utf8");
    const cqAfter = abortIfCqStubRestored(original, writtenSrc);
    if (cqAfter.aborted) {
      writeUnlinked(filePath, original);
      console.warn(`ABORT ${rel} post-write (${cqAfter.reason}); restored original`);
      return { rel, aborted: true, reason: cqAfter.reason, hitsBefore: result.hitsBefore, ms };
    }
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
  const args = {
    write: false,
    apply: false,
    file: null,
    largestEs: null,
    cjsTwins: null,
    libRootTwins: null,
    dirtyCjs: null,
    dist: null,
    child: false
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--write") args.write = true;
    else if (a === "--apply") args.apply = true;
    else if (a === "--file") args.file = argv[++i];
    else if (a === "--largest-es") args.largestEs = Number(argv[++i]);
    else if (a === "--cjs-twins") args.cjsTwins = Number(argv[++i]);
    else if (a === "--lib-root-twins") args.libRootTwins = Number(argv[++i]);
    else if (a === "--dirty-cjs") args.dirtyCjs = Number(argv[++i]);
    else if (a === "--dist") args.dist = Number(argv[++i]);
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

function processBatch(candidates, n, { write, apply, child }) {
  let written = 0;
  for (const row of candidates) {
    if (written >= n) break;
    const started = Date.now();
    const result = child
      ? processVendorFile(row.file, { write, apply })
      : runChildFile(row.file, { write, apply });
    if (result.timedOut) {
      console.warn(`TIMEOUT ${row.rel} (>${FILE_TIMEOUT_MS}ms) left untouched; stopping batch`);
      process.exitCode = 3;
      return written;
    }
    if (result.aborted || result.childFailed || result.skipped) {
      continue;
    }
    if (result.changed || result.childOk || result.written) {
      written += 1;
    }
    if (Date.now() - started > FILE_TIMEOUT_MS) {
      console.warn(`STOP after ${row.rel} exceeded ${FILE_TIMEOUT_MS}ms`);
      return written;
    }
  }
  return written;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.file && !args.largestEs && !args.cjsTwins && !args.libRootTwins && !args.dirtyCjs && !args.dist) {
    console.log(`Usage:
  node scripts/rename-univer-pro-0x-idents.mjs --file <path> [--write] [--apply]
  node scripts/rename-univer-pro-0x-idents.mjs --largest-es <n> [--write] [--apply]
  node scripts/rename-univer-pro-0x-idents.mjs --cjs-twins <n> [--write] [--apply]
  node scripts/rename-univer-pro-0x-idents.mjs --lib-root-twins <n> [--write] [--apply]
  node scripts/rename-univer-pro-0x-idents.mjs --dirty-cjs <n> [--write] [--apply]
  node scripts/rename-univer-pro-0x-idents.mjs --dist <n> [--write] [--apply]
Default is dry-run. Never umd/, published, or OSS vendor.`);
    process.exitCode = 1;
    return;
  }
  if (args.file) {
    const file = path.resolve(ROOT, args.file);
    const result = processVendorFile(file, { write: args.write, apply: args.apply });
    if (result.aborted || result.timedOut) process.exitCode = 2;
    return;
  }
  if (args.cjsTwins) {
    const n = Number.isFinite(args.cjsTwins) && args.cjsTwins > 0 ? args.cjsTwins : 20;
    const ordered = listCjsTwinsOfCleanEs();
    const candidates = ordered.slice(0, Math.max(n * 2, n));
    console.log(`cjs/lib twins of clean es: ${ordered.length} (target ${n} writes)`);
    for (const row of candidates) {
      console.log(`  ${row.hits} ${row.rel}`);
    }
    const written = processBatch(candidates, n, args);
    console.log(`batch done: ${written} file(s) processed`);
    return;
  }
  if (args.libRootTwins) {
    const n = Number.isFinite(args.libRootTwins) && args.libRootTwins > 0 ? args.libRootTwins : 20;
    const ordered = listLibRootTwinsOfRewrittenEs();
    const candidates = ordered.slice(0, Math.max(n * 2, n)).filter((row) => !isForbiddenPath(row.file));
    console.log(`lib-root twins of rewritten es: ${ordered.length} (target ${n} writes)`);
    for (const row of candidates) {
      console.log(`  ${row.hits} ${row.rel}`);
    }
    const written = processBatch(candidates, n, args);
    console.log(`batch done: ${written} file(s) processed`);
    return;
  }
  if (args.dirtyCjs) {
    const n = Number.isFinite(args.dirtyCjs) && args.dirtyCjs > 0 ? args.dirtyCjs : 10;
    const ordered = listDirtyCjsTwins();
    const candidates = ordered.slice(0, Math.max(n * 2, n)).filter((row) => !isForbiddenPath(row.file));
    console.log(`cjs twins still dirty: ${ordered.length} (target ${n} writes)`);
    for (const row of candidates) {
      console.log(`  ${row.hits} ${row.rel}`);
    }
    const written = processBatch(candidates, n, args);
    console.log(`batch done: ${written} file(s) processed`);
    return;
  }
  if (args.dist) {
    const n = Number.isFinite(args.dist) && args.dist > 0 ? args.dist : 30;
    const ordered = listDistLeftoverFiles();
    const candidates = ordered.slice(0, Math.max(n * 2, n)).filter((row) => !isForbiddenPath(row.file));
    console.log(`dist leftovers: ${ordered.length} (target ${n} writes)`);
    for (const row of candidates) {
      console.log(`  ${row.hits} ${row.rel}`);
    }
    const written = processBatch(candidates, n, args);
    console.log(`batch done: ${written} file(s) processed`);
    return;
  }
  const n = Number.isFinite(args.largestEs) && args.largestEs > 0 ? args.largestEs : 5;
  const ordered = orderLargestEs(listLibEsFiles()).filter((row) => !isForbiddenPath(row.file));
  const candidates = ordered.slice(0, Math.max(n * 3, n));
  console.log(`largest lib/es candidates: ${candidates.length} (target ${n} writes)`);
  for (const row of candidates) {
    console.log(`  ${row.hits} ${row.rel}`);
  }
  const written = processBatch(candidates, n, args);
  console.log(`batch done: ${written} file(s) processed`);
}

export { HEX_IDENT, countTokens, FILE_TIMEOUT_MS };

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
