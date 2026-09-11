import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { Context } from "@deepseek-ai/cordis";
import { DatabaseSync } from "node:sqlite";
import type { SqlExec } from "../src/kernel/sql.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import {
  applyChangesetMutations,
  getSheetCell,
  projectSheetBlocks
} from "../src/plugins/univer-snapshot.ts";

const FORMULA = "=SUM(B2:D2)";
const SNAPSHOT_SRC = fileURLToPath(new URL("../src/plugins/univer-snapshot.ts", import.meta.url));

function createSqliteAdapter(): SqlExec {
  const db = new DatabaseSync(":memory:");
  return {
    exec: (query: string, ...binds: unknown[]) => {
      const trimmed = query.trim().toUpperCase();
      if (trimmed.startsWith("CREATE") || trimmed.startsWith("ALTER") || trimmed.startsWith("DROP")) {
        db.exec(query);
        return { toArray: () => [] };
      }
      const stmt = db.prepare(query);
      if (trimmed.startsWith("INSERT") || trimmed.startsWith("UPDATE") || trimmed.startsWith("DELETE")) {
        stmt.run(...(binds as any[]));
        return { toArray: () => [] };
      }
      return { toArray: () => stmt.all(...(binds as any[])) as Record<string, unknown>[] };
    }
  };
}

function sheetOf(snapshot: Record<string, unknown>): any {
  const workbook = (snapshot as { workbook?: { sheets?: Record<string, unknown> } }).workbook ?? snapshot;
  return (workbook as { sheets: Record<string, any> }).sheets.sheet_1;
}

function formulaMutation(unitId: string, sheetId = "sheet_1"): Record<string, unknown> {
  return {
    id: "sheet.mutation.set-range-values",
    params: {
      unitId,
      subUnitId: sheetId,
      cellValue: {
        "1": {
          "4": { v: 420, f: FORMULA }
        }
      }
    }
  };
}

function insertRowMutation(unitId: string, startRow = 1): Record<string, unknown> {
  return {
    id: "sheet.mutation.insert-row",
    params: {
      unitId,
      subUnitId: "sheet_1",
      range: { startRow, endRow: startRow, startColumn: 0, endColumn: 19 }
    }
  };
}

function insertColMutation(unitId: string, startColumn = 1): Record<string, unknown> {
  return {
    id: "sheet.mutation.insert-col",
    params: {
      unitId,
      subUnitId: "sheet_1",
      range: { startRow: 0, endRow: 0, startColumn, endColumn: startColumn }
    }
  };
}

