/**
 * Authenticated Workspace actor identity forwarded from the Worker gateway
 * into the ChatAgent Durable Object (and in-process test harness).
 *
 * Collaboration members, session tickets, and agent tool metadata must use
 * this identity — never a hardcoded admin/agent stub — so live OT edits
 * appear as the signed-in Workspace user.
 */

import type { User } from "./types.ts";

export const ACTOR_HEADER_ID = "x-workspace-actor-id";
export const ACTOR_HEADER_NAME = "x-workspace-actor-name";
export const ACTOR_HEADER_USERNAME = "x-workspace-actor-username";

export interface WorkspaceActor {
  userId: string;
  name: string;
  username: string;
}

export function actorMemberId(actor: WorkspaceActor): string {
  return `agent:${actor.userId}`;
}

export function attachActorHeaders(request: Request, user: User): Request {
  const headers = new Headers(request.headers);
  headers.set(ACTOR_HEADER_ID, user.id);
  headers.set(ACTOR_HEADER_NAME, user.display_name);
  headers.set(ACTOR_HEADER_USERNAME, user.username);
  headers.set("x-workspace-user-id", user.id);
  headers.set("x-workspace-user-name", user.display_name);
  if (user.avatar_url) headers.set("x-workspace-user-avatar", user.avatar_url);
  return new Request(request, { headers });
}

export function actorFromRequest(request: Request): WorkspaceActor | null {
  const userId =
    request.headers.get(ACTOR_HEADER_ID)?.trim() ||
    request.headers.get("x-workspace-user-id")?.trim() ||
    "";
  if (!userId) return null;
  const name =
    request.headers.get(ACTOR_HEADER_NAME)?.trim() ||
    request.headers.get("x-workspace-user-name")?.trim() ||
    userId;
  const username = request.headers.get(ACTOR_HEADER_USERNAME)?.trim() || "";
  return { userId, name, username };
}

export function actorFromUser(user: Pick<User, "id" | "display_name" | "username">): WorkspaceActor {
  return {
    userId: user.id,
    name: user.display_name,
    username: user.username
  };
}

export function isUniverserWrite(method: string, pathname: string): boolean {
  if (!pathname.startsWith("/universer-api/")) return false;
  const upper = method.toUpperCase();
  if (upper === "GET" || upper === "HEAD" || upper === "OPTIONS") return false;
  return true;
}

export function requiresWorkspaceAuth(method: string, pathname: string): boolean {
  if (pathname === "/uf" || pathname.startsWith("/uf/")) {
    return true;
  }
  if (pathname === "/agents" || pathname.startsWith("/agents/")) {
    return method.toUpperCase() !== "GET";
  }
  if (pathname.startsWith("/universer-api/")) {
    if (pathname.includes("/comb/connect")) return false;
    return isUniverserWrite(method, pathname) || pathname === "/universer-api/user/session-ticket";
  }
  if (pathname.startsWith("/api/actions/")) {
    return method.toUpperCase() !== "GET";
  }
  return false;
}
