import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  CLI_WROTE_CELLS,
  WORKTREE_CHANGE_FEED_PATH,
  WORKTREE_CHANGE_FEED_TAG,
  WORKTREES_CHANGED,
  isUfExecuteCommit,
  isWorktreeMutation,
  worktreeFeedNotifyPayload,
} from "../src/integrations/worktree-change-feed.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("worktree change feed routing helpers", () => {
  test("identifies product mutations that must notify the feed", () => {
    assert.equal(isWorktreeMutation("/api/worktrees", "POST"), true);
    assert.equal(isWorktreeMutation("/api/worktrees/wt_1/discard", "POST"), true);
    assert.equal(isWorktreeMutation("/api/worktrees", "GET"), false);
    assert.equal(isWorktreeMutation("/api/worktrees/wt_1", "GET"), false);
    assert.equal(isWorktreeMutation("/api/nodes", "POST"), false);
  });

  test("keeps the browser WebSocket path stable", () => {
    assert.equal(WORKTREE_CHANGE_FEED_PATH, "/api/worktree-events");
  });

  test("identifies /uf execute commits for the CLI write ticker", () => {
    assert.equal(CLI_WROTE_CELLS.event, "cliWroteCells");
    assert.equal(WORKTREE_CHANGE_FEED_TAG, "worktree-feed");
    assert.equal(isUfExecuteCommit("/uf/abc/units/unit_1/execute", "POST"), true);
    assert.equal(
      isUfExecuteCommit("/uf/abc/worktrees/wt_1/units/unit_1/execute", "POST"),
      true
    );
    assert.equal(isUfExecuteCommit("/uf/abc/units/unit_1/inspect", "GET"), false);
    assert.equal(isUfExecuteCommit("/uf/abc/units/unit_1/execute", "GET"), false);
    assert.deepEqual(worktreeFeedNotifyPayload({ event: "cliWroteCells" }), CLI_WROTE_CELLS);
    assert.deepEqual(worktreeFeedNotifyPayload({}), WORKTREES_CHANGED);
  });

  test("ChatAgent broadcasts cliWroteCells on the worktree-feed tag after /uf execute", () => {
    const hostSrc = readFileSync(join(ROOT, "src/project/dsh-host.ts"), "utf8");
    assert.match(hostSrc, /CLI_WROTE_CELLS/);
    assert.match(hostSrc, /isUfExecuteCommit/);
    assert.match(hostSrc, /WORKTREE_CHANGE_FEED_TAG/);
    assert.match(hostSrc, /notifyCliWroteCells/);
  });
});
