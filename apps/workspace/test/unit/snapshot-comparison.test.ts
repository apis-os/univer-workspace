import { describe, expect, it } from "vitest";
import {
  snapshotComparisonRows,
  snapshotComparisonSideLabels,
  wrapComparisonUniverFactory,
} from "../../web/src/features/worktrees/snapshot-comparison";

const factoryOptions = {
  container: {} as HTMLElement,
  unitType: 2,
  locale: "enUS",
  darkMode: false,
} as const;

describe("snapshot comparison rows", () => {
  it("lists cell updates between trunk and worktree snapshots", () => {
    const rows = snapshotComparisonRows({
      summary: { total: 1, insert: 0, delete: 0, update: 1, moved: 0 },
      items: [
        {
          id: "sheet_1:B2",
          kind: "update",
          entityType: "cell",
          title: "B2",
          changes: [{ before: "Deployed live", after: "compare-live" }],
        },
      ],
    });
    expect(rows).toEqual([
      {
        id: "sheet_1:B2",
        kind: "update",
        entityType: "cell",
        title: "B2",
        before: "Deployed live",
        after: "compare-live",
      },
    ]);
  });

  it("returns an empty list when snapshots match", () => {
    expect(
      snapshotComparisonRows({
        summary: { total: 0, insert: 0, delete: 0, update: 0, moved: 0 },
        items: [],
      })
    ).toEqual([]);
  });
});

describe("snapshot comparison side labels", () => {
  it("uses Official vs What-if for the What-if +10% Sep worktree", () => {
    const t = (key: string) =>
      ({
        officialVersion: "Official version",
        agentVersion: "AI changes",
        comparisonOfficial: "Official",
        comparisonWhatIf: "What-if",
      })[key] ?? key;
    expect(snapshotComparisonSideLabels("What-if +10% Sep", t)).toEqual({
      officialVersion: "Official",
      agentVersion: "What-if",
    });
    expect(snapshotComparisonSideLabels("Agent Forecast Update", t)).toEqual({
      officialVersion: "Official version",
      agentVersion: "AI changes",
    });
  });
});

describe("wrapComparisonUniverFactory", () => {
  it("runs onTableFallback and still rejects when the inner factory throws", async () => {
    let fallbackCalls = 0;
    const wrapped = wrapComparisonUniverFactory(async () => {
      throw new Error("createUniver failed");
    }, () => {
      fallbackCalls += 1;
    });

    await expect(wrapped(factoryOptions)).rejects.toThrow();
    expect(fallbackCalls).toBe(1);
  });

  it("returns the instance and does not call onTableFallback when the inner factory resolves", async () => {
    const instance = {
      univer: {},
      dispose() {
        return undefined;
      },
    };
    let fallbackCalls = 0;
    const wrapped = wrapComparisonUniverFactory(async () => instance, () => {
      fallbackCalls += 1;
    });

    await expect(wrapped(factoryOptions)).resolves.toBe(instance);
    expect(fallbackCalls).toBe(0);
  });
});
