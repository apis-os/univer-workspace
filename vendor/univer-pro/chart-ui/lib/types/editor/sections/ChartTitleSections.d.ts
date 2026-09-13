import type { IChartAxesSpec, LabelAlignEnum } from '@univerjs-pro/engine-chart';
import type { ReactNode } from 'react';
import type { ChartTitleKey as ChartTitleKeyValue } from '../../float-menu/types';
import type { IChartFontValue } from '../components/ChartFontField';
import type { ChartTextFieldCommitMode } from '../components/ChartTextField';
import { AxisAlignEnum, TitlePositionEnum } from '@univerjs-pro/engine-chart';
type ChartAxisKey = keyof IChartAxesSpec;
export interface IChartTitleDefaultValues {
    axisTitleAlignment: AxisAlignEnum;
    axisTitleFont: IChartFontValue;
    mainTitleFont: IChartFontValue<LabelAlignEnum>;
    position: TitlePositionEnum;
    subtitleFont: IChartFontValue<LabelAlignEnum>;
}
export declare const DEFAULT_CHART_TITLE_VALUES: IChartTitleDefaultValues;
export declare function ChartMainTitleFields(props: {
    commitMode: ChartTextFieldCommitMode;
    defaultValues: IChartTitleDefaultValues;
    showFont: boolean;
}): import("react").JSX.Element;
export declare function ChartSubtitleFields(props: {
    commitMode: ChartTextFieldCommitMode;
    defaultValues: IChartTitleDefaultValues;
    showFont: boolean;
}): import("react").JSX.Element;
export declare function ChartAxisTitleFields(props: {
    axis: ChartAxisKey;
    commitMode: ChartTextFieldCommitMode;
    defaultValues: IChartTitleDefaultValues;
    showAlignment: boolean;
    showFont: boolean;
}): import("react").JSX.Element;
export declare function ChartTitleFontSizeFields(_props: {
    defaultValues: IChartTitleDefaultValues;
}): import("react").JSX.Element;
export declare function ChartTitleTargetRoot(props: {
    children: ReactNode;
    defaultValues: IChartTitleDefaultValues;
    selectedTitleKey?: ChartTitleKeyValue;
}): import("react").JSX.Element;
export declare function ChartTitleTargetSelect(): import("react").JSX.Element;
export declare function ChartSelectedTitleFields(props: {
    commitMode: ChartTextFieldCommitMode;
}): import("react").JSX.Element;
export declare function ChartTitlesSection(props: {
    commitMode: ChartTextFieldCommitMode;
    defaultValues: IChartTitleDefaultValues;
    selectedTitleKey?: ChartTitleKeyValue;
}): import("react").JSX.Element;
export {};
