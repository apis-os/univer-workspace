import type { ChartModel } from '@univerjs-pro/engine-chart';
import type { Observable } from 'rxjs';
import type { IChartViewStateMap } from './chart-view-state';
import { ChartViewStateKey } from './chart-view-state';
export interface IChartViewStateProjector {
    get<K extends ChartViewStateKey>(model: ChartModel, key: K): IChartViewStateMap[K];
    observe<K extends ChartViewStateKey>(model: ChartModel, key: K): Observable<IChartViewStateMap[K]>;
}
export declare class ChartViewStateProjector implements IChartViewStateProjector {
    private readonly _observables;
    get<K extends ChartViewStateKey>(model: ChartModel, key: K): IChartViewStateMap[K];
    observe<K extends ChartViewStateKey>(model: ChartModel, key: K): Observable<IChartViewStateMap[K]>;
    private _dependencies;
    private _project;
}
