export interface IChartRuntimeAdaptiveSize {
    scalePx(size: number): number;
    scaleOptions(baseOptions: readonly number[]): number[];
}
export declare function getChartRuntimeAdaptiveSize(chartWidth: number | null | undefined): IChartRuntimeAdaptiveSize;
