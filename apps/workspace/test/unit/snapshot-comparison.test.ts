import { describe, expect, it } from "vitest";
import { snapshotComparisonRows } from "../../web/src/features/worktrees/snapshot-comparison";

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
