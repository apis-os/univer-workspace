import type { EChartSpec, IChartCandlestickPoint, IChartRenderSpecConverter } from '../../../../types';
import { ChartCandlestickState } from '../../../../enum';
export declare function classifyCandlestickPoint(point: Pick<IChartCandlestickPoint, 'open' | 'close'>): ChartCandlestickState;
export declare const candlestickChartConverter: IChartRenderSpecConverter<EChartSpec>;
