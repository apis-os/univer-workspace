import type { IChartInfo, IChartSeriesPatch, IChartSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent builder for a one-field raw-sample Histogram.
 *
 * Select exactly one numeric field containing individual observations. The renderer
 * computes bins from those raw samples; do not pass pre-binned ranges or frequencies.
 *
 * Histogram settings are persisted as authored. Rendering uses Scott Auto when explicit
 * binning is ineffective, never emits more than 1000 visible bins, and falls back to a
 * zero visual gap for ineffective gap values.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Histogram)
 *   .setSource('A1:A100')
 *   .setHistogramField(0)
 *   .setBinCount(12)
 *   .setUnderflowThreshold(0)
 *   .setOverflowThreshold(100)
 *   .setBinGap(0.1)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Histogram)
 *   .setSource([['Duration'], [12], [18], [19], [25], [31], [35]])
 *   .setHistogramField(0)
 *   .setBinCount(12)
 *   .setUnderflowThreshold(0)
 *   .setOverflowThreshold(100)
 *   .setBinGap(0.1)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Histogram)
 *   .setSource([['Duration'], [12], [18], [19], [25], [31], [35]])
 *   .setHistogramField(0)
 *   .setBinCount(12)
 *   .setUnderflowThreshold(0)
 *   .setOverflowThreshold(100)
 *   .setBinGap(0.1)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Histogram)
 *   .setSource([['Duration'], [12], [18], [19], [25], [31], [35]])
 *   .setHistogramField(0)
 *   .setBinCount(12)
 *   .setUnderflowThreshold(0)
 *   .setOverflowThreshold(100)
 *   .setBinGap(0.1)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FHistogramChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSeriesPatch, 'selector'>, IChartSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Selects the only active Histogram value field by zero-based source index.
     *
     * @param index Zero-based source field index.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setHistogramField(2);
     * ```
     */
    setHistogramField(index: number): this;
    /**
     * Clears the active Histogram value field.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearHistogramField();
     * ```
     */
    clearHistogramField(): this;
    /**
     * Stores an explicit total visible-bin count. Integers from 1 through 1000 are effective
     * when enabled edge bins still leave room for a regular bin. Other finite values remain
     * persisted and visible through `describe()` but render with Scott Auto. Non-finite calls
     * produce no Pending change.
     *
     * @param count Total visible-bin count.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setBinCount(20);
     * ```
     */
    setBinCount(count: number): this;
    /**
     * Stores an explicit width. A positive finite width is effective only when the current
     * range produces at most 1000 visible bins; otherwise rendering uses Scott Auto without
     * rewriting the stored value. Non-finite calls produce no Pending change.
     *
     * @param width Bin width in source-value units.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setBinWidth(2.5);
     * ```
     */
    setBinWidth(width: number): this;
    /**
     * Removes explicit binning and restores runtime-only Scott Auto.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetBinning();
     * ```
     */
    resetBinning(): this;
    /**
     * Enables the inclusive `x <= threshold` Underflow bin. If both thresholds are present,
     * they are effective only when Underflow is less than Overflow. Non-finite calls are no-op.
     *
     * @param value Inclusive Underflow threshold.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setUnderflowThreshold(0);
     * ```
     */
    setUnderflowThreshold(value: number): this;
    /**
     * Disables Underflow.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearUnderflowThreshold();
     * ```
     */
    clearUnderflowThreshold(): this;
    /**
     * Enables the exclusive `x > threshold` Overflow bin. An ineffective finite threshold
     * pair remains persisted but both thresholds are ignored for rendering. Non-finite calls are no-op.
     *
     * @param value Exclusive Overflow threshold.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setOverflowThreshold(100);
     * ```
     */
    setOverflowThreshold(value: number): this;
    /**
     * Disables Overflow.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearOverflowThreshold();
     * ```
     */
    clearOverflowThreshold(): this;
    /**
     * Stores the visual gap ratio. Values from 0 through 0.9 are effective; other finite values
     * remain persisted but render with the 0.007-gap default. Non-finite calls are no-op.
     *
     * @param value Gap ratio between adjacent bins.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setBinGap(0.15);
     * ```
     */
    setBinGap(value: number): this;
    /**
     * Removes the explicit gap and restores the 0.007 runtime default.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetBinGap();
     * ```
     */
    resetBinGap(): this;
}
