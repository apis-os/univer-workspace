import type { IDocChartDrawing } from '@univerjs-pro/docs-chart';
import type { IDocumentOffsetConfig, IDocumentSkeletonPage } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { DocPrintInterceptorService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { DocChartSnapshotRenderService } from './doc-chart-snapshot-render.service';
interface IDocPrintPreparationContext {
    unitId: string;
    dpr: number;
}
export interface IDocChartPrintRect {
    width: number;
    height: number;
}
export declare function resolveDocChartPrintTransform(drawing: IDocChartDrawing, pages: IDocumentSkeletonPage[], offsetConfig: IDocumentOffsetConfig): NonNullable<IDocChartDrawing['transform']> | null;
export declare class DocChartPrintService extends Disposable {
    private readonly _drawingManagerService;
    private readonly _renderManagerService;
    private readonly _snapshotRenderService;
    private readonly _docPrintInterceptorService;
    private readonly _preparedCharts;
    constructor(_drawingManagerService: IDrawingManagerService, _renderManagerService: IRenderManagerService, _snapshotRenderService: DocChartSnapshotRenderService, _docPrintInterceptorService: DocPrintInterceptorService);
    prepare(context: IDocPrintPreparationContext): Promise<void>;
    private _initPrinting;
    private _getChartDrawings;
    private _getRenderedChartImage;
}
export {};
