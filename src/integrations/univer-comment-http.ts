/**
 * Universer thread-comment HTTP wire for ChatAgent.
 * Copied from `@univerjs-pro/collaboration-comment-endpoint` JSON routes;
 * persisted on Durable Object SQLite (not the Node comment-database-sqlite adapter).
 */
import type { Context } from "@deepseek-ai/cordis";
import type { SqlExec } from "../kernel/sql.ts";
import { AGENT_MEMBER_ID, AGENT_USER_ID } from "../plugins/univer-facade-actions.ts";
import { runAgentTurn, type AgentHost, type AgentTurnResult } from "../plugins/univer-agent.ts";

/** `@univerjs/protocol` ErrorCode.OK — comment client treats `error.code !== 1` as failure. */
export const UNIVERSER_COMMENT_OK = { code: 1, message: "" } as const;
const UNIVERSER_COMMENT_INVALID = { code: 7, message: "" } as const;
const UNIVERSER_COMMENT_NOT_FOUND = { code: 4, message: "" } as const;
const UNIVERSER_COMMENT_INTERNAL = { code: 2, message: "Internal error" } as const;

/** `@univerjs/protocol` CommentSolvedStatus */
export const COMMENT_SOLVED_OPEN = 0;
export const COMMENT_SOLVED_SOLVED = 1;

const COMMENT_DDL = `
CREATE TABLE IF NOT EXISTS collaboration_comments (
  unit_id TEXT NOT NULL,
  thread_id TEXT NOT NULL,
  reply_id TEXT NOT NULL,
  author_user_id TEXT NOT NULL,
  content TEXT NOT NULL,
  mentions_json TEXT NOT NULL,
  solved INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  generation TEXT NOT NULL,
  PRIMARY KEY (unit_id, reply_id)
);
CREATE INDEX IF NOT EXISTS collaboration_comments_thread_lookup
  ON collaboration_comments(unit_id, thread_id, created_at, reply_id);
`;

export const DEMO_COMMENT_USERS: Readonly<Record<string, DemoCommentUser>> = {
  user_admin: { userID: "user_admin", name: "Avery Chen", avatar: "" },
  user_jordan: { userID: "user_jordan", name: "Jordan Lee", avatar: "" },
  agent_workspace: { userID: "agent_workspace", name: "Workspace Agent", avatar: "" }
};

export interface DemoCommentUser {
  readonly userID: string;
  readonly name: string;
  readonly avatar: string;
}

export interface CommentHttpHost {
  readonly sql?: SqlExec;
  readonly userID: string;
  readonly name?: string;
  readonly avatar?: string;
  readonly collab?: unknown;
  waitUntil?(promise: Promise<unknown>): void;
  onNewChanges?(unitID: string, changeset: unknown, memberID?: string): void;
}

const AGENT_MENTION_RE = /@agent\b/i;

interface CommentRecord {
  unitID: string;
  threadID: string;
  replyID: string;
  authorUserID: string;
  content: string;
  mentions: string[];
  solved: number;
  createdAt: number;
  updatedAt: number;
  generation: string;
}

interface CommentWireError extends Error {
  status: number;
  code: number;
}

const COMMENT_ACTION = /\/universer-api\/comment\/unit\/([^/]+)\/(list|add|reply|edit|solved|delete)$/;

export async function handleUniverserCommentRoutes(
  request: Request,
  host: CommentHttpHost
): Promise<Response | null> {
  const url = new URL(request.url);
  if (url.pathname === "/universer-api/user/list" && request.method === "GET") {
    return handleUserListHttp(url);
  }
  if (!COMMENT_ACTION.test(url.pathname)) return null;
  if (!host.sql) {
    return jsonComment({ error: UNIVERSER_COMMENT_INTERNAL }, 500);
  }
  return handleCommentHttp(request, host);
}

export function handleUserListHttp(url: URL): Response {
  const requested = url.searchParams.getAll("userIDs").flatMap((value) =>
    value.split(",").map((id) => id.trim()).filter(Boolean)
  );
  const ids = requested.length > 0 ? requested : Object.keys(DEMO_COMMENT_USERS);
  const users = ids.map((userID) => resolveCommentUser(userID));
  return jsonComment({ error: UNIVERSER_COMMENT_OK, users });
}

