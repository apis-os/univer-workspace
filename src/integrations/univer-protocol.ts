/**
 * Univer Collaboration HTTP/WebSocket protocol constants and path helpers.
 * Wire values match `@univerjs/protocol` ErrorCode and worktree-client URLs.
 */
export const UNIVERSER_OK = { code: 1, message: "" } as const;
export const UNIVERSER_NOT_FOUND = { code: 4, message: "Sheet block was not found" } as const;
export const UNIVERSER_INVALID_ARGUMENT = { code: 7, message: "" } as const;

export const WORKSPACE_USER_ID_HEADER = "x-workspace-user-id";
export const WORKSPACE_USER_NAME_HEADER = "x-workspace-user-name";
export const WORKSPACE_USER_AVATAR_HEADER = "x-workspace-user-avatar";

export const DEFAULT_COLLABORATOR = {
  userID: "user_admin",
  name: "Administrator",
  avatar: ""
} as const;

export interface CollaboratorIdentity {
  readonly userID: string;
  readonly name: string;
  readonly avatar: string;
}

export function readCollaboratorIdentity(request: Request): CollaboratorIdentity {
  const userID =
    request.headers.get(WORKSPACE_USER_ID_HEADER)?.trim() ||
    request.headers.get("x-workspace-actor-id")?.trim();
  if (!userID) return { ...DEFAULT_COLLABORATOR };
  return {
    userID,
    name:
      request.headers.get(WORKSPACE_USER_NAME_HEADER)?.trim() ||
      request.headers.get("x-workspace-actor-name")?.trim() ||
      userID,
    avatar: request.headers.get(WORKSPACE_USER_AVATAR_HEADER)?.trim() || ""
  };
}

export function applyCollaboratorIdentity(
  request: Request,
  identity: CollaboratorIdentity
): Request {
  const headers = new Headers(request.headers);
  headers.set(WORKSPACE_USER_ID_HEADER, identity.userID);
  headers.set(WORKSPACE_USER_NAME_HEADER, identity.name);
  headers.set("x-workspace-actor-id", identity.userID);
  headers.set("x-workspace-actor-name", identity.name);
  if (identity.avatar) headers.set(WORKSPACE_USER_AVATAR_HEADER, identity.avatar);
  else headers.delete(WORKSPACE_USER_AVATAR_HEADER);
  return new Request(request, { headers });
}

export interface UniverserPath {
  readonly pathname: string;
  readonly worktreeId: string | null;
  readonly worktreeRest: string;
}

/**
 * Map `/universer-api/worktrees/:id/{snapshot|comb|history}/...` onto the trunk
 * Universer paths the collab service already serves.
 */
export function rewriteWorktreeUniverserPath(pathname: string): UniverserPath {
  const match = pathname.match(/^\/universer-api\/worktrees\/([^/]+)(?:\/(.*))?$/);
  if (!match) {
    return { pathname, worktreeId: null, worktreeRest: "" };
  }
  const worktreeId = decodeURIComponent(match[1]);
  const rest = match[2] ?? "";
  if (
    rest === "snapshot" ||
    rest.startsWith("snapshot/") ||
    rest === "comb" ||
    rest.startsWith("comb/") ||
    rest.startsWith("history/")
  ) {
    return {
      pathname: `/universer-api/${rest}`,
      worktreeId,
      worktreeRest: rest
    };
  }
  return { pathname, worktreeId, worktreeRest: rest };
}

export function isWorktreeCombConnect(pathname: string): boolean {
  return (
    pathname === "/universer-api/comb/connect" ||
    /^\/universer-api\/worktrees\/[^/]+\/comb\/connect$/.test(pathname)
  );
}

export function isWorktreeProtocolEvents(pathname: string): boolean {
  return /^\/universer-api\/worktrees\/[^/]+\/events$/.test(pathname);
}

export interface IssuedSessionTicket {
  readonly userID: string;
  readonly name: string;
  readonly avatar?: string;
  readonly expiresAt: number;
}

export function consumeIssuedTicket(
  tickets: Map<string, IssuedSessionTicket>,
  ticketParam: string
): CollaboratorIdentity | null {
  if (!ticketParam) return null;
  const ticketData = tickets.get(ticketParam);
  tickets.delete(ticketParam);
  if (!ticketData || ticketData.expiresAt <= Date.now()) return null;
  return {
    userID: ticketData.userID,
    name: ticketData.name,
    avatar: ticketData.avatar ?? ""
  };
}
