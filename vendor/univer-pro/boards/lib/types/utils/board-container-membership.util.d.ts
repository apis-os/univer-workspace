import type { IBoardContainerElement } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
import type { IBoardRect } from './board-container-transform.util';
export interface IResolveBoardContainerMembershipPreviewOptions {
    containerId: string;
    elementData: Record<string, IBoardElementData>;
    candidateElementIds?: readonly string[];
    allowCaptureFromParentedCandidateIds?: readonly string[];
    forceCaptureCandidateIds?: readonly string[];
    autosizeCaptureCandidateIds?: readonly string[];
    previewOuterBounds?: IBoardRect;
    preserveDirectChildren?: boolean;
}
export interface IBoardContainerMembershipPreview {
    activeContainerId: string;
    previewOuterBounds: IBoardRect;
    previewContentBounds: IBoardRect;
    retainedChildIds: string[];
    expelChildIds: string[];
    captureChildIds: string[];
    forcedCaptureChildIds: string[];
    blockedChildIds: string[];
    expandedOuterBounds?: IBoardRect;
}
export interface IResolveBoardContainerCaptureTargetOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder?: readonly string[];
    activeContainerIds: readonly string[];
    candidateContainerIds?: readonly string[];
    lockedCurrentParentIds?: readonly string[];
}
export interface IBoardContainerCaptureTarget {
    containerId: string;
    expandedOuterBounds?: IBoardRect;
}
export declare function resolveBoardContainerMembershipContentBounds(container: IBoardContainerElement, previewOuterBounds: IBoardRect): IBoardRect;
export declare function resolveBoardContainerMembershipOuterBoundsForContent(container: IBoardContainerElement, currentOuterBounds: IBoardRect, requiredContentBounds: IBoardRect): IBoardRect;
export declare function resolveBoardContainerMembershipPreview(options: IResolveBoardContainerMembershipPreviewOptions): IBoardContainerMembershipPreview;
export declare function resolveBoardContainerCaptureTarget(options: IResolveBoardContainerCaptureTargetOptions): IBoardContainerCaptureTarget | null;
