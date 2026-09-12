import type { EChartSpec, IChartHistogramBin, IChartRenderSpecConverter } from '../../../../types';
export declare function createHistogramIntervalFormatter(bins: readonly IChartHistogramBin[], pattern?: string): (bin: IChartHistogramBin, index: number) => string;
export declare const histogramChartConverter: IChartRenderSpecConverter<EChartSpec>;
