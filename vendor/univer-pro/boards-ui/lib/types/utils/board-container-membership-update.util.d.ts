import type { IBoardElementData, IUpdateBoardElementsCommandItem } from '@univerjs-pro/boards';
import type { IBoardElementSpatialIndex } from './board-container-spatial-index.util';
export interface IResolveBoardContainerMembershipUpdateItemsOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder?: readonly string[];
    updates: readonly IUpdateBoardElementsCommandItem[];
    forceCaptureElementIds?: readonly string[];
    spatialIndex?: IBoardElementSpatialIndex;
    mode?: BoardContainerMembershipUpdateMode;
}
export declare enum BoardContainerMembershipUpdateMode {
    Spatial = "spatial",
    Preserve = "preserve"
}
export declare function resolveBoardContainerMembershipUpdateItems(options: IResolveBoardContainerMembershipUpdateItemsOptions): IUpdateBoardElementsCommandItem[];
