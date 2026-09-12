import { describe, expect, it } from "vitest";
import {
  a1FromSetRangeMutation,
  applyBlameHeat,
  blameFromChangesets,
  calculateBlameHeatAlpha,
  BLAME_HEAT_EVENT,
} from "./ot-blame-heat";

describe("OT blame heat", () => {
  it("extracts A1 cells from string range, range object, or cellValue matrix", () => {
    expect(
      a1FromSetRangeMutation({
        id: "sheet.mutation.set-range-values",
        range: "D3",
      })
    ).toEqual(["D3"]);

    expect(
      a1FromSetRangeMutation({
        id: "sheet.mutation.set-range-values",
        range: "E2:E4",
      })
    ).toEqual(["E2", "E3", "E4"]);

    expect(
      a1FromSetRangeMutation({
        id: "sheet.mutation.set-range-values",
        params: {
          range: { startRow: 1, startColumn: 4, endRow: 3, endColumn: 4 },
        },
      })
    ).toEqual(["E2", "E3", "E4"]);

    expect(
      a1FromSetRangeMutation({
        id: "sheet.mutation.set-range-values",
        params: {
          cellValue: {
            "0": { "0": { v: "A1" } },
            "2": { "3": { v: 180 } },
          },
        },
      })
    ).toEqual(["A1", "D3"]);

    expect(
      a1FromSetRangeMutation({
        id: "sheet.mutation.other",
        range: "A1",
      })
    ).toEqual([]);
  });

  it("maps Avery D3 and agent E2 from set-range-values clientId", () => {
    const cells = blameFromChangesets([
      {
        clientId: "user_admin",
        rev: 4,
        changeset: {
          mutations: [
            { id: "sheet.mutation.set-range-values", range: "D3" },
          ],
        },
      },
      {
        clientId: "agent_workspace",
        rev: 5,
        changeset: {
          mutations: [
            { id: "sheet.mutation.set-range-values", range: "E2:E4" },
          ],
        },
      },
    ]);
    expect(cells.find((c) => c.a1 === "D3")?.userID).toBe("user_admin");
    expect(cells.find((c) => c.a1 === "D3")?.rev).toBe(4);
    expect(cells.find((c) => c.a1 === "E2")?.userID).toBe("agent_workspace");
    expect(cells.find((c) => c.a1 === "E3")?.userID).toBe("agent_workspace");
    expect(cells.find((c) => c.a1 === "E4")?.userID).toBe("agent_workspace");
  });

  it("calculates heat alpha: 40% agent, 24% multiple recent edits, 12% standard, 0% reduced-motion", () => {
    expect(
      calculateBlameHeatAlpha({
        userID: "agent_workspace",
        rev: 5,
        maxRev: 5,
        writerRevs: [5],
        reducedMotion: false,
      })
    ).toBe(0.4);

    expect(
      calculateBlameHeatAlpha({
        userID: "user_admin",
        rev: 4,
        maxRev: 5,
        writerRevs: [3, 4],
        reducedMotion: false,
      })
    ).toBe(0.24);

    expect(
      calculateBlameHeatAlpha({
        userID: "user_jordan",
        rev: 2,
        maxRev: 10,
        writerRevs: [2],
        reducedMotion: false,
      })
    ).toBe(0.12);

    expect(
      calculateBlameHeatAlpha({
        userID: "agent_workspace",
        rev: 5,
        maxRev: 5,
        writerRevs: [5],
        reducedMotion: true,
      })
    ).toBe(0.0);
  });

  it("applyBlameHeat no-ops when enabled is false, highlights when true", () => {
    let callCount = 0;
    const sheet = {
      getRange: (a1: string) => `facade_${a1}`,
      highlightRanges: () => {
        callCount += 1;
        return { dispose() {} };
      },
    };
    const host = {
      getActiveWorkbook: () => ({
        getActiveSheet: () => sheet,
      }),
    };

    const cells = [
      { a1: "D3", userID: "user_admin", rev: 4 },
      { a1: "E2", userID: "agent_workspace", rev: 5 },
    ];

    const disabledHandle = applyBlameHeat(host, cells, false, false);
    expect(callCount).toBe(0);
    disabledHandle.dispose();

    const enabledHandle = applyBlameHeat(host, cells, false, true);
    expect(callCount).toBeGreaterThan(0);
    enabledHandle.dispose();
  });

  it("defines BLAME_HEAT_EVENT constant", () => {
    expect(BLAME_HEAT_EVENT).toBe("workspace-blame-heat");
  });
});
