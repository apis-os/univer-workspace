import { describe, expect, it } from "vitest";
import { parseLiveEditArgs, runLiveEdit } from "../src/live-edit.ts";
import { loginWorkspacePassword } from "../src/password-login.ts";

const origin = "https://workspace.test";

function json(body: unknown, init: ResponseInit = {}): Response {
  return Response.json(body, init);
}

describe("Workspace Agent live-edit", () => {
  it("parses origin, unit, and A1 writes", () => {
    expect(
      parseLiveEditArgs([
        "--origin",
        origin,
        "--unit",
        "unit_welcome_sheet",
        "--set",
        "A1=Hello from AI",
      ]),
    ).toEqual({
      origin,
      username: "admin",
      password: "password123",
      unitId: "unit_welcome_sheet",
      unitType: "sheet",
      cells: [{ a1: "A1", value: "Hello from AI" }],
    });
  });

  it("logs in, opens a unit, commits a changeset, and reads history as the user", async () => {
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
          sheet_1: {
            id: "sheet_1",
            name: "Sheet1",
            cellData: { "0": { "0": { v: "Hello from AI", t: 1 } } },
          },
        },
      },
    };
    const paths: string[] = [];
    let committed = false;
    const fetcher: typeof fetch = async (input, init) => {
      const request = new Request(input, init);
      const url = new URL(request.url);
      paths.push(`${request.method} ${url.pathname}`);
      if (url.pathname === "/api/auth/password/login") {
        return json(
          { authenticated: true, user: { id: "user_admin", displayName: "Administrator" } },
          { headers: { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" } },
        );
      }
      if (url.pathname === "/api/spaces") {
        return json({ spaces: [{ id: "space_personal_admin", name: "Personal Space", type: "personal" }] });
      }
      if (url.pathname.endsWith("/new_changes")) {
        const body = (await request.json()) as { memberID: string; changeset: { userID?: string } };
        expect(body.memberID).toBe("agent:user_admin");
        expect(body.changeset.userID).toBe("user_admin");
        expect(request.headers.get("authorization")).toBe("Bearer tok");
        committed = true;
        return json({ error: { code: 1, message: "" } });
      }
      if (url.pathname.includes("/history/") && url.pathname.endsWith("/list")) {
        return json({
          historyIds: ["h1"],
          entities: { datas: { h1: { userId: "user_admin", endRevision: 2, createTime: "1" } } },
        });
      }
      if (url.pathname.includes("/history/") && url.pathname.endsWith("/creators")) {
        return json({ creators: [{ userId: "user_admin", name: "Administrator" }] });
      }
      if (url.pathname.endsWith("/session-ticket")) {
        return json({ ticket: "ticket_1" });
      }
      if (url.pathname.includes("/snapshot/")) {
        return json({ snapshot: committed ? written : snapshot, changesets: [] });
      }
      return json({ error: { message: url.pathname } }, { status: 404 });
    };

    const login = await loginWorkspacePassword({
      origin,
      username: "admin",
      password: "password123",
      fetcher,
    });
    expect(login.sessionToken).toBe("tok");
    expect(login.identity.userId).toBe("user_admin");

    const result = await runLiveEdit({
      origin,
      username: "admin",
      password: "password123",
      unitId: "unit_welcome_sheet",
      cells: [{ a1: "A1", value: "Hello from AI" }],
      fetcher,
    });
    expect(result.written?.revision).toBe(2);
    expect(result.history).toEqual([{ id: "h1", rev: 2, createdAt: "1", userId: "user_admin" }]);
    expect(result.collaborators).toEqual([{ id: "user_admin", name: "Administrator" }]);
    expect(result.ticket).toBe("ticket_1");
    expect(paths.some((path) => path.includes("/new_changes"))).toBe(true);
  });

  it("live-edit --via uf posts Facade execute on /uf", async () => {
    const paths: string[] = [];
    await runLiveEdit({
      origin: "https://workspace.test",
      username: "admin",
      password: "password123",
      unitId: "unit_welcome_sheet",
      via: "uf",
      cells: [{ a1: "E4", value: 180 }],
      fetcher: async (input, init) => {
        const request = new Request(input, init);
        const url = new URL(request.url);
        paths.push(`${request.method} ${url.pathname}`);
        if (url.pathname === "/api/auth/password/login") {
          return json(
            { authenticated: true, user: { id: "user_admin", displayName: "Administrator" } },
            { headers: { "set-cookie": "workspace_session=tok; Path=/; HttpOnly" } },
          );
        }
        if (url.pathname === "/api/spaces") {
          return json({ spaces: [] });
        }
        if (url.pathname.includes("/execute")) {
          return json({ success: true, rev: 4 });
        }
        return json({ error: { message: url.pathname } }, { status: 404 });
      },
    });
    expect(paths.some((p) => p.includes("/execute"))).toBe(true);
  });
});
