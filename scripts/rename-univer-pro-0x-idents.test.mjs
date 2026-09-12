import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { rename0xIdents } from "./rename-univer-pro-0x-idents.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FIXTURE = path.join(ROOT, "scripts/fixtures/0x-ident-rename.fixture.js");

test("renames hex locals but keeps string keys, string literals, and export aliases", () => {
  const original = readFileSync(FIXTURE, "utf8");
  const { src, changed, aborted } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function v\d+/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /export\s*\{[^}]*\bas\s+publicApi\b/);
  assert.match(src, /eventID/);
  assert.doesNotMatch(src, /function\s+_0x12ab\b/);
  assert.equal(src.includes('"_0xdead"'), true);
  const stringHits = [...src.matchAll(/["']_0x[0-9a-f]+["']/gi)];
  assert.ok(stringHits.length >= 2, "string literals must survive");
});

test("aborts a bare export { _0x } with no alias and does not rewrite", () => {
  const original = "function _0x123(){ return 1; }\nexport { _0x123 };\n";
  const { src, changed, aborted, reason } = rename0xIdents(original);
  assert.equal(aborted, true);
  assert.equal(changed, false);
  assert.equal(src, original);
  assert.match(String(reason), /_0x123/);
});

test("heals unglue-split delete export aliases then renames locals", () => {
  const original =
    'function _0x12ab(){ return "_0xdead"; }\nexport { _0x12ab as delete SmartArtNode };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "delete-split export alias must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /function v\d+/);
  assert.match(src, /as deleteSmartArtNode/);
  assert.match(src, /"_0xdead"/);
});

test("heals unglue-split delete methods and empty rotator IIFE residue", () => {
  const original =
    "var td=(function(){()),nd=(function(){return 1;})();\n" +
    "class C { delete Foo(_0x1a){ return _0x1a + \"_0xdead\"; } }\n" +
    "export { nd as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /deleteFoo/);
  assert.match(src, /function\(\)\{\}/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0x1a\b/);
});

test("heals leftover decoder object residue then renames locals", () => {
  const original =
    "function _0xaaa(){var _0xbbb=Df,_0xccc,_0xddd,_0xeee=0,_0xfff=[];_0xccc=[],_0xddd=[];,'quadraticIn':function(_0x1a){return _0x1a+\"_0xdead\";}},Hf=1;}\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "easing-map residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0x1a\b/);
});

test("heals let-list arrow then nested function and renames across in-memory chunks", () => {
  const original =
    "function _0xaaa(){let _0xbbb=()=>{return \"_0xdead\";}function _0xccc(_0x1a){return _0x1a;}return _0xccc;}\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "ASI }function residue must parse after heal or chunk split");
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0x1a\b/);
  assert.doesNotMatch(src, /function\s+_0xaaa\b/);
});

test("renames nested function locals inside an unparseable IIFE and keeps the inner function name", () => {
  const original =
    "var z=1;\n" +
    "(function(){else{\n" +
    "function _0xabcd(_0x12ef){ return _0x12ef + \"_0xdead\"; }\n" +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /function _0xabcd\(/);
  assert.doesNotMatch(src, /_0x12ef\b/);
  assert.match(src, /as publicApi/);
});

test("wraps return fragments so locals rename while string keys stay", () => {
  const original = "let _0xaaa=1;return _0xaaa + \"_0xdead\";\nexport { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /_0xaaa\b/);
  assert.match(src, /as publicApi/);
});

test("splits a class before an undeclared export alias and still renames constructor locals", () => {
  const original =
    'let WD=class{constructor(_0xaaa){this.x=_0xaaa+"_0xdead";}};export{Ui as PublicUi};\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as PublicUi/);
  assert.doesNotMatch(src, /_0xaaa\b/);
});

test("skips an unparseable residue chunk and still renames a later sibling function", () => {
  const original =
    "(function(){else{ var _0xstuck=1; }})();\n" +
    "function _0xbbb(_0xccc){ return _0xccc + \"_0xdead\"; }\n" +
    "export { _0xbbb as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xccc\b/);
  assert.match(src, /_0xstuck\b/);
});

test("keeps FFormula-style export alias and does not invent string _0x keys", () => {
  const original = 'function _0x12ab(){ return "_0xdead"; }\nexport { _0x12ab as FFormula };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /export\s*\{[^}]*\bas\s+FFormula\b/);
  assert.match(src, /"_0xdead"/);
  assert.doesNotMatch(src, /export\s*\{\s*_0x[0-9a-f]+\s+as\s+FFormula\s*\}/i);
});

test("heals await-split import alias then renames locals", () => {
  const original =
    'import { await Time as _0xaaa } from "@univerjs/core";\n' +
    'function _0xbbb(_0xccc){ return _0xccc + "_0xdead"; }\n' +
    "export { _0xbbb as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "await Time as must parse as awaitTime after heal");
  assert.equal(changed, true);
  assert.match(src, /awaitTime\s+as/);
  assert.doesNotMatch(src, /\bawait\s+Time\b/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xccc\b/);
});

test("heals URLSearchParams constructor residue then renames locals", () => {
  const original =
    'function _0xaaa(_0xbbb){ return new URL();SearchParams(_0xbbb).toString() + "_0xdead"; }\n' +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "URL();SearchParams must parse as URLSearchParams after heal");
  assert.equal(changed, true);
  assert.match(src, /URLSearchParams/);
  assert.doesNotMatch(src, /URL\(\);SearchParams/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xbbb\b/);
});

test("renames nested function locals when body is return-regex with protocol slashes", () => {
  const original =
    "(function(){else{\n" +
    'function fc(_0x196237){return/^[a-zA-Z]+:\\/\\//["test"](_0x196237)+"_0xdead";}\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function fc\(/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0x196237\b/);
});

test("renames class method params inside an unparseable IIFE", () => {
  const original =
    "(function(){else{\n" +
    'class C { foo(_0xaaa){ return _0xaaa + "_0xdead"; } }\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /_0xaaa\b/);
});

test("splits }export{ without semicolon and still renames constructor locals", () => {
  const original =
    'let WD=class{constructor(_0xaaa){this.x=_0xaaa+"_0xdead";}}export{Ui as PublicUi};\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as PublicUi/);
  assert.doesNotMatch(src, /_0xaaa\b/);
});
