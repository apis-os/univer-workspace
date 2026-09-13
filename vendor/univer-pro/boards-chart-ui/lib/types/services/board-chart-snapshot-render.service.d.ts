import type { IChartSnapshotRenderer, IChartSnapshotRequest } from '@univerjs-pro/chart-ui';
import type { ChartRuntimeStyle, IChartModelBinding } from '@univerjs-pro/engine-chart';
import { BoardChartModelService } from '@univerjs-pro/boards-chart';
import { ChartSnapshotQueue } from '@univerjs-pro/chart-ui';
import { ChartImageExportFormat, IChartRenderModelManagerService } from '@univerjs-pro/engine-chart';
import { LocaleService } from '@univerjs/core';
import { BoardChartRenderService } from './board-chart-render.service';
export interface IBoardChartSnapshotRequest extends IChartSnapshotRequest {
    format?: ChartImageExportFormat;
    mode?: 'main' | 'thumbnail';
}
export declare const IBoardChartSnapshotRendererService: import("@wendellhu/redi").IdentifierDecorator<IChartSnapshotRenderer<IBoardChartSnapshotRequest, IChartModelBinding>>;
export declare const BOARD_CHART_SNAPSHOT_BORDER_WIDTH = 0;
export declare function resolveBoardChartSnapshotStyle(chartStyle: ChartRuntimeStyle): ChartRuntimeStyle;
export declare class BoardChartSnapshotRenderService extends ChartSnapshotQueue<IBoardChartSnapshotRequest> {
    constructor(localeService: LocaleService, modelService: BoardChartModelService, renderService: BoardChartRenderService, renderModelManager: IChartRenderModelManagerService, renderer?: IChartSnapshotRenderer<IBoardChartSnapshotRequest>);
    getCacheKey(request: IBoardChartSnapshotRequest): string;
}
