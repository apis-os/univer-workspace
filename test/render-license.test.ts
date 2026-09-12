import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const RENDER_MAIN = join(ROOT, "apps/workspace/web/src/render-main.tsx");
const BROWSER = join(ROOT, "src/integrations/browser-rendering.ts");

describe("/render license and sheet capture", () => {
  test("rejoins reserved words inside Univer Pro import lists", async () => {
    const { unglueUniverProReservedImports, isUniverProModule } = await import(
      "../apps/workspace/unglue-univer-pro-imports.mjs"
    );
    assert.equal(
      unglueUniverProReservedImports(
        'import{createSlideTableResourceHook as _0x4d9b35,delete SlideTableColumns as _0x2b64c5}from"x";function rt(x){return typeof x=="string"}delete Table(id){return id;}'
      ),
      'import{createSlideTableResourceHook as _0x4d9b35,deleteSlideTableColumns as _0x2b64c5}from"x";function rt(x){return typeof x=="string"}deleteTable(id){return id;}'
    );
    assert.equal(
      unglueUniverProReservedImports("async function f(Pd){return await Pd(1)}"),
      "async function f(Pd){return await Pd(1)}"
    );
    assert.equal(isUniverProModule("/vendor/univer-pro/boards-table/lib/es/index.js"), true);
    const { stubProModuleFromExportList, shouldStubBrokenProIndex } = await import(
      "../apps/workspace/unglue-univer-pro-imports.mjs"
    );
    assert.match(
      stubProModuleFromExportList("function x(){}export{Y as DocsPrintMenuSchema,$ as UniverDocsPrintPlugin};"),
      /export const UniverDocsPrintPlugin = __proStub/
    );
    assert.match(
      stubProModuleFromExportList("export {\n  CHART_FACADE_RANDOM_ID_LENGTH,\n  FChart as FChart,\n};\n"),
      /export const CHART_FACADE_RANDOM_ID_LENGTH/
    );
    assert.equal(
      shouldStubBrokenProIndex("/node_modules/@univerjs-pro/engine-chart/lib/es/index.js"),
      true
    );
    assert.equal(
      shouldStubBrokenProIndex("/node_modules/@univerjs-pro/engine-chart/lib/es/locale/en-US.js"),
      false
    );
    assert.equal(
      shouldStubBrokenProIndex("/node_modules/@univerjs-pro/sheets-print/lib/es/index.js"),
      true
    );
  });

  test("boots Univer License instead of skipping plugins", () => {
    const src = readFileSync(RENDER_MAIN, "utf8");
    assert.match(src, /UniverLicensePlugin/);
    assert.match(src, /resolveUniverLicense/);
    assert.doesNotMatch(src, /plugins:\s*\[\s*\]/);
    assert.match(src, /mergeLocales/);
    assert.match(src, /UniverPresetSheetsCoreEnUS/);
    assert.match(src, /plugins: \[\[UniverLicensePlugin, \{ license \}\]\]/);
    assert.match(src, /registerPlugin/);
    assert.match(src, /createUnit/);
    assert.match(src, /FUniver\.newAPI/);
  });

  test("aliases workers.dev onto the built-in localhost license", () => {
    const license = readFileSync(join(ROOT, "apps/workspace/web/src/features/editor/univer-license.ts"), "utf8");
    assert.match(license, /univer-workspace\.apisos\.workers\.dev/);
    assert.match(license, /hostnameForBuiltInLicense/);
    assert.match(license, /installBuiltInLicenseHostAlias/);
  });

  test("screenshot waits for a canvas, not an empty ready stub", () => {
    const src = readFileSync(BROWSER, "utf8");
    assert.match(src, /querySelector\(['"]canvas['"]\)/);
    assert.match(src, /__univerBuiltinAlias/);
    assert.match(src, /return 'localhost'/);
  });
});
