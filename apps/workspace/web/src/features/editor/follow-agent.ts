import {
  AGENT_PRESENCE_EVENT,
  readAgentPresenceStatus,
} from "./presence-roster";

export const AGENT_MEMBER_ID = "agent_workspace";
export const AGENT_CURSOR_EVENT = "workspace-agent-cursor";

export type FollowAgentPresence = "thinking" | "idle";

export interface FollowAgentCue {
  readonly followingAgent: boolean;
  readonly presenceStatus?: FollowAgentPresence | null;
  readonly cursorMemberId?: string | null;
}

export interface FollowAgentHost {
  readonly followMember: (memberId: string) => void;
  readonly stopPresenterFollow?: () => void;
  readonly activateA1?: (a1: string) => void;
}

export interface FollowAgentEditorApi {
  readonly getActiveWorkbook?: () => unknown;
  readonly getLiveShareStatus?: () => unknown;
  readonly stopFollowing?: () => void;
}

export interface CollaborationCursorSocket {
  readonly message$?: {
    readonly subscribe: (next: (event: unknown) => void) => unknown;
  };
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

export function resolveFollowAgentTarget(
  input: FollowAgentCue
): typeof AGENT_MEMBER_ID | null {
  if (!input.followingAgent) return null;
  const thinking = input.presenceStatus === "thinking";
  const agentCursor = input.cursorMemberId === AGENT_MEMBER_ID;
  if (!thinking && !agentCursor) return null;
  return AGENT_MEMBER_ID;
}

function cursorEventId(root: Record<string, unknown>): string | undefined {
  const collaMsg = asRecord(root.collaMsg);
  const data = asRecord(root.data);
  if (typeof collaMsg?.eventID === "string") return collaMsg.eventID;
  if (typeof root.eventID === "string") return root.eventID;
  if (typeof data?.eventID === "string") return data.eventID;
  return undefined;
}

function cursorUpdateRecord(
  root: Record<string, unknown>
): Record<string, unknown> | null {
  const collaMsg = asRecord(root.collaMsg);
  const data = asRecord(root.data);
  return (
    asRecord(collaMsg?.updateCursorEvent) ??
    asRecord(root.updateCursorEvent) ??
    asRecord(data?.updateCursorEvent) ??
    asRecord(data?.data)
  );
}

export function readAgentCursorMemberId(event: {
  readonly type?: string;
  readonly detail?: unknown;
}): string | null {
  const root = asRecord(event.detail);
  if (!root) return null;
  const eventID = cursorEventId(root);
  if (eventID !== "update_cursor") {
    if (event.type === AGENT_CURSOR_EVENT && typeof root.memberID === "string") {
      return root.memberID;
    }
    return null;
  }
  const update = cursorUpdateRecord(root);
  const data = asRecord(root.data);
  const memberID = update?.memberID ?? data?.memberID ?? root.memberID;
  return typeof memberID === "string" ? memberID : null;
}

export function a1FromCursorSelection(selection: unknown): string | null {
  if (typeof selection === "string") {
    const trimmed = selection.trim();
    if (/^[A-Z]+\d+$/i.test(trimmed)) return trimmed.toUpperCase();
    try {
      return a1FromCursorSelection(JSON.parse(trimmed) as unknown);
    } catch {
      return null;
    }
  }
  if (!selection || typeof selection !== "object") return null;
  const startRow = Number((selection as { startRow?: unknown }).startRow);
  const startColumn = Number(
    (selection as { startColumn?: unknown }).startColumn
  );
  if (!Number.isFinite(startRow) || !Number.isFinite(startColumn)) return null;
  return `${columnLetters(startColumn)}${startRow + 1}`;
}

function columnLetters(column: number): string {
  let n = Math.floor(column) + 1;
  if (n < 1) return "A";
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

function selectionFromCursorDetail(detail: unknown): unknown {
  const root = asRecord(detail);
  if (!root) return undefined;
  const data = asRecord(root.data);
  const update = cursorUpdateRecord(root);
  return update?.selection ?? root.selection ?? data?.selection;
}

export function activateSheetViewport(workbook: unknown, a1: string): void {
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

export function createFollowAgentEditorHost(
  api: FollowAgentEditorApi
): FollowAgentHost {
  let lastA1: string | null = null;
  return {
    followMember(memberId) {
      if (memberId !== AGENT_MEMBER_ID) return;
      if (lastA1) activateSheetViewport(api.getActiveWorkbook?.(), lastA1);
    },
    stopPresenterFollow() {
      try {
        if (api.getLiveShareStatus?.() === "following") {
          api.stopFollowing?.();
        }
      } catch {
        // Live Share Facade throws without a workbook or LiveShareCoordinator.
      }
    },
    activateA1(a1) {
      lastA1 = a1;
    },
  };
}

export function tapCollaborationSocketCursor(
  socket: CollaborationCursorSocket | null | undefined,
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
    if (
      !readAgentCursorMemberId({
        type: AGENT_CURSOR_EVENT,
        detail: event,
      })
    ) {
      return;
    }
    dest.dispatchEvent(new CustomEvent(AGENT_CURSOR_EVENT, { detail: event }));
  });
}

export interface FollowAgentController {
  readonly choose: () => string | null;
  readonly stop: () => void;
  readonly bind: (host: FollowAgentHost | undefined) => void;
  readonly noteCue: (cue: {
    readonly presenceStatus?: FollowAgentPresence | null;
    readonly cursorMemberId?: string | null;
    readonly selection?: unknown;
  }) => string | null;
  readonly attach: (target: EventTarget) => () => void;
}

export function createFollowAgentController(
  host?: FollowAgentHost
): FollowAgentController {
  let followingAgent = false;
  let presenceStatus: FollowAgentPresence | null = null;
  let cursorMemberId: string | null = null;
  let selection: unknown;
  let bound = host;

  const apply = (): string | null => {
    const target = resolveFollowAgentTarget({
      followingAgent,
      presenceStatus,
      cursorMemberId,
    });
    if (target !== AGENT_MEMBER_ID) return null;
    bound?.stopPresenterFollow?.();
    const a1 = a1FromCursorSelection(selection);
    if (a1) bound?.activateA1?.(a1);
    bound?.followMember(target);
    return target;
  };

  return {
    choose() {
      followingAgent = true;
      return apply();
    },
    stop() {
      followingAgent = false;
    },
    bind(next) {
      bound = next;
      apply();
    },
    noteCue(cue) {
      if (cue.presenceStatus !== undefined) {
        presenceStatus = cue.presenceStatus;
      }
      if (cue.cursorMemberId !== undefined) {
        cursorMemberId = cue.cursorMemberId;
      }
      if (cue.selection !== undefined) {
        selection = cue.selection;
      }
      return apply();
    },
    attach(target) {
      const onPresence = (event: Event) => {
        const status = readAgentPresenceStatus({
          type: event.type,
          detail: (event as CustomEvent<{ status?: unknown }>).detail,
        });
        if (status) {
          presenceStatus = status;
          apply();
        }
      };
      const onCursor = (event: Event) => {
        const detail = (event as CustomEvent).detail;
        const memberId = readAgentCursorMemberId({
          type: event.type,
          detail,
        });
        if (!memberId) return;
        cursorMemberId = memberId;
        const nextSelection = selectionFromCursorDetail(detail);
        if (nextSelection !== undefined) selection = nextSelection;
        apply();
      };
      target.addEventListener(AGENT_PRESENCE_EVENT, onPresence);
      target.addEventListener(AGENT_CURSOR_EVENT, onCursor);
      return () => {
        target.removeEventListener(AGENT_PRESENCE_EVENT, onPresence);
        target.removeEventListener(AGENT_CURSOR_EVENT, onCursor);
      };
    },
  };
}

const followAgent = createFollowAgentController();
let detachRuntime: (() => void) | undefined;

function ensureFollowAgentRuntime(): void {
  if (detachRuntime || typeof window === "undefined") return;
  detachRuntime = followAgent.attach(window);
}

export function bindFollowAgentHost(host: FollowAgentHost | undefined): void {
  ensureFollowAgentRuntime();
  followAgent.bind(host);
}

export function followAgentCommand(): void {
  ensureFollowAgentRuntime();
  followAgent.choose();
}

export function stopFollowAgent(): void {
  followAgent.stop();
}

export function noteFollowAgentCue(cue: {
  readonly presenceStatus?: FollowAgentPresence | null;
  readonly cursorMemberId?: string | null;
  readonly selection?: unknown;
}): string | null {
  ensureFollowAgentRuntime();
  return followAgent.noteCue(cue);
}