export async function handleCommentHttp(
  request: Request,
  host: CommentHttpHost
): Promise<Response | null> {
  const url = new URL(request.url);
  const match = url.pathname.match(COMMENT_ACTION);
  if (!match) return null;

  const unitID = match[1];
  const action = match[2] as "list" | "add" | "reply" | "edit" | "solved" | "delete";
  const method = request.method.toUpperCase();
  if (action === "list") {
    if (method !== "GET" && method !== "POST") return null;
  } else if (method !== "POST") {
    return null;
  }

  try {
    if (!unitID || unitID.includes("/")) {
      throw wireError(400, UNIVERSER_COMMENT_INVALID.code, "Invalid route unitId");
    }
    if (!host.userID) {
      throw wireError(401, 5, "HTTP user is not authenticated");
    }
    if (!host.sql) {
      throw wireError(500, UNIVERSER_COMMENT_INTERNAL.code, "Internal error");
    }
    const sql = host.sql;
    ensureCommentSchema(sql);

    if (action === "list") {
      const listReq =
        method === "GET"
          ? { unitId: unitID, threadId: url.searchParams.getAll("threadId") }
          : await request.json().catch(() => null);
      const parsed = parseListRequest(listReq, unitID);
      const comments = listThreads(sql, unitID, parsed.threadId);
      return jsonComment({
        error: UNIVERSER_COMMENT_OK,
        comments,
        users: usersForThreads(comments, host)
      });
    }

    const body = await request.json().catch(() => null);
    const object = requireObject(body);
    if (requireNonEmptyString(object.unitId, "unitId") !== unitID) {
      throw wireError(400, UNIVERSER_COMMENT_INVALID.code, "Route and body unitId must match");
    }
    requireNonEmptyString(object.memberId, "memberId");

    switch (action) {
      case "add": {
        const content = requireNonEmptyString(object.content, "content");
        const mentions = requireStringArray(object.mention, "mention");
        const comment = addRoot(sql, unitID, host.userID, content, mentions);
        await enqueueAgentMentionTurn(host, sql, unitID, comment.threadId, content).catch(() => undefined);
        return jsonComment({ error: UNIVERSER_COMMENT_OK, comment });
      }
      case "reply": {
        const threadID = requireNonEmptyString(object.threadId, "threadId");
        const content = requireNonEmptyString(object.content, "content");
        const mentions = requireStringArray(object.mention, "mention");
        const reply = addReply(sql, unitID, threadID, host.userID, content, mentions);
        await enqueueAgentMentionTurn(host, sql, unitID, threadID, content).catch(() => undefined);
        return jsonComment({ error: UNIVERSER_COMMENT_OK, reply });
      }
      case "edit": {
        const threadID = requireNonEmptyString(object.threadId, "threadId");
        const replyID = requireNonEmptyString(object.replyId, "replyId");
        const content = requireNonEmptyString(object.content, "content");
        const mentions = requireStringArray(object.mention, "mention");
        editReply(sql, unitID, threadID, replyID, host.userID, content, mentions);
        return jsonComment({ error: UNIVERSER_COMMENT_OK });
      }
      case "solved": {
        const threadID = requireNonEmptyString(object.threadId, "threadId");
        const solved = requireSolved(object.solved);
        setSolved(sql, unitID, threadID, solved);
        return jsonComment({ error: UNIVERSER_COMMENT_OK });
      }
      case "delete": {
        const threadID = requireNonEmptyString(object.threadId, "threadId");
        const replyID =
          object.replyId == null || object.replyId === ""
            ? undefined
            : requireNonEmptyString(object.replyId, "replyId");
        deleteComment(sql, unitID, threadID, replyID);
        return jsonComment({ error: UNIVERSER_COMMENT_OK });
      }
    }
  } catch (err) {
    return commentErrorResponse(err, action);
  }
}

function promptFromAgentMention(content: string): string | null {
  const texts = [plainCommentText(content), content];
  for (const text of texts) {
    if (!AGENT_MENTION_RE.test(text)) continue;
    const remainder = text.replace(AGENT_MENTION_RE, "").trim();
    return remainder || null;
  }
  return null;
}

export function resolveCommentUser(userID: string, fallbackName = ""): DemoCommentUser {
  return (
    DEMO_COMMENT_USERS[userID] ?? {
      userID,
      name: fallbackName.trim() || userID,
      avatar: ""
    }
  );
}

function ensureCommentSchema(sql: SqlExec): void {
  const statements = COMMENT_DDL.split(";")
    .map((part) => part.trim())
    .filter(Boolean);
  for (const statement of statements) {
    sql.exec(statement);
  }
}

function addRoot(
  sql: SqlExec,
  unitID: string,
  authorUserID: string,
  content: string,
  mentions: string[]
) {
  const threadID = crypto.randomUUID();
  const now = Date.now();
  runWrite(sql, () => {
    insertRecord(sql, {
      unitID,
      threadID,
      replyID: threadID,
      authorUserID,
      content,
      mentions,
      solved: COMMENT_SOLVED_OPEN,
      createdAt: now,
      updatedAt: now,
      generation: crypto.randomUUID()
    });
  });
  return toThread(listRecords(sql, unitID, [threadID]));
}

