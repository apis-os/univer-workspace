export const AGENT_REPLAY_STORAGE_KEY = "univer-workspace-agent-replay-v1";
export const AGENT_SPOTLIGHT_CELLS = ["E2", "E3", "E4"] as const;

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export interface AgentSpotlightDetail {
  readonly toolCalls?: ReadonlyArray<{
    readonly tool: string;
    readonly args: Record<string, unknown>;
  }>;
}

export interface AgentSpotlightHost {
  readonly getActiveWorkbook?: () => unknown;
}

export interface ActivateSpotlightInput {
  readonly storage?: StorageLike;
  readonly activate?: (a1: string) => void;
  readonly delay?: (ms: number) => Promise<void>;
  readonly compact?: boolean;
  readonly reducedMotion?: boolean;
  readonly cells?: readonly string[];
  readonly force?: boolean;
}

export interface SpotlightResult {
  readonly walked: readonly string[];
  readonly cells: readonly string[];
}

let spotlightHost: AgentSpotlightHost | undefined;

function browserSessionStorage(): StorageLike | undefined {
  try {
    return globalThis.sessionStorage;
  } catch {
    return undefined;
  }
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function facadeToolId(tool: string): string {
  return tool.replaceAll("_", ".");
}

export function bindAgentEditSpotlight(
  host: AgentSpotlightHost | undefined
): void {
  spotlightHost = host;
}

export function activateSpotlightCell(a1: string): void {
  const workbook = spotlightHost?.getActiveWorkbook?.();
  if (!workbook || typeof workbook !== "object") return;
  const getActiveSheet = (workbook as { getActiveSheet?: unknown })
    .getActiveSheet;
  if (typeof getActiveSheet !== "function") return;
  const sheet = (getActiveSheet as () => unknown).call(workbook);
  if (!sheet || typeof sheet !== "object") return;
  const getRange = (sheet as { getRange?: unknown }).getRange;
  if (typeof getRange !== "function") return;
  const range = (getRange as (address: string) => unknown).call(sheet, a1);
  if (range && typeof range === "object") {
    const activate = (range as { activate?: unknown }).activate;
    if (typeof activate === "function") {
      (activate as () => unknown).call(range);
      return;
    }
  }
  const getSelection = (sheet as { getSelection?: unknown }).getSelection;
  if (typeof getSelection !== "function") return;
  const selection = (getSelection as () => unknown).call(sheet);
  if (!selection || typeof selection !== "object") return;
  const setActiveRange = (selection as { setActiveRange?: unknown })
    .setActiveRange;
  if (typeof setActiveRange === "function") {
    (setActiveRange as (next: unknown) => unknown).call(selection, range ?? a1);
  }
}

export function shouldWalkAgentSpotlight(input: {
  readonly compact?: boolean;
  readonly reducedMotion?: boolean;
}): boolean {
  return !input.compact && !input.reducedMotion;
}

export function spotlightCellsFromDetail(
  detail?: AgentSpotlightDetail
): string[] {
  const cells: string[] = [];
  for (const call of detail?.toolCalls ?? []) {
    if (facadeToolId(call.tool) !== "univer.sheet.setRange") continue;
    const list = (call.args.cells ?? []) as Array<{ a1?: string }>;
    for (const cell of list) {
      if (cell?.a1) cells.push(String(cell.a1));
    }
  }
  return cells;
}

export async function activateAgentEditSpotlight(
  input: ActivateSpotlightInput = {}
): Promise<SpotlightResult> {
  const cells =
    input.cells && input.cells.length > 0
      ? [...input.cells]
      : [...AGENT_SPOTLIGHT_CELLS];
  const storage = input.storage ?? browserSessionStorage();
  if (!input.force && storage?.getItem(AGENT_REPLAY_STORAGE_KEY) === "1") {
    return { walked: [], cells };
  }
  storage?.setItem(AGENT_REPLAY_STORAGE_KEY, "1");
  if (!shouldWalkAgentSpotlight(input)) {
    return { walked: [], cells };
  }
  const activate = input.activate ?? activateSpotlightCell;
  const delay = input.delay ?? wait;
  const walked: string[] = [];
  for (const a1 of cells) {
    activate(a1);
    walked.push(a1);
    await delay(220);
  }
  return { walked, cells };
}

export function resetAgentEditSpotlight(storage?: StorageLike): void {
  (storage ?? browserSessionStorage())?.removeItem(AGENT_REPLAY_STORAGE_KEY);
}

export async function replayAgentEditSpotlight(
  input: ActivateSpotlightInput = {}
): Promise<SpotlightResult> {
  resetAgentEditSpotlight(input.storage);
  return activateAgentEditSpotlight({ ...input, force: true });
}
