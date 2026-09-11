import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { Context } from "@deepseek-ai/cordis";
import { DatabaseSync } from "node:sqlite";
import { createMockD1 } from "./mock-d1.ts";
import { ensureDemoData, initControlPlaneSchema, seedControlPlane } from "../src/control-plane/schema.ts";
import { verifyPassword } from "../src/control-plane/auth.ts";
import {
  buildQ3ForecastSnapshot,
  decodeOriginalMeta,
  getSheetCell,
  resolveWelcomeUnitSnapshot,
  shouldSkipDemoSnapshot
} from "../src/plugins/univer-demo-snapshot.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { UniverCollabService } from "../src/plugins/univer-collab.ts";
import type { SqlExec } from "../src/kernel/sql.ts";

const WELCOME_UNIT_ID = "unit_welcome_sheet";

type Resource = { name?: string; data?: string };

function workbookOf(snapshot: Record<string, unknown>): any {
  return (snapshot as any).workbook ?? snapshot;
}

function decodedWorkbookMeta(snapshot: Record<string, unknown>): Record<string, unknown> {
  const workbook = workbookOf(snapshot);
  return decodeOriginalMeta(workbook.originalMeta) ?? {};
}

function resourcesOf(snapshot: Record<string, unknown>): Resource[] {
  const workbook = workbookOf(snapshot);
  const fromWrapper = Array.isArray(workbook.resources) ? (workbook.resources as Resource[]) : [];
  const meta = decodedWorkbookMeta(snapshot);
  const fromMeta = Array.isArray(meta.resources) ? (meta.resources as Resource[]) : [];
  const byName = new Map<string, Resource>();
  for (const resource of [...fromWrapper, ...fromMeta]) {
    if (resource?.name) byName.set(String(resource.name), resource);
  }
  return [...byName.values()];
}

function parseResource(snapshot: Record<string, unknown>, name: string): unknown {
  const resource = resourcesOf(snapshot).find((item) => item.name === name);
  if (!resource?.data) return null;
  try {
    return JSON.parse(resource.data);
  } catch {
    return resource.data;
  }
}

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
      const rows = stmt.all(...(binds as any[]));
      return { toArray: () => rows as Record<string, unknown>[] };
    }
  };
}

function emptyWelcomeSnapshot(): Record<string, unknown> {
  const empty = generateDefaultSnapshot("unit_blank_sheet", 2) as Record<string, unknown>;
  empty.unitID = WELCOME_UNIT_ID;
  const workbook = workbookOf(empty);
  workbook.unitID = WELCOME_UNIT_ID;
  workbook.name = "Welcome Sheet";
  return empty;
}

