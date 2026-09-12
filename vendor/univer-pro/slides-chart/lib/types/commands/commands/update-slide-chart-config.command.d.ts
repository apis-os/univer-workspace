import type { IChartConfigUpdate } from '@univerjs-pro/engine-chart';
import { CommandType } from '@univerjs/core';
declare const ReplaceSlideChartConfig: unique symbol;
export interface IUpdateSlideChartConfigCommandParams extends IChartConfigUpdate {
    unitId: string;
    chartId: string;
}
type IInternalUpdateSlideChartConfigCommandParams = IUpdateSlideChartConfigCommandParams & {
    [ReplaceSlideChartConfig]?: true;
};
declare function replaceSlideChartConfig(params: IUpdateSlideChartConfigCommandParams): IInternalUpdateSlideChartConfigCommandParams;
export declare const UpdateSlideChartConfigCommand: {
    id: string;
    type: CommandType.COMMAND;
    replaceConfig: typeof replaceSlideChartConfig;
    handler: (accessor: import("@wendellhu/redi").IAccessor, params: IUpdateSlideChartConfigCommandParams | undefined) => boolean;
};
export {};
