import type { IChartSelectOption } from '../../components/ChartTypeOptions';
import { ChartTypeBits, WaterfallStackTypeEnum } from '@univerjs-pro/engine-chart';
export interface IChartTypeFieldProps {
    onChange?: (chartType: ChartTypeBits) => void;
    options: readonly IChartSelectOption[];
}
export declare function ChartTypeField(props: IChartTypeFieldProps): import("react").JSX.Element;
export declare function ChartThemeField(): import("react").JSX.Element;
export declare function ChartGradientFillField(props: {
    visible: boolean;
}): import("react").JSX.Element | null;
export declare function ChartStackField(): import("react").JSX.Element | null;
export interface IChartWaterfallSetupDefaultValues {
    stackType: WaterfallStackTypeEnum;
    useSubtotal: boolean;
}
export declare const DEFAULT_CHART_WATERFALL_SETUP_VALUES: IChartWaterfallSetupDefaultValues;
export interface IChartWaterfallSetupFieldsProps {
    defaultValues: IChartWaterfallSetupDefaultValues;
}
export declare function ChartWaterfallSetupFields(props: IChartWaterfallSetupFieldsProps): import("react").JSX.Element | null;
