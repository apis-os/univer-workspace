import type { IChartAxisBinding, IRuntimeAxis } from '../../../types';
import { ChartSemanticAxis, ChartTypeBits } from '../../../enum';
/** Maps the renderer's transient axes to stable semantic roles used by Facade readback. */
export declare function resolveChartSemanticAxisBindings(type: ChartTypeBits, axes: readonly IRuntimeAxis[]): Partial<Record<ChartSemanticAxis, IChartAxisBinding>> | undefined;
