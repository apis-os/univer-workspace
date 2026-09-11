import { describe, expect, it } from "vitest";
import {
  snapshotComparisonRows,
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
