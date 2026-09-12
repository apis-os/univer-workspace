import type { IBoardRect } from '@univerjs-pro/boards';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { ShapeFormulaService } from '@univerjs-pro/shape-editor';
import { IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IBoardElementStateService } from './board-element-state.service';
import { IBoardUIStateService } from './board-ui-state.service';
export declare const BOARD_SCREENSHOT_MIN_SCALE = 0.1;
export declare const BOARD_SCREENSHOT_MAX_SCALE = 4;
export interface IBoardScreenshotOptions {
    bounds: IBoardRect;
    scale?: number;
}
export interface IBoardScreenshotResult {
    contentBounds: IBoardRect;
    dataUrl: string;
    height: number;
    scale: number;
    subUnitId: string;
    unitId: string;
    width: number;
}
export declare class BoardScreenshotService {
    private readonly _boardElementService;
    private readonly _boardElementStateService;
    private readonly _boardUIStateService;
    private readonly _renderManagerService;
    private readonly _shapeHostAdapterRegistry;
    private readonly _shapeFormulaService;
    private readonly _univerInstanceService;
    constructor(_boardElementService: IBoardElementService, _boardElementStateService: IBoardElementStateService, _boardUIStateService: IBoardUIStateService, _renderManagerService: IRenderManagerService, _shapeHostAdapterRegistry: IShapeHostAdapterRegistry, _shapeFormulaService: ShapeFormulaService, _univerInstanceService: IUniverInstanceService);
    capture(unitId: string, subUnitId: string, options: IBoardScreenshotOptions): Promise<IBoardScreenshotResult | false>;
    private _prepareCaptureState;
    private _restoreCaptureState;
    private _waitForElements;
    private _waitForFormulaShapes;
    private _waitForViewport;
    private _waitForStableImage;
}
