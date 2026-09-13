import { describe, expect, it, vi } from "vitest";
import {
  KEEP_D3_PROMPT,
  createConflictKeepNotifier,
  focusAgentKeepChip,
  isKeepPrompt,
  keepCellPrompt,
  runConflictKeep,
} from "./demo-conflict-keep";

describe("demo-conflict-keep", () => {
  it("defines KEEP_D3_PROMPT with Avery Chen, Jordan Lee, D3, and forbids writing cells", () => {
    expect(KEEP_D3_PROMPT).toContain("Avery Chen");
    expect(KEEP_D3_PROMPT).toContain("Jordan Lee");
    expect(KEEP_D3_PROMPT).toContain("D3");
    expect(KEEP_D3_PROMPT).toContain("Do not write cells");
  });

  it("produces custom cell keep prompt via keepCellPrompt", () => {
    expect(keepCellPrompt("D3")).toBe(KEEP_D3_PROMPT);
    const e4Prompt = keepCellPrompt("E4");
    expect(e4Prompt).toContain("E4");
    expect(e4Prompt).toContain("Do not write cells");
    expect(e4Prompt).toContain("Avery Chen");
    expect(e4Prompt).toContain("Jordan Lee");
  });

  it("identifies keep prompts with isKeepPrompt", () => {
    expect(isKeepPrompt(KEEP_D3_PROMPT)).toBe(true);
    expect(isKeepPrompt(keepCellPrompt("F5"))).toBe(true);
    expect(isKeepPrompt("Explain the Q3 forecast in one sentence")).toBe(false);
    expect(isKeepPrompt("Fill E2:E4 with SUM")).toBe(false);
  });

  it("runs conflict keep via host submitTurn", async () => {
    const submitTurn = vi.fn();
    const openAgentPanel = vi.fn();
    const focusKeepChip = vi.fn();
    await runConflictKeep({
      submitTurn,
      openAgentPanel,
      focusKeepChip,
    });
    expect(openAgentPanel).toHaveBeenCalled();
    expect(focusKeepChip).toHaveBeenCalled();
    expect(submitTurn).toHaveBeenCalledWith(KEEP_D3_PROMPT);
  });

  it("runs conflict keep via fetch when submitTurn is omitted", async () => {
    const fetchImpl = vi.fn(async () => {
      return new Response(JSON.stringify({ turnId: "turn_keep_1" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });
    const result = await runConflictKeep({
      fetch: fetchImpl as unknown as typeof fetch,
      unitId: "unit_welcome_sheet",
    });
    expect(fetchImpl).toHaveBeenCalledWith(
      "/agents/unit_welcome_sheet/turns",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ prompt: KEEP_D3_PROMPT }),
      })
    );
    expect((result as Record<string, unknown>).turnId).toBe("turn_keep_1");
  });

  it("focusAgentKeepChip locates and focuses the keep chip in the panel", () => {
    const chip = { focus: vi.fn(), textContent: "Who keeps D3?" };
    const panel = {
      querySelectorAll: () => [chip],
    };
    const root = {
      getElementById: (id: string) =>
        id === "workspace-agent-panel" ? panel : null,
    };
    expect(focusAgentKeepChip(root as unknown as Document)).toBe(true);
    expect(chip.focus).toHaveBeenCalled();
  });

  it("creates a notifier wrapping conflict toast and firing onKeepSuggested", () => {
    const warning = vi.fn();
    const onKeepSuggested = vi.fn();
    const notifier = createConflictKeepNotifier({
      warning,
      onKeepSuggested,
      debounceMs: 0,
    });
    notifier("Cell conflict detected");
    expect(warning).toHaveBeenCalledWith("Cell conflict detected");
    expect(onKeepSuggested).toHaveBeenCalled();
  });
});
