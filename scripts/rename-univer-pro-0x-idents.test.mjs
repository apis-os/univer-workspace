import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { rename0xIdents } from "./rename-univer-pro-0x-idents.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FIXTURE = path.join(ROOT, "scripts/fixtures/0x-ident-rename.fixture.js");
const FACADE = path.join(ROOT, "vendor/univer-pro/engine-formula/lib/es/facade.js");

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

test("dry-run keeps FFormula export on engine-formula facade without inventing string _0x keys", () => {
  const original = readFileSync(FACADE, "utf8");
  assert.match(original, /export\s*\{\s*_0x[0-9a-f]+\s+as\s+FFormula\s*\}/i);
  const beforeStrings = [...original.matchAll(/["']_0x[0-9a-f]+["']/gi)].map((m) => m[0]);
  const { src, aborted, changed } = rename0xIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /export\s*\{[^}]*\bas\s+FFormula\b/);
  assert.doesNotMatch(src, /export\s*\{\s*_0x[0-9a-f]+\s+as\s+FFormula\s*\}/i);
  const afterStrings = [...src.matchAll(/["']_0x[0-9a-f]+["']/gi)].map((m) => m[0]);
  assert.deepEqual(afterStrings, beforeStrings);
});
