import { BrowserCollaborationSocketService } from "@univerjs-pro/collaboration-client-ui";
import { tapCombWireFromSocket } from "../demo/edge-hud";
import { tapCollaborationSocketCursor } from "./follow-agent";

export class FollowAgentCollaborationSocketService extends BrowserCollaborationSocketService {
  override async createSocket(rawUrl: string) {
    const socket = await super.createSocket(rawUrl);
    tapCollaborationSocketCursor(socket ?? undefined);
    tapCombWireFromSocket(socket ?? undefined);
    return socket;
  }
}
