import type { IChartAppearanceSpec } from '../chart-types';
export declare enum ChartAppearanceTarget {
    Background = "background",
    Border = "border",
    Font = "font"
}
export declare const setAppearance: (value: IChartAppearanceSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearAppearance: (target?: ChartAppearanceTarget) => import("./chart-config-operation").IChartConfigOperation;
