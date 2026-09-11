import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { createMockD1 } from "./mock-d1.ts";
import { ensureDemoData, initControlPlaneSchema, seedControlPlane } from "../src/control-plane/schema.ts";
import { verifyPassword } from "../src/control-plane/auth.ts";
import {
  buildQ3ForecastSnapshot,
  shouldSkipDemoSnapshot
} from "../src/plugins/univer-demo-snapshot.ts";
import { generateDefaultSnapshot } from "../src/plugins/univer-default-snapshots.ts";
import { decodeOriginalMeta, getSheetCell } from "../src/plugins/univer-snapshot.ts";

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

function stringifyResources(snapshot: Record<string, unknown>): string {
  return JSON.stringify(resourcesOf(snapshot));
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
    const metaJson = JSON.stringify(meta);

    assert.equal(getSheetCell(snapshot, "A1")?.v, "Metric");
    assert.equal(getSheetCell(snapshot, "B1")?.v, "Jul");
    assert.equal(getSheetCell(snapshot, "C1")?.v, "Aug");
    assert.equal(getSheetCell(snapshot, "D1")?.v, "Sep");
    assert.equal(getSheetCell(snapshot, "E1")?.v, "Q3");
    assert.ok(getSheetCell(snapshot, "B2")?.v != null);
    assert.ok(getSheetCell(snapshot, "C2")?.v != null);
    assert.ok(getSheetCell(snapshot, "D2")?.v != null);
    assert.equal(getSheetCell(snapshot, "E2")?.v ?? null, null);
    assert.equal(getSheetCell(snapshot, "E2")?.f ?? null, null);
    assert.equal(getSheetCell(snapshot, "E3")?.v ?? null, null);
    assert.equal(getSheetCell(snapshot, "E3")?.f ?? null, null);
    assert.equal(getSheetCell(snapshot, "E4")?.v ?? null, null);
    assert.equal(getSheetCell(snapshot, "E4")?.f ?? null, null);

    const named = parseResource(snapshot, "SHEET_DEFINED_NAME_PLUGIN");
    const namedText = JSON.stringify(named);
    assert.match(namedText, /"Sep"/);
    assert.match(namedText, /D2:D4/);

    const cf = parseResource(snapshot, "SHEET_CONDITIONAL_FORMATTING_PLUGIN");
    const cfText = JSON.stringify(cf);
    assert.match(cfText, /colorScale/);
    assert.ok(
      cfText.includes('"startRow":1') &&
        cfText.includes('"startColumn":4') &&
        cfText.includes('"endRow":3') &&
        cfText.includes('"endColumn":4'),
      "color scale must cover E2:E4"
    );

    const spark = parseResource(snapshot, "SHEET_SPARKLINE_PLUGIN");
    const sparkText = JSON.stringify(spark);
    assert.ok(
      sparkText.includes("B2:D2") ||
        (sparkText.includes('"startRow":1') &&
          sparkText.includes('"startColumn":1') &&
          sparkText.includes('"endColumn":3')),
      "sparklines F2:F4 must source B2:D2…"
    );

    const drawings = parseResource(snapshot, "SHEET_DRAWING_PLUGIN");
    const charts = parseResource(snapshot, "SHEET_CHART_PLUGIN");
    const visualText = `${JSON.stringify(drawings)}\n${JSON.stringify(charts)}\n${stringifyResources(snapshot)}`;
    assert.ok(
      visualText.includes("SHEET_CONDITIONAL_FORMATTING_PLUGIN") ||
        visualText.includes("drawingType") ||
        visualText.includes("SHEET_CHART_PLUGIN") ||
        visualText.includes('"chartType"'),
      "snapshot must include CF or a chart drawing"
    );
    assert.ok(
      visualText.includes("A1:D4") || visualText.includes('"chartType":4') || visualText.includes('"drawingType":2'),
      "column chart of A1:D4 must be baked in"
    );

    const validation = parseResource(snapshot, "SHEET_DATA_VALIDATION_PLUGIN");
    const validationText = JSON.stringify(validation);
    assert.match(validationText, /between/i);
    assert.match(validationText, /"0"/);
    assert.match(validationText, /"999"/);
    assert.ok(metaJson.includes("Forecast"));
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
});
