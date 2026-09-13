import type { ICollaborationEvent } from '@univerjs-pro/collaboration';
import type { ICollaborationSessionIdentity } from './collaboration-client-adapter';
export declare function toRemoteCollaborationEvent(identity: ICollaborationSessionIdentity, event: ICollaborationEvent): ICollaborationEvent;
export declare function toLocalCollaborationEvents(identity: ICollaborationSessionIdentity, event: ICollaborationEvent): ICollaborationEvent[];
