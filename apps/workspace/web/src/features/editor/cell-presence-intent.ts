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
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return null;
    try {
      const parsed = JSON.parse(trimmed) as unknown;
      return parsed !== null && typeof parsed === "object"
        ? (parsed as Record<string, unknown>)
        : null;
    } catch {
      return null;
    }
  }
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

export function isSameCellConflict(
  localA1: string | null | undefined,
  remote: { readonly userID: string; readonly a1: string; readonly intent: string },
  currentUserId: string
): boolean {
  if (!localA1 || !remote.a1) return false;
  if (remote.userID === currentUserId) return false;
  if (remote.intent !== "editing") return false;
  return localA1.replace(/\s/g, "").toUpperCase() === remote.a1.replace(/\s/g, "").toUpperCase();
}

function normalizeA1(a1: string): string {
  return a1.replace(/\s/g, "").toUpperCase();
}

export function remoteChangesetConflictsLocal(input: {
  readonly localA1s: readonly string[];
  readonly remoteUserId: string;
  readonly currentUserId: string;
  readonly remoteA1s: readonly string[];
  readonly treatMissingActorAsRemote?: boolean;
}): boolean {
  if (input.remoteUserId === input.currentUserId) {
    return false;
  }
  if (!input.remoteUserId && !input.treatMissingActorAsRemote) {
    return false;
  }
  const local = new Set(input.localA1s.map(normalizeA1).filter(Boolean));
  if (local.size === 0) return false;
  return input.remoteA1s.some((a1) => local.has(normalizeA1(a1)));
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
