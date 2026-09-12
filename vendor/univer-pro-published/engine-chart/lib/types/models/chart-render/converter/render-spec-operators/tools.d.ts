import type { ChartRuntimeStyle, EChartSeriesItem, EChartSpec, ILabelStyle } from '../../../../types';
import type { ISpecGrid } from './operator-types';
type PartialLabelStyle = Partial<Pick<ILabelStyle, 'visible' | 'color' | 'fontSize' | 'family' | 'italic' | 'bold' | 'underline' | 'strikethrough' | 'showMaxLabel' | 'showMinLabel'>>;
export declare function applyLabelStyle(spec: Record<string, any>, path: string, labelStyle: PartialLabelStyle): void;
export declare function applyLineStyle(spec: Record<string, any>, path: string, labelStyle: PartialLabelStyle): void;
export declare function toArray<T = unknown>(value: T | T[]): T[];
export declare function seriesForEach(series: EChartSpec['series'], func: (item: EChartSeriesItem, index: number) => void): void;
export declare const getCategoryLabelVertical: (gridInfo: ISpecGrid, style: ChartRuntimeStyle) => number;
export declare const getCategoryLabelHorizontal: (gridInfo: ISpecGrid, style: ChartRuntimeStyle, seriesCount: number, axisLabelMaxWidth?: number) => number;
export declare const getIntegerValue: (value: number, digit?: number) => number;
export declare const getGradientColor: (color: string, gradientFill: boolean) => string | {
    gradient: string;
    x: number;
    y: number;
    x2: number;
    y2: number;
    colorStops: {
        offset: number;
        color: string;
    }[];
};
type RenderColorFunc = (color: string) => string;
export declare const getRenderColorFunc: (style: ChartRuntimeStyle) => RenderColorFunc;
export {};
