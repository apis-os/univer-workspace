export type FunnelGapControl = 'number' | 'select';
export interface IChartFunnelDefaultValues {
    gap: number;
    useAbsoluteValue: boolean;
}
export declare const DEFAULT_CHART_FUNNEL_VALUES: IChartFunnelDefaultValues;
export declare function ChartFunnelStyleSection(props: {
    defaultValues: IChartFunnelDefaultValues;
    gapControl: FunnelGapControl;
}): import("react").JSX.Element | null;
