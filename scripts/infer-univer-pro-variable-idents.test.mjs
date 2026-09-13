import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  functionBodyStatementSlices,
  inferMeaningfulIdents,
  inferStatementLikePieces,
  splitHugeModule,
  statementLikeCutOffsets,
  uniqueifyCollidingInferredNames,
  renameLeftoverCrypticTokens
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

test("unique-ifies Bloom-colliding inferred function names instead of emitting duplicates", () => {
  const fns = Array.from({ length: 52 }, (_, i) => `function v${2000 + i}(){ return ${i}; }`).join("\n");
  const original = `${fns}\nexport { host as publicApi };\n`;
  const { src, aborted, changed } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/boards-ui/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.equal(changed, true);
  const names = [...src.matchAll(/function\s+(fn_[A-Za-z0-9_]+)/g)].map((m) => m[1]);
  assert.ok(names.length >= 52, `expected >=52 inferred functions, got ${names.length}`);
  assert.equal(new Set(names).size, names.length, "Bloom collisions must unique-ify");
  assert.doesNotMatch(src, /function\s+v20\d+\b/);
});

test("unique-ifies already-emitted colliding inferred names so leftover bindings can parse", () => {
  const dup = "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F";
  const original =
    `function ${dup}(){ return 1; }\n` +
    `function ${dup}(){ return 2; }\n` +
    `function v3654(){ return 3; }\n` +
    "export { host as publicApi };\n";
  const unique = uniqueifyCollidingInferredNames(original);
  assert.match(unique.src, new RegExp(`function\\s+${dup}\\(`));
  assert.notEqual(unique.src, original);
  const { src, aborted, changed } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/boards-ui/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.doesNotMatch(src, /function\s+v3654\b/);
  const names = [...src.matchAll(/function\s+(fn_[A-Za-z0-9_]+)/g)].map((m) => m[1]);
  assert.equal(new Set(names).size, names.length);
});

