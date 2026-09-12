/**
 * Thin Universer HTTP dispatcher owned by T10: comment routes + GET /user/list.
 * Snapshot/comb/history remain inline in dsh-host.ts until later tasks extract them.
 */
import type { SqlExec } from "../kernel/sql.ts";
import { handleUniverserCommentRoutes } from "./univer-comment-http.ts";

export interface CollaboratorIdentity {
  readonly userID: string;
  readonly name: string;
  readonly avatar: string;
}

export interface UniverserHttpHost {
  readonly identity: CollaboratorIdentity;
  readonly sql?: SqlExec;
  readonly collab?: unknown;
  mintSessionTicket?(identity: CollaboratorIdentity): string;
  onNewChanges?(unitID: string, changeset: unknown, memberID?: string): void;
}

export async function handleUniverserHttp(
  request: Request,
  host: UniverserHttpHost
): Promise<Response | null> {
  const url = new URL(request.url);
  if (!url.pathname.startsWith("/universer-api/")) return null;
  return handleUniverserCommentRoutes(request, {
    sql: host.sql,
    userID: host.identity.userID,
    name: host.identity.name,
    avatar: host.identity.avatar,
    collab: host.collab,
    onNewChanges: host.onNewChanges
  });
}
