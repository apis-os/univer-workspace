import type { ChartPendingConfig, ChartStyle, ChartTypeBits, DataOrientation, IChartDataAggregation } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
import type { IChartPersistedContext } from '../chart-persisted-context';
/** Switches supplied style, context, and aggregation groups from merge to replacement semantics. */
export declare const ReplaceSheetChartConfig: unique symbol;
type SheetChartStylePatch = Omit<ChartStyle, 'candlestick' | 'sunburst' | 'gauge' | 'chord'> & {
    candlestick?: ChartPendingConfig['candlestick'];
    sunburst?: ChartPendingConfig['sunburst'];
    gauge?: ChartPendingConfig['gauge'];
    chord?: ChartPendingConfig['chord'];
};
export interface IChartUpdateConfigCommandParams {
    unitId: string;
    chartModelId: string;
    orient?: DataOrientation;
    chartType?: ChartTypeBits;
    dataAggregation?: Partial<IChartDataAggregation>;
    style?: SheetChartStylePatch;
    context?: IChartPersistedContext;
    [ReplaceSheetChartConfig]?: true;
}
/**
 * Updates supplied style, context, and aggregation groups by merging them with the current model.
 * With `ReplaceSheetChartConfig`, supplied groups replace their complete current values, omitted
 * groups remain unchanged, and a supplied context must be canonical.
 */
export declare const ChartUpdateConfigCommand: ICommand<IChartUpdateConfigCommandParams>;
export {};
