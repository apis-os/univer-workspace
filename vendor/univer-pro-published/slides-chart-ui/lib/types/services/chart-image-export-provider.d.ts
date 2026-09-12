import type { IChartImageExportOptions, IChartImageExportProvider, IChartImageExportTarget } from '@univerjs-pro/chart-ui';
import { ChartImageExportService } from '@univerjs-pro/chart-ui';
import { Disposable } from '@univerjs/core';
import { SlideChartRenderService } from './slide-chart-render.service';
interface ISlideChartImageExportTarget extends IChartImageExportTarget {
    getPlaceholder(): object | undefined;
}
export declare class SlideChartImageExportProvider extends Disposable implements IChartImageExportProvider {
    private readonly _renderService;
    constructor(imageExportService: ChartImageExportService, _renderService: SlideChartRenderService);
    supports(chart: IChartImageExportTarget): chart is ISlideChartImageExportTarget;
    exportImage(chart: IChartImageExportTarget, options?: IChartImageExportOptions): Promise<string | undefined>;
}
export {};
