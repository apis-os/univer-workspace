import { describe, expect, it } from "vitest";
import {
  CLI_AGENT_DRAFT_EXECUTE_CODE,
  CLI_AGENT_DRAFT_WORKTREE_NAME,
  runCliAgentDraftFill,
} from "../src/agent-draft.js";
import { WorkspaceHttp } from "../src/http.js";

describe("agent-draft", () => {
  it("defines CLI_AGENT_DRAFT_WORKTREE_NAME as Agent draft Fill", () => {
    expect(CLI_AGENT_DRAFT_WORKTREE_NAME).toBe("Agent draft Fill");
    expect(CLI_AGENT_DRAFT_EXECUTE_CODE).toContain("SUM(B2:D2)");
    expect(CLI_AGENT_DRAFT_EXECUTE_CODE).toContain("SUM(B3:D3)");
    expect(CLI_AGENT_DRAFT_EXECUTE_CODE).toContain("SUM(B4:D4)");
  });

  it("creates Agent draft Fill, executes E2:E4 SUM, and returns follow href", async () => {
    const recordedCalls: Array<{ method: string; pathname: string; body?: unknown }> = [];

    const http = new WorkspaceHttp({
      origin: "https://workspace.edge.test",
      role: "client",
      cookie: "workspace_session=tok",
      fetcher: async (input, init) => {
        const req = new Request(input, init);
        const url = new URL(req.url);
        let body: unknown;
        if (req.method !== "GET" && req.method !== "HEAD") {
          try {
            body = await req.json();
          } catch {
            body = undefined;
          }
        }
        recordedCalls.push({ method: req.method, pathname: url.pathname, body });

        if (url.pathname.includes("/worktrees") && req.method === "POST" && !url.pathname.includes("/units") && !url.pathname.includes("/ready") && !url.pathname.includes("/execute")) {
          return Response.json({ id: "wt_agent_fill_123", name: CLI_AGENT_DRAFT_WORKTREE_NAME });
        }
        if (url.pathname.includes("/units") && req.method === "POST" && !url.pathname.includes("/execute")) {
          return Response.json({ unitId: "unit_welcome_sheet" });
        }
        if (url.pathname.includes("/execute") && req.method === "POST") {
          return Response.json({ success: true, rev: 3 });
        }
        if (url.pathname.includes("/ready") && req.method === "POST") {
          return Response.json({ status: "ready" });
        }
        return Response.json({ ok: true });
      },
    });

    const result = await runCliAgentDraftFill(http, "unit_welcome_sheet");

    expect(result.worktreeName).toBe(CLI_AGENT_DRAFT_WORKTREE_NAME);
    expect(result.worktreeId).toBe("wt_agent_fill_123");
    expect(result.followHref).toMatch(/\/worktrees\/wt_agent_fill_123\/units\/unit_welcome_sheet\/draft\?embedded=true/);

    const executeCall = recordedCalls.find((c) => c.pathname.includes("/execute"));
    expect(executeCall).toBeDefined();
    expect(executeCall?.pathname).toContain("wt_agent_fill_123");
    expect((executeCall?.body as Record<string, unknown>)?.code).toBe(CLI_AGENT_DRAFT_EXECUTE_CODE);
  });
});
