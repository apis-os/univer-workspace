export type WorktreeUnitChange = "modified" | "added" | "deleted" | "unchanged";

export function resolveWorktreeUnitChange(input: {
  readonly removed: boolean;
  readonly source: "trunk" | "worktree";
  readonly draftHeadRevision: number;
  readonly baselineTrunkRevision: number | null | undefined;
  readonly snapshotHasDiffs?: boolean | null;
}): WorktreeUnitChange {
  if (input.removed) return "deleted";
  if (input.source === "worktree") return "added";
  if (input.snapshotHasDiffs === true) return "modified";
  if (typeof input.baselineTrunkRevision === "number") {
    return input.draftHeadRevision > input.baselineTrunkRevision ? "modified" : "unchanged";
  }
  return "modified";
}
