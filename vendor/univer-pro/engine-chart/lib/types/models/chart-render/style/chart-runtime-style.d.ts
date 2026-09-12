import type { ChartRuntimeStyle, ChartStyle } from '../../../types';
import { ChartTypeBits } from '../../../enum';
export declare const MIN_CHART_RUNTIME_FONT_SIZE = 10;
export declare const MIN_CHART_RUNTIME_LINE_WIDTH = 1;
/**
 * Converts persisted semantic chart style buckets into transient render buckets.
 *
 * Persisted `style.yAxis` is the primary vertical axis configuration, and
 * `style.rightYAxis` is the secondary vertical axis configuration. RTL can draw
 * the primary vertical axis on the physical right, but that must not change the
 * saved field names. This resolver swaps y-axis option/title buckets only in
 * the runtime render style consumed by physical-position operators.
 */
export declare function resolveChartRuntimeStyle(style: ChartRuntimeStyle, chartType?: ChartTypeBits): ChartRuntimeStyle;
export declare function resolveChartStyleBackgroundColor(style: Pick<ChartStyle, 'backgroundColor'>): string;
export declare function scaleChartRuntimePx(style: ChartRuntimeStyle, size: number): number;
export declare function scaleChartRuntimeFontSize(style: ChartRuntimeStyle, fontSize: number): number;
export declare function scaleChartRuntimeLineWidth(style: ChartRuntimeStyle, lineWidth: number): number;
