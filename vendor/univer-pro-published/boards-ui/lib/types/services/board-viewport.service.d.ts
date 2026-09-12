import type { BoardModel } from '@univerjs-pro/boards';
import type { IBoardViewportPoint, IBoardViewportSize, IBoardViewportZoomConfig } from '../utils/board-viewport.util';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardViewportFitContentOptions {
    viewportSize: IBoardViewportSize;
    padding?: number;
    zoom?: IBoardViewportZoomConfig;
}
export declare class BoardViewportService {
    private readonly _boardElementService;
    private readonly _uiStateService;
    private readonly _renderManagerService;
    constructor(_boardElementService: IBoardElementService, _uiStateService: IBoardUIStateService, _renderManagerService: Pick<IRenderManagerService, 'getRenderUnitById'>);
    fitContent(boardModel: BoardModel | null | undefined, options: IBoardViewportFitContentOptions): boolean;
    getViewportCenterPoint(boardModel: BoardModel | null | undefined): IBoardViewportPoint | null;
    private _createRenderBoundsResolver;
}
