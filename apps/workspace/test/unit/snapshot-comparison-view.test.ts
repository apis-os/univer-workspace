import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { snapshotComparisonRows } from "../../web/src/features/worktrees/snapshot-comparison";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(root, relativePath), "utf8");
}

describe("native Worktree comparison wiring", () => {
  it("imports unit-comparison-viewer styles in the view file", () => {
    const view = readWorkspace(
      "web/src/features/worktrees/snapshot-comparison-view.tsx"
    );
    expect(view).toMatch(
      /import ["']@univer\/unit-comparison-viewer\/styles\.css["']/
    );
  });

  it("does not import unit-comparison-viewer styles from global.css", () => {
    const globalCssPath = join(root, "web/src/app/styles/global.css");
    if (!existsSync(globalCssPath)) return;
    const src = readFileSync(globalCssPath, "utf8");
    expect(src).not.toMatch(/@univer\/unit-comparison-viewer\/styles\.css/);
  });

  it("mounts UnitComparisonViewer with createComparisonUniver", () => {
    const view = readWorkspace(
      "web/src/features/worktrees/snapshot-comparison-view.tsx"
    );
    expect(view).toMatch(/from ["']@univer\/unit-comparison-viewer["']/);
    expect(view).toMatch(/UnitComparisonViewer/);
    expect(view).toMatch(
      /from ["']\.\.\/editor\/comparison-univer["']/
    );
    expect(view).toMatch(/createComparisonUniver/);
    expect(view).toMatch(/createUniver=/);
  });

  it("labels the native sides with officialVersion and agentVersion", () => {
    const view = readWorkspace(
      "web/src/features/worktrees/snapshot-comparison-view.tsx"
    );
    expect(view).toMatch(/worktreeComparisonValue|left:\s*\{/);
    expect(view).toMatch(/t\(["']officialVersion["']\)/);
    expect(view).toMatch(/t\(["']agentVersion["']\)/);
  });

  it("uses SnapshotComparisonView instead of inlining UnitComparisonViewer", () => {
    const panel = readWorkspace(
      "web/src/features/worktrees/worktree-review-panel.tsx"
    );
    expect(panel).toMatch(
      /from ["']\.\/snapshot-comparison-view["']/
    );
    expect(panel).toMatch(/<SnapshotComparisonView\b/);
    expect(panel).not.toMatch(/<UnitComparisonViewer\b/);
    expect(panel).not.toMatch(
      /from ["']@univer\/unit-comparison-viewer["']/
    );
  });
});

describe("native comparison factory fallback", () => {
  it("labels left as officialVersion and right as agentVersion", async () => {
    const { worktreeComparisonValue } = await import(
      "../../web/src/features/worktrees/snapshot-comparison"
    );
    const value = worktreeComparisonValue(
      {
        result: {
          comparisonId: "cmp_1",
          unit: { unitId: "unit_1", type: 2, name: "Q3 Forecast" },
          items: [],
        },
        left: { revision: 3, unitData: { id: "trunk" } },
        right: { revision: 4, unitData: { id: "draft" } },
      },
      {
        officialVersion: "Official version",
        agentVersion: "AI changes",
      }
    );
    expect(value.left.label).toBe("Official version");
    expect(value.right.label).toBe("AI changes");
    expect(value.left.revision).toBe(3);
    expect(value.right.revision).toBe(4);
  });

  it("falls back to HTML table rows when the Univer factory throws", async () => {
    const { presentComparisonUniver } = await import(
      "../../web/src/features/worktrees/snapshot-comparison"
    );
    const presented = await presentComparisonUniver(
      async () => {
        throw new Error("createUniver failed");
      },
      {
        container: {} as HTMLElement,
        unitType: 2,
        locale: "enUS",
        darkMode: false,
      }
    );
    expect(presented).toEqual({ kind: "table" });
    expect(
      snapshotComparisonRows({
        items: [
          {
            id: "sheet_1:B2",
            kind: "update",
            entityType: "cell",
            title: "B2",
            changes: [{ before: "Deployed live", after: "compare-live" }],
          },
        ],
      })
    ).toEqual([
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

  it("keeps the native instance when the Univer factory resolves", async () => {
    const { presentComparisonUniver } = await import(
      "../../web/src/features/worktrees/snapshot-comparison"
    );
    const instance = {
      univer: {},
      dispose() {
        return undefined;
      },
    };
    const presented = await presentComparisonUniver(
      async () => instance,
      {
        container: {} as HTMLElement,
        unitType: 2,
        locale: "enUS",
        darkMode: false,
      }
    );
    expect(presented).toEqual({ kind: "native", instance });
  });
});
