import type { ChartTypeBits } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
import type { ISheetCommandSharedParams } from '@univerjs/sheets';
import type { ISheetChartSourceRanges } from '../../models/types';
import type { IChartUpdateConfigMutationParams } from '../mutations/sheets-chart-update-config.mutation';
export interface IInsertChartCommandParams extends ISheetCommandSharedParams {
    chartType: ChartTypeBits;
    source: ISheetChartSourceRanges;
    chartId?: string;
    theme?: string;
    position?: {
        x: number;
        y: number;
    };
    width?: number;
    height?: number;
    backgroundColor?: string;
    borderColor?: string;
    config?: IChartUpdateConfigMutationParams;
}
export declare function resolveInsertChartDrawingBackground(params: Pick<IInsertChartCommandParams, 'backgroundColor' | 'config'>): string;
export declare const InsertChartCommand: ICommand;
