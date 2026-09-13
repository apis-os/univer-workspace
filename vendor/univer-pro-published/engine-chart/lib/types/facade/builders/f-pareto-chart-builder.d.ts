import type { IChartInfo, IChartParetoBarStyleSpec, IChartParetoLineStyleSpec, IChartSeriesPatch, IChartSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for Pareto Charts.
 *
 * Select one category field with `setCategoryField()` and one numeric value field with
 * `setValueFields([index])`. Field indexes are zero-based in the normalized data source.
 * Explicit mapping is necessary when the source shape is ambiguous, such as a Sheet range
 * containing only numeric values; without both roles, the Chart has no renderable series.
 *
 * Rows with the same category are aggregated. By default, zero and negative totals are
 * excluded, the remaining categories are sorted from largest to smallest, and the renderer
 * derives the cumulative-percentage line from the selected value field. Use
 * `setIncludeZeroValues(true)` to retain zero totals; negative totals remain excluded.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Pareto)
 *   .setSource('A1:B8')
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setBarStyle({ color: '#2563eb', opacity: 0.8 })
 *   .setCumulativeLineStyle({ color: '#dc2626', width: 2 })
 *   .setIncludeZeroValues(false)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Pareto)
 *   .setSource([['Cause', 'Count'], ['A', 42], ['B', 28], ['C', 15]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setBarStyle({ color: '#2563eb', opacity: 0.8 })
 *   .setCumulativeLineStyle({ color: '#dc2626', width: 2 })
 *   .setIncludeZeroValues(false)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Pareto)
 *   .setSource([['Cause', 'Count'], ['A', 42], ['B', 28], ['C', 15]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setBarStyle({ color: '#2563eb', opacity: 0.8 })
 *   .setCumulativeLineStyle({ color: '#dc2626', width: 2 })
 *   .setIncludeZeroValues(false)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Pareto)
 *   .setSource([['Cause', 'Count'], ['A', 42], ['B', 28], ['C', 15]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setBarStyle({ color: '#2563eb', opacity: 0.8 })
 *   .setCumulativeLineStyle({ color: '#dc2626', width: 2 })
 *   .setIncludeZeroValues(false)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FParetoChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSeriesPatch, 'selector'>, IChartSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Deep-merges supported Pareto bar appearance.
     *
     * Omitted fields keep their current values. Without explicit overrides, bars use the active
     * chart theme palette, full opacity, and renderer-default borders and labels.
     *
     * This method executes synchronously.
     *
     * Read the current value from `builder.build().config.pareto?.barStyle`.
     *
     * @param value Supported bar appearance fields.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setBarStyle({ color: '#1677ff', opacity: 0.8 });
     * const barStyle = builder.build().config.pareto?.barStyle;
     * ```
     */
    setBarStyle(value: IChartParetoBarStyleSpec): this;
    /**
     * Clears the complete Pareto bar style.
     *
     * After clearing, bars again use the active chart theme palette, full opacity, and
     * renderer-default borders and labels.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearBarStyle();
     * const barStyle = builder.build().config.pareto?.barStyle;
     * ```
     */
    clearBarStyle(): this;
    /**
     * Deep-merges supported Pareto cumulative-line appearance.
     *
     * Omitted fields keep their current values. Without explicit overrides, the line uses the
     * fourth active theme color, a 2 px solid stroke, full opacity, and 7 px points.
     *
     * This method executes synchronously.
     *
     * Non-positive widths are ignored because the cumulative line remains part of Pareto.
     * Read the current value from `builder.build().config.pareto?.cumulativeLineStyle`.
     *
     * @param value Supported cumulative-line appearance fields.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setCumulativeLineStyle({ color: '#f5222d', width: 2 });
     * const lineStyle = builder.build().config.pareto?.cumulativeLineStyle;
     * ```
     */
    setCumulativeLineStyle(value: IChartParetoLineStyleSpec): this;
    /**
     * Clears the complete Pareto cumulative-line style.
     *
     * The cumulative line remains visible and falls back to the fourth active theme color,
     * a 2 px solid stroke, full opacity, and 7 px points.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearCumulativeLineStyle();
     * const lineStyle = builder.build().config.pareto?.cumulativeLineStyle;
     * ```
     */
    clearCumulativeLineStyle(): this;
    /**
     * Sets the include zero values configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setIncludeZeroValues(true);
     * ```
     */
    setIncludeZeroValues(value: boolean): this;
    /**
     * Restores the default of excluding zero-valued categories and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetIncludeZeroValues();
     * ```
     */
    resetIncludeZeroValues(): this;
}
