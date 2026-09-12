/**
 * Vendor Pro ESM sometimes splits reserved words inside import lists
 * (`delete SlideTableColumns as _0x…`). Rejoin them at load time so Vite
 * can parse without rewriting the frozen vendor tree.
 *
 * Truncated decode leftovers (engine-chart, chart-ui, boards-ui, …) are
 * replaced with named-export stubs so the Q3 sheet SPA can still build.
 */
import { readFileSync } from "node:fs";

const PRO_MODULE =
  /(?:@univerjs-pro[/\\]|vendor[/\\]univer-pro[/\\]).*\.(?:m?js|cjs)$/;
const SPEC_RE = /\b(import|export)\s*\{([^}]*)\}/g;
const JOIN_RE =
  /\b(delete|await|typeof|void|new|throw|return|case|default|enum|implements|interface|package|private|protected|public|static|yield) ([A-Za-z_$])/g;
const METHOD_RE = /\b(delete) ([A-Za-z][A-Za-z0-9_]*)\s*\(/g;
const BROKEN_INDEX = new Set([
  "engine-chart",
  "docs-print",
  "boards-ui",
  "shape-editor-ui",
  "chart-ui",
  "sheets-pivot",
  "bases-ui",
  "bases"
]);

export function unglueUniverProReservedImports(code) {
  const withImports = code.replace(SPEC_RE, (_full, kind, inner) => `${kind}{${inner.replace(JOIN_RE, "$1$2")}}`);
  return withImports
    .replace(METHOD_RE, "$1$2(")
    .replace(/new URL\(\);\s*SearchParams/g, "new URLSearchParams")
    .replace(/\?\.{2,}/g, "?.");
}

export function isUniverProModule(id) {
  return PRO_MODULE.test(id.split("?")[0]);
}

export function proPackageName(id) {
  const path = id.split("?")[0];
  const match =
    path.match(/@univerjs-pro[/\\]([^/\\]+)/) || path.match(/univer-pro[/\\]([^/\\]+)/);
  return match?.[1] ?? "";
}

export function shouldStubBrokenProIndex(id) {
  const path = id.split("?")[0];
  if (!BROKEN_INDEX.has(proPackageName(path))) return false;
  if (path.includes("/locale/") || path.includes("\\locale\\")) return false;
  return /(?:^|[/\\])(?:index|facade)\.js$/.test(path);
}

export function stubProModuleFromExportList(code) {
  const match = code.match(/export\s*\{([\s\S]*)\}\s*;?\s*$/);
  if (!match) return "export default {};\n";
  const names = [];
  for (const part of match[1].split(",")) {
    const bits = part
      .split(/\s+as\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (!bits.length) continue;
    const exported = bits[bits.length - 1];
    if (!/^[A-Za-z_$][\w$]*$/.test(exported)) continue;
    names.push(exported);
  }
  const unique = [...new Set(names)];
  if (!unique.length) return "export default {};\n";
  const helper = `function __proStub(){const arr=[];const C=class{};const fn=function(){return arr;};return new Proxy(fn,{construct(){return new C();},get(target,prop){if(prop==="prototype")return C.prototype;if(prop==="length")return 0;if(typeof arr[prop]==="function")return arr[prop].bind(arr);if(prop===Symbol.iterator)return arr[Symbol.iterator].bind(arr);return target[prop];}});}
`;
  return helper + unique.map((name) => `export const ${name} = __proStub();`).join("\n") + "\n";
}

export function unglueUniverProImportsPlugin() {
  return {
    name: "unglue-univer-pro-imports",
    enforce: "pre",
    load(id) {
      const path = id.split("?")[0];
      if (!isUniverProModule(path)) return null;
      try {
        const code = readFileSync(path, "utf8");
        if (shouldStubBrokenProIndex(path)) {
          return stubProModuleFromExportList(code);
        }
        const next = unglueUniverProReservedImports(code);
        if (next !== code) return next;
      } catch {
        return null;
      }
      return null;
    },
    transform(code, id) {
      if (!isUniverProModule(id) || shouldStubBrokenProIndex(id)) return;
      const next = unglueUniverProReservedImports(code);
      if (next === code) return;
      return { code: next, map: null };
    }
  };
}
