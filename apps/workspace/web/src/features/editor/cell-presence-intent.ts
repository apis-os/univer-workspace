import type { PresenceRingToken } from "./presence-roster";
import { highlightSheetRanges, type SheetHighlightHandle } from "./sheet-range-highlight";

export type CellIntentKind = "selecting" | "editing" | "thinking";

export interface CellIntent {
  readonly memberID: string;
  readonly userID: string;
  readonly a1: string;
  readonly intent: CellIntentKind;
}

export const CELL_INTENT_EVENT_ID = "cell_intent";
export const CELL_INTENT_EVENT = "workspace-cell-intent";

export function encodeCellIntentIngest(
  routeKey: string,
  intent: CellIntent
): {
  cmd: 4;
  routeKey: string;
  collaMsg: {
    eventID: "cell_intent";
    cellIntent: CellIntent;
  };
} {
  return {
    cmd: 4,
    routeKey,
    collaMsg: {
      eventID: CELL_INTENT_EVENT_ID,
      cellIntent: intent,
    },
  };
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

export function readCellIntent(event: unknown): CellIntent | null {
  const root = asRecord(event);
  if (!root) return null;
  const detail = asRecord(root.detail) ?? root;
  const collaMsg = asRecord(detail.collaMsg) ?? asRecord(root.collaMsg) ?? detail;
  const eventID = collaMsg.eventID ?? detail.eventID ?? root.eventID;
  if (eventID !== CELL_INTENT_EVENT_ID) return null;
  const rawIntent = asRecord(collaMsg.cellIntent) ?? asRecord(detail.cellIntent) ?? asRecord(root.cellIntent);
  if (!rawIntent) return null;
  const memberID = String(rawIntent.memberID ?? "").trim();
  const userID = String(rawIntent.userID ?? "").trim();
  const a1 = String(rawIntent.a1 ?? "").trim();
  const intent = rawIntent.intent;
  if (
    !memberID ||
    !userID ||
    !a1 ||
    (intent !== "selecting" && intent !== "editing" && intent !== "thinking")
  ) {
    return null;
  }
  return {
    memberID,
    userID,
    a1,
    intent: intent as CellIntentKind,
  };
}

export function shouldPublishIntent(input: {
  readonly kind?: string;
  readonly a1?: string | null;
}): boolean {
  if (input.kind === "ghost" || input.kind === "muted-bot") return false;
  if (!input.a1 || !input.a1.trim()) return false;
  return true;
}

export function highlightIntent(
  host: { getActiveWorkbook?: () => unknown } | undefined,
  intent: CellIntent,
  ringToken: PresenceRingToken,
  reducedMotion: boolean
): SheetHighlightHandle {
  return highlightSheetRanges(host, [intent.a1], {
    ringToken,
    strokeAlpha: 0.86,
    fillAlpha: 0.12,
    strokeWidth: 1,
    reducedMotion,
  });
}

export function tapCellIntentFromSocket(
  socket:
    | {
        readonly message$?: {
          readonly subscribe: (next: (event: unknown) => void) => unknown;
        };
      }
    | null
    | undefined,
  target?: EventTarget
): void {
  const dest =
    target ??
    (typeof globalThis !== "undefined" &&
    typeof (globalThis as { dispatchEvent?: unknown }).dispatchEvent ===
      "function"
      ? (globalThis as unknown as EventTarget)
      : undefined);
  if (!socket?.message$?.subscribe || !dest) return;
  socket.message$.subscribe((event) => {
    const intent = readCellIntent(event);
    if (!intent) return;
    dest.dispatchEvent(
      new CustomEvent(CELL_INTENT_EVENT, { detail: event })
    );
  });
}
