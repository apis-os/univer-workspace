import type { ChartRuntimeStyle, EChartSpec, IChartConfig } from '../../../../types';
export type MultiLevelCategoryAxisSide = 'bottom' | 'left' | 'right';
export interface IMultiLevelCategoryAxis {
    type?: string;
    position?: string;
    axisLabel?: {
        color?: unknown;
        formatter?: string | ((value: unknown, index?: number) => string);
        show?: boolean;
    };
    splitLine?: {
        lineStyle?: {
            color?: unknown;
        };
    };
}
export interface IMultiLevelCategoryAxisLayout {
    axis: IMultiLevelCategoryAxis;
    levelInnerDepths: number[];
    levelSizes: number[];
    side: MultiLevelCategoryAxisSide;
    totalDepth: number;
}
export declare function resolveMultiLevelCategoryAxisLayout(spec: EChartSpec, style: ChartRuntimeStyle, config: IChartConfig): IMultiLevelCategoryAxisLayout | undefined;
