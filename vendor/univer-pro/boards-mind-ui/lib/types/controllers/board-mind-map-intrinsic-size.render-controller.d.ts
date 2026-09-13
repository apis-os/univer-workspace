import type { IBoardElementData } from '@univerjs-pro/boards';
import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { BoardShapeIntrinsicSizeService, BoardTextEditingService } from '@univerjs-pro/boards-ui';
import { ICommandService, RxDisposable } from '@univerjs/core';
import { BoardMindMapPreviewRefreshService } from '../services/board-mind-map-preview-refresh.service';
interface IMindMapHostSize {
    height: number;
    width: number;
}
export declare function resolveMindMapHostSizeLayoutPreview(elementData: Record<string, IBoardElementData>, nodeId: string, size: IMindMapHostSize): Record<string, IBoardElementData> | null;
export declare class BoardMindMapIntrinsicSizeRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _intrinsicSizeService;
    private readonly _boardElementService;
    private readonly _textEditingService;
    private readonly _previewRefreshService;
    private readonly _commandService;
    private _activePreview;
    private readonly _provider;
    constructor(_renderContext: IRenderContext<UnitModel>, _intrinsicSizeService: BoardShapeIntrinsicSizeService, _boardElementService: IBoardElementService, _textEditingService: BoardTextEditingService, _previewRefreshService: BoardMindMapPreviewRefreshService, _commandService: ICommandService);
    private _updateHostSize;
    private _updateShapeText;
    private _previewHostSize;
    private _resolveHostSize;
    private _initEditingRestore;
    private _syncLayoutPreview;
    private _restoreActivePreview;
    private _syncElementDataToScene;
    private _getSceneObject;
}
export {};
