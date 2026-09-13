import type { IChartConfigUpdate } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
/** Switches supplied style, context, and aggregation groups from merge to replacement semantics. */
export declare const ReplaceDocChartConfig: unique symbol;
export interface IUpdateDocChartConfigCommandParams extends IChartConfigUpdate {
    unitId: string;
    chartId: string;
    [ReplaceDocChartConfig]?: true;
}
export declare const UpdateDocChartConfigCommand: ICommand<IUpdateDocChartConfigCommandParams>;
