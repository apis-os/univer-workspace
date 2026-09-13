import { describe, expect, it } from "vitest";
import {
  cliWriteTickerMessage,
  parseWorktreeChangeFeedMessage,
} from "./worktree-change-feed";

describe("parseWorktreeChangeFeedMessage", () => {
  it("accepts ready and change messages", () => {
    expect(
      parseWorktreeChangeFeedMessage(
        JSON.stringify({ event: "worktreeChangeFeedReady" })
      )
    ).toEqual({ event: "worktreeChangeFeedReady" });
    expect(
      parseWorktreeChangeFeedMessage(
        JSON.stringify({ event: "worktreesChanged" })
      )
    ).toEqual({ event: "worktreesChanged" });
  });

  it("ignores malformed and unknown messages", () => {
    expect(parseWorktreeChangeFeedMessage("not-json")).toBeNull();
    expect(
      parseWorktreeChangeFeedMessage(JSON.stringify({ event: "unknown" }))
    ).toBeNull();
  });
});

describe("worktree change-feed CLI ticker", () => {
  it("parses cliWroteCells from the existing /api/worktree-events feed", () => {
    expect(
      parseWorktreeChangeFeedMessage(
        JSON.stringify({ event: "cliWroteCells" })
      )
    ).toEqual({ event: "cliWroteCells" });
  });

  it("maps cliWroteCells feed events to the Sonner ticker key", () => {
    expect(cliWriteTickerMessage({ event: "cliWroteCells" })).toBe(
      "cliWroteCells"
    );
    expect(cliWriteTickerMessage({ event: "worktreesChanged" })).toBeNull();
    expect(cliWriteTickerMessage({ event: "worktreeChangeFeedReady" })).toBeNull();
    expect(cliWriteTickerMessage(null)).toBeNull();
  });
});
