import type { IChartImageExportOptions, IChartImageExportProvider, IChartImageExportTarget } from '@univerjs-pro/chart-ui';
import { ChartImageExportService } from '@univerjs-pro/chart-ui';
import { Disposable } from '@univerjs/core';
import { DocChartSnapshotRenderService } from './doc-chart-snapshot-render.service';
interface IDocChartImageExportTarget extends IChartImageExportTarget {
    readonly unitId: string;
    getDrawingId(): string;
    getInfo(): {
        readonly size?: {
            readonly width: number;
            readonly height: number;
        };
    };
}
export declare class DocChartImageExportProvider extends Disposable implements IChartImageExportProvider {
    private readonly _snapshotService;
    constructor(imageExportService: ChartImageExportService, _snapshotService: DocChartSnapshotRenderService);
    supports(chart: IChartImageExportTarget): chart is IDocChartImageExportTarget;
    exportImage(chart: IChartImageExportTarget, options?: IChartImageExportOptions): Promise<string | undefined>;
}
export {};
