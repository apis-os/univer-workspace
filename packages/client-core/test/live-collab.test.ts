import { describe, expect, it } from "vitest";
import {
  LiveUniverserClient,
  LiveWorkspaceUnit,
  WorkspaceHttp,
  actorMemberId,
  loginWithPassword,
} from "../src/live.js";

const origin = "https://workspace.test";
const cookie = "workspace_session=tok";

function json(body: unknown, init: ResponseInit = {}): Response {
  return Response.json(body, init);
}

describe("live Universer collab client", () => {
  it("loads a server unit snapshot without createUnit", async () => {
    const paths: string[] = [];
    const http = new WorkspaceHttp({
      cookie,
      origin,
      role: "client",
      fetcher: async (input, init) => {
        const url = new URL(String(input));
        paths.push(url.pathname);
        expect(new Request(input, init).headers.get("authorization")).toBe("Bearer tok");
        return json({
          error: { code: 1, message: "" },
          snapshot: {
            rev: 1,
            workbook: {
              id: "unit-1",
              sheetOrder: ["sheet_1"],
              sheets: { sheet_1: { id: "sheet_1", name: "Sheet1", cellData: { "0": { "0": { v: "Hi", t: 1 } } } } },
            },
          },
          changesets: [],
        });
      },
    });

    const opened = await new LiveUniverserClient(http).openUnit({ unitId: "unit-1", unitType: "sheet" });
    expect(paths).toEqual(["/universer-api/snapshot/2/unit/unit-1"]);
    expect(opened.rev).toBe(1);
    expect(opened.snapshot).toMatchObject({ rev: 1 });
  });

  it("writes set-range-values onto comb/new_changes then re-reads the snapshot", async () => {
    const calls: Array<{ path: string; body: unknown }> = [];
    const snapshot = {
      rev: 1,
      workbook: {
        sheetOrder: ["sheet_1"],
        sheets: { sheet_1: { id: "sheet_1", name: "Sheet1", cellData: {} } },
      },
    };
    const written = {
      rev: 2,
      workbook: {
        sheetOrder: ["sheet_1"],
        sheets: {
          sheet_1: { id: "sheet_1", name: "Sheet1", cellData: { "0": { "0": { v: "Hello from AI", t: 1 } } } },
        },
      },
    };
    let reads = 0;
    const http = new WorkspaceHttp({
      cookie,
      origin,
      role: "client",
      fetcher: async (input, init) => {
        const request = new Request(input, init);
        const url = new URL(request.url);
        const body = request.method === "POST" ? await request.json() : null;
        calls.push({ path: `${request.method} ${url.pathname}`, body });
        if (url.pathname.endsWith("/new_changes")) {
          const changeset = (body as { changeset: { mutations: Array<{ id: string }> } }).changeset;
          expect(changeset.mutations[0]?.id).toBe("sheet.mutation.set-range-values");
          expect((body as { memberID: string }).memberID).toBe(actorMemberId("user-1"));
          return json({ error: { code: 1, message: "" } });
        }
        reads += 1;
        return json({
          error: { code: 1, message: "" },
          snapshot: reads === 1 ? snapshot : written,
          changesets: [],
        });
      },
    });

    const unit = new LiveWorkspaceUnit(http, { subject: { id: "user-1", name: "Admin" } });
    const result = await unit.setRange({
      unitId: "unit-1",
      cells: [{ a1: "A1", value: "Hello from AI" }],
    });
    expect(result.committed).toBe(true);
    expect(result.revision).toBe(2);
    expect(result.cells[0]?.[0]?.v).toBe("Hello from AI");
    expect(calls.map((call) => call.path)).toEqual([
      "GET /universer-api/snapshot/2/unit/unit-1",
      "POST /universer-api/comb/2/unit/unit-1/new_changes",
      "GET /universer-api/snapshot/2/unit/unit-1",
    ]);
  });

  it("parses edge historyIds + entities.datas and session tickets", async () => {
    const http = new WorkspaceHttp({
      cookie,
      origin,
      role: "client",
      fetcher: async (input) => {
        const url = new URL(String(input));
        if (url.pathname.endsWith("/list")) {
          return json({
            error: { code: 1, message: "" },
            historyIds: ["h1"],
            entities: {
              datas: { h1: { userId: "user-1", endRevision: 4, createTime: "1710000000" } },
              users: { "user-1": { userID: "user-1", name: "Admin" } },
            },
          });
        }
        if (url.pathname.endsWith("/creators")) {
          return json({
            error: { code: 1, message: "" },
            creators: [{ userId: "user-1", name: "Admin" }],
          });
        }
        if (url.pathname.endsWith("/session-ticket")) {
          return json({ error: { code: 1, message: "" }, ticket: "ticket_live" });
        }
        return json({ error: { message: "unexpected" } }, { status: 404 });
      },
    });
    const client = new LiveUniverserClient(http);
    await expect(client.listHistory("unit-1")).resolves.toEqual([
      { id: "h1", rev: 4, createdAt: "1710000000", userId: "user-1" },
    ]);
    await expect(client.listCollaborators("unit-1")).resolves.toEqual([{ id: "user-1", name: "Admin" }]);
    await expect(client.sessionTicket()).resolves.toBe("ticket_live");
    await expect(client.collaborationSocketUrl()).resolves.toBe(
      "wss://workspace.test/universer-api/comb/connect?sessionTicket=ticket_live",
    );
  });

  it("accepts a JSON sessionToken when Set-Cookie is stripped", async () => {
    const http = new WorkspaceHttp({
      origin,
      role: "client",
      fetcher: async () =>
        json({
          authenticated: true,
          sessionToken: "from-json",
          user: { id: "user-1", displayName: "Alice" },
        }),
    });
    await expect(loginWithPassword(http, { username: "alice", password: "secret" })).resolves.toEqual({
      cookie: "workspace_session=from-json",
      origin,
      subject: { id: "user-1", name: "Alice" },
    });
  });
});
