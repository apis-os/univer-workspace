import type { IChartConfigUpdate } from '@univerjs-pro/engine-chart';
import { CommandType } from '@univerjs/core';
declare const ReplaceBoardChartConfig: unique symbol;
export interface IUpdateBoardChartConfigCommandParams extends IChartConfigUpdate {
    unitId: string;
    chartId: string;
}
type IInternalUpdateBoardChartConfigCommandParams = IUpdateBoardChartConfigCommandParams & {
    [ReplaceBoardChartConfig]?: true;
};
declare function replaceBoardChartConfig(params: IUpdateBoardChartConfigCommandParams): IInternalUpdateBoardChartConfigCommandParams;
export declare const UpdateBoardChartConfigCommand: {
    id: string;
    type: CommandType.COMMAND;
    replaceConfig: typeof replaceBoardChartConfig;
    handler: (accessor: import("@wendellhu/redi").IAccessor, params: IUpdateBoardChartConfigCommandParams | undefined) => boolean;
};
export {};
