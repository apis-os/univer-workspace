import type { ReactNode } from 'react';
import { WordCloudShapeEnum } from '@univerjs-pro/engine-chart';
export declare function ChartWordCloudRoot(props: {
    children: ReactNode;
}): import("react").JSX.Element | null;
export interface IChartWordCloudDefaultValues {
    repeat: boolean;
    shape: WordCloudShapeEnum;
}
export declare const DEFAULT_CHART_WORD_CLOUD_VALUES: IChartWordCloudDefaultValues;
export declare function ChartWordCloudShapeField(props: {
    defaultValues: IChartWordCloudDefaultValues;
}): import("react").JSX.Element;
export declare function ChartWordCloudMaskImageField(): import("react").JSX.Element;
export declare function ChartWordCloudMaskImageIdField(): import("react").JSX.Element;
export declare function ChartWordCloudRepeatField(props: {
    defaultValues: IChartWordCloudDefaultValues;
}): import("react").JSX.Element;
export declare function ChartWordCloudStyleSection(props: {
    defaultValues: IChartWordCloudDefaultValues;
}): import("react").JSX.Element;
