export const COLLAB_CONFLICT_TOAST_DEBOUNCE_MS = 800;

export function createCollabConflictToaster(options: {
  readonly warning: (message: string) => void;
  readonly now?: () => number;
  readonly debounceMs?: number;
}): (message: string) => void {
  let lastAt = Number.NEGATIVE_INFINITY;
  const debounceMs = options.debounceMs ?? COLLAB_CONFLICT_TOAST_DEBOUNCE_MS;
  return (message: string) => {
    const now = options.now?.() ?? Date.now();
    if (now - lastAt < debounceMs) return;
    lastAt = now;
    options.warning(message);
  };
}