function addReply(
  sql: SqlExec,
  unitID: string,
  threadID: string,
  authorUserID: string,
  content: string,
  mentions: string[]
) {
  const root = getByReply(sql, unitID, threadID);
  if (!root || root.threadID !== root.replyID) {
    throw wireError(404, UNIVERSER_COMMENT_NOT_FOUND.code, "Open Comment thread was not found");
  }
  if (root.solved !== COMMENT_SOLVED_OPEN) {
    throw wireError(404, UNIVERSER_COMMENT_NOT_FOUND.code, "Open Comment thread was not found");
  }
  const replyID = crypto.randomUUID();
  const now = Date.now();
  runWrite(sql, () => {
    insertRecord(sql, {
      unitID,
      threadID,
      replyID,
      authorUserID,
      content,
      mentions,
      solved: root.solved,
      createdAt: now,
      updatedAt: now,
      generation: crypto.randomUUID()
    });
  });
  const record = getByReply(sql, unitID, replyID);
  if (!record) throw wireError(500, UNIVERSER_COMMENT_INTERNAL.code, "Internal error");
  return toReply(record);
}

function editReply(
  sql: SqlExec,
  unitID: string,
  threadID: string,
  replyID: string,
  authorUserID: string,
  content: string,
  mentions: string[]
): void {
  const record = getByReply(sql, unitID, replyID);
  const root = getByReply(sql, unitID, threadID);
  if (!record || record.threadID !== threadID || !root) {
    throw wireError(404, UNIVERSER_COMMENT_NOT_FOUND.code, "Open Comment thread was not found");
  }
  if (root.solved !== COMMENT_SOLVED_OPEN) {
    throw wireError(404, UNIVERSER_COMMENT_NOT_FOUND.code, "Open Comment thread was not found");
  }
  if (record.authorUserID !== authorUserID) {
    throw wireError(403, 3, "Comment author does not match the authenticated user");
  }
  if (record.content === content && sameStrings(record.mentions, mentions)) return;
  sql.exec(
    `UPDATE collaboration_comments
     SET content = ?, mentions_json = ?, updated_at = ?
     WHERE unit_id = ? AND thread_id = ? AND reply_id = ?`,
    content,
    JSON.stringify(mentions),
    Math.max(Date.now(), record.updatedAt + 1),
    unitID,
    threadID,
    replyID
  );
}

function setSolved(sql: SqlExec, unitID: string, threadID: string, solved: number): void {
  const root = getByReply(sql, unitID, threadID);
  if (!root || root.threadID !== root.replyID) {
    throw wireError(404, UNIVERSER_COMMENT_NOT_FOUND.code, "Open Comment thread was not found");
  }
  if (root.solved === solved) return;
  sql.exec(
    `UPDATE collaboration_comments SET solved = ?, updated_at = ? WHERE unit_id = ? AND reply_id = ?`,
    solved,
    Date.now(),
    unitID,
    threadID
  );
}

function deleteComment(sql: SqlExec, unitID: string, threadID: string, replyID?: string): void {
  if (!replyID || replyID === threadID) {
    sql.exec(`DELETE FROM collaboration_comments WHERE unit_id = ? AND thread_id = ?`, unitID, threadID);
    return;
  }
  const record = getByReply(sql, unitID, replyID);
  if (!record || record.threadID !== threadID) {
    throw wireError(404, UNIVERSER_COMMENT_NOT_FOUND.code, "Open Comment thread was not found");
  }
  sql.exec(
    `DELETE FROM collaboration_comments WHERE unit_id = ? AND thread_id = ? AND reply_id = ? AND generation = ?`,
    unitID,
    threadID,
    replyID,
    record.generation
  );
}

function listThreads(sql: SqlExec, unitID: string, threadIDs: string[]): Record<string, ReturnType<typeof toThread>> {
  const records = listRecords(sql, unitID, threadIDs);
  const grouped = new Map<string, CommentRecord[]>();
  for (const record of records) {
    const bucket = grouped.get(record.threadID) ?? [];
    bucket.push(record);
    grouped.set(record.threadID, bucket);
  }
  const comments: Record<string, ReturnType<typeof toThread>> = {};
  for (const [threadID, bucket] of grouped) {
    if (!bucket.some((row) => row.replyID === threadID)) continue;
    comments[threadID] = toThread(
      [...bucket].sort((a, b) => {
        if (a.replyID === threadID) return -1;
        if (b.replyID === threadID) return 1;
        return a.createdAt - b.createdAt || a.replyID.localeCompare(b.replyID);
      })
    );
  }
  return comments;
}

