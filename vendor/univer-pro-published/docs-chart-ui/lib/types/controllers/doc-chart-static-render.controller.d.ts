import type { IDrawingSearch } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { DocChartSnapshotRenderService } from '../services/doc-chart-snapshot-render.service';
export declare class DocChartStaticRenderController extends Disposable {
    private readonly _drawingManagerService;
    private readonly _renderManagerService;
    private readonly _snapshotRenderService;
    private readonly _activeDomReadyDrawingKeys;
    constructor(_drawingManagerService: IDrawingManagerService, _renderManagerService: IRenderManagerService, _snapshotRenderService: DocChartSnapshotRenderService);
    /**
     * The active DOM renderer owns chart pixels only after its first successful render.
     * Keep the canvas image object itself visible for selection while hiding its content.
     */
    setActiveDomReady(search: IDrawingSearch, ready: boolean): void;
    private _init;
    private _requestSnapshotsForSearches;
    private _requestSnapshotsForUnit;
    private _requestSnapshot;
    private _renderCharts;
    private _renderDrawing;
    private _createImageShape;
    private _removeRenderedCharts;
    private _syncRenderedChartVisibility;
    private _syncChartImageVisibility;
    private _getChartDrawing;
    private _forEachChartDrawing;
    private _getDrawingRect;
}
