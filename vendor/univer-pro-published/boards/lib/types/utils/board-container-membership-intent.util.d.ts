import type { IBoardElementData } from '../services/board-element.service';
import type { IBoardContainerMembershipPreview } from './board-container-membership.util';
import type { IBoardRect } from './board-container-transform.util';
export type BoardContainerMembershipBlockedReason = 'previewBlocked';
export type BoardContainerMembershipAutosizeReason = 'autoResize';
export interface IBoardContainerMembershipIntentRetained {
    elementId: string;
    containerId: string;
}
export interface IBoardContainerMembershipIntentCaptured {
    elementId: string;
    fromParentId?: string;
    toParentId: string;
    forced: boolean;
}
export interface IBoardContainerMembershipIntentExpelled {
    elementId: string;
    fromParentId: string;
    toParentId?: string;
}
export interface IBoardContainerMembershipIntentAutosized {
    containerId: string;
    nextBounds: IBoardRect;
    reason: BoardContainerMembershipAutosizeReason;
}
export interface IBoardContainerMembershipIntentBlocked {
    elementId: string;
    targetContainerId: string;
    reason: BoardContainerMembershipBlockedReason;
}
export interface IBoardContainerMembershipIntent {
    retained: IBoardContainerMembershipIntentRetained[];
    captured: IBoardContainerMembershipIntentCaptured[];
    expelled: IBoardContainerMembershipIntentExpelled[];
    autosized: IBoardContainerMembershipIntentAutosized[];
    blocked: IBoardContainerMembershipIntentBlocked[];
}
export interface IResolveBoardContainerMembershipIntentFromPreviewOptions {
    containerId: string;
    elementData: Record<string, IBoardElementData>;
    preview: IBoardContainerMembershipPreview;
}
export declare function createEmptyBoardContainerMembershipIntent(): IBoardContainerMembershipIntent;
export declare function resolveBoardContainerMembershipIntentFromPreview(options: IResolveBoardContainerMembershipIntentFromPreviewOptions): IBoardContainerMembershipIntent;
