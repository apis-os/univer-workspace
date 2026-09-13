import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  resolveDashboardReviewTarget,
  selectionForWorktree,
} from "../../web/src/features/worktrees/worktree-dashboard-selection.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

const filledWorktree = {
  id: "wt_filled",
  units: [{ unitId: "unit_welcome_sheet" }],
};
const emptyWorktree = {
  id: "wt_16526728_empty",
  units: [] as { unitId: string }[],
};
const filledDocument = {
  worktree: filledWorktree,
  unit: filledWorktree.units[0]!,
};
const worktreesById = new Map([
  [filledWorktree.id, filledWorktree],
  [emptyWorktree.id, emptyWorktree],
]);

describe("worktree dashboard create control", () => {
  it("creates a worktree via POST /api/worktrees and can clone a trunk unit", () => {
    const dashboard = readFileSync(
      join(root, "web/src/features/worktrees/worktree-dashboard.tsx"),
      "utf8",
    );
    const control = readFileSync(
      join(root, "web/src/features/worktrees/create-worktree-control.tsx"),
      "utf8",
    );
    expect(dashboard).toMatch(/CreateWorktreeControl/);
    expect(control).toMatch(/api\.POST\("\/api\/worktrees"/);
    expect(control).toMatch(/"\/api\/worktrees\/\{worktreeId\}\/units"/);
    expect(control).toMatch(/source:\s*"trunk"/);
    expect(control).toMatch(/credentials: "include"|createIdempotencyKey/);
  });

  it("exposes English and Chinese create-task copy", () => {
    const src = readFileSync(join(root, "web/src/shared/i18n.tsx"), "utf8");
    expect(src).toMatch(/createTask:\s*"新建任务"/);
    expect(src).toMatch(/createTask:\s*"New task"/);
    expect(src).toMatch(/addDocument:\s*"添加文档"/);
    expect(src).toMatch(/addDocument:\s*"Add document"/);
  });
});

describe("empty worktree main pane", () => {
  it("selects a 0-unit worktree without keeping a previous unit id", () => {
    expect(selectionForWorktree(emptyWorktree)).toEqual({
      worktreeId: emptyWorktree.id,
      unitId: "",
    });
    expect(selectionForWorktree(filledWorktree)).toEqual({
      worktreeId: filledWorktree.id,
      unitId: "unit_welcome_sheet",
    });
  });

  it("clears the review pane to the empty worktree instead of a stale unit", () => {
    const target = resolveDashboardReviewTarget({
      selectedWorktreeId: emptyWorktree.id,
      selectedUnitId: "unit_welcome_sheet",
      documents: [filledDocument],
      worktreesById,
      defaultDocument: filledDocument,
    });
    expect(target).toEqual({ worktree: emptyWorktree, unit: null });
  });

  it("wires task clicks and the main pane through the empty-worktree selection helpers", () => {
    const dashboard = readFileSync(
      join(root, "web/src/features/worktrees/worktree-dashboard.tsx"),
      "utf8",
    );
    expect(dashboard).toMatch(/selectionForWorktree/);
    expect(dashboard).toMatch(/resolveDashboardReviewTarget/);
    expect(dashboard).not.toMatch(/if \(nextExpanded && firstUnit\)/);
  });
});
