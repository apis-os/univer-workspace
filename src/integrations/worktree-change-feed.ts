/**
 * Worktree change-feed contract shared by the edge gateway and ChatAgent DO.
 * Browser clients open `/api/worktree-events` with a one-time session ticket
 * minted at `/universer-api/user/session-ticket`.
 */
export const WORKTREE_CHANGE_FEED_PATH = "/api/worktree-events";
export const WORKTREE_CHANGE_NOTIFY_PATH = "/internal/worktrees-changed";

export const WORKTREE_CHANGE_FEED_READY = {
  event: "worktreeChangeFeedReady",
} as const;

export const WORKTREES_CHANGED = {
  event: "worktreesChanged",
} as const;

export const CLI_WROTE_CELLS = {
  event: "cliWroteCells",
} as const;

/** Hibernation tag on every `/api/worktree-events` socket (Jordan included). */
export const WORKTREE_CHANGE_FEED_TAG = "worktree-feed";

export function worktreeChangeFeedTags(audienceUserIds: string[]): string[] {
  return audienceUserIds.filter((id) => typeof id === "string" && id.length > 0).map((id) => `user:${id}`);
}

export function isUfExecuteCommit(pathname: string, method: string): boolean {
  if (method.toUpperCase() !== "POST") return false;
  return /^\/uf\/[^/]+\/(?:worktrees\/[^/]+\/)?units\/[^/]+\/execute$/.test(pathname);
}

export function worktreeFeedNotifyPayload(body: { event?: unknown }): typeof CLI_WROTE_CELLS | typeof WORKTREES_CHANGED {
  return body.event === CLI_WROTE_CELLS.event ? CLI_WROTE_CELLS : WORKTREES_CHANGED;
}

export function isWorktreeMutation(pathname: string, method: string): boolean {
  const verb = method.toUpperCase();
  if (verb === "POST" && pathname === "/api/worktrees") return true;
  if (verb === "POST" && /^\/api\/worktrees\/[^/]+\/discard$/.test(pathname)) return true;
  return false;
}
