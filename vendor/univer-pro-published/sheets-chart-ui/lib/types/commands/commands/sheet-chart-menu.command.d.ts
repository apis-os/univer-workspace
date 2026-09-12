import type { PieSecondaryPlotType as PieSecondaryPlotTypeValue } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export interface IMenuInsertChartCommandParams {
    value: ChartTypeBits;
    /** Optional for backward compatibility with historical plain chart menu payloads. */
    pieSecondaryPlotType?: PieSecondaryPlotTypeValue;
}
export declare const MenuInsertChartCommand: ICommand;
