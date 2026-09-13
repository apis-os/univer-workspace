import type { IChartCandlestickMappingSpec } from '../../types';
import type { IChartBubbleMappingSpec } from '../chart-types';
export declare const setBubbleMapping: (value: IChartBubbleMappingSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearBubbleMapping: () => import("./chart-config-operation").IChartConfigOperation;
export declare function setCandlestickFields(value: IChartCandlestickMappingSpec): import("./chart-config-operation").IChartConfigOperation;
export declare const clearCandlestickFields: () => import("./chart-config-operation").IChartConfigOperation;
