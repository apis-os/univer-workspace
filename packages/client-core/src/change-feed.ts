import { WorkspaceHttp } from "./http.js";
import { workspaceError } from "./errors.js";

export type WorktreeFeedEvent =
  | { readonly event: "worktreeChangeFeedReady" }
  | { readonly event: "worktreesChanged" }
  | { readonly event: "cliWroteCells" };

export function parseWorktreeFeedEvent(value: unknown): WorktreeFeedEvent | null {
  try {
    const parsed =
      typeof value === "string" ? (JSON.parse(value) as unknown) : value;
    if (!parsed || typeof parsed !== "object") return null;
    const event = (parsed as { readonly event?: unknown }).event;
    if (
      event === "worktreeChangeFeedReady" ||
      event === "worktreesChanged" ||
      event === "cliWroteCells"
    ) {
      return { event };
    }
    return null;
  } catch {
    return null;
  }
}

export function formatCliWroteCellsLine(event: WorktreeFeedEvent): string {
  return event.event;
}

export async function subscribeWorktreeFeed(
  http: WorkspaceHttp,
  onEvent: (e: WorktreeFeedEvent) => void,
): Promise<() => void> {
  const ticketRes = await http.json("/universer-api/user/session-ticket");
  const ticket = typeof ticketRes["ticket"] === "string" ? ticketRes["ticket"] : "";
  if (!ticket) {
    throw workspaceError("workspace-invalid-response", "Invalid session ticket");
  }
  const url = new URL("/api/worktree-events", http.origin);
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  url.searchParams.set("sessionTicket", ticket);

  const socket = new WebSocket(url);
  const onMessage = (event: MessageEvent) => {
    const parsed = parseWorktreeFeedEvent(event.data);
    if (parsed) {
      onEvent(parsed);
    }
  };
  socket.addEventListener("message", onMessage);

  return () => {
    socket.removeEventListener("message", onMessage);
    socket.close();
  };
}
