/** Canonical TopN configuration persisted with a chart. */
export interface IChartTopNSpec {
    count: number;
    sourceIndex?: number;
}
/** Authored category aggregation and ranking configuration. */
export interface IChartDataAggregation {
    aggregate?: boolean;
    topN?: IChartTopNSpec;
}