test("unique-ify does not rewrite colliding names inside string literals", () => {
  const dup = "fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F";
  const original =
    `function ${dup}(){ return 1; }\n` +
    `function ${dup}(){ return "${dup}"; }\n` +
    "export { host as publicApi };\n";
  const { src } = uniqueifyCollidingInferredNames(original);
  assert.match(src, new RegExp(`"${dup}"`));
  const decls = [...src.matchAll(/function\s+(fn_[A-Za-z0-9_]+)\s*\(/g)].map((m) => m[1]);
  assert.equal(decls.length, 2);
  assert.equal(new Set(decls).size, 2);
});

test("unique-ify does not treat class extends as a class name", () => {
  const original =
    "var Mc = class extends kc { foo(){ return 1; } };\n" +
    "var Nc = class extends kc { bar(){ return 2; } };\n" +
    "function v3654(){ return 3; }\n" +
    "export { host as publicApi };\n";
  const unique = uniqueifyCollidingInferredNames(original);
  assert.match(unique.src, /class extends kc/);
  assert.doesNotMatch(unique.src, /class extends_\d+/);
  const { src, aborted } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/engine-chart/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.doesNotMatch(src, /function\s+v3654\b/);
  assert.match(src, /class extends /);
});

test("loc-slices inner statements of a function when they have locations", () => {
  const src =
    "function IM(v1){\n" +
    "  let v2 = 1;\n" +
    "  function v3(v4){ return v2 + v4; }\n" +
    "  return v3(v1);\n" +
    "}\n";
  const slices = functionBodyStatementSlices(src, "IM.js");
  assert.ok(slices && slices.length >= 3, "function body must expose inner statement locs");
  assert.ok(slices.every((s) => Number.isInteger(s.start) && s.end > s.start));
  assert.match(slices.map((s) => s.code).join(""), /let v2/);
  assert.match(slices.map((s) => s.code).join(""), /function v3/);
});

test("cuts mega-line residue at })(),ident=function and },ident= using source offsets", () => {
  const src =
    "for(var v18483=1;v18483;)v18483=0;},v18485.prototype.x=function(v18473){this._draggingTarget=null;},v18485})(),rd=function(v18468){return v18468;}(),id=Math.log(2);";
  const cuts = statementLikeCutOffsets(src);
  assert.ok(
    cuts.some((c) => src.slice(c).startsWith("})(),rd=function")),
    "must cut at })(),rd=function"
  );
  assert.ok(
    cuts.some((c) => src.slice(c).startsWith("},v18485.prototype") || src.slice(c).startsWith("v18485.prototype")),
    "must cut at },ident.prototype or the following prototype assignment"
  );
});

test("infers parseable statement-like pieces and splices them back", () => {
  const original =
    "for(var v18483=1;v18483;)v18483=0;},v18485.prototype.x=function(v18473){this._draggingTarget=null;},v18485})(),rd=function(v18468){return v18468+\"keep\";}();\n" +
    "export { rd as publicApi };\n";
  const { src, inferred } = inferStatementLikePieces(original, "vendor/univer-pro/engine-chart/lib/es/index.js");
  assert.ok(inferred >= 1, "rd=function piece must infer");
  assert.match(src, /as publicApi/);
  assert.match(src, /"keep"/);
  assert.doesNotMatch(src, /\bv18468\b/);
});

test("infers complete inner cryptic functions when the parent IIFE does not parse", () => {
  const original =
    "(function(){else{\nfunction v18468(v18467){return v18467+\"keep\";}\n}})();\n";
  const { src, inferred } = inferStatementLikePieces(original, "vendor/univer-pro/engine-chart/lib/es/index.js");
  assert.ok(inferred >= 1, "inner function v18468 must infer");
  assert.match(src, /"keep"/);
  assert.doesNotMatch(src, /\bv18467\b/);
});

test("token-renames leftover after a regex literal that contains quotes", () => {
  const original =
    'var hd=/([&<>"\'])/g;function v18356(v18354){return v18356+"keep";}\n' +
    "export { host as publicApi };\n";
  const { src, renamed } = renameLeftoverCrypticTokens(original, "vendor/univer-pro/engine-chart/lib/es/index.js");
  assert.ok(renamed >= 1);
  assert.doesNotMatch(src, /function v18356/);
  assert.doesNotMatch(src, /\(v18354\)/);
  assert.match(src, /"keep"/);
  assert.match(src, /as publicApi/);
});

test("token-renames leftover cryptic identifiers but keeps string leftovers and Comb keys", () => {
  const original =
    "function host(v18482){ v18482.prototype.x = 1; return v18482 + \"v18482\"; }\n" +
    "export { host as publicApi };\n";
  const { src, renamed } = renameLeftoverCrypticTokens(original, "vendor/univer-pro/engine-chart/lib/es/index.js");
  assert.ok(renamed >= 1);
  assert.doesNotMatch(src, /host\(v18482\)/);
  assert.doesNotMatch(src, /return v18482 /);
  assert.match(src, /"v18482"/);
  assert.match(src, /as publicApi/);
});

test("unique-ifies colliding inferred const names so leftover bindings can parse", () => {
  const dup = "var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46";
  const original =
    `const ${dup} = 1;\n` +
    `const ${dup} = 2;\n` +
    "function v3654(){ return 3; }\n" +
    "export { host as publicApi };\n";
  const unique = uniqueifyCollidingInferredNames(original);
  assert.match(unique.src, new RegExp(`const\\s+${dup}\\s*=`));
  assert.notEqual(unique.src, original);
  const { src, aborted, changed } = inferMeaningfulIdents(original, {
    filePath: "vendor/univer-pro/engine-chart/lib/es/index.js"
  });
  assert.equal(aborted, false);
  assert.equal(changed, true);
  assert.doesNotMatch(src, /function\s+v3654\b/);
});
