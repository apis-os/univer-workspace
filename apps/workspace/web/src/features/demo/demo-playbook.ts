import type { MessageKey } from "../../shared/i18n";
import type { DemoSearch } from "./demo-search";

export const DEMO_PLAYBOOK_STORAGE_KEY = "univer-workspace-demo-playbook-v2";

export interface DemoPlaybookStep {
  readonly id: string;
  readonly labelKey: MessageKey;
}

export const DEMO_PLAYBOOK_STEPS = [
  { id: "open-jordan", labelKey: "playbookOpenJordan" },
  { id: "edit-cell", labelKey: "playbookEditCell" },
  { id: "ask-agent-fill", labelKey: "playbookAskAgentFill" },
  { id: "present-follow", labelKey: "playbookPresentFollow" },
  { id: "worktree-review", labelKey: "playbookWorktreeReview" },
] as const satisfies readonly DemoPlaybookStep[];

export interface DemoPlaybookState {
  readonly enabled: boolean;
  readonly step: number;
  readonly isolated?: boolean;
}

type StorageLike = Pick<Storage, "getItem" | "setItem">;

function browserStorage(): StorageLike | undefined {
  try {
    return globalThis.localStorage;
  } catch {
    return undefined;
  }
}

export function readPlaybook(
  storage: StorageLike | undefined = browserStorage()
): DemoPlaybookState {
  const raw = storage?.getItem(DEMO_PLAYBOOK_STORAGE_KEY);
  if (!raw) return { enabled: false, step: 0 };
  try {
    const parsed = JSON.parse(raw) as Partial<DemoPlaybookState>;
    const step = Number(parsed.step);
    return {
      enabled: parsed.enabled === true,
      step:
        Number.isInteger(step) && step >= 0 && step < DEMO_PLAYBOOK_STEPS.length
          ? step
          : 0,
      ...(parsed.isolated === true ? { isolated: true } : {}),
    };
  } catch {
    return { enabled: false, step: 0 };
  }
}

export function writePlaybook(
  state: DemoPlaybookState,
  storage: StorageLike | undefined = browserStorage()
): void {
  storage?.setItem(DEMO_PLAYBOOK_STORAGE_KEY, JSON.stringify(state));
}

export function shouldShowPlaybook(input: {
  readonly play?: DemoSearch["play"];
  readonly storedEnabled: boolean;
}): boolean {
  return input.play === "1" || input.storedEnabled;
}

export function playbookHeaderMode(input: {
  readonly compact: boolean;
  readonly enabled: boolean;
}): "hidden" | "badge" | "stepper" {
  if (!input.enabled) return "hidden";
  return input.compact ? "badge" : "stepper";
}

export function playbookKeyAdvances(
  key: string,
  playbookFocused: boolean
): boolean {
  if (!playbookFocused) return false;
  return key === "j" || key === "n" || key === "J" || key === "N";
}

export function advancePlaybookStep(
  step: number,
  key: string,
  playbookFocused: boolean
): number {
  if (!playbookKeyAdvances(key, playbookFocused)) return step;
  const last = DEMO_PLAYBOOK_STEPS.length - 1;
  return Math.min(step + 1, last);
}