describe("T12 materialize Facade mutations onto collaborative snapshots", () => {
  test("applies via decoded collaboration-service helpers, not a third mutator", () => {
    const src = readFileSync(SNAPSHOT_SRC, "utf8");
    assert.match(src, /collaboration-service/);
    assert.match(src, /UniverUnitRuntime|UnitSnapshotMaterializer/);
    assert.doesNotMatch(src, /engine-formula-rust-binding/);
    assert.doesNotMatch(src, /exchange-node-binding/);
    assert.doesNotMatch(src, /collaboration-transport-node/);
    assert.match(src, /export function projectSheetBlocks/);
  });

  test("set-range { v, f: \"=SUM(B2:D2)\" } persists both on the snapshot", async () => {
    const unitId = "unit_formula";
    const snapshot = generateDefaultSnapshot(unitId, 2, "Forecast") as Record<string, unknown>;
    const next = await applyChangesetMutations(snapshot, {
      unitID: unitId,
      revision: 2,
      mutations: [formulaMutation(unitId)]
    });
    const cell = getSheetCell(next, "E2");
    assert.equal(cell?.f, FORMULA);
    assert.equal(cell?.v, 420);
    assert.equal((next as { rev?: number }).rev, 2);
  });

  test("insert-row and insert-col shift cells when Facade emits those mutation ids", async () => {
    const unitId = "unit_insert";
    const snapshot = generateDefaultSnapshot(unitId, 2, "Grid") as Record<string, unknown>;
    const seeded = await applyChangesetMutations(snapshot, {
      unitID: unitId,
      revision: 2,
      mutations: [
        {
          id: "sheet.mutation.set-range-values",
          params: {
            unitId,
            subUnitId: "sheet_1",
            cellValue: {
              "0": { "0": { v: "keep" }, "1": { v: "col-shift" } },
              "1": { "0": { v: "row-shift" } }
            }
          }
        }
      ]
    });
    const afterRow = await applyChangesetMutations(seeded, {
      unitID: unitId,
      revision: 3,
      mutations: [insertRowMutation(unitId, 1)]
    });
    assert.equal(getSheetCell(afterRow, "A1")?.v, "keep");
    assert.equal(getSheetCell(afterRow, "A2")?.v, undefined);
    assert.equal(getSheetCell(afterRow, "A3")?.v, "row-shift");
    assert.equal(sheetOf(afterRow).rowCount, sheetOf(snapshot).rowCount + 1);

    const afterCol = await applyChangesetMutations(afterRow, {
      unitID: unitId,
      revision: 4,
      mutations: [insertColMutation(unitId, 1)]
    });
    assert.equal(getSheetCell(afterCol, "A1")?.v, "keep");
    assert.equal(getSheetCell(afterCol, "B1")?.v, undefined);
    assert.equal(getSheetCell(afterCol, "C1")?.v, "col-shift");
    assert.equal(sheetOf(afterCol).columnCount, sheetOf(snapshot).columnCount + 1);
  });

  test("unknown mutation id is stored without corrupting the snapshot", async () => {
    const sql = createSqliteAdapter();
    const collab = new UniverCollabService(new Context(), sql);
    const unitId = "unit_unknown";
    const snapshot = generateDefaultSnapshot(unitId, 2, "Safe") as Record<string, unknown>;
    collab.createUnit(unitId, 2, "Safe", snapshot);
    const seeded = await applyChangesetMutations(snapshot, {
      unitID: unitId,
      revision: 2,
      mutations: [
        {
          id: "sheet.mutation.set-range-values",
          params: {
            unitId,
            subUnitId: "sheet_1",
            cellValue: { "0": { "0": { v: "seed" } } }
          }
        }
      ]
    });
    collab.saveSnapshot(unitId, 1, seeded);

    const unknown = {
      id: "cs_unknown",
      unitID: unitId,
      revision: 3,
      mutations: [{ id: "sheet.mutation.definitely-not-real", params: { smash: true } }]
    };
    const result = collab.applyChangeset(unknown, "member_avery");
    assert.equal(result.success, true);
    const stored = collab.getChangesetsSince(unitId, 2);
    assert.equal(stored.length, 1);
    assert.equal((stored[0] as { mutations?: Array<{ id?: string }> }).mutations?.[0]?.id, "sheet.mutation.definitely-not-real");

    const applied = await applyChangesetMutations(collab.getLatestSnapshot(unitId)!.data, unknown);
    assert.equal(getSheetCell(applied, "A1")?.v, "seed");
    assert.equal(sheetOf(applied).rowCount, sheetOf(snapshot).rowCount);
  });

  test("projectSheetBlocks still lists cellData so loadSheet can hydrate", async () => {
    const unitId = "unit_blocks";
    const snapshot = generateDefaultSnapshot(unitId, 2, "Blocks") as Record<string, unknown>;
    const next = await applyChangesetMutations(snapshot, {
      unitID: unitId,
      revision: 2,
      mutations: [formulaMutation(unitId)]
    });
    const projected = projectSheetBlocks(next);
    assert.ok(Array.isArray(projected.snapshot.workbook.blockMeta.sheet_1.blocks));
    assert.ok(projected.snapshot.workbook.blockMeta.sheet_1.blocks.length >= 1);
    assert.equal(projected.blocks[0]?.data["1"]["4"]?.f, FORMULA);
    assert.equal(projected.blocks[0]?.data["1"]["4"]?.v, 420);
  });
});
