export function selectionForWorktree<
  TWorktree extends { readonly id: string; readonly units: readonly TUnit[] },
  TUnit extends { readonly unitId: string },
>(worktree: TWorktree): { readonly worktreeId: string; readonly unitId: string } {
  return {
    worktreeId: worktree.id,
    unitId: worktree.units[0]?.unitId ?? "",
  };
}

export function resolveDashboardReviewTarget<
  TWorktree extends { readonly id: string },
  TUnit extends { readonly unitId: string },
>(options: {
  readonly selectedWorktreeId?: string;
  readonly selectedUnitId?: string;
  readonly documents: readonly {
    readonly worktree: TWorktree;
    readonly unit: TUnit;
  }[];
  readonly worktreesById: ReadonlyMap<string, TWorktree>;
  readonly defaultDocument: {
    readonly worktree: TWorktree;
    readonly unit: TUnit;
  } | null;
}): { readonly worktree: TWorktree; readonly unit: TUnit | null } | null {
  const selectedWorktreeId = options.selectedWorktreeId || undefined;
  const selectedUnitId = options.selectedUnitId || undefined;
  const selectionRequested =
    selectedWorktreeId !== undefined || selectedUnitId !== undefined;

  if (!selectionRequested) {
    return options.defaultDocument
      ? {
          worktree: options.defaultDocument.worktree,
          unit: options.defaultDocument.unit,
        }
      : null;
  }

  const matchingDocument = options.documents.find(
    (document) =>
      (selectedWorktreeId === undefined ||
        document.worktree.id === selectedWorktreeId) &&
      (selectedUnitId === undefined ||
        document.unit.unitId === selectedUnitId)
  );
  if (matchingDocument) {
    return {
      worktree: matchingDocument.worktree,
      unit: matchingDocument.unit,
    };
  }

  if (selectedWorktreeId !== undefined) {
    const worktree = options.worktreesById.get(selectedWorktreeId);
    if (worktree) {
      return { worktree, unit: null };
    }
  }

  return null;
}
