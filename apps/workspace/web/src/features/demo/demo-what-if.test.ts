import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import {
  WHAT_IF_COMPARE_LEFT,
  WHAT_IF_COMPARE_RIGHT,
  WHAT_IF_EXECUTE_CODE,
  WHAT_IF_RANGE,
  WHAT_IF_WORKTREE_NAME,
  comparisonLabelsForWorktree,
  demoUniverFileKey,
  isWhatIfWorktreeName,
  runWhatIfWorktree,
  whatIfComparisonHref,
  whatIfUfPath,
} from "./demo-what-if";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../../..");

function readWorkspace(relativePath: string): string {
  return readFileSync(join(root, relativePath), "utf8");
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("What-if +10% Sep palette label", () => {
  it("uses i18n What-if +10% Sep instead of leftover What-if", () => {
    const src = readWorkspace("web/src/shared/i18n.tsx");
    const en = src.match(
      /"en-US":\s*\{[\s\S]*?demoPaletteWhatIf:\s*"([^"]+)"/
    )?.[1];
    const zh = src.match(
      /"zh-CN":\s*\{[\s\S]*?demoPaletteWhatIf:\s*"([^"]+)"/
    )?.[1];
    expect(en).toBe("What-if +10% Sep");
    expect(en).not.toBe("What-if");
    expect(zh).toBeTruthy();
    expect(zh).not.toBe("假设分析");
    expect(WHAT_IF_WORKTREE_NAME).toBe("What-if +10% Sep");
  });
});

describe("what-if execute code", () => {
  it("raises Sep D2:D4 by ten percent", () => {
    expect(WHAT_IF_RANGE).toBe("D2:D4");
    expect(WHAT_IF_EXECUTE_CODE).toMatch(/D2/);
    expect(WHAT_IF_EXECUTE_CODE).toMatch(/D3/);
    expect(WHAT_IF_EXECUTE_CODE).toMatch(/D4/);
    expect(WHAT_IF_EXECUTE_CODE).toMatch(/\*\s*1\.1/);
    expect(WHAT_IF_EXECUTE_CODE).toMatch(/getRange\(['']D2['']\)/);
  });
});

describe("what-if comparison labels", () => {
  it("labels Official vs What-if for the what-if worktree", () => {
    expect(WHAT_IF_COMPARE_LEFT).toBe("Official");
    expect(WHAT_IF_COMPARE_RIGHT).toBe("What-if");
    expect(isWhatIfWorktreeName(WHAT_IF_WORKTREE_NAME)).toBe(true);
    expect(isWhatIfWorktreeName("Agent Forecast Update")).toBe(false);
    expect(comparisonLabelsForWorktree(WHAT_IF_WORKTREE_NAME)).toEqual({
      officialVersion: "Official",
      agentVersion: "What-if",
    });
    expect(whatIfComparisonHref("wt_1", "unit_wt_1")).toBe(
      "/worktrees?worktree=wt_1&unit=unit_wt_1&view=comparison"
    );
  });
});

function productCloneFetch(): {
  readonly fetchImpl: typeof fetch;
  readonly calls: string[];
  readonly bodies: unknown[];
} {
  const calls: string[] = [];
  const bodies: unknown[] = [];
  const clonedDrafts = new Set<string>();
  const fetchImpl = vi.fn<typeof fetch>(async (input, init) => {
    const href = typeof input === "string" ? input : String(input);
    const url = new URL(href, "https://demo.test");
    const path = url.pathname;
    const method = String(init?.method ?? "GET").toUpperCase();
    calls.push(`${method} ${path}`);
    if (method !== "GET" && method !== "HEAD") {
      const text = typeof init?.body === "string" ? init.body : "";
      bodies.push(text ? JSON.parse(text) : null);
    }

    if (method === "POST" && path === "/api/worktrees") {
      return jsonResponse({ id: "wt_what_if", name: WHAT_IF_WORKTREE_NAME }, 201);
    }
    if (method === "POST" && path === "/api/worktrees/wt_what_if/units") {
      clonedDrafts.add("unit_wt_sep");
      return jsonResponse({ unit: { unitId: "unit_wt_sep" } }, 201);
    }
    if (
      method === "POST" &&
      path === whatIfUfPath("worktrees/wt_what_if/units")
    ) {
      return jsonResponse({ unit: { unitId: "unit_wt_empty" } }, 201);
    }

    const executeMatch = path.match(/\/units\/([^/]+)\/execute$/);
    if (method === "POST" && executeMatch) {
      const unitId = executeMatch[1];
      if (!clonedDrafts.has(unitId)) {
        return jsonResponse({ error: { message: "Snapshot not found" } }, 404);
      }
      return jsonResponse({ success: true, unitId, rev: 2 });
    }

    if (method === "POST" && path === "/api/worktrees/wt_what_if/ready") {
      return jsonResponse({
        worktree: { id: "wt_what_if", state: "ready" },
      });
    }
    return jsonResponse({ error: { message: `unexpected ${path}` } }, 404);
  });
  return { fetchImpl, calls, bodies };
}

