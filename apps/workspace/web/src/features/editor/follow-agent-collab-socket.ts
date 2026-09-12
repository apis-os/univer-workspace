import { BrowserCollaborationSocketService } from "@univerjs-pro/collaboration-client-ui";
import { tapCollaborationSocketCursor } from "./follow-agent";

export class FollowAgentCollaborationSocketService extends BrowserCollaborationSocketService {
  override async createSocket(rawUrl: string) {
    const socket = await super.createSocket(rawUrl);
    tapCollaborationSocketCursor(socket ?? undefined);
    return socket;
  }
}
