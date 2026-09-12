import type { IChartImageExportOptions, IChartImageExportProvider, IChartImageExportTarget } from '@univerjs-pro/chart-ui';
import { ChartImageExportService } from '@univerjs-pro/chart-ui';
import { Disposable } from '@univerjs/core';
import { BoardChartSnapshotRenderService } from './board-chart-snapshot-render.service';
interface IBoardChartImageExportTarget extends IChartImageExportTarget {
    readonly unitId: string;
    getElement(): object | null;
    getInfo(): {
        readonly size?: {
            readonly width: number;
            readonly height: number;
        };
    };
}
export declare class BoardChartImageExportProvider extends Disposable implements IChartImageExportProvider {
    private readonly _snapshotService;
    constructor(imageExportService: ChartImageExportService, _snapshotService: BoardChartSnapshotRenderService);
    supports(chart: IChartImageExportTarget): chart is IBoardChartImageExportTarget;
    exportImage(chart: IChartImageExportTarget, options?: IChartImageExportOptions): Promise<string | undefined>;
}
export {};
