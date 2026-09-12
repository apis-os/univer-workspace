import type { ChartModel, IChartElementHit } from '@univerjs-pro/engine-chart';
import type { ChartElementConfigTarget } from './types';
export interface IChartElementSelection {
    target: ChartElementConfigTarget;
    showFloatMenu: boolean;
}
export declare function resolveChartElementSelection(chartModel: ChartModel, hit: IChartElementHit): IChartElementSelection | undefined;
