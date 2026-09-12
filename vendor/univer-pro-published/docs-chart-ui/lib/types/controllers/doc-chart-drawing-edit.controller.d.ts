import { ChartResourceRepository } from '@univerjs-pro/engine-chart';
import { Disposable, LocaleService } from '@univerjs/core';
import { IDocDrawingAdapterService } from '@univerjs/docs-drawing';
import { DocDrawingFloatingToolbarAdapterService } from '@univerjs/docs-drawing-ui';
export declare class DocChartDrawingEditController extends Disposable {
    private readonly _drawingAdapterService;
    private readonly _floatingToolbarAdapterService;
    private readonly _resourceService;
    private readonly _localeService;
    constructor(_drawingAdapterService: IDocDrawingAdapterService, _floatingToolbarAdapterService: DocDrawingFloatingToolbarAdapterService, _resourceService: ChartResourceRepository, _localeService: LocaleService);
    private _initAdapter;
}
