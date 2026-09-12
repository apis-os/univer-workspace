import type { ChartRuntimeStyle } from '@univerjs-pro/engine-chart';
import type { IAccessor } from '@univerjs/core';
export declare const BUILD_TIMESTAMP: number;
export declare const DefaultLimitedTypes: string[];
export declare const DefaultAllTypes: string[];
export declare const DefaultInValidTypes: string[];
/**
 * Set graphic element to data.
 * because we use graphic element to draw watermark title, so we need to set it to data.
 */
export declare const setGraphicToSpec: (spec: Record<string, any>, graphicElements: unknown[]) => void;
export declare const translateAngleToRadian: (angle: number) => number;
export declare function getAllowedChartTypes(accessor: IAccessor): string[];
export declare function withSheetChartWatermark(style: ChartRuntimeStyle, accessor: IAccessor): ChartRuntimeStyle;