function listRecords(sql: SqlExec, unitID: string, threadIDs: string[]): CommentRecord[] {
  const unique = [...new Set(threadIDs)];
  const select = `SELECT unit_id, thread_id, reply_id, author_user_id,
    content, mentions_json, solved, created_at, updated_at, generation
    FROM collaboration_comments`;
  const rows =
    unique.length === 0
      ? sql.exec(`${select} WHERE unit_id = ?`, unitID).toArray()
      : sql
          .exec(
            `${select} WHERE unit_id = ? AND thread_id IN (${unique.map(() => "?").join(",")})`,
            unitID,
            ...unique
          )
          .toArray();
  return rows.map(rowFromSql);
}

function getByReply(sql: SqlExec, unitID: string, replyID: string): CommentRecord | null {
  const row = sql
    .exec(
      `SELECT unit_id, thread_id, reply_id, author_user_id,
        content, mentions_json, solved, created_at, updated_at, generation
       FROM collaboration_comments WHERE unit_id = ? AND reply_id = ?`,
      unitID,
      replyID
    )
    .toArray()[0];
  return row ? rowFromSql(row) : null;
}

function insertRecord(sql: SqlExec, record: CommentRecord): void {
  sql.exec(
    `INSERT INTO collaboration_comments
      (unit_id, thread_id, reply_id, author_user_id, content, mentions_json,
       solved, created_at, updated_at, generation)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    record.unitID,
    record.threadID,
    record.replyID,
    record.authorUserID,
    record.content,
    JSON.stringify(record.mentions),
    record.solved,
    record.createdAt,
    record.updatedAt,
    record.generation
  );
}

function rowFromSql(row: Record<string, unknown>): CommentRecord {
  const mentions = JSON.parse(String(row.mentions_json ?? "[]"));
  if (!Array.isArray(mentions) || mentions.some((item) => typeof item !== "string")) {
    throw wireError(500, UNIVERSER_COMMENT_INTERNAL.code, "Internal error");
  }
  return {
    unitID: String(row.unit_id),
    threadID: String(row.thread_id),
    replyID: String(row.reply_id),
    authorUserID: String(row.author_user_id),
    content: String(row.content),
    mentions,
    solved: Number(row.solved),
    createdAt: Number(row.created_at),
    updatedAt: Number(row.updated_at),
    generation: String(row.generation)
  };
}

function toReply(record: CommentRecord) {
  return {
    threadId: record.threadID,
    replyId: record.replyID,
    content: record.content,
    userId: record.authorUserID,
    createTimestamp: record.createdAt
  };
}

function toThread(records: CommentRecord[]) {
  const root = records.find((row) => row.replyID === row.threadID);
  if (!root) {
    throw wireError(500, UNIVERSER_COMMENT_INTERNAL.code, "Internal error");
  }
  return {
    threadId: root.threadID,
    solved: root.solved,
    replies: records.map(toReply)
  };
}

function usersForThreads(
  comments: Record<string, { replies: Array<{ userId: string }> }>,
  host: CommentHttpHost
): Record<string, DemoCommentUser> {
  const users: Record<string, DemoCommentUser> = {};
  for (const thread of Object.values(comments)) {
    for (const reply of thread.replies) {
      const fallback = reply.userId === host.userID ? host.name ?? "" : "";
      users[reply.userId] = resolveCommentUser(reply.userId, fallback);
    }
  }
  return users;
}

function parseListRequest(body: unknown, routeUnitID: string): { unitId: string; threadId: string[] } {
  const object = requireObject(body);
  const unitId = requireNonEmptyString(object.unitId, "unitId");
  if (unitId !== routeUnitID) {
    throw wireError(400, UNIVERSER_COMMENT_INVALID.code, "Route and body unitId must match");
  }
  return { unitId, threadId: requireStringArray(object.threadId ?? [], "threadId") };
}

function requireObject(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw wireError(400, UNIVERSER_COMMENT_INVALID.code, "Request body must be an object");
  }
  return value as Record<string, unknown>;
}

function requireNonEmptyString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw wireError(400, UNIVERSER_COMMENT_INVALID.code, `${field} must be a non-empty string`);
  }
  return value;
}

function requireStringArray(value: unknown, field: string): string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || item.length === 0)) {
    throw wireError(400, UNIVERSER_COMMENT_INVALID.code, `${field} must be an array of non-empty strings`);
  }
  return [...value];
}

function requireSolved(value: unknown): number {
  if (value !== COMMENT_SOLVED_OPEN && value !== COMMENT_SOLVED_SOLVED) {
    throw wireError(400, UNIVERSER_COMMENT_INVALID.code, "solved must be OpenOrReOpen or Solved");
  }
  return value;
}

function sameStrings(left: string[], right: string[]): boolean {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

function runWrite<T>(sql: SqlExec, fn: () => T): T {
  return sql.transactionSync ? sql.transactionSync(fn) : fn();
}

function wireError(status: number, code: number, message: string): CommentWireError {
  const error = new Error(message) as CommentWireError;
  error.status = status;
  error.code = code;
  return error;
}

function commentErrorResponse(err: unknown, action: string): Response {
  const mapped =
    err && typeof err === "object" && "status" in err && "code" in err
      ? { status: Number((err as CommentWireError).status), error: { code: Number((err as CommentWireError).code), message: (err as Error).message } }
      : { status: 500, error: UNIVERSER_COMMENT_INTERNAL };
  const extras =
    action === "list"
      ? { comments: {}, users: {} }
      : action === "add"
        ? { comment: undefined }
        : action === "reply"
          ? { reply: undefined }
          : {};
  return jsonComment({ error: mapped.error, ...extras }, mapped.status);
}

function enqueueAgentMentionTurn(
  host: CommentHttpHost,
  sql: SqlExec,
  unitId: string,
  threadId: string,
  content: string
): Promise<void> {
  if (host.userID === AGENT_USER_ID) return Promise.resolve();
  const prompt = promptFromAgentMention(content);
  if (!prompt) return Promise.resolve();
  const kernel = kernelFromCollab(host.collab);
  if (!kernel) return Promise.resolve();

  const job = runMentionTurnAndReply(host, sql, kernel, unitId, threadId, prompt);
  const waitUntil = host.waitUntil ?? kernelHostWaitUntil(kernel);
  if (typeof waitUntil === "function") {
    waitUntil(job);
    return Promise.resolve();
  }
  return job;
}

async function runMentionTurnAndReply(
  host: CommentHttpHost,
  sql: SqlExec,
  kernel: Context,
  unitId: string,
  threadId: string,
  prompt: string
): Promise<void> {
  const kernelHost = kernelDelegate(kernel);
  try {
    const result = await runAgentTurn(
      {
        kernel,
        env: kernelHost?.env as AgentHost["env"],
        waitUntil: host.waitUntil ?? kernelHost?.waitUntil,
        actor: {
          userId: host.userID,
          name: host.name || host.userID,
          username: ""
        },
        broadcastCollab: host.onNewChanges
          ? (changedUnitId, changeset) => host.onNewChanges?.(changedUnitId, changeset, AGENT_MEMBER_ID)
          : undefined
      },
      { unitId, prompt }
    );
    addReply(sql, unitId, threadId, AGENT_USER_ID, agentReplyContent(replyTextFromTurn(result)), []);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    try {
      addReply(
        sql,
        unitId,
        threadId,
        AGENT_USER_ID,
        agentReplyContent(message || "Agent turn failed"),
        []
      );
    } catch {
      // mention turn must not fail the original comment write
    }
  }
}

function replyTextFromTurn(result: AgentTurnResult): string {
  const text = result.text.trim();
  if (text) return text;
  const error = result.events.find((event) => event.type === "agent.error");
  const message = error?.data && typeof error.data.message === "string" ? error.data.message : "";
  return message.trim() || "Workspace Agent finished this turn.";
}

function agentReplyContent(text: string): string {
  return JSON.stringify({ dataStream: `${text}\r\n` });
}

function plainCommentText(content: string): string {
  try {
    const parsed = JSON.parse(content) as { dataStream?: unknown };
    if (parsed && typeof parsed === "object" && typeof parsed.dataStream === "string") {
      return parsed.dataStream;
    }
  } catch {
    // raw comment body
  }
  return content;
}

function kernelFromCollab(collab: unknown): Context | undefined {
  if (!collab || typeof collab !== "object") return undefined;
  return (collab as { ctx?: Context }).ctx;
}

function kernelDelegate(kernel: Context): { env?: unknown; waitUntil?: (promise: Promise<unknown>) => void } | undefined {
  try {
    return kernel.get("host") as { env?: unknown; waitUntil?: (promise: Promise<unknown>) => void };
  } catch {
    return undefined;
  }
}

function kernelHostWaitUntil(kernel: Context): ((promise: Promise<unknown>) => void) | undefined {
  return kernelDelegate(kernel)?.waitUntil;
}

function jsonComment(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
