import { describe, expect, it, vi } from "vitest";
import { createAgentCommand } from "../src/features/edge/agent-command.js";
import {
  CLI_AGENT_DRAFT_WORKTREE_NAME,
  KEEP_D3_PROMPT,
  WorkspaceHttp,
} from "@univerjs/univer-workspace-client-core";

describe("CLI agent command", () => {
  it("provides expected help information for agent commands", () => {
    const write = vi.fn();
    const authenticatedHttp = vi.fn(async () => {
      return new WorkspaceHttp({
        origin: "https://workspace.edge.test",
        role: "client",
        cookie: "workspace_session=tok",
      });
    });
    const agent = createAgentCommand({ authenticatedHttp, write });
    const help = agent.helpInformation();
    expect(help).toContain("turn");
    expect(help).toContain("undo");
    expect(help).toContain("follow");
    expect(help).toContain("draft-fill");
    expect(help).toContain("narrative");
    expect(help).toContain("keep");
  });

  it("runs draft-fill command", async () => {
    const write = vi.fn();
    const calls: Array<{ method: string; pathname: string }> = [];
    const authenticatedHttp = vi.fn(async () => {
      return new WorkspaceHttp({
        origin: "https://workspace.edge.test",
        role: "client",
        cookie: "workspace_session=tok",
        fetcher: async (input, init) => {
          const req = new Request(input, init);
          const url = new URL(req.url);
          calls.push({ method: req.method, pathname: url.pathname });
          if (url.pathname.includes("/worktrees") && req.method === "POST" && !url.pathname.includes("/execute")) {
            return Response.json({ id: "wt_draft_test", name: CLI_AGENT_DRAFT_WORKTREE_NAME });
          }
          if (url.pathname.includes("/execute")) {
            return Response.json({ success: true, rev: 4 });
          }
          return Response.json({ ok: true });
        },
      });
    });

    const agent = createAgentCommand({ authenticatedHttp, write });
    await agent.parseAsync(["node", "test", "draft-fill", "-u", "unit_welcome_sheet"]);
    expect(calls.some((c) => c.pathname.includes("/worktrees"))).toBe(true);
    expect(write).toHaveBeenCalledWith(expect.stringContaining("Agent draft Fill"));
  });

  it("runs narrative command without --ai", async () => {
    const write = vi.fn();
    const authenticatedHttp = vi.fn(async () => {
      return new WorkspaceHttp({
        origin: "https://workspace.edge.test",
        role: "client",
        cookie: "workspace_session=tok",
        fetcher: async (input, init) => {
          const req = new Request(input, init);
          const url = new URL(req.url);
          if (url.pathname.includes("/inspect")) {
            return Response.json({ range: "E2", f: "=SUM(B2:D2)", v: 600, precedents: ["B2:D2"] });
          }
          return Response.json({ ok: true });
        },
      });
    });

    const agent = createAgentCommand({ authenticatedHttp, write });
    await agent.parseAsync(["node", "test", "narrative", "-r", "E2"]);
    expect(write).toHaveBeenCalledWith(expect.stringContaining("E2 is =SUM(B2:D2) → 600"));
    expect(write).toHaveBeenCalledWith(expect.stringContaining("Precedents: B2, C2, D2"));
  });

  it("runs keep command with prompt forbidding cell writes", async () => {
    const write = vi.fn();
    let sentPrompt = "";
    const authenticatedHttp = vi.fn(async () => {
      return new WorkspaceHttp({
        origin: "https://workspace.edge.test",
        role: "client",
        cookie: "workspace_session=tok",
        fetcher: async (input, init) => {
          const req = new Request(input, init);
          const body = await req.json().catch(() => ({}));
          sentPrompt = body.prompt;
          return new Response("event: agent.token\ndata: {\"delta\":\"Avery\"}\n\nevent: agent.done\ndata: {\"cache\":\"MISS\"}\n\n", {
            status: 200,
            headers: { "Content-Type": "text/event-stream" },
          });
        },
      });
    });

    const agent = createAgentCommand({ authenticatedHttp, write });
    await agent.parseAsync(["node", "test", "keep", "-c", "D3"]);
    expect(sentPrompt).toBe(KEEP_D3_PROMPT);
    expect(sentPrompt).toContain("Do not write cells");
    expect(write).toHaveBeenCalledWith(expect.stringContaining("Avery"));
  });
});
