import type { ChartViewStateName, IChartViewStateMap } from '../../services/chart-view-state';
export declare function useChartConfigState<V, K extends ChartViewStateName = ChartViewStateName>(key: K, defaultValue: V): [V, (value: V) => void];
export declare function useChartConfigState<K extends ChartViewStateName>(key: K): [IChartViewStateMap[K] | undefined, (value: IChartViewStateMap[K]) => void];
