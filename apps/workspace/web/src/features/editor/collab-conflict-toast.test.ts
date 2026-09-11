import { describe, expect, it, vi } from "vitest";
import {
  COLLAB_CONFLICT_TOAST_DEBOUNCE_MS,
  createCollabConflictToaster,
} from "./collab-conflict-toast";

describe("createCollabConflictToaster", () => {
  it("fires toast.warning with collabConflictToast and debounces 800ms", () => {
    const warning = vi.fn();
    let now = 10_000;
    const notify = createCollabConflictToaster({
      warning,
      now: () => now,
    });

    notify("Collaboration conflict: someone else edited the same cells.");
    now += 400;
    notify("Collaboration conflict: someone else edited the same cells.");

    expect(COLLAB_CONFLICT_TOAST_DEBOUNCE_MS).toBe(800);
    expect(warning).toHaveBeenCalledTimes(1);
    expect(warning).toHaveBeenCalledWith(
      "Collaboration conflict: someone else edited the same cells."
    );

    now += 500;
    notify("Collaboration conflict: someone else edited the same cells.");
    expect(warning).toHaveBeenCalledTimes(2);
  });
});
