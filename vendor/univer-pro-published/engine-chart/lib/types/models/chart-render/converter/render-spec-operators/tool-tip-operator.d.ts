import type { ChartDirection, ChartRuntimeStyle, ChartStyle, EChartRenderSpecOperator, EChartSpec, IChartConfig } from '../../../../types';
import type { IChartLocaleTexts } from '../../../common/chart-locale-texts';
import type { ITooltipRuntimeSize } from './tool-tip-size';
import { InvalidValueType } from '../../../../enum';
interface ITooltipFormatterDataContext {
    category: IChartConfig['category'];
    xAxisFormat: ChartStyle['xAxis'] extends infer T ? T extends {
        format?: infer F;
    } ? F : undefined : undefined;
    invalidValueType: InvalidValueType;
    localeText: IChartLocaleTexts;
    isDateAxis: boolean | undefined;
    allSeriesStyle: ChartStyle['allSeriesStyle'];
    seriesStyleMap: ChartStyle['seriesStyleMap'];
    runtimeThemeColors: string[];
    relationNodeMap: Map<string, string>;
    negativeMap: Map<string, boolean>;
    sourceLabelMap: Map<string | number, string[]>;
    getRenderColor: (color: string) => string;
}
interface ITooltipFormatters {
    axis: (params: any) => string;
    item: (params: any) => string;
    radar: (params: any) => string;
    wordCloud: (params: any) => string;
}
export declare function excelDateToUnixMilliseconds(excelDate: number, useDefault1900DateSystem?: boolean): number;
export declare function createTooltipFormatterDataContext(spec: EChartSpec, style: ChartRuntimeStyle, config: IChartConfig): ITooltipFormatterDataContext;
export declare function createLTRTooltipFormatters(context: ITooltipFormatterDataContext, config: IChartConfig, runtimeSize: ITooltipRuntimeSize): ITooltipFormatters;
export declare function createRTLTooltipFormatters(context: ITooltipFormatterDataContext, config: IChartConfig, runtimeSize: ITooltipRuntimeSize): ITooltipFormatters;
export declare function createTooltipFormatters(context: ITooltipFormatterDataContext, config: IChartConfig, direction: ChartDirection, runtimeSize: ITooltipRuntimeSize): ITooltipFormatters;
export declare const toolTipStyleOperator: EChartRenderSpecOperator;
export {};
