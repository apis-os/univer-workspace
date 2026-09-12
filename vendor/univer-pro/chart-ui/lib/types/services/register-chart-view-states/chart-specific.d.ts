import type { ChartViewStateProjector } from '../chart-view-state-projector';
import type { ChartViewStateRegistry } from '../chart-view-state-registry';
import { DisposableCollection } from '@univerjs/core';
export declare function registerChartSpecificStates(service: ChartViewStateRegistry, projector: ChartViewStateProjector): DisposableCollection;
