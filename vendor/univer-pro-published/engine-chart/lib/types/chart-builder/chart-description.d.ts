import type { DeepReadonly } from '@univerjs/core';
import type { IChartDescription } from './chart-types';
export type ChartDescription<THost extends object = object> = DeepReadonly<IChartDescription & THost>;
