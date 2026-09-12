import { describe, expect, it } from "vitest";
import { historyVsLiveLabels } from "../worktrees/snapshot-comparison";
import {
  diffWorkbooks,
  loadHistoryVsLive,
  parseMutations,
  rowColToA1,
} from "./history-vs-live";

describe("historyVsLiveLabels", () => {
  it("returns officialVersion and agentVersion from i18n keys", () => {
    const labels = historyVsLiveLabels((key) =>
      key === "comparisonHistory" ? "History" : "Live Comb"
    );
    expect(labels).toEqual({
      officialVersion: "History",
      agentVersion: "Live Comb",
    });
  });
});

describe("loadHistoryVsLive", () => {
  it("fixture latest snapshot E2 filled, history rev before Fill empty E2; loadHistoryVsLive left empty, right has =SUM(B2:D2)", async () => {
    const fakeFetch: typeof fetch = async (input) => {
      const url = String(input);
      if (url.includes("/universer-api/snapshot/2/unit/unit_welcome_sheet")) {
        return new Response(
          JSON.stringify({
            error: { code: 1 },
            rev: 5,
            snapshot: {
              rev: 5,
              workbook: {
                id: "unit_welcome_sheet",
                name: "Q3 Forecast",
                sheetOrder: ["sheet_1"],
                sheets: {
                  sheet_1: {
                    id: "sheet_1",
                    name: "Forecast",
                    cellData: {
                      "1": {
                        "1": { v: 100 },
                        "2": { v: 120 },
                        "3": { v: 200 },
                        "4": { v: 420, f: "=SUM(B2:D2)" },
                      },
                    },
                  },
                },
              },
            },
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }

      if (url.includes("/universer-api/history/unit_welcome_sheet/cs")) {
        return new Response(
          JSON.stringify({
            error: { code: 1 },
            changesets: [
              {
                rev: 4,
                revision: 4,
                clientId: "user_admin",
                userID: "user_admin",
                mutations: [
                  {
                    id: "sheet.mutation.set-range-values",
                    params: {
                      subUnitId: "sheet_1",
                      cellValue: {
                        "1": {
                          "3": { v: 200 },
                        },
                      },
                    },
                  },
                ],
              },
              {
                rev: 5,
                revision: 5,
                clientId: "agent_workspace",
                userID: "agent_workspace",
                mutations: [
                  {
                    id: "sheet.mutation.set-range-values",
                    params: {
                      subUnitId: "sheet_1",
                      cellValue: {
                        "1": {
                          "4": { v: 420, f: "=SUM(B2:D2)" },
                        },
                      },
                    },
                  },
                ],
                inverseMutation: [
                  {
                    id: "sheet.mutation.set-range-values",
                    params: {
                      subUnitId: "sheet_1",
                      cellValue: {
                        "1": {
                          "4": null,
                        },
                      },
                    },
                  },
                ],
              },
            ],
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response("Not found", { status: 404 });
    };

    const payload = await loadHistoryVsLive({
      unitId: "unit_welcome_sheet",
      rev: 4,
      fetch: fakeFetch,
    });

    const leftSheets = (payload.left.unitData as any).sheets.sheet_1;
    const rightSheets = (payload.right.unitData as any).sheets.sheet_1;

    expect(leftSheets.cellData["1"]?.["4"]).toBeUndefined();
    expect(rightSheets.cellData["1"]["4"]).toEqual({
      v: 420,
      f: "=SUM(B2:D2)",
    });

    expect(payload.left.revision).toBe(4);
    expect(payload.left.label).toContain("History · r4");
    expect(payload.left.label).toContain("Avery Chen");
    expect(payload.right.revision).toBe(5);
    expect(payload.right.label).toBe("Live Comb");
    expect(payload.result.fidelity).toBe("history");

    const e2Item = payload.result.items.find((item) => item.title === "E2");
    expect(e2Item).toBeDefined();
    expect(e2Item?.kind).toBe("insert");
    expect(e2Item?.changes?.[0]?.after).toBe("=SUM(B2:D2)");
  });

  it("replays forward from default snapshot when inverse mutations are absent", async () => {
    const fakeFetch: typeof fetch = async (input) => {
      const url = String(input);
      if (url.includes("/snapshot/")) {
        return new Response(
          JSON.stringify({
            rev: 3,
            snapshot: {
              rev: 3,
              workbook: {
                id: "unit_test",
                sheets: {
                  sheet_1: {
                    id: "sheet_1",
                    cellData: {
                      "0": { "0": { v: "A1-rev2" } },
                      "0": { "1": { v: "B1-rev3" } },
                    },
                  },
                },
              },
            },
          })
        );
      }
      if (url.includes("/history/")) {
        return new Response(
          JSON.stringify({
            changesets: [
              {
                rev: 2,
                userID: "user_jordan",
                mutations: [
                  {
                    id: "sheet.mutation.set-range-values",
                    params: {
                      subUnitId: "sheet_1",
                      cellValue: { "0": { "0": { v: "A1-rev2" } } },
                    },
                  },
                ],
              },
              {
                rev: 3,
                userID: "agent_workspace",
                mutations: [
                  {
                    id: "sheet.mutation.set-range-values",
                    params: {
                      subUnitId: "sheet_1",
                      cellValue: { "0": { "1": { v: "B1-rev3" } } },
                    },
                  },
                ],
              },
            ],
          })
        );
      }
      return new Response("Not found", { status: 404 });
    };

    const payload = await loadHistoryVsLive({
      unitId: "unit_test",
      rev: 2,
      fetch: fakeFetch,
    });

    const leftData = (payload.left.unitData as any).sheets.sheet_1.cellData;
    expect(leftData["0"]["0"]).toEqual({ v: "A1-rev2" });
    expect(leftData["0"]?.["1"]).toBeUndefined();
    expect(payload.left.label).toContain("Jordan Lee");
  });
});

describe("diffWorkbooks", () => {
  it("diffs cells between two workbooks", () => {
    const left = {
      sheets: {
        sheet_1: {
          cellData: {
            "0": { "0": { v: "old" } },
            "1": { "1": { v: "to-delete" } },
          },
        },
      },
    };
    const right = {
      sheets: {
        sheet_1: {
          cellData: {
            "0": { "0": { v: "new" } },
            "2": { "2": { v: "added" } },
          },
        },
      },
    };

    const items = diffWorkbooks(left, right);
    expect(items).toHaveLength(3);

    const a1 = items.find((i) => i.title === "A1");
    expect(a1?.kind).toBe("update");
    expect(a1?.changes?.[0]).toEqual({ before: "old", after: "new" });

    const b2 = items.find((i) => i.title === "B2");
    expect(b2?.kind).toBe("delete");

    const c3 = items.find((i) => i.title === "C3");
    expect(c3?.kind).toBe("insert");
    expect(c3?.changes?.[0]).toEqual({ before: "", after: "added" });
  });
});
