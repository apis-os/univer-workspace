import type { ChartStyle } from '../../../types';
interface IChartResourceSnapshot {
    style?: ChartStyle;
    context?: unknown;
}
interface IChartResourceEnvelope<TChart extends IChartResourceSnapshot> {
    charts: Record<string, TChart>;
}
/** Serializes a host chart resource with authored-only persisted chart styles. */
export declare function serializeChartResource<TChart extends IChartResourceSnapshot, TResource extends IChartResourceEnvelope<TChart>>(resource: TResource): string;
export {};
