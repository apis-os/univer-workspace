import type { IChartSnapshotRenderer, IChartSnapshotRequest } from '@univerjs-pro/chart-ui';
import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import { ChartSnapshotQueue } from '@univerjs-pro/chart-ui';
import { DocChartModelService } from '@univerjs-pro/docs-chart';
import { ChartImageExportFormat, IChartRenderModelManagerService } from '@univerjs-pro/engine-chart';
import { LocaleService } from '@univerjs/core';
import { DocChartRenderService } from './doc-chart-render.service';
export interface IDocChartSnapshotRequest extends IChartSnapshotRequest {
    format?: ChartImageExportFormat;
    mode?: 'main' | 'print' | 'export';
}
export declare const IDocChartSnapshotRendererService: import("@wendellhu/redi").IdentifierDecorator<IChartSnapshotRenderer<IDocChartSnapshotRequest, IChartModelBinding>>;
export declare class DocChartSnapshotRenderService extends ChartSnapshotQueue<IDocChartSnapshotRequest> {
    constructor(localeService: LocaleService, modelService: DocChartModelService, renderService: DocChartRenderService, renderModelManager: IChartRenderModelManagerService, renderer?: IChartSnapshotRenderer<IDocChartSnapshotRequest>);
    getCacheKey(request: IDocChartSnapshotRequest): string;
}
