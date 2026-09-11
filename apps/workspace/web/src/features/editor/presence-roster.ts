import { historyDisplayName } from "./history-names";

export const PRESENCE_RING_TOKENS = [
  "brand-600",
  "sheet",
  "board",
  "slide",
  "warning",
  "baseunit",
] as const;

export type PresenceRingToken = (typeof PRESENCE_RING_TOKENS)[number];

export const AGENT_PRESENCE_EVENT = "workspace-agent-presence";
export const JORDAN_USER_ID = "user_jordan";
export const AGENT_WORKSPACE_USER_ID = "agent_workspace";

const RING_CLASS: Record<PresenceRingToken, string> = {
  "brand-600": "ring-brand-600",
  sheet: "ring-sheet",
  board: "ring-board",
  slide: "ring-slide",
  warning: "ring-warning",
  baseunit: "ring-baseunit",
};

export type PresenceMember = {
  readonly userID: string;
  readonly name?: string;
  readonly avatar?: string;
  readonly color?: string;
};

export type PresenceSeatKind = "member" | "ghost" | "muted-bot";

export interface PresenceSeat {
  readonly userID: string;
  readonly name: string;
  readonly avatar?: string;
  readonly kind: PresenceSeatKind;
  readonly bot: boolean;
  readonly ringToken: PresenceRingToken;
}

export function isBotCollaborator(userId: string): boolean {
  return userId === AGENT_WORKSPACE_USER_ID || userId.startsWith("agent:");
}

export function presenceRingToken(member: {
  readonly userID: string;
  readonly color?: string;
}): PresenceRingToken {
  if (
    member.color &&
    (PRESENCE_RING_TOKENS as readonly string[]).includes(member.color)
  ) {
    return member.color as PresenceRingToken;
  }
  let hash = 0;
  for (let i = 0; i < member.userID.length; i += 1) {
    hash = (hash * 31 + member.userID.charCodeAt(i)) >>> 0;
  }
  return PRESENCE_RING_TOKENS[hash % PRESENCE_RING_TOKENS.length];
}

export function presenceRingClassName(
  token: PresenceRingToken,
  options?: { readonly dashed?: boolean }
): string {
  const ring = RING_CLASS[token];
  return options?.dashed ? `${ring} ring-dashed` : ring;
}

export function readAgentPresenceStatus(event: {
  readonly type?: string;
  readonly detail?: unknown;
}): "thinking" | "idle" | null {
  if (event.type !== AGENT_PRESENCE_EVENT) return null;
  const status =
    event.detail && typeof event.detail === "object" && "status" in event.detail
      ? (event.detail as { status?: unknown }).status
      : undefined;
  if (status === "thinking" || status === "idle") return status;
  return null;
}

export function shouldPulseBot(input: {
  readonly bot: boolean;
  readonly status: "thinking" | "idle";
}): boolean {
  return input.bot && input.status === "thinking";
}

function toSeat(
  member: PresenceMember,
  kind: PresenceSeatKind
): PresenceSeat {
  return {
    userID: member.userID,
    name: historyDisplayName(member.userID, member.name),
    ...(member.avatar ? { avatar: member.avatar } : {}),
    kind,
    bot: isBotCollaborator(member.userID),
    ringToken: presenceRingToken(member),
  };
}

export function composePresenceRoster(input: {
  readonly members: readonly PresenceMember[];
  readonly currentUserId: string;
  readonly currentUserName?: string;
  readonly currentUserAvatar?: string;
}): PresenceSeat[] {
  const unique = new Map<string, PresenceMember>();
  for (const member of input.members) {
    if (!unique.has(member.userID)) unique.set(member.userID, member);
  }
  if (!unique.has(input.currentUserId)) {
    unique.set(input.currentUserId, {
      userID: input.currentUserId,
      name: input.currentUserName ?? historyDisplayName(input.currentUserId),
      ...(input.currentUserAvatar ? { avatar: input.currentUserAvatar } : {}),
    });
  }

  const seats: PresenceSeat[] = [];
  const current = unique.get(input.currentUserId);
  if (current) seats.push(toSeat(current, "member"));
  for (const [userID, member] of unique) {
    if (userID === input.currentUserId) continue;
    seats.push(toSeat(member, "member"));
  }
  if (!unique.has(JORDAN_USER_ID)) {
    seats.push(
      toSeat(
        { userID: JORDAN_USER_ID, name: historyDisplayName(JORDAN_USER_ID) },
        "ghost"
      )
    );
  }
  const hasBot = [...unique.keys()].some(isBotCollaborator);
  if (!hasBot) {
    seats.push(
      toSeat(
        {
          userID: AGENT_WORKSPACE_USER_ID,
          name: historyDisplayName(AGENT_WORKSPACE_USER_ID),
        },
        "muted-bot"
      )
    );
  }
  return seats;
}
