import type { IUpdateDocChartConfigCommandParams } from '@univerjs-pro/docs-chart';
import type { IChartContext, IChartDataAggregation, IChartModelBinding } from '@univerjs-pro/engine-chart';
import { ChartUIService, ChartViewStateRegistry } from '@univerjs-pro/chart-ui';
import { DocChartModelService } from '@univerjs-pro/docs-chart';
import { ICommandService } from '@univerjs/core';
type DocChartUpdateConfigParams = Omit<IUpdateDocChartConfigCommandParams, 'unitId' | 'chartId'> & {
    unitId?: string;
    chartId?: string;
    context?: Partial<IChartContext>;
    dataAggregation?: Partial<IChartDataAggregation>;
};
export type IDocChartUIService = DocChartUIService;
export declare const IDocChartUIService: import("@wendellhu/redi").IdentifierDecorator<DocChartUIService>;
export declare class DocChartUIService extends ChartUIService<IChartModelBinding, DocChartUpdateConfigParams> {
    private readonly _modelService;
    private readonly _commandService;
    constructor(_modelService: DocChartModelService, _commandService: ICommandService, viewStates: ChartViewStateRegistry);
    get activeRuntimeModel(): IChartModelBinding | null;
    executeChartUpdateConfig(params: DocChartUpdateConfigParams): void;
}
export {};
