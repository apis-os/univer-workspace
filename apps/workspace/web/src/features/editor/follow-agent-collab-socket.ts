import { BrowserCollaborationSocketService } from "@univerjs-pro/collaboration-client-ui";
import { tapCombWireFromSocket } from "../demo/edge-hud";
import { tapCollaborationSocketChangeset } from "./agent-panel";
import { encodeCellIntentIngest, tapCellIntentFromSocket, type CellIntent } from "./cell-presence-intent";
import { tapCollaborationSocketCursor } from "./follow-agent";

let activeSocket: { send?: (data: unknown) => void } | null = null;

export function sendCellIntent(routeKey: string, intent: CellIntent): void {
  if (!activeSocket || typeof activeSocket.send !== "function") return;
  const frame = encodeCellIntentIngest(routeKey, intent);
  try {
    activeSocket.send(JSON.stringify(frame));
  } catch {
    // Socket not ready
  }
}

export class FollowAgentCollaborationSocketService extends BrowserCollaborationSocketService {
  override async createSocket(rawUrl: string) {
    const socket = await super.createSocket(rawUrl);
    activeSocket = socket ?? null;
    tapCollaborationSocketCursor(socket ?? undefined);
    tapCollaborationSocketChangeset(socket ?? undefined);
    tapCombWireFromSocket(socket ?? undefined);
    tapCellIntentFromSocket(socket ?? undefined);
    return socket;
  }
}
