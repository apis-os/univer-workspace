import type { ChartTypeBits, PieSecondaryPlotType } from '@univerjs-pro/engine-chart';
import type { IChartSourceMultiRangeItem, ISheetChartSourceSingleRange } from '@univerjs-pro/sheets-chart';
import type { IUniverInstanceService, Nullable } from '@univerjs/core';
import type { IValueOption } from '@univerjs/ui';
import { CHART_TYPE_CATALOG } from '@univerjs-pro/chart-ui';
export declare function serializeChartDataRange(rangeInfo: Nullable<ISheetChartSourceSingleRange | IChartSourceMultiRangeItem[]>, univerInstanceService: IUniverInstanceService): string;
export interface IChartTypeOption {
    id?: string;
    labelId: typeof CHART_TYPE_CATALOG[number]['labelId'];
    pieSecondaryPlotType?: PieSecondaryPlotType;
    value: ChartTypeBits;
    icon: string;
}
export declare const chartTypeOptions: IChartTypeOption[];
export declare function getChartMenuSelection(options?: readonly IChartTypeOption[]): Array<IValueOption<string>>;
export declare const getOptionsList: (optionsList: IChartTypeOption[], allowTypes: ChartTypeBits[] | [string]) => IChartTypeOption[];
