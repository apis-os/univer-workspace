import type { IChartImageExportOptions, IChartImageExportProvider, IChartImageExportTarget } from '@univerjs-pro/chart-ui';
import { ChartImageExportService } from '@univerjs-pro/chart-ui';
import { Disposable } from '@univerjs/core';
import { ChartRenderService } from './chart-render.service';
interface ISheetChartImageExportTarget extends IChartImageExportTarget {
    readonly unitId: string;
    readonly subUnitId: string;
}
export declare class SheetChartImageExportProvider extends Disposable implements IChartImageExportProvider {
    private readonly _renderService;
    constructor(imageExportService: ChartImageExportService, _renderService: ChartRenderService);
    supports(chart: IChartImageExportTarget): chart is ISheetChartImageExportTarget;
    exportImage(chart: IChartImageExportTarget, options?: IChartImageExportOptions): Promise<string | undefined>;
}
export {};
