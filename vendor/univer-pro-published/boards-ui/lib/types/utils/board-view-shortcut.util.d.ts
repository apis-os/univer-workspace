import type { BoardModel, IBoardElementData, IBoardElementService } from '@univerjs-pro/boards';
import type { BoardViewShortcutAction } from '../common/board-shortcuts';
import type { IResolvedBoardInteractionConfig } from './board-interaction-config.util';
import type { IBoardViewportPoint, IBoardViewportSize, IBoardViewportTransform } from './board-viewport.util';
interface IBoardViewShortcutContext {
    unitId: string;
    subUnitId: string;
}
interface IBoardViewShortcutStateService {
    setZoomRatioAtViewportPoint: (zoomRatio: number, viewportPoint: IBoardViewportPoint) => void;
    setViewportTransform: (viewport: IBoardViewportTransform) => void;
}
interface IBoardViewShortcutViewportService {
    fitContent: (boardModel: BoardModel, options: {
        viewportSize: IBoardViewportSize;
        padding: number;
        zoom: IResolvedBoardInteractionConfig;
    }) => void;
}
export interface IApplyBoardViewShortcutOptions {
    action: BoardViewShortcutAction;
    boardModel: BoardModel;
    boardContext?: IBoardViewShortcutContext | null;
    selectedIds: string[];
    boardElementService: Pick<IBoardElementService, 'getElementData'> | {
        getElementData: (unitId: string, subUnitId: string) => Record<string, IBoardElementData>;
    };
    stateService: IBoardViewShortcutStateService;
    viewportService: IBoardViewShortcutViewportService;
    interactionConfig: IResolvedBoardInteractionConfig;
    viewportSize: IBoardViewportSize;
    viewportCenterPoint: IBoardViewportPoint;
    preventDefault: () => void;
    dispatchEvent?: (event: Event) => void;
    requestFullscreen?: () => void | Promise<void>;
    exitFullscreen?: () => void | Promise<void>;
    getFullscreenElement?: () => unknown;
}
export declare function applyBoardViewShortcut(options: IApplyBoardViewShortcutOptions): boolean;
export {};
