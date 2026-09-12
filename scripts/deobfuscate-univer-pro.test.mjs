import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import {
  DEFAULT_PACKAGES,
  deobfuscateSource,
  extractRuntime,
  looksObfuscated,
  unglueKeywords
} from "./deobfuscate-univer-pro.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const ES_SNIPPET = [
  "const _0x2c5e=_0x5775;(function(_0x485b93,_0x27d99f){const _0x5e4e6c=_0x5775,_0x3047da=_0x485b93();while(!![]){try{const _0x4ccea3=0x1;if(_0x4ccea3===_0x27d99f)break;else _0x3047da['push'](_0x3047da['shift']());}catch(_0x5b){_0x3047da['push'](_0x3047da['shift']());}}}(_0x3c40,0x1));export const msg=_0x2c5e(0x0);",
  "function _0x5775(_0x5ee65b,_0x421204){_0x5ee65b=_0x5ee65b-0x0;const _0x3c40f6=_0x3c40();let _0x5775f1=_0x3c40f6[_0x5ee65b];return _0x5775f1;}",
  "function _0x3c40(){const _0x1378fb=['hello','world'];_0x3c40=function(){return _0x1378fb;};return _0x3c40();}"
].join("");

const CJS_SNIPPET = [
  "const _0x415b=_0x31f6;(function(_0x1b7e35,_0x4804ad){const _0x30a33f=_0x31f6,_0x3d88cb=_0x1b7e35();while(!![]){try{const _0x375649=0x1;if(_0x375649===_0x4804ad)break;else _0x3d88cb['push'](_0x3d88cb['shift']());}catch(_0x57ecbf){_0x3d88cb['push'](_0x3d88cb['shift']());}}}(_0x7faf,0x1),Object.defineProperty(exports,'msg',{value:_0x415b(0x0)}));",
  "function _0x31f6(_0x5ee65b,_0x421204){_0x5ee65b=_0x5ee65b-0x0;const _0x7faff6=_0x7faf();let _0x31f6f1=_0x7faff6[_0x5ee65b];return _0x31f6f1;}",
  "function _0x7faf(){const _0x21f56d=['hello','world'];_0x7faf=function(){return _0x21f56d;};return _0x7faf();}"
].join("");

const EXTRA_PRO_UI_PACKAGES = [
  "bases",
  "bases-ui",
  "boards",
  "boards-ui",
  "chart-ui",
  "embed",
  "embed-ui",
  "slides",
  "slides-ui"
];

test("DEFAULT_PACKAGES includes Cloudflare formula and exchange packages", () => {
  assert.ok(DEFAULT_PACKAGES.includes("engine-formula"), "engine-formula");
  assert.ok(DEFAULT_PACKAGES.includes("exchange-client"), "exchange-client");
  assert.ok(DEFAULT_PACKAGES.includes("live-share"), "live-share");
  assert.ok(DEFAULT_PACKAGES.includes("collaboration-service"), "collaboration-service");
  assert.ok(DEFAULT_PACKAGES.includes("collaboration-transport-node"), "collaboration-transport-node");
});

test("DEFAULT_PACKAGES includes extra Pro UI packages still wrapped before freeze", () => {
  for (const pkg of EXTRA_PRO_UI_PACKAGES) {
    assert.ok(DEFAULT_PACKAGES.includes(pkg), pkg);
  }
});

test("does not treat unrelated zero-arg helpers as the string-array function", () => {
  const published = path.join(ROOT, "vendor/univer-pro-published/docs-print/lib/es/index.js");
  assert.equal(looksObfuscated(readFileSync(published, "utf8")), true);
  const runtime = extractRuntime(readFileSync(published, "utf8"));
  assert.ok(runtime, "docs-print runtime must extract");
  assert.doesNotMatch(runtime, /function _0x46bdaf/);
  new vm.Script(runtime);
  const { src, changed } = deobfuscateSource(readFileSync(published, "utf8"));
  assert.equal(changed, true);
  assert.equal(looksObfuscated(src), false);
});

