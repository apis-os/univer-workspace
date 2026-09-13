import type { ChartRuntimeStyle, IChartHostRect } from '../../../types';
import type { IChartRuntimeAdaptiveSize } from '../../common/adaptive-size/chart-runtime-adaptive-size';
export declare function getChartRenderAdaptiveSize(style: ChartRuntimeStyle, chartWidth: number): IChartRuntimeAdaptiveSize;
export declare function createSizedRuntimeStyle(style: ChartRuntimeStyle, rect: IChartHostRect, adaptiveSize: IChartRuntimeAdaptiveSize): ChartRuntimeStyle;
