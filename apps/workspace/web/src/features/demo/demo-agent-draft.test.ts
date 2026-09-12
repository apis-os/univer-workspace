import { describe, expect, it, vi } from "vitest";
import {
  AGENT_DRAFT_EXECUTE_CODE,
  AGENT_DRAFT_WORKTREE_NAME,
  draftFollowHref,
  isAgentDraftWorktreeName,
  isWorktreeCombPath,
  runAgentDraftFill,
  worktreeCombPath,
} from "./demo-agent-draft";
import type { WhatIfHost } from "./demo-what-if";

describe("Agent draft worktree Comb helpers", () => {
  it("matches worktree Comb connect path", () => {
    expect(isWorktreeCombPath("/universer-api/worktrees/wt_draft/comb/connect")).toBe(true);
    expect(isWorktreeCombPath("/universer-api/comb/connect")).toBe(false);
    expect(isWorktreeCombPath("/universer-api/worktrees/wt_draft/snapshot")).toBe(false);
  });

  it("builds worktree Comb connect URL", () => {
    expect(worktreeCombPath("wt_draft")).toBe("/universer-api/worktrees/wt_draft/comb/connect");
  });

  it("builds draft follow href with embedded=true", () => {
    expect(draftFollowHref("wt_draft", "unit_draft")).toBe(
      "/worktrees/wt_draft/units/unit_draft/draft?embedded=true"
    );
  });

  it("identifies Agent draft Fill worktree name", () => {
    expect(isAgentDraftWorktreeName(AGENT_DRAFT_WORKTREE_NAME)).toBe(true);
    expect(isAgentDraftWorktreeName("What-if +10% Sep")).toBe(false);
    expect(isAgentDraftWorktreeName(undefined)).toBe(false);
  });

  it("defines Facade execute code targeting E2:E4 SUM", () => {
    expect(AGENT_DRAFT_EXECUTE_CODE).toContain("SUM(B2:D2)");
    expect(AGENT_DRAFT_EXECUTE_CODE).toContain("SUM(B3:D3)");
    expect(AGENT_DRAFT_EXECUTE_CODE).toContain("SUM(B4:D4)");
  });
});

describe("runAgentDraftFill", () => {
  it("creates Agent draft Fill, executes E2 SUM, and returns follow href", async () => {
    const follow: string[] = [];
    const toasts: Array<[string, string]> = [];
    const calls: Array<{ url: string; method?: string; body?: unknown; headers?: unknown }> = [];

    const fakeFetch: typeof fetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = init?.method ?? "GET";
      const body = init?.body ? JSON.parse(String(init.body)) : undefined;
      const headers = init?.headers;
      calls.push({ url, method, body, headers });

      if (url.includes("/worktrees") && method === "POST" && !url.includes("/units") && !url.includes("/ready")) {
        return new Response(JSON.stringify({ id: "wt_agent_fill" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      if (url.includes("/units") && method === "POST" && !url.includes("/execute")) {
        return new Response(JSON.stringify({ unitId: "unit_welcome_sheet" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      if (url.includes("/execute") && method === "POST") {
        return new Response(JSON.stringify({ success: true, rev: 2 }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      if (url.includes("/ready") && method === "POST") {
        return new Response(JSON.stringify({ status: "ready" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const host: WhatIfHost & { followDraft: (href: string) => void } = {
      fetch: fakeFetch,
      toast: (kind, key) => toasts.push([kind, key]),
      openComparison: vi.fn(),
      invalidateWorktrees: vi.fn(),
      followDraft: (href) => follow.push(href),
    };

    await runAgentDraftFill(host);

    expect(toasts).toContainEqual(["busy", "demoDraftBusy"]);
    expect(host.invalidateWorktrees).toHaveBeenCalled();
    expect(host.openComparison).toHaveBeenCalledWith({
      worktreeId: "wt_agent_fill",
      unitId: "unit_welcome_sheet",
    });
    expect(follow).toHaveLength(1);
    expect(follow[0]).toBe("/worktrees/wt_agent_fill/units/unit_welcome_sheet/draft?embedded=true");

    const execCall = calls.find((c) => c.url.includes("/execute"));
    expect(execCall).toBeDefined();
    expect(execCall?.headers).toMatchObject({
      "x-workspace-user-id": "agent_workspace",
    });
  });

  it("emits demoDraftError toast when request fails", async () => {
    const toasts: Array<[string, string]> = [];
    const failingFetch: typeof fetch = vi.fn(async () => {
      return new Response(JSON.stringify({ error: "Failed" }), { status: 500 });
    });

    const host: WhatIfHost & { followDraft: (href: string) => void } = {
      fetch: failingFetch,
      toast: (kind, key) => toasts.push([kind, key]),
      openComparison: vi.fn(),
      invalidateWorktrees: vi.fn(),
      followDraft: vi.fn(),
    };

    await runAgentDraftFill(host);

    expect(toasts).toContainEqual(["error", "demoDraftError"]);
    expect(host.openComparison).not.toHaveBeenCalled();
    expect(host.followDraft).not.toHaveBeenCalled();
  });
});
