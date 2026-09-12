import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  FORMULA_INSPECT_RANGE,
  FORMULA_INSPECT_UNIT_ID,
  Q3_SUM_FORMULA,
  Q3_SUM_PRECEDENT,
  formulaInspectFromInspectBody,
  highlightPrecedentRangesOnce,
  inspectFormulaUrl,
  isAltInspectClick,
  loadFormulaInspect,
  precedentsFromFormula,
  readFacadeSnapshotCell,
  runFormulaInspect,
} from "./formula-inspector";

const demoDir = dirname(fileURLToPath(import.meta.url));
const webSrc = join(demoDir, "../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(webSrc, relativePath), "utf8");
}

describe("Q3 E2 inspect payload { f, v, precedents }", () => {
  it("reads f, stored v, and precedent B2:D2 from /uf inspect", () => {
    expect(FORMULA_INSPECT_RANGE).toBe("E2");
    expect(Q3_SUM_FORMULA).toBe("=SUM(B2:D2)");
    expect(precedentsFromFormula(Q3_SUM_FORMULA)).toEqual([Q3_SUM_PRECEDENT]);
    const expectedProvenanceFallback = [
      { a1: "B2", v: undefined, userID: null, name: "—", ringToken: "brand-600" },
      { a1: "C2", v: undefined, userID: null, name: "—", ringToken: "brand-600" },
      { a1: "D2", v: undefined, userID: null, name: "—", ringToken: "brand-600" },
    ];
    expect(
      formulaInspectFromInspectBody("E2", {
        f: "=SUM(B2:D2)",
        v: 420,
        cells: [[{ f: "=SUM(B2:D2)", v: 420 }]],
      })
    ).toEqual({
      range: "E2",
      f: "=SUM(B2:D2)",
      v: 420,
      precedents: ["B2:D2"],
      provenance: expectedProvenanceFallback,
      source: "inspect",
    });
    expect(inspectFormulaUrl(FORMULA_INSPECT_UNIT_ID, "E2")).toBe(
      `/uf/${btoa("workspace.univer").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")}/units/unit_welcome_sheet/inspect?range=E2`
    );
  });

  it("loads GET /uf/:key/units/:unitId/inspect?range=E2 and falls back to the local snapshot", async () => {
    const inspectFetch = vi.fn<typeof fetch>(async (input) => {
      const href = String(input);
      expect(href).toContain("/uf/");
      expect(href).toContain("/units/unit_welcome_sheet/inspect");
      expect(href).toContain("range=E2");
      expect(href).not.toMatch(/execute|undo/i);
      return new Response(
        JSON.stringify({ f: "=SUM(B2:D2)", v: 420, range: "E2" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    });
    const expectedProvenanceFallback = [
      { a1: "B2", v: undefined, userID: null, name: "—", ringToken: "brand-600" },
      { a1: "C2", v: undefined, userID: null, name: "—", ringToken: "brand-600" },
      { a1: "D2", v: undefined, userID: null, name: "—", ringToken: "brand-600" },
    ];
    await expect(
      loadFormulaInspect({
        range: "E2",
        unitId: "unit_welcome_sheet",
        fetch: inspectFetch,
      })
    ).resolves.toEqual({
      range: "E2",
      f: "=SUM(B2:D2)",
      v: 420,
      precedents: ["B2:D2"],
      provenance: expectedProvenanceFallback,
      source: "inspect",
    });
    expect(inspectFetch).toHaveBeenCalledTimes(1);

    const snapshot = { f: "=SUM(B2:D2)", v: 420 };
    await expect(
      loadFormulaInspect({
        range: "E2",
        unitId: "unit_welcome_sheet",
        fetch: async () =>
          new Response(JSON.stringify({ error: { message: "down" } }), {
            status: 503,
          }),
        snapshot: () => snapshot,
      })
    ).resolves.toEqual({
      range: "E2",
      f: "=SUM(B2:D2)",
      v: 420,
      precedents: ["B2:D2"],
      provenance: expectedProvenanceFallback,
      source: "snapshot",
    });
  });

  it("reads stored f/v from a local Facade snapshot without inventing v", () => {
    const workbook = {
      getActiveSheet() {
        return {
          getRange(a1: string) {
            expect(a1).toBe("E2");
            return {
              getCellData: () => ({ f: "=SUM(B2:D2)", v: 420 }),
            };
          },
        };
      },
    };
    expect(
      readFacadeSnapshotCell(
        { getActiveWorkbook: () => workbook },
        "E2"
      )
    ).toEqual({ f: "=SUM(B2:D2)", v: 420 });
  });
});

function fakeSheet() {
  const highlighted: string[] = [];
  let calls = 0;
  return {
    highlighted,
    get calls() {
      return calls;
    },
    getRange(a1: string) {
      return a1;
    },
    highlightRanges(ranges: readonly unknown[]) {
      calls += 1;
      for (const range of ranges) highlighted.push(String(range));
      return { dispose() {} };
    },
  };
}

describe("precedent highlight B2:D2 once", () => {
  it("highlights B2:D2 once and does not loop", () => {
    const sheet = fakeSheet();
    const result = highlightPrecedentRangesOnce(
      {
        getActiveWorkbook: () => ({
          getActiveSheet: () => sheet,
        }),
      },
      ["B2:D2"]
    );
    expect(result.highlighted).toEqual(["B2:D2"]);
    expect(sheet.calls).toBe(1);
    expect(sheet.highlighted).toEqual(["B2:D2"]);
    highlightPrecedentRangesOnce(
      {
        getActiveWorkbook: () => ({
          getActiveSheet: () => sheet,
        }),
      },
      ["B2:D2"]
    );
    expect(sheet.calls).toBe(2);
    expect(sheet.highlighted).toEqual(["B2:D2", "B2:D2"]);
  });
});

describe("Alt-click and Inspect formula palette", () => {
  it("treats alt-click as inspect on the active cell", () => {
    expect(
      isAltInspectClick({ altKey: true, button: 0, metaKey: false, ctrlKey: false })
    ).toBe(true);
    expect(
      isAltInspectClick({ altKey: false, button: 0, metaKey: false, ctrlKey: false })
    ).toBe(false);
    expect(
      isAltInspectClick({ altKey: true, button: 2, metaKey: false, ctrlKey: false })
    ).toBe(false);
  });
});

describe("formula inspector wiring", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("adds Inspect formula to the palette and shows a { f, v, precedents } popover", () => {
    const palette = readWorkspace("features/demo/demo-palette.ts");
    expect(palette).toMatch(/inspect-formula/);
    expect(palette).toMatch(/inspectFormula/);
    const i18n = readWorkspace("shared/i18n.tsx");
    expect(i18n).toMatch(/demoPaletteInspectFormula:\s*"Inspect formula"/);
    const zh = i18n.match(
      /"zh-CN":\s*\{[\s\S]*?demoPaletteInspectFormula:\s*"([^"]+)"/
    )?.[1];
    const en = i18n.match(
      /"en-US":\s*\{[\s\S]*?demoPaletteInspectFormula:\s*"([^"]+)"/
    )?.[1];
    expect(en).toBe("Inspect formula");
    expect(zh).toBeTruthy();
    expect(zh).not.toBe(en);
    const runtime = readWorkspace("features/demo/demo-runtime.tsx");
    expect(runtime).toMatch(/inspectFormula|runFormulaInspect|FormulaInspect/);
    const popover = readWorkspace("features/demo/formula-inspector-popover.tsx");
    expect(popover).toMatch(/precedents/);
    expect(popover).toMatch(/\bf\b/);
    expect(popover).toMatch(/\bv\b/);
    const editor = readWorkspace("features/editor/collaboration-editor.tsx");
    expect(editor).toMatch(/bindFormulaInspectorHost/);
    expect(editor).not.toMatch(/undoAgentTurn|reverseLast/);
    const inspector = readFileSync(join(demoDir, "formula-inspector.ts"), "utf8");
    expect(inspector).not.toMatch(/setInterval|requestAnimationFrame/);
    expect(inspector).not.toMatch(/undoAgentTurn|reverseLast|ActionService/);
  });
});

