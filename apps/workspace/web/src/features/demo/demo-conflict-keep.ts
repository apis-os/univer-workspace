import { AGENT_PANEL_ID } from "../editor/agent-panel";
import { createCollabConflictToaster } from "../editor/collab-conflict-toast";

export const KEEP_D3_PROMPT =
  "Avery Chen and Jordan Lee both edited D3. Suggest who should keep the cell and why. Do not write cells.";

export function keepCellPrompt(a1: string): string {
  const cell = a1.trim().toUpperCase() || "D3";
  if (cell === "D3") return KEEP_D3_PROMPT;
  return `Avery Chen and Jordan Lee both edited ${cell}. Suggest who should keep the cell and why. Do not write cells.`;
}

export function isKeepPrompt(prompt: string): boolean {
  return (
    typeof prompt === "string" &&
    prompt.includes("both edited") &&
    prompt.includes("Suggest who should keep the cell") &&
    prompt.includes("Do not write cells")
  );
}

export interface ConflictKeepHost {
  readonly unitId?: string;
  readonly fetch?: typeof fetch;
  readonly submitTurn?: (prompt: string) => Promise<void> | void;
  readonly openAgentPanel?: () => void;
  readonly focusKeepChip?: () => void;
  readonly toast?: (message: string) => void;
}

export async function runConflictKeep(host: ConflictKeepHost): Promise<unknown> {
  host.openAgentPanel?.();
  host.focusKeepChip?.();
  if (host.submitTurn) {
    return await host.submitTurn(KEEP_D3_PROMPT);
  }
  const fetchImpl = host.fetch ?? globalThis.fetch.bind(globalThis);
  const unitId = host.unitId ?? "unit_welcome_sheet";
  const res = await fetchImpl(`/agents/${encodeURIComponent(unitId)}/turns`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: KEEP_D3_PROMPT }),
  });
  if (!res.ok) {
    throw new Error(`Conflict keep failed with status ${res.status}`);
  }
  return await res.json().catch(() => ({}));
}

type KeepChipRoot = Pick<Document, "getElementById">;

export function focusAgentKeepChip(root: KeepChipRoot = document): boolean {
  const panel = root.getElementById(AGENT_PANEL_ID);
  if (!panel) return false;
  const chip = Array.from(panel.querySelectorAll("button")).find((button) => {
    const text = button.textContent ?? "";
    return /D3|Who keeps|谁.*保留/i.test(text);
  });
  if (!chip) return false;
  chip.focus();
  return true;
}

export function createConflictKeepNotifier(options: {
  readonly warning: (message: string) => void;
  readonly onKeepSuggested?: () => void;
  readonly debounceMs?: number;
}): (message: string) => void {
  const toaster = createCollabConflictToaster({
    warning: options.warning,
    ...(options.debounceMs !== undefined ? { debounceMs: options.debounceMs } : {}),
  });
  return (message: string) => {
    toaster(message);
    options.onKeepSuggested?.();
  };
}