const VAR_SNIPPET = [
  "function _0x148f(_0x30ac79,_0x58ef1d){_0x30ac79=_0x30ac79-0x0;var _0x5a44dd=_0x5a44();var _0x148ff1=_0x5a44dd[_0x30ac79];return _0x148ff1;}",
  "function _0x5a44(){var _0x181117=['hello','world'];_0x5a44=function(){return _0x181117;};return _0x5a44();}",
  "var _0x3e1e77=_0x148f;(function(_0x4b238b,_0x4e0903){var _0x357d12=_0x148f,_0x433c62=_0x4b238b();while(!![]){try{var _0x1895ee=0x1;if(_0x1895ee===_0x4e0903)break;else _0x433c62['push'](_0x433c62['shift']());}catch(_0x1f06d9){_0x433c62['push'](_0x433c62['shift']());}}}(_0x5a44,0x1));",
  "export const msg=_0x3e1e77(0x0);"
].join("");

test("decodes var-style string-array wrappers used by Pro facade files", () => {
  assert.equal(looksObfuscated(VAR_SNIPPET), true);
  assert.ok(extractRuntime(VAR_SNIPPET), "var array function must extract");
  const { src, changed } = deobfuscateSource(VAR_SNIPPET);
  assert.equal(changed, true);
  assert.equal(looksObfuscated(src), false);
  assert.match(src, /export const msg\s*=\s*"hello"/);
});

test("decodes ESM javascript-obfuscator string-array wrappers", () => {
  assert.equal(looksObfuscated(ES_SNIPPET), true);
  assert.ok(extractRuntime(ES_SNIPPET));
  const { src, changed } = deobfuscateSource(ES_SNIPPET);
  assert.equal(changed, true);
  assert.equal(looksObfuscated(src), false);
  assert.match(src, /export const msg\s*=\s*"hello"/);
});

test("decodes CJS wrappers that chain the rotator with a comma operator", () => {
  assert.equal(looksObfuscated(CJS_SNIPPET), true);
  assert.ok(extractRuntime(CJS_SNIPPET), "CJS rotator ending in comma must still extract");
  const { src, changed } = deobfuscateSource(CJS_SNIPPET);
  assert.equal(changed, true);
  assert.equal(looksObfuscated(src), false);
  assert.doesNotMatch(src, /^\s*,/);
  assert.match(src, /"hello"/);
});

test("strips leftover empty (); left by rotator IIFE wrappers", () => {
  assert.doesNotMatch(unglueKeywords("();import x from 'y';"), /^\s*\(\s*\)\s*;/);
  assert.match(unglueKeywords("const a=1;();export const b=2;"), /const a=1;export const b=2;/);
});

