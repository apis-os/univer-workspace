import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SparklineDataSourceModel } from '@univerjs-pro/sheets-sparkline';
import { Disposable } from '@univerjs/core';
import { RangeProtectionCache } from '@univerjs/sheets';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
export declare class SheetSparklineRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private _sparklineDataSourceModel;
    private _rangeProtectionCache;
    private _sheetPrintInterceptorService;
    private _sparklineExtension;
    constructor(_context: IRenderContext, _sparklineDataSourceModel: SparklineDataSourceModel, _rangeProtectionCache: RangeProtectionCache, _sheetPrintInterceptorService: SheetPrintInterceptorService);
    private _initRender;
    private _initPrinting;
    private _initSkeleton;
}
