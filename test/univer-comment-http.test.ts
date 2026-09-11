import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { DatabaseSync } from "node:sqlite";
import type { SqlExec } from "../src/kernel/sql.ts";
import { handleUniverserHttp } from "../src/integrations/univer-collab-http.ts";

const UNIT_ID = "unit_welcome_sheet";
const D3_BODY = { dataStream: "D3 looks light — can we push Sep to 180?\r\n" };
const D3_CONTENT = JSON.stringify(D3_BODY);

function createSqliteAdapter(): SqlExec {
  const db = new DatabaseSync(":memory:");
  return {
    exec: (query: string, ...binds: unknown[]) => {
      const trimmed = query.trim().toUpperCase();
      if (trimmed.startsWith("CREATE") || trimmed.startsWith("ALTER") || trimmed.startsWith("DROP")) {
        db.exec(query);
        return { toArray: () => [] };
      }
      const stmt = db.prepare(query);
      if (trimmed.startsWith("INSERT") || trimmed.startsWith("UPDATE") || trimmed.startsWith("DELETE")) {
        stmt.run(...(binds as any[]));
        return { toArray: () => [] };
      }
      const rows = stmt.all(...(binds as any[]));
      return {
        toArray: () => rows as Record<string, unknown>[]
      };
    },
    transactionSync: (fn) => fn()
  };
}

function hostFor(sql: SqlExec, userID: string, name: string) {
  return {
    sql,
    collab: null,
    identity: { userID, name, avatar: "" },
    mintSessionTicket() {
      return "ticket_comment_test";
    }
  };
}

function commentUrl(action: string): string {
  return `https://workspace.edge/universer-api/comment/unit/${UNIT_ID}/${action}`;
}

describe("Universer thread comments", () => {
  test("Avery comments D3, list returns it, and Jordan sees it", async () => {
    const sql = createSqliteAdapter();
    const avery = hostFor(sql, "user_admin", "Avery Chen");
    const jordan = hostFor(sql, "user_jordan", "Jordan Lee");

    const addRes = await handleUniverserHttp(
      new Request(commentUrl("add"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-workspace-user-id": "user_admin",
          "x-workspace-user-name": "Avery Chen"
        },
        body: JSON.stringify({
          unitId: UNIT_ID,
          memberId: "member_avery",
          content: D3_CONTENT,
          mention: []
        })
      }),
      avery
    );
    assert.ok(addRes, "comment add must be handled");
    assert.equal(addRes.status, 200);
    const added = (await addRes.json()) as {
      error?: { code?: number };
      comment?: {
        threadId?: string;
        solved?: number;
        replies?: Array<{
          threadId?: string;
          replyId?: string;
          content?: string;
          userId?: string;
          createTimestamp?: number;
        }>;
      };
    };
    assert.equal(added.error?.code, 1);
    assert.ok(added.comment?.threadId);
    assert.equal(added.comment?.solved, 0);
    const root = added.comment?.replies?.[0];
    assert.equal(root?.threadId, added.comment?.threadId);
    assert.equal(root?.replyId, added.comment?.threadId);
    assert.equal(root?.userId, "user_admin");
    assert.equal(root?.content, D3_CONTENT);
    assert.equal(typeof root?.createTimestamp, "number");
    assert.ok((root?.createTimestamp ?? 0) > 0);

    const averyList = await handleUniverserHttp(
      new Request(commentUrl("list"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: UNIT_ID, threadId: [] })
      }),
      avery
    );
    assert.ok(averyList);
    const averyBody = (await averyList.json()) as {
      error?: { code?: number };
      comments?: Record<string, { replies?: Array<{ content?: string }> }>;
    };
    assert.equal(averyBody.error?.code, 1);
    const threadId = added.comment!.threadId!;
    assert.equal(averyBody.comments?.[threadId]?.replies?.[0]?.content, D3_CONTENT);

    const jordanList = await handleUniverserHttp(
      new Request(commentUrl("list"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-workspace-user-id": "user_jordan",
          "x-workspace-user-name": "Jordan Lee"
        },
        body: JSON.stringify({ unitId: UNIT_ID, threadId: [threadId] })
      }),
      jordan
    );
    assert.ok(jordanList);
    const jordanBody = (await jordanList.json()) as {
      error?: { code?: number };
      comments?: Record<
        string,
        { threadId?: string; replies?: Array<{ content?: string; userId?: string }> }
      >;
      users?: Record<string, { userID?: string; name?: string }>;
    };
    assert.equal(jordanBody.error?.code, 1);
    assert.equal(jordanBody.comments?.[threadId]?.replies?.[0]?.content, D3_CONTENT);
    assert.equal(jordanBody.comments?.[threadId]?.replies?.[0]?.userId, "user_admin");
    assert.equal(jordanBody.users?.user_admin?.name, "Avery Chen");
  });

  test("GET /universer-api/user/list returns Avery, Jordan, and Workspace Agent", async () => {
    const sql = createSqliteAdapter();
    const host = hostFor(sql, "user_admin", "Avery Chen");
    const res = await handleUniverserHttp(
      new Request(
        "https://workspace.edge/universer-api/user/list?userIDs=user_admin&userIDs=user_jordan&userIDs=agent_workspace"
      ),
      host
    );
    assert.ok(res, "user/list must be handled");
    assert.equal(res.status, 200);
    const body = (await res.json()) as {
      error?: { code?: number };
      users?: Array<{ userID?: string; name?: string }>;
    };
    assert.equal(body.error?.code, 1);
    assert.ok(Array.isArray(body.users));
    const byId = new Map((body.users ?? []).map((user) => [user.userID, user.name]));
    assert.equal(byId.get("user_admin"), "Avery Chen");
    assert.equal(byId.get("user_jordan"), "Jordan Lee");
    assert.equal(byId.get("agent_workspace"), "Workspace Agent");
  });
});
