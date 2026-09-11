import { describe, expect, it } from "vitest";
import {
  DEMO_PLAYBOOK_STORAGE_KEY,
  DEMO_PLAYBOOK_STEPS,
  advancePlaybookStep,
  playbookHeaderMode,
  playbookKeyAdvances,
  readPlaybook,
  shouldShowPlaybook,
  writePlaybook,
  type DemoPlaybookState,
} from "./demo-playbook";

class MemoryStorage {
  readonly #data = new Map<string, string>();
  getItem(key: string): string | null {
    return this.#data.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.#data.set(key, value);
  }
}

describe("demo playbook", () => {
  it("persists v2 playbook state and lists the five stepper labels", () => {
    expect(DEMO_PLAYBOOK_STORAGE_KEY).toBe(
      "univer-workspace-demo-playbook-v2"
    );
    expect(DEMO_PLAYBOOK_STEPS.map((step) => step.labelKey)).toEqual([
      "playbookOpenJordan",
      "playbookEditCell",
      "playbookAskAgentFill",
      "playbookPresentFollow",
      "playbookWorktreeReview",
    ]);
    const storage = new MemoryStorage();
    const enabled: DemoPlaybookState = { enabled: true, step: 2 };
    writePlaybook(enabled, storage);
    expect(storage.getItem(DEMO_PLAYBOOK_STORAGE_KEY)).toBeTruthy();
    expect(readPlaybook(storage)).toEqual(enabled);
  });

  it("shows the stepper, compact Demo badge, or nothing", () => {
    expect(shouldShowPlaybook({ play: "1", storedEnabled: false })).toBe(
      true
    );
    expect(shouldShowPlaybook({ play: undefined, storedEnabled: true })).toBe(
      true
    );
    expect(
      shouldShowPlaybook({ play: undefined, storedEnabled: false })
    ).toBe(false);
    expect(
      playbookHeaderMode({ compact: true, enabled: true })
    ).toBe("badge");
    expect(
      playbookHeaderMode({ compact: false, enabled: true })
    ).toBe("stepper");
    expect(
      playbookHeaderMode({ compact: false, enabled: false })
    ).toBe("hidden");
  });

  it("advances with j and n only when the playbook is focused", () => {
    expect(playbookKeyAdvances("j", true)).toBe(true);
    expect(playbookKeyAdvances("n", true)).toBe(true);
    expect(playbookKeyAdvances("j", false)).toBe(false);
    expect(playbookKeyAdvances("n", false)).toBe(false);
    expect(playbookKeyAdvances("ArrowRight", true)).toBe(false);
    expect(advancePlaybookStep(0, "n", true)).toBe(1);
    expect(advancePlaybookStep(0, "j", true)).toBe(1);
    expect(advancePlaybookStep(0, "n", false)).toBe(0);
    expect(advancePlaybookStep(4, "n", true)).toBe(4);
  });
});
