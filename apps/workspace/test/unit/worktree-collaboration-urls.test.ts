import { describe, expect, it } from "vitest";
import { createWorktreeCollaborationConfig } from "@univerjs-pro/collaboration-worktree-client";

describe("Worktree collaboration client URLs", () => {
  it("points snapshot, changeset, and WebSocket at the Worktree Universer prefix", () => {
    const config = createWorktreeCollaborationConfig({
      origin: "https://workspace.example",
      worktreeID: "wt_review",
    });
    expect(config.snapshotServerUrl).toBe(
      "https://workspace.example/universer-api/worktrees/wt_review/snapshot"
    );
    expect(config.collabSubmitChangesetUrl).toBe(
      "https://workspace.example/universer-api/worktrees/wt_review/comb"
    );
    expect(config.collabWebSocketUrl).toBe(
      "wss://workspace.example/universer-api/worktrees/wt_review/comb/connect"
    );
    expect(config.wsSessionTicketUrl).toBe(
      "https://workspace.example/universer-api/user/session-ticket"
    );
  });
});
