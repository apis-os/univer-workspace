import { describe, expect, it, vi } from "vitest";
import {
  DEMO_SCENE_EVENT,
  focusAgentFillChip,
  jordanDemoUrl,
  runDemoScene,
} from "./demo-scenes";

describe("demo scenes", () => {
  it("fill focuses the Agent Fill chip via workspace-demo-scene", () => {
    const dispatchScene = vi.fn();
    const openAgentPanel = vi.fn();
    const focusFillChip = vi.fn();
    runDemoScene("fill", {
      origin: "https://univer-workspace.apisos.workers.dev",
      dispatchScene,
      openAgentPanel,
      focusFillChip,
      copyText: vi.fn(),
      toast: vi.fn(),
      navigate: vi.fn(),
      openPalette: vi.fn(),
    });
    expect(dispatchScene).toHaveBeenCalledWith("fill");
    expect(openAgentPanel).toHaveBeenCalled();
    expect(focusFillChip).toHaveBeenCalled();
    expect(DEMO_SCENE_EVENT).toBe("workspace-demo-scene");
  });

  it("conflict copies the Jordan URL and toasts collabSameCell", () => {
    const copyText = vi.fn();
    const toast = vi.fn();
    runDemoScene("conflict", {
      origin: "https://univer-workspace.apisos.workers.dev",
      dispatchScene: vi.fn(),
      openAgentPanel: vi.fn(),
      focusFillChip: vi.fn(),
      copyText,
      toast,
      navigate: vi.fn(),
      openPalette: vi.fn(),
    });
    expect(jordanDemoUrl("https://univer-workspace.apisos.workers.dev")).toBe(
      "https://univer-workspace.apisos.workers.dev/demo?as=jordan"
    );
    expect(copyText).toHaveBeenCalledWith(
      "https://univer-workspace.apisos.workers.dev/demo?as=jordan"
    );
    expect(toast).toHaveBeenCalledWith("collabSameCell");
  });

  it("review opens the worktree panel", () => {
    const navigate = vi.fn();
    runDemoScene("review", {
      origin: "https://example.test",
      dispatchScene: vi.fn(),
      openAgentPanel: vi.fn(),
      focusFillChip: vi.fn(),
      copyText: vi.fn(),
      toast: vi.fn(),
      navigate,
      openPalette: vi.fn(),
    });
    expect(navigate).toHaveBeenCalledWith("/worktrees");
  });

  it("export opens the palette export item", () => {
    const openPalette = vi.fn();
    runDemoScene("export", {
      origin: "https://example.test",
      dispatchScene: vi.fn(),
      openAgentPanel: vi.fn(),
      focusFillChip: vi.fn(),
      copyText: vi.fn(),
      toast: vi.fn(),
      navigate: vi.fn(),
      openPalette,
    });
    expect(openPalette).toHaveBeenCalledWith("export-xlsx");
  });

  it("focuses the Fill SUM chip inside the agent panel", () => {
    const chip = { focus: vi.fn(), textContent: "Fill E2:E4 with SUM of Jul–Sep" };
    const panel = {
      querySelectorAll: () => [chip],
    };
    const root = {
      getElementById: (id: string) =>
        id === "workspace-agent-panel" ? panel : null,
    };
    expect(focusAgentFillChip(root as unknown as Document)).toBe(true);
    expect(chip.focus).toHaveBeenCalled();
  });
});