describe("Q3 Forecast demo seed", () => {
  test("ensureDemoData seeds Avery Chen and Jordan Lee without duplicating Jordan", async () => {
    const d1 = createMockD1();
    await seedControlPlane(d1);
    await ensureDemoData(d1);

    const users = await d1.prepare("SELECT id, username, display_name FROM users ORDER BY id").all<{
      id: string;
      username: string;
      display_name: string;
    }>();
    assert.deepEqual(
      (users.results ?? []).map((user) => ({
        id: user.id,
        username: user.username,
        display_name: user.display_name
      })),
      [
        { id: "user_admin", username: "admin", display_name: "Avery Chen" },
        { id: "user_jordan", username: "jordan", display_name: "Jordan Lee" }
      ]
    );

    const jordanRole = await d1
      .prepare("SELECT role FROM space_members WHERE space_id = ? AND user_id = ?")
      .bind("space_personal_admin", "user_jordan")
      .first<{ role: string }>();
    assert.equal(jordanRole?.role, "editor");

    const averyRole = await d1
      .prepare("SELECT role FROM space_members WHERE space_id = ? AND user_id = ?")
      .bind("space_personal_admin", "user_admin")
      .first<{ role: string }>();
    assert.equal(averyRole?.role, "admin");

    const node = await d1
      .prepare("SELECT name FROM nodes WHERE id = ?")
      .bind("node_welcome_sheet")
      .first<{ name: string }>();
    assert.equal(node?.name, "Q3 Forecast");

    const jordanCreds = await d1
      .prepare("SELECT password_hash FROM password_credentials WHERE user_id = ?")
      .bind("user_jordan")
      .first<{ password_hash: string }>();
    assert.ok(jordanCreds?.password_hash);
    assert.equal(await verifyPassword("password123", jordanCreds.password_hash), true);

    const averyCreds = await d1
      .prepare("SELECT password_hash FROM password_credentials WHERE user_id = ?")
      .bind("user_admin")
      .first<{ password_hash: string }>();
    assert.ok(averyCreds?.password_hash);
    assert.equal(await verifyPassword("password123", averyCreds.password_hash), true);

    await ensureDemoData(d1);
    const usersAgain = await d1.prepare("SELECT COUNT(*) as count FROM users WHERE id = 'user_jordan'").first<{
      count: number;
    }>();
    assert.equal(usersAgain?.count, 1);
  });

  test("seedControlPlane still upgrades an existing Avery-only D1", async () => {
    const d1 = createMockD1();
    await initControlPlaneSchema(d1);
    await seedControlPlane(d1);

    await d1.prepare("UPDATE users SET display_name = 'Administrator' WHERE id = 'user_admin'").run();
    await d1.prepare("UPDATE nodes SET name = 'Welcome Sheet' WHERE id = 'node_welcome_sheet'").run();
    await d1.prepare("DELETE FROM space_members WHERE user_id = 'user_jordan'").run();
    await d1.prepare("DELETE FROM password_credentials WHERE user_id = 'user_jordan'").run();
    await d1.prepare("DELETE FROM users WHERE id = 'user_jordan'").run();

    await seedControlPlane(d1);

    const avery = await d1
      .prepare("SELECT display_name FROM users WHERE id = 'user_admin'")
      .first<{ display_name: string }>();
    assert.equal(avery?.display_name, "Avery Chen");
    const jordan = await d1
      .prepare("SELECT display_name FROM users WHERE id = 'user_jordan'")
      .first<{ display_name: string }>();
    assert.equal(jordan?.display_name, "Jordan Lee");
    const node = await d1
      .prepare("SELECT name FROM nodes WHERE id = 'node_welcome_sheet'")
      .first<{ name: string }>();
    assert.equal(node?.name, "Q3 Forecast");
  });

  test("Q3 snapshot bakes Forecast cells, empty E2:E4, named Sep, CF, chart, sparklines, and validation", () => {
    const snapshot = buildQ3ForecastSnapshot(WELCOME_UNIT_ID) as Record<string, unknown>;
    const workbook = workbookOf(snapshot);
    assert.equal(workbook.name, "Q3 Forecast");
    assert.equal(workbook.sheets.sheet_1.name, "Forecast");

    const meta = decodedWorkbookMeta(snapshot);
    assert.ok(meta && typeof meta === "object");
    assert.equal(meta.appVersion, "1.0.0-insiders.20260907-70fc579");
    assert.equal(meta.locale, "enUS");
    assert.equal(meta.dateSystem, "date1900");
    assert.deepEqual(meta.styles, {});
    assert.equal(meta.sheets, undefined);
    assert.equal(meta.resources, undefined);
    assert.equal(meta.id, undefined);

    assert.equal(getSheetCell(snapshot, "A1")?.v, "Metric");
    assert.equal(getSheetCell(snapshot, "B1")?.v, "Jul");
    assert.equal(getSheetCell(snapshot, "C1")?.v, "Aug");
    assert.equal(getSheetCell(snapshot, "D1")?.v, "Sep");
    assert.equal(getSheetCell(snapshot, "E1")?.v, "Q3");
    assert.equal(getSheetCell(snapshot, "B2")?.v, 120);
    assert.equal(getSheetCell(snapshot, "C2")?.v, 140);
    assert.equal(getSheetCell(snapshot, "D2")?.v, 160);
    assert.equal(getSheetCell(snapshot, "B3")?.v, 72);
    assert.equal(getSheetCell(snapshot, "C3")?.v, 78);
    assert.equal(getSheetCell(snapshot, "D3")?.v, 85);
    assert.equal(getSheetCell(snapshot, "B4")?.v, 48);
    assert.equal(getSheetCell(snapshot, "C4")?.v, 61);
    assert.equal(getSheetCell(snapshot, "D4")?.v, 90);
    assert.equal(getSheetCell(snapshot, "E2")?.v ?? null, null);
    assert.equal(getSheetCell(snapshot, "E2")?.f ?? null, null);
    assert.equal(getSheetCell(snapshot, "E3")?.v ?? null, null);
    assert.equal(getSheetCell(snapshot, "E3")?.f ?? null, null);
    assert.equal(getSheetCell(snapshot, "E4")?.v ?? null, null);
    assert.equal(getSheetCell(snapshot, "E4")?.f ?? null, null);

    const named = parseResource(snapshot, "SHEET_DEFINED_NAME_PLUGIN") as Record<string, { name?: string; formulaOrRefString?: string }>;
    const namedSep = Object.values(named ?? {}).find((entry) => entry?.name === "Sep");
    assert.ok(namedSep, "named range Sep must exist");
    assert.match(String(namedSep?.formulaOrRefString), /D2:D4/);

    const cf = parseResource(snapshot, "SHEET_CONDITIONAL_FORMATTING_PLUGIN") as {
      sheet_1?: Array<{ rule?: { type?: string }; ranges?: Array<{ startRow: number; startColumn: number; endRow: number; endColumn: number }> }>;
    };
    const colorScale = cf?.sheet_1?.find((rule) => rule.rule?.type === "colorScale");
    assert.ok(colorScale, "color scale CF must exist");
    assert.ok(
      colorScale?.ranges?.some(
        (range) => range.startRow === 1 && range.startColumn === 4 && range.endRow === 3 && range.endColumn === 4
      ),
      "color scale must cover E2:E4"
    );

    const spark = parseResource(snapshot, "SHEET_SPARKLINE_PLUGIN") as {
      [unitId: string]: {
        sheet_1?: {
          spark_q3?: {
            config?: { sourceA1?: unknown; type?: number };
            sparklines?: Record<string, Record<string, { startRow: number; startColumn: number; endRow: number; endColumn: number }>>;
          };
        };
      };
    };
    const sparkGroup = spark?.[WELCOME_UNIT_ID]?.sheet_1?.spark_q3;
    assert.ok(sparkGroup, "sparkline group must be keyed by unit then sheet");
    assert.equal(sparkGroup?.config?.sourceA1, undefined);
    assert.deepEqual(sparkGroup?.sparklines?.["1"]?.["5"], {
      startRow: 1,
      startColumn: 1,
      endRow: 1,
      endColumn: 3
    });
    assert.deepEqual(sparkGroup?.sparklines?.["2"]?.["5"], {
      startRow: 2,
      startColumn: 1,
      endRow: 2,
      endColumn: 3
    });
    assert.deepEqual(sparkGroup?.sparklines?.["3"]?.["5"], {
      startRow: 3,
      startColumn: 1,
      endRow: 3,
      endColumn: 3
    });

    const drawings = parseResource(snapshot, "SHEET_DRAWING_PLUGIN") as {
      sheet_1?: { data?: { chart_q3?: { drawingType?: number; unitId?: string; sheetTransform?: { from?: { row?: number } } } }; order?: string[] };
      [key: string]: unknown;
    };
    assert.equal(drawings?.[WELCOME_UNIT_ID], undefined, "drawings must not wrap by unitId");
    assert.equal(drawings?.sheet_1?.data?.chart_q3?.drawingType, 2);
    assert.equal(drawings?.sheet_1?.data?.chart_q3?.unitId, WELCOME_UNIT_ID);
    assert.ok((drawings?.sheet_1?.data?.chart_q3?.sheetTransform?.from?.row ?? -1) >= 6, "chart drawing must sit below the table");
    assert.deepEqual(drawings?.sheet_1?.order, ["chart_q3"]);

    const charts = parseResource(snapshot, "SHEET_CHART_PLUGIN") as {
      sheet_1?: Array<{
        chartType?: number;
        rangeInfo?: {
          rangeInfo?: { range?: { startRow: number; startColumn: number; endRow: number; endColumn: number }; subUnitId?: string; unitId?: string };
        };
      }>;
      version?: unknown;
      dataSources?: unknown;
    };
    assert.equal(charts?.version, undefined);
    assert.equal(charts?.dataSources, undefined);
    assert.equal(charts?.sheet_1?.[0]?.chartType, 4);
    assert.deepEqual(charts?.sheet_1?.[0]?.rangeInfo?.rangeInfo?.range, {
      startRow: 0,
      startColumn: 0,
      endRow: 3,
      endColumn: 3
    });
    assert.equal(charts?.sheet_1?.[0]?.rangeInfo?.rangeInfo?.subUnitId, "sheet_1");
    assert.equal(charts?.sheet_1?.[0]?.rangeInfo?.rangeInfo?.unitId, WELCOME_UNIT_ID);

    const validation = parseResource(snapshot, "SHEET_DATA_VALIDATION_PLUGIN") as {
      sheet_1?: Array<{
        operator?: string;
        formula1?: string;
        formula2?: string;
        ranges?: Array<{ startRow: number; startColumn: number; endRow: number; endColumn: number }>;
      }>;
    };
    const dv = validation?.sheet_1?.[0];
    assert.equal(dv?.operator, "between");
    assert.equal(dv?.formula1, "0");
    assert.equal(dv?.formula2, "999");
    assert.ok(
      dv?.ranges?.some(
        (range) => range.startRow === 1 && range.startColumn === 3 && range.endRow === 3 && range.endColumn === 3
      ),
      "data validation must cover D2:D4"
    );
  });

  test("skip helper leaves empty units seedable and skips A1:E4 that already have values", () => {
    const empty = generateDefaultSnapshot("unit_other_sheet", 2) as Record<string, unknown>;
    assert.equal(shouldSkipDemoSnapshot(empty), false);

    const seeded = buildQ3ForecastSnapshot(WELCOME_UNIT_ID) as Record<string, unknown>;
    assert.equal(shouldSkipDemoSnapshot(seeded), true);

    const dirty = generateDefaultSnapshot("unit_dirty", 2) as Record<string, unknown>;
    const sheet = workbookOf(dirty).sheets.sheet_1;
    sheet.cellData = { "0": { "0": { v: "already filled" } } };
    assert.equal(shouldSkipDemoSnapshot(dirty), true);
  });

  test("generateDefaultSnapshot uses the Q3 snapshot for unit_welcome_sheet", () => {
    const snapshot = generateDefaultSnapshot(WELCOME_UNIT_ID, 2) as Record<string, unknown>;
    assert.equal(workbookOf(snapshot).name, "Q3 Forecast");
    assert.equal(getSheetCell(snapshot, "A1")?.v, "Metric");
    assert.equal(shouldSkipDemoSnapshot(snapshot), true);
  });

  test("resolveWelcomeUnitSnapshot upgrades empty units and skips dirty A1:E4", () => {
    const created = resolveWelcomeUnitSnapshot(WELCOME_UNIT_ID);
    assert.equal(workbookOf(created).name, "Q3 Forecast");
    assert.equal(getSheetCell(created, "A1")?.v, "Metric");

    const empty = emptyWelcomeSnapshot();
    const upgraded = resolveWelcomeUnitSnapshot(WELCOME_UNIT_ID, empty);
    assert.notEqual(upgraded, empty);
    assert.equal(getSheetCell(upgraded, "A1")?.v, "Metric");
    assert.equal(getSheetCell(upgraded, "B2")?.v, 120);

    const seeded = buildQ3ForecastSnapshot(WELCOME_UNIT_ID) as Record<string, unknown>;
    assert.equal(resolveWelcomeUnitSnapshot(WELCOME_UNIT_ID, seeded), seeded);

    const dirty = emptyWelcomeSnapshot();
    workbookOf(dirty).sheets.sheet_1.cellData = { "0": { "0": { v: "already filled" } } };
    assert.equal(resolveWelcomeUnitSnapshot(WELCOME_UNIT_ID, dirty), dirty);
    assert.equal(getSheetCell(dirty, "A1")?.v, "already filled");
  });

  test("ensureUnit hydrates empty welcome unit to Q3 and leaves dirty A1 unchanged", () => {
    const emptySql = createSqliteAdapter();
    const emptyCtx = new Context();
    emptyCtx.provide("host", { sql: emptySql });
    const emptyCollab = new UniverCollabService(emptyCtx, emptySql);
    emptyCollab.createUnit(WELCOME_UNIT_ID, 2, "Welcome Sheet", emptyWelcomeSnapshot());
    assert.equal(getSheetCell(emptyCollab.getLatestSnapshot(WELCOME_UNIT_ID)!.data, "A1")?.v ?? null, null);

    emptyCollab.ensureUnit(WELCOME_UNIT_ID, 2, "Welcome Sheet");
    const emptyStored = emptyCollab.getLatestSnapshot(WELCOME_UNIT_ID);
    assert.ok(emptyStored);
    assert.equal(getSheetCell(emptyStored.data, "A1")?.v, "Metric");
    assert.equal(getSheetCell(emptyStored.data, "B2")?.v, 120);
    assert.equal(getSheetCell(emptyStored.data, "D4")?.v, 90);

    const dirtySql = createSqliteAdapter();
    const dirtyCtx = new Context();
    dirtyCtx.provide("host", { sql: dirtySql });
    const dirtyCollab = new UniverCollabService(dirtyCtx, dirtySql);
    const dirty = emptyWelcomeSnapshot();
    workbookOf(dirty).sheets.sheet_1.cellData = { "0": { "0": { v: "already filled" } } };
    dirtyCollab.createUnit(WELCOME_UNIT_ID, 2, "Welcome Sheet", dirty);

    dirtyCollab.ensureUnit(WELCOME_UNIT_ID, 2, "Welcome Sheet");
    const dirtyStored = dirtyCollab.getLatestSnapshot(WELCOME_UNIT_ID);
    assert.ok(dirtyStored);
    assert.equal(getSheetCell(dirtyStored.data, "A1")?.v, "already filled");
    assert.equal(getSheetCell(dirtyStored.data, "B2")?.v ?? null, null);
  });
});
