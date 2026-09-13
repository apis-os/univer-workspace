import { describe, expect, it } from "vitest";
import {
  formatCliWroteCellsLine,
  parseWorktreeFeedEvent,
} from "../src/change-feed.js";

describe("change-feed", () => {
  it("parses cliWroteCells on the worktree-events feed", () => {
    expect(parseWorktreeFeedEvent({ event: "cliWroteCells" })).toEqual({
      event: "cliWroteCells",
    });
    expect(
      parseWorktreeFeedEvent(JSON.stringify({ event: "cliWroteCells" })),
    ).toEqual({
      event: "cliWroteCells",
    });
  });

  it("parses ready and changed events", () => {
    expect(parseWorktreeFeedEvent({ event: "worktreeChangeFeedReady" })).toEqual({
      event: "worktreeChangeFeedReady",
    });
    expect(parseWorktreeFeedEvent({ event: "worktreesChanged" })).toEqual({
      event: "worktreesChanged",
    });
  });

  it("ignores unknown events", () => {
    expect(parseWorktreeFeedEvent({ event: "unknown" })).toBeNull();
    expect(parseWorktreeFeedEvent(null)).toBeNull();
    expect(parseWorktreeFeedEvent("invalid json")).toBeNull();
  });

  it("formats cliWroteCells line", () => {
    expect(formatCliWroteCellsLine({ event: "cliWroteCells" })).toBe("cliWroteCells");
  });
});