describe("runWhatIfWorktree", () => {
  it("clones via product /api/worktrees so execute hits a collab draft, then ready without merging", async () => {
    const { fetchImpl, calls, bodies } = productCloneFetch();
    const toast = vi.fn();
    const openComparison = vi.fn();
    const invalidateWorktrees = vi.fn();

    await runWhatIfWorktree({
      fetch: fetchImpl,
      toast,
      openComparison,
      invalidateWorktrees,
    });

    expect(toast).toHaveBeenCalledWith("busy", "demoWhatIfBusy");
    expect(calls[0]).toBe("POST /api/worktrees");
    expect(bodies[0]).toEqual({
      kind: "user",
      name: WHAT_IF_WORKTREE_NAME,
      summary: null,
    });
    expect(calls).toContain("POST /api/worktrees/wt_what_if/units");
    expect(calls).not.toContain(
      `POST ${whatIfUfPath("worktrees/wt_what_if/units")}`
    );
    expect(bodies).toContainEqual({
      source: "trunk",
      resourceId: "res_welcome_sheet",
    });
    expect(calls).toContain(
      `POST ${whatIfUfPath("worktrees/wt_what_if/units/unit_wt_sep/execute")}`
    );
    expect(calls).not.toContain(
      `POST ${whatIfUfPath("worktrees/wt_what_if/units/unit_wt_empty/execute")}`
    );
    const executeBody = bodies.find(
      (body) =>
        body !== null &&
        typeof body === "object" &&
        "code" in (body as Record<string, unknown>)
    ) as { code?: string } | undefined;
    expect(executeBody?.code).toBe(WHAT_IF_EXECUTE_CODE);
    expect(calls).toContain("POST /api/worktrees/wt_what_if/ready");
    expect(calls.some((call) => call.includes("/merge"))).toBe(false);
    expect(invalidateWorktrees).toHaveBeenCalled();
    expect(openComparison).toHaveBeenCalledWith({
      worktreeId: "wt_what_if",
      unitId: "unit_wt_sep",
    });
    expect(toast).not.toHaveBeenCalledWith("error", "demoWhatIfError");
  });

  it("toasts an error and does not open comparison when create fails", async () => {
    const fetchImpl = vi.fn<typeof fetch>(async () =>
      jsonResponse({ error: { message: "nope" } }, 500)
    );
    const toast = vi.fn();
    const openComparison = vi.fn();
    const invalidateWorktrees = vi.fn();

    await runWhatIfWorktree({
      fetch: fetchImpl,
      toast,
      openComparison,
      invalidateWorktrees,
    });

    expect(toast).toHaveBeenCalledWith("busy", "demoWhatIfBusy");
    expect(toast).toHaveBeenCalledWith("error", "demoWhatIfError");
    expect(openComparison).not.toHaveBeenCalled();
    expect(invalidateWorktrees).not.toHaveBeenCalled();
  });
});

describe("what-if wiring", () => {
  it("wires the palette command through DemoRuntime and T7 Official vs What-if labels", () => {
    const runtime = readWorkspace(
      "web/src/features/demo/demo-runtime.tsx"
    );
    expect(runtime).toMatch(/runWhatIfWorktree/);
    expect(runtime).not.toMatch(/whatIf:\s*\(\)\s*=>\s*undefined/);
    expect(runtime).toMatch(/toast\.(info|loading)/);
    expect(runtime).toMatch(/toast\.error/);
    expect(runtime).toMatch(/\/worktrees/);
    expect(runtime).toMatch(/comparison/);

    const view = readWorkspace(
      "web/src/features/worktrees/snapshot-comparison-view.tsx"
    );
    expect(view).toMatch(/worktreeName|snapshotComparisonSideLabels/);
    const labels = readWorkspace(
      "web/src/features/worktrees/snapshot-comparison.ts"
    );
    expect(labels).toMatch(/comparisonOfficial/);
    expect(labels).toMatch(/comparisonWhatIf/);
    const panel = readWorkspace(
      "web/src/features/worktrees/worktree-review-panel.tsx"
    );
    expect(panel).not.toMatch(/from ["']\.\.\/demo\/demo-what-if["']/);
    expect(panel).not.toMatch(/isWhatIfWorktreeName/);
    expect(runtime).toMatch(/invalidateQueries/);
    expect(runtime).toMatch(/worktreesQueryKey/);
    expect(demoUniverFileKey().length).toBeGreaterThan(0);
  });
});
