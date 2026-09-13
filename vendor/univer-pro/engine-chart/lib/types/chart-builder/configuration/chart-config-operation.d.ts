import type { ChartPendingConfig } from '../chart-types';
import type { ChartConfigGroup } from './chart-config-group';
export declare enum ChartConfigOperationMode {
    Merge = "merge",
    Replace = "replace"
}
export interface IChartConfigOperation {
    readonly group: keyof ChartPendingConfig;
    readonly mode: ChartConfigOperationMode;
    readonly patch: ChartPendingConfig;
}
export declare function chartConfigOperation<K extends ChartConfigGroup>(group: K, value: ChartPendingConfig[K], mode?: ChartConfigOperationMode): IChartConfigOperation;
