import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  inferMeaningfulIdents,
  splitHugeModule
} from "./infer-univer-pro-variable-idents.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FIXTURE = path.join(ROOT, "scripts/fixtures/variable-ident-infer.fixture.js");

test("export alias becomes the function base name; string leftover and Comb keys stay", () => {
  const original = readFileSync(FIXTURE, "utf8");
  const { src, changed, aborted, matchedPublicAs } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/bases/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.equal(matchedPublicAs, 1);
  assert.match(src, /function\s+FFormula\s*\(/);
  assert.doesNotMatch(src, /function\s+v3654\b/);
  assert.match(src, /"v3654"/);
  assert.match(src, /eventID/);
  assert.match(src, /collaMsg/);
});

test("aborts a bare export { v3654 } with no alias and does not rewrite", () => {
  const original = "function v3654(){ return 1; }\nexport { v3654 };\n";
  const { src, changed, aborted, reason } = inferMeaningfulIdents(original);
  assert.equal(aborted, true);
  assert.equal(changed, false);
  assert.equal(src, original);
  assert.match(String(reason), /v3654/);
});

test("import alias local is renamed from the imported public name", () => {
  const original =
    'import { Foo as v6 } from "x";\nvoid v6;\nconst k = "v6";\nexport { z as publicApi };\n';
  const { src, aborted, changed } = inferMeaningfulIdents(original);
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /\bFoo\b/);
  assert.doesNotMatch(src, /\bas\s+v6\b/);
  assert.match(src, /"v6"/);
});

test("infers a variable name from initializer type the same way functions use usage/types", () => {
  const original =
    "function host(v3654){\n  const v3655 = Date.now();\n  return v3654 + v3655;\n}\nexport { host as publicApi };\n";
  const { src, aborted, changed } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/bases/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.doesNotMatch(src, /\bv3654\b/);
  assert.doesNotMatch(src, /\bv3655\b/);
  assert.match(src, /timestamp|Ms|num|count/i);
});

test("function bindings without a public alias get the same 8-atom fn_ name pipeline", () => {
  const original = "function v3654(a){ return a + 1; }\nexport { host as publicApi };\n";
  const { src, aborted, changed } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/bases/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.match(src, /function\s+fn_L0_db_endo_routine_/);
  assert.doesNotMatch(src, /function\s+v3654\b/);
});

test("splitter uses ast-refactor LST module clusters and keeps a working barrel export", () => {
  const parts = [];
  for (let i = 0; i < 12; i += 1) {
    parts.push(`export function fn_${i}(){\n  return ${i};\n}`);
  }
  const src = `${parts.join("\n")}\n`;
  const split = splitHugeModule(src, {
    filePath: "index.js",
    maxLines: 8
  });
  assert.ok(split.files.length > 2, "must emit more than a single chunk plus barrel");
  const barrel = split.files.find((f) => f.rel === "index.js");
  assert.ok(barrel, "index.js barrel must remain");
  assert.match(barrel.code, /export\s*\{/);
  assert.match(barrel.code, /from\s+['"]\.\//);
  const chunk = split.files.find((f) => f.rel !== "index.js");
  assert.ok(chunk);
  assert.match(chunk.code, /export\s+(?:function|\{)/);
  assert.match(barrel.code, /ApplyBaseJson1Mutation|fn_\d+/);
});

test("splitter adds import bridges when a later chunk references an earlier binding", () => {
  const src =
    `function helper(){\n  return 1;\n}\n` +
    `${Array.from({ length: 10 }, (_, i) => `export function keep_${i}(){\n  return ${i};\n}`).join("\n")}\n` +
    `export function later(){\n  return helper();\n}\n`;
  const split = splitHugeModule(src, { filePath: "index.js", maxLines: 8 });
  const later = split.files.find((f) => f.rel !== "index.js" && /function later/.test(f.code));
  const helperChunk = split.files.find((f) => f.rel !== "index.js" && /function helper/.test(f.code));
  assert.ok(later && helperChunk, "helper and later must be emitted");
  if (later.rel !== helperChunk.rel) {
    assert.match(later.code, /import\s*\{[^}]*helper[^}]*\}\s*from\s*['"]\.\//);
  }
});
