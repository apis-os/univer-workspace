import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { persistCompiledSvg } from "../src/integrations/univer-file-exchange.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const EXCHANGE_SRC = join(ROOT, "src/integrations/univer-file-exchange.ts");
const TINY_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 20"><rect width="40" height="20" fill="#4472c4"/></svg>';

describe("Univer File exchange compile-svg", () => {
  test("compile-svg uses compileSvgToFacade without node:fs", () => {
    const src = readFileSync(EXCHANGE_SRC, "utf8");
    assert.match(src, /compileSvgToFacade/);
    assert.match(src, /@univer-cli\/svg-facade/);
    assert.doesNotMatch(src, /from ["']node:fs["']/);
    assert.doesNotMatch(src, /exchange-node-binding/);
  });

  test("persistCompiledSvg mutates snapshot from compileSvgToFacade output", async () => {
    const unitId = "unit_svg";
    const snapshot = generateDefaultSnapshot(unitId, 2, "Sheet") as Record<string, unknown>;
    const store = new Map<string, { rev: number; data: Record<string, unknown> }>();
    store.set(unitId, { rev: 1, data: snapshot });
    const collab = {
      getLatestSnapshot(id: string) {
        return store.get(id) ?? null;
      },
      saveSnapshot(id: string, rev: number, data: Record<string, unknown>) {
        store.set(id, { rev, data });
      }
    };
    const before = JSON.stringify(store.get(unitId)?.data);
    const persisted = await persistCompiledSvg(collab, unitId, TINY_SVG);
    assert.ok(persisted.rev > 1);
    const after = JSON.stringify(store.get(unitId)?.data);
    assert.notEqual(after, before);
    assert.match(after, /insertShape|setSolidFill/);
    assert.match(after, /4472c4|#4472c4/i);
    assert.doesNotMatch(after, /"sourceType":"svg"/);
  });
});
