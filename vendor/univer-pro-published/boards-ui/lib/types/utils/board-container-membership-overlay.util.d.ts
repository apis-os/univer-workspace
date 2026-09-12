import type { IBoardElementData, IBoardElementTransform, IBoardRect } from '@univerjs-pro/boards';
import type { IBoardElementSpatialIndex } from './board-container-spatial-index.util';
export type BoardContainerMembershipOverlayState = 'retained' | 'capture' | 'expel' | 'autosize';
export interface IBoardContainerMembershipOverlayItem {
    elementId: string;
    containerId: string;
    state: BoardContainerMembershipOverlayState;
    bounds: IBoardRect;
    forced?: boolean;
}
export interface IResolveBoardContainerMembershipOverlayOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder?: readonly string[];
    activeElementIds: readonly string[];
    forceCaptureElementIds?: readonly string[];
    previewWorldTransforms?: Record<string, IBoardElementTransform>;
    spatialIndex?: IBoardElementSpatialIndex;
}
export declare function resolveBoardContainerMembershipOverlay(options: IResolveBoardContainerMembershipOverlayOptions): IBoardContainerMembershipOverlayItem[];
