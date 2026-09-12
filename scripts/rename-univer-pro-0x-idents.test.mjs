import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { abortIfCqStubRestored, rename0xIdents } from "./rename-univer-pro-0x-idents.mjs";

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

test("heals unglue-split delete Ident object keys then parses", () => {
  const original =
    "function _0xaaa(){let {pivotTableId:_0xbbb, delete Ids:_0xccc}=x;return _0xccc+\"_0xdead\";}\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "delete Ids key must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /deleteIds/);
  assert.doesNotMatch(src, /delete Ids/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
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

test("heals extra };ident after a closed function then parses", () => {
  const original =
    "function _0xaaa(){ return \"_0xdead\"; }\n" +
    "}\n" +
    "};xw=_0xaaa;\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "extra };ident residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /xw=/);
  assert.doesNotMatch(src, /\n}\n};xw=/);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
});

test("heals Object.entries split, typeof==, and for(var residue then parses", () => {
  const original =
    "function _0xaaa(obj){\n" +
    "  let x = Object.fromEntries(Object);\n" +
    "}\n" +
    ".entries(obj).map(y=>y));}\n" +
    "let ju = typeof Map;\n" +
    "==\"function\";\n" +
    "function _0xbbb(){\n" +
    "  return ju ? \"_0xdead\" : 0;\n" +
    "}\n" +
    "r(var _0x1a=1;_0x1a;);\n" +
    "export { _0xaaa as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false, "unglue Object.entries/typeof/for residue must parse after heal");
  assert.equal(changed, true);
  assert.match(src, /fromEntries\(Object\.entries\(/);
  assert.match(src, /typeof Map==\"function\"/);
  assert.match(src, /for\(var /);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
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

test("renames nested function locals inside an unparseable IIFE including the inner function name", () => {
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
  assert.match(src, /function v\d+\(/);
  assert.doesNotMatch(src, /_0x12ef\b/);
  assert.doesNotMatch(src, /\b_0xabcd\b/);
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

test("renames unbound leftover decoder calls but keeps matching string literals", () => {
  const original = 'foo(_0xdead01(1));\nconst k = "_0xdead01";\nexport { z as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead01"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /foo\(oxdead01\(1\)\)/);
  assert.doesNotMatch(src, /foo\(_0xdead01\(/);
});

test("renames an unbound decoder assigned into a non-hex local", () => {
  const original =
    'function f(){var v99=_0xdead01;return v99(1)+"_0xdead";}\nexport { f as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /oxdead01/);
  assert.doesNotMatch(src, /=\s*_0xdead01\b/);
});

test("splits a nested inner export from an unclosed IIFE and still renames prefix locals", () => {
  const original =
    "(function(){else{\n" +
    'let _0xaaa=1;void(_0xaaa+"_0xdead");\n' +
    "export { Ui as PublicUi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as PublicUi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("renames locals inside a for-loop window when the parent IIFE does not parse", () => {
  const original =
    "(function(){else{\n" +
    'for(let _0xccc=0;_0xccc<1;_0xccc++){void(_0xccc+"_0xdead");}\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xccc\b/);
});

test("renames params inside a concise object method window when the parent IIFE does not parse", () => {
  const original =
    "(function(){else{\n" +
    'const o={foo(_0xaaa){return _0xaaa+"_0xdead";}};\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("extracts a complete inner hex function from an unparseable else block and renames its recursive binding", () => {
  const original =
    "(function(){else{\n" +
    "function _0xab12(a){ return a+_0xab12; }\n" +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /function v\d+\(a\)/);
  assert.match(src, /a\s*\+\s*v\d+/);
  assert.doesNotMatch(src, /\b_0xab12\b/);
});

test("inserts a semicolon after else{ only at a proven statement boundary then renames the bound local", () => {
  const original =
    '(function(){else{var _0xaaa=1function _0xbbb(_0xccc){return _0xccc+_0xaaa+"_0xdead";}}})();\n' +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /1;function/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
  assert.doesNotMatch(src, /\b_0xccc\b/);
  assert.doesNotMatch(src, /1function/);
});

test("does not insert a semicolon before a callback function argument", () => {
  const original =
    '(function(){else{foo(function(_0xaaa){return _0xaaa+"_0xdead";});}})();\n' +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /foo\(function/);
  assert.doesNotMatch(src, /foo\(;function/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("renames a parseable prefix of an unclosed hex function inside an unparseable else block", () => {
  const original =
    "(function(){else{\n" +
    "function _0xab12(_0xaaa){var _0xbbb=_0xaaa;void(_0xbbb+_0xab12);else{\n" +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
  assert.doesNotMatch(src, /\b_0xbbb\b/);
  assert.doesNotMatch(src, /\b_0xab12\b/);
});

test("renames an unbound decoder used as a for-of source", () => {
  const original = 'for(let v1 of _0xdead01)void(v1+"_0xdead");\nexport { z as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /oxdead01/);
  assert.doesNotMatch(src, /\b_0xdead01\b/);
});

test("renames a nested class method when an outer concise method window does not parse", () => {
  const original =
    "(function(){else{\n" +
    'outer(_0xstuck){foo(){var _0xaaa=1;return _0xaaa+"_0xdead";}return _0xstuck;}\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("renames a hex var statement inside an unparseable else block", () => {
  const original =
    "(function(){else{\n" +
    'void(1);var _0xaaa=2;void(_0xaaa+"_0xdead");else{\n' +
    "}})();\n" +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xdead"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /\b_0xaaa\b/);
});

test("loose-parses an unclosed hex function and renames both bindings without adding a brace", () => {
  const original = "function _0xcc01(a){ return a+_0xcc01";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function v\d+\(a\)/);
  assert.match(src, /a\s*\+\s*v\d+/);
  assert.doesNotMatch(src, /\b_0xcc01\b/);
  assert.equal(src.includes("}"), false, "must not close the function in the written source");
});

test("loose-parse keeps string leftovers and export aliases while renaming bound identifiers", () => {
  const original =
    'function _0xcc01(a){ return a+_0xcc01+"_0xcc01"\n' +
    "export { z as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0xcc01"/);
  assert.match(src, /as publicApi/);
  assert.doesNotMatch(src, /function\s+_0xcc01\b/);
  assert.doesNotMatch(src, /\+_0xcc01/);
  const open = (src.match(/\{/g) || []).length;
  const close = (src.match(/\}/g) || []).length;
  assert.equal(close, open - 1, "must not add a closing brace to the unclosed function");
});

test("loose-parses optional-chain residue and still renames import and let bindings", () => {
  const original =
    "import{ISnapshotServerService as _0xb1346a}from'x';\n" +
    "function f(){let _0xec34fb=this.blocks?..find(v=>v);return _0xec34fb+_0xb1346a;}\n" +
    "export { f as publicApi };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /as publicApi/);
  assert.match(src, /\?\.\./);
  assert.doesNotMatch(src, /\b_0xb1346a\b/);
  assert.doesNotMatch(src, /\b_0xec34fb\b/);
});

test("renames unbound constructor and prototype identifier refs but keeps matching string literals", () => {
  const original =
    'var AG="graph",jG=function(s){if(0){function C(){return 1;}};},' +
    'new _0x5554c2,_0x5554c2.prototype.x=1,_0x5554c2.call(this),_0x5554c2;}(oO);\n' +
    'const k="_0x5554c2";\nexport { z as publicApi };\n';
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /"_0x5554c2"/);
  assert.match(src, /as publicApi/);
  assert.match(src, /new ox5554c2\b/);
  assert.match(src, /ox5554c2\.prototype/);
  assert.match(src, /ox5554c2\.call/);
  assert.doesNotMatch(src, /new _0x5554c2\b/);
  assert.doesNotMatch(src, /_0x5554c2\.prototype/);
  assert.doesNotMatch(src, /_0x5554c2\.call/);
});

test("keeps emptied _registerRenderModules body while renaming nearby hex locals", () => {
  const original =
    "class P{foo(_0xab12){return _0xab12;}_registerRenderModules(){}_initRegisterCommand(){this.bar=1;}}\n" +
    "export { P as PivotPlugin };\n";
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /_registerRenderModules\s*\(\s*\)\s*\{\s*\}/);
  assert.doesNotMatch(src, /\["registerRenderModule"\]|\.registerRenderModule\s*\(/);
  assert.doesNotMatch(src, /\b_0xab12\b/);
  assert.match(src, /as PivotPlugin/);
});

test("aborts when emptied CQ stub would regain registerRenderModule", () => {
  const original = "class P{_registerRenderModules(){}_initRegisterCommand(){}}";
  const next =
    'class P{_registerRenderModules(){this._renderManagerService["registerRenderModule"](1);}_initRegisterCommand(){}}';
  const result = abortIfCqStubRestored(original, next);
  assert.equal(result.aborted, true);
  assert.equal(result.src, original);
  assert.match(String(result.reason), /registerRenderModule/);
});

test("does not abort CQ-bearing twins that still register render modules", () => {
  const original =
    'class P{_registerRenderModules(){this._renderManagerService["registerRenderModule"](_0xab12);}_initRegisterCommand(){}}';
  const next =
    'class P{_registerRenderModules(){this._renderManagerService["registerRenderModule"](v1);}_initRegisterCommand(){}}';
  const result = abortIfCqStubRestored(original, next);
  assert.equal(result.aborted, false);
  assert.equal(result.src, next);
});
