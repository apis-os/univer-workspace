import type { WorktreeComparisonPayload } from "../worktrees/snapshot-comparison";

export const DEMO_COMPARISON_KEY = "univer-demo-comparison";

export type DemoComparisonKind = "what-if" | "history";

export interface DemoComparisonSession {
  readonly kind: DemoComparisonKind;
  readonly worktreeId: string;
  readonly unitId: string;
  readonly worktreeName?: string;
  readonly comparison: WorktreeComparisonPayload;
}

export function writeDemoComparison(session: DemoComparisonSession): void {
  try {
    sessionStorage.setItem(DEMO_COMPARISON_KEY, JSON.stringify(session));
  } catch {
    // Overlay navigation still works if sessionStorage is unavailable.
  }
}

export function readDemoComparison(): DemoComparisonSession | null {
  try {
    const raw = sessionStorage.getItem(DEMO_COMPARISON_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as DemoComparisonSession;
    if (!parsed || typeof parsed !== "object" || !parsed.comparison) return null;
    if (parsed.kind !== "what-if" && parsed.kind !== "history") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearDemoComparison(): void {
  try {
    sessionStorage.removeItem(DEMO_COMPARISON_KEY);
  } catch {
    // ignore
  }
}