describe("formula provenance from inspect and blame", () => {
  it("maps B2 Avery / C2 Jordan / D2 Avery onto provenance length 3 and highlights 3 ranges", async () => {
    const sheet = fakeSheet();
    const fakeWorkbook = {
      getActiveSheet: () => sheet,
    };
    const blame = [
      { a1: "B2", userID: "user_admin", rev: 1 },
      { a1: "C2", userID: "user_jordan", rev: 2 },
      { a1: "D2", userID: "user_admin", rev: 3 },
    ];
    const payload = await runFormulaInspect("E2", {
      blame,
      host: {
        getActiveWorkbook: () => fakeWorkbook,
      },
      snapshot: () => ({ f: "=SUM(B2:D2)", v: 420 }),
      getCellValue: (a1) => (a1 === "B2" ? 100 : a1 === "C2" ? 140 : 180),
    });

    expect(payload.provenance).toHaveLength(3);
    expect(payload.provenance[0]).toEqual({
      a1: "B2",
      v: 100,
      userID: "user_admin",
      name: "Avery Chen",
      ringToken: "brand-600",
    });
    expect(payload.provenance[1]).toEqual({
      a1: "C2",
      v: 140,
      userID: "user_jordan",
      name: "Jordan Lee",
      ringToken: "sheet",
    });
    expect(payload.provenance[2]).toEqual({
      a1: "D2",
      v: 180,
      userID: "user_admin",
      name: "Avery Chen",
      ringToken: "brand-600",
    });

    expect(sheet.highlighted).toEqual(["B2", "C2", "D2"]);
  });
});