test("unglue keeps method names and splits infix in/instanceof", () => {
  assert.match(unglueKeywords("x.deleteCellRanges()"), /x\.deleteCellRanges\(\)/);
  assert.match(unglueKeywords("x.awaitingChangeset"), /x\.awaitingChangeset/);
  assert.match(unglueKeywords("if(event.codein Ht){}"), /event\.code in Ht/);
  assert.match(unglueKeywords("err.errorinstanceof Error"), /err\.error instanceof Error/);
  assert.match(unglueKeywords('x.AWAITING="await ing"'), /"awaiting"/);
  assert.match(unglueKeywords("let x=new Mapreturn y"), /new Map\(\);return/);
  assert.match(unglueKeywords("x.getSheetIdif(y)"), /getSheetId\(\);if\(/);
  assert.match(unglueKeywords("return Promise.resolvelet z"), /Promise\.resolve\(\);let/);
});

test("does not strip unrelated local aliases", () => {
  const src = "let _0xresp = _0xhttp; const ok = _0xresp;";
  const { src: next, changed } = deobfuscateSource(src);
  assert.equal(changed, false);
  assert.equal(next, src);
});

function walkJs(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "umd" || entry.name === "node_modules") continue;
      walkJs(full, out);
    } else if (/\.(js|mjs|cjs)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

test("published originals still carry javascript-obfuscator wrappers", () => {
  const files = walkJs(path.join(ROOT, "vendor/univer-pro-published"));
  assert.ok(files.length > 50, "published tree should be checked in");
  const obfuscated = files.filter((file) => looksObfuscated(readFileSync(file, "utf8")));
  assert.ok(
    obfuscated.length >= 200,
    `expected published blobs to stay obfuscated, found ${obfuscated.length}/${files.length}`
  );
});

test("decoded engine-formula ESM has no glued returnawait", () => {
  const esDir = path.join(ROOT, "vendor/univer-pro/engine-formula/lib/es");
  assert.ok(existsSync(esDir), "engine-formula ESM vendor tree");
  const glued = walkJs(esDir).filter((file) => /returnawait/.test(readFileSync(file, "utf8")));
  assert.equal(glued.length, 0, glued.map((file) => path.relative(ROOT, file)).join("\n"));
});

test("decoded ESM copies no longer carry string-array wrappers", () => {
  const files = walkJs(path.join(ROOT, "vendor/univer-pro")).filter(
    (file) => !file.includes(`${path.sep}cjs${path.sep}`)
  );
  const leftover = files.filter((file) => looksObfuscated(readFileSync(file, "utf8")));
  assert.equal(leftover.length, 0, leftover.map((file) => path.relative(ROOT, file)).join("\n"));
});

test("extra Pro UI vendor packages are decoded (no while(!![]) wrappers)", () => {
  const leftover = [];
  for (const pkg of EXTRA_PRO_UI_PACKAGES) {
    const dir = path.join(ROOT, "vendor/univer-pro", pkg);
    assert.ok(existsSync(dir), `vendor/univer-pro/${pkg} must exist`);
    for (const file of walkJs(dir)) {
      if (looksObfuscated(readFileSync(file, "utf8"))) leftover.push(path.relative(ROOT, file));
    }
  }
  assert.equal(leftover.length, 0, leftover.join("\n"));
});

test("collaboration-service CJS used by the Worker is decoded", () => {
  const cjs = path.join(ROOT, "vendor/univer-pro/collaboration-service/dist/index.cjs");
  assert.ok(existsSync(cjs), "collaboration-service dist/index.cjs");
  const src = readFileSync(cjs, "utf8");
  assert.equal(looksObfuscated(src), false, "collaboration-service CJS still has string-array wrappers");
});

test("vendor collaboration-client ESM does not start with leftover ();", () => {
  const es = path.join(ROOT, "vendor/univer-pro/collaboration-client/lib/es/index.js");
  const src = readFileSync(es, "utf8");
  assert.doesNotMatch(src, /^\s*\(\s*\)\s*;/);
  try {
    new vm.Script(src.replace(/^\s*import[\s\S]*?from\s*["'][^"']+["'];?/gm, "").replace(/\bexport\s+/g, ""));
  } catch (err) {
    if (!String(err?.message ?? err).includes("Cannot use import statement")) {
      // leftover `();` is a SyntaxError even after neutralizing imports
      if (/^Unexpected token/.test(String(err?.message ?? err))) {
        assert.fail(`collaboration-client ESM parse: ${err.message}`);
      }
    }
  }
});

test("keeps CJS originals when decode would produce invalid syntax", () => {
  const published = path.join(
    ROOT,
    "vendor/univer-pro-published/edit-history-ui/lib/cjs/index.js"
  );
  const original = readFileSync(published, "utf8");
  assert.equal(looksObfuscated(original), true);
  const { src } = deobfuscateSource(original);
  try {
    new vm.Script(src);
  } catch (err) {
    assert.fail(`CJS result must parse: ${err.message}`);
  }
});

test("git tracks vendored lib/ and dist/ (but not umd/)", () => {
  const tracked = [
    "vendor/univer-pro/collaboration-client/lib/es/index.js",
    "vendor/univer-pro-published/collaboration-client/lib/es/index.js",
    "vendor/univer-pro/collaboration-endpoint/dist/index.mjs",
    "vendor/univer-pro-published/collaboration-endpoint/dist/index.mjs"
  ];
  const ignored = [
    "vendor/univer-pro-published/collaboration-client/lib/umd/index.js"
  ];
  for (const rel of tracked) {
    const result = spawnSync("git", ["check-ignore", "-q", rel], { cwd: ROOT });
    assert.notEqual(result.status, 0, `${rel} should not be gitignored`);
  }
  for (const rel of ignored) {
    if (!existsSync(path.join(ROOT, rel))) continue;
    const result = spawnSync("git", ["check-ignore", "-q", rel], { cwd: ROOT });
    assert.equal(result.status, 0, `${rel} should stay gitignored`);
  }
});
