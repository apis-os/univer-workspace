export interface AgentToolCall {
  readonly tool: string;
  readonly args: Record<string, unknown>;
}

export interface AgentEditDetail {
  readonly unitId?: string;
  readonly rev?: number | null;
  readonly toolCalls?: readonly AgentToolCall[];
}

export interface LiveUniverApi {
  getActiveWorkbook?: () => unknown;
  getActiveDocument?: () => unknown;
}

function facadeToolId(tool: string): string {
  return tool.replaceAll("_", ".");
}

function writeSheetCell(workbook: unknown, a1: string, value: unknown): boolean {
  if (!workbook || typeof workbook !== "object") return false;
  const getActiveSheet = (workbook as { getActiveSheet?: unknown }).getActiveSheet;
  if (typeof getActiveSheet !== "function") return false;
  const sheet = (getActiveSheet as () => unknown).call(workbook);
  if (!sheet || typeof sheet !== "object") return false;
  const getRange = (sheet as { getRange?: unknown }).getRange;
  if (typeof getRange !== "function") return false;
  const range = (getRange as (address: string) => unknown).call(sheet, a1);
  if (!range || typeof range !== "object") return false;
  const setValue = (range as { setValue?: unknown }).setValue;
  if (typeof setValue !== "function") return false;
  (setValue as (next: unknown) => unknown).call(range, { v: value });
  return true;
}

function appendDocumentText(document: unknown, text: string): boolean {
  if (!document || typeof document !== "object") return false;
  const appendText = (document as { appendText?: unknown }).appendText;
  if (typeof appendText !== "function") return false;
  (appendText as (next: string) => unknown).call(document, text);
  return true;
}

export type AgentCollaborationState =
  | boolean
  | string
  | {
      readonly synced?: boolean;
      readonly status?: unknown;
    };

export interface AgentEditRange {
  readonly a1: string;
  readonly value?: unknown;
}

function isSynced(collaboration?: AgentCollaborationState): boolean {
  if (collaboration === true || collaboration === "SYNCED") return true;
  if (!collaboration || typeof collaboration !== "object") return false;
  if (collaboration.synced === true) return true;
  return collaboration.status === "SYNCED";
}

function sheetRangesFromDetail(detail: AgentEditDetail): AgentEditRange[] {
  const ranges: AgentEditRange[] = [];
  for (const call of detail.toolCalls ?? []) {
    if (facadeToolId(call.tool) !== "univer.sheet.setRange") continue;
    const cells = (call.args.cells ?? []) as Array<{ a1?: string; value?: unknown }>;
    for (const cell of cells) {
      if (!cell?.a1) continue;
      ranges.push({ a1: String(cell.a1), value: cell.value });
    }
  }
  return ranges;
}

export function applyWorkspaceAgentEdits(
  univerAPI: LiveUniverApi,
  detail: AgentEditDetail | undefined,
  unitId: string,
  collaboration?: AgentCollaborationState
): { readonly applied: boolean; readonly ranges: readonly AgentEditRange[] } {
  if (!detail || detail.unitId !== unitId) return { applied: false, ranges: [] };
  const ranges = sheetRangesFromDetail(detail);
  if (isSynced(collaboration)) {
    return { applied: false, ranges };
  }
  let applied = false;
  const workbook = univerAPI.getActiveWorkbook?.();
  const document = univerAPI.getActiveDocument?.();
  for (const call of detail.toolCalls ?? []) {
    const tool = facadeToolId(call.tool);
    if (tool === "univer.sheet.setRange") {
      const cells = (call.args.cells ?? []) as Array<{
        a1?: string;
        value?: unknown;
      }>;
      for (const cell of cells) {
        if (!cell?.a1) continue;
        try {
          if (writeSheetCell(workbook, String(cell.a1), cell.value ?? "")) {
            applied = true;
          }
        } catch {
          // Live OT already applied the same mutation, or range API is unavailable.
        }
      }
    }
    if (tool === "univer.doc.appendText") {
      const text = String(call.args.text ?? "");
      if (!text) continue;
      try {
        if (appendDocumentText(document, text)) applied = true;
      } catch {
        // Live OT already applied the same mutation, or document API is unavailable.
      }
    }
  }
  return { applied, ranges };
}
