import { describe, expect, it } from "vitest";
import { lastAgentRangeFromTurns, undoLastAgentTurn } from "../src/agent-actions.js";
import { WorkspaceHttp } from "../src/http.js";

describe("agent-actions", () => {
  it("lastAgentRangeFromTurns reads E2 from a Fill tool result", () => {
    const turns = [
      {
        turnId: "t1",
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { unitId: "unit_welcome_sheet", cells: [{ a1: "E2", value: 100 }] },
            result: { rev: 2, range: "E2" },
          },
        ],
      },
    ];
    expect(lastAgentRangeFromTurns(turns)).toBe("E2");
  });

  it("lastAgentRangeFromTurns falls back to cells array in args", () => {
    const turns = [
      {
        turnId: "t1",
        toolCalls: [
          {
            tool: "univer.sheet.setRange",
            args: { unitId: "unit_welcome_sheet", cells: [{ a1: "D4", value: 180 }] },
            result: { rev: 2 },
          },
        ],
      },
    ];
    expect(lastAgentRangeFromTurns(turns)).toBe("D4");
  });

  it("undoLastAgentTurn client POSTs /agents/unit_welcome_sheet/undo", async () => {
    const paths: string[] = [];
    const http = new WorkspaceHttp({
      origin: "https://workspace.edge.test",
      role: "client",
      cookie: "workspace_session=tok",
      fetcher: async (input, init) => {
        const req = new Request(input, init);
        paths.push(`${req.method} ${new URL(req.url).pathname}`);
        return Response.json({ reversed: true, enabled: true, actor: "agent_workspace" });
      },
    });
    const result = await undoLastAgentTurn(http, "unit_welcome_sheet");
    expect(paths[0]).toBe("POST /agents/unit_welcome_sheet/undo");
    expect(result.reversed).toBe(true);
    expect(result.enabled).toBe(true);
  });

  it("undoLastAgentTurn handles 409 conflict gracefully", async () => {
    const http = new WorkspaceHttp({
      origin: "https://workspace.edge.test",
      role: "client",
      cookie: "workspace_session=tok",
      fetcher: async () => {
        return Response.json(
          { reversed: false, enabled: false, actor: "user_admin" },
          { status: 409 },
        );
      },
    });
    const result = await undoLastAgentTurn(http, "unit_welcome_sheet");
    expect(result.reversed).toBe(false);
    expect(result.actor).toBe("user_admin");
  });
});
