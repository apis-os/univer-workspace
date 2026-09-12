import type { ChartAllSeriesStyleTarget, ChartAxisPointerTarget, ChartPublicSeriesSelector, ChartSeriesClearTarget, ChartSeriesTrendlineSelector, ChartTrendlineSelector, ChartTrendlineValue, DeepNullish, IChartAxisPointerSpec, IChartBarSpec, IChartInfo, IChartSeriesPatch, IChartSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FAxisChartBuilder } from './f-axis-chart-builder';
/**
 * Fluent Builder for Cartesian Charts with per-series styling and trendlines.
 *
 * @example
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Column)
 *   .setSource('A1:D8')
 *   .setBar({ gapWidth: 0.2 })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 */
export declare class FCartesianChartBuilder<TSeriesPatch extends Omit<IChartSeriesPatch, 'selector'> = Omit<IChartSeriesPatch, 'selector'>, TSeriesStyle extends IChartSeriesStyleSpec = IChartSeriesStyleSpec, TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FAxisChartBuilder<TSource, TDataSource, TInfo> {
    readonly __seriesPatchType?: TSeriesPatch;
    /**
     * Sets Chart-wide Bar and Column spacing and width options.
     * @param {IChartBarSpec} value The Bar or Column layout specification.
     * @returns {this} This Builder for chaining.
     */
    setBar(value: IChartBarSpec): this;
    /**
     * Clears Chart-wide Bar and Column layout overrides.
     * @returns {this} This Builder for chaining.
     * @example `builder.clearBar()`
     */
    clearBar(): this;
    /**
     * Sets the series configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param patch The semantic configuration patch owned by this method.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * import { chartLinearGradient } from '@univerjs-pro/engine-chart';
     *
     * const color = chartLinearGradient({
     *     start: { x: 0, y: 1 },
     *     end: { x: 0, y: 0 },
     *     stops: [
     *         { offset: 0, color: 'rgba(22, 119, 255, 0)' },
     *         { offset: 1, color: '#1677ff' },
     *     ],
     * });
     * builder.setSeries(0, { color });
     * ```
     */
    setSeries(selector: ChartPublicSeriesSelector, patch: DeepNullish<TSeriesPatch>): this;
    /**
     * Clears the series configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearSeries(0);
     * ```
     */
    clearSeries(selector: ChartPublicSeriesSelector, target?: ChartSeriesClearTarget): this;
    /**
     * Clears every per-series override while preserving all-series defaults.
     * Use `setSeries()` to write one selector and `describe().series` to read the effective state.
     */
    clearAllSeriesOverrides(): this;
    /**
     * Sets persistent defaults inherited by every current and future series.
     *
     * This method executes synchronously.
     *
     * @param style The global series style defaults.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAllSeriesStyle({ color: '#1677ff', fillOpacity: 0.8 });
     * ```
     */
    setAllSeriesStyle(style: DeepNullish<TSeriesStyle>): this;
    /**
     * Clears persistent defaults inherited by every series.
     *
     * This method executes synchronously.
     *
     * @param target The global series style field to clear, or omit it to clear all defaults.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearAllSeriesStyle(univerAPI.Enum.ChartAllSeriesStyleTarget.Color);
     * ```
     */
    clearAllSeriesStyle(target?: ChartAllSeriesStyleTarget): this;
    /**
     * Sets the trendline configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setTrendline(0, { type: univerAPI.Enum.ChartTrendlineType.linear });
     * ```
     */
    setTrendline(selector: ChartSeriesTrendlineSelector, value: ChartTrendlineValue): this;
    /**
     * Remove trendline.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param trendline The trendline configuration to append.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.removeTrendline(0, 0);
     * ```
     */
    removeTrendline(selector: ChartSeriesTrendlineSelector, trendline: ChartTrendlineSelector): this;
    /**
     * Clears the trendlines configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearTrendlines(0);
     * ```
     */
    clearTrendlines(selector?: ChartSeriesTrendlineSelector): this;
    /**
     * Sets the axis pointer configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAxisPointer({ indicatorLineColor: '#1677ff' });
     * ```
     */
    setAxisPointer(value: IChartAxisPointerSpec): this;
    /**
     * Clears the axis pointer configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearAxisPointer(univerAPI.Enum.ChartAxisPointerTarget.IndicatorLineColor);
     * ```
     */
    clearAxisPointer(target?: ChartAxisPointerTarget): this;
}
