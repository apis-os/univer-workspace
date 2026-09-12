import type { IUniverBoardsUIConfig } from '../config/config';
export interface IResolvedBoardInteractionConfig {
    alignmentGuideThreshold: number;
    maxZoomRatio: number;
    minElementSize: number;
    minZoomRatio: number;
    pendingInsertPreviewAlpha: number;
    resizeHandleHitPadding: number;
    resizeHandleSize: number;
    spacingGuideMaxDistance: number;
    trackpadPanEnabled: boolean;
    wheelPanFactor: number;
    wheelZoomFactor: number;
    wheelZoomWithModifier: boolean;
    zoomStep: number;
    zoomWheelFactor: number;
}
export declare const BOARD_INTERACTION_DEFAULT_CONFIG: IResolvedBoardInteractionConfig;
export declare function resolveBoardInteractionConfig(config?: Pick<IUniverBoardsUIConfig, 'interaction'>): IResolvedBoardInteractionConfig;
