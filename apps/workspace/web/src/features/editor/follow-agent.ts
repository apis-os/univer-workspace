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

export function resolveFollowAgentTarget(
  input: FollowAgentCue
): typeof AGENT_MEMBER_ID | null {
  if (!input.followingAgent) return null;
  const thinking = input.presenceStatus === "thinking";
  const agentCursor = input.cursorMemberId === AGENT_MEMBER_ID;
  if (!thinking && !agentCursor) return null;
  return AGENT_MEMBER_ID;
}

export function readAgentCursorMemberId(event: {
  readonly type?: string;
  readonly detail?: unknown;
}): string | null {
  const detail = event.detail;
  if (!detail || typeof detail !== "object") return null;
  const root = detail as Record<string, unknown>;
  const collaMsg =
    root.collaMsg && typeof root.collaMsg === "object"
      ? (root.collaMsg as Record<string, unknown>)
      : root;
  const eventID =
    typeof collaMsg.eventID === "string"
      ? collaMsg.eventID
      : typeof root.eventID === "string"
        ? root.eventID
        : undefined;
  if (eventID !== "update_cursor") {
    if (event.type === AGENT_CURSOR_EVENT && typeof root.memberID === "string") {
      return root.memberID;
    }
    return null;
  }
  const update =
    collaMsg.updateCursorEvent && typeof collaMsg.updateCursorEvent === "object"
      ? (collaMsg.updateCursorEvent as Record<string, unknown>)
      : root.updateCursorEvent && typeof root.updateCursorEvent === "object"
        ? (root.updateCursorEvent as Record<string, unknown>)
        : undefined;
  const memberID = update?.memberID;
  return typeof memberID === "string" ? memberID : null;
}

export function a1FromCursorSelection(selection: unknown): string | null {
  if (typeof selection === "string") {
    const trimmed = selection.trim();
    return /^[A-Z]+\d+$/i.test(trimmed) ? trimmed.toUpperCase() : null;
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
  if (!detail || typeof detail !== "object") return undefined;
  const root = detail as Record<string, unknown>;
  const collaMsg =
    root.collaMsg && typeof root.collaMsg === "object"
      ? (root.collaMsg as Record<string, unknown>)
      : root;
  const update =
    collaMsg.updateCursorEvent && typeof collaMsg.updateCursorEvent === "object"
      ? (collaMsg.updateCursorEvent as Record<string, unknown>)
      : root.updateCursorEvent && typeof root.updateCursorEvent === "object"
        ? (root.updateCursorEvent as Record<string, unknown>)
        : undefined;
  return update?.selection ?? root.selection;
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
    bound?.followMember(target);
    const a1 = a1FromCursorSelection(selection);
    if (a1) bound?.activateA1?.(a1);
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
