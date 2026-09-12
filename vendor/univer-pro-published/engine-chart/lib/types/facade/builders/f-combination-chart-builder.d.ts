import type { ChartPublicSeriesSelector, ChartSeriesAxis, ChartSeriesTypeString, IChartInfo, IChartSeriesPatch, IChartSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for mixed Column, Line, and Area Combination Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Combination)
 *   .setSource('A1:D8')
 *   .setSeriesType(0, univerAPI.Enum.ChartSeriesTypeString.ColumnStacked)
 *   .setSeriesType(1, univerAPI.Enum.ChartSeriesTypeString.ColumnStacked)
 *   .setSeriesType(2, univerAPI.Enum.ChartSeriesTypeString.Line)
 *   .setSeriesAxis(0, univerAPI.Enum.ChartSeriesAxis.Right)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Combination)
 *   .setSource([['Month', 'Sales', 'Profit'], ['Jan', 120, 24], ['Feb', 180, 38]])
 *   .setSeriesType(0, univerAPI.Enum.ChartSeriesTypeString.Line)
 *   .setSeriesAxis(0, univerAPI.Enum.ChartSeriesAxis.Right)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Combination)
 *   .setSource([['Month', 'Sales', 'Profit'], ['Jan', 120, 24], ['Feb', 180, 38]])
 *   .setSeriesType(0, univerAPI.Enum.ChartSeriesTypeString.Line)
 *   .setSeriesAxis(0, univerAPI.Enum.ChartSeriesAxis.Right)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Combination)
 *   .setSource([['Month', 'Sales', 'Profit'], ['Jan', 120, 24], ['Feb', 180, 38]])
 *   .setSeriesType(0, univerAPI.Enum.ChartSeriesTypeString.Line)
 *   .setSeriesAxis(0, univerAPI.Enum.ChartSeriesAxis.Right)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FCombinationChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSeriesPatch, 'selector'>, IChartSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Sets the series type configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setSeriesType(0, univerAPI.Enum.ChartSeriesTypeString.ColumnStacked);
     * ```
     */
    setSeriesType(selector: ChartPublicSeriesSelector, value: ChartSeriesTypeString): this;
    /**
     * Removes the series override. The first series defaults to `Column` and later series default to `Line`.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetSeriesType(0);
     * ```
     */
    resetSeriesType(selector: ChartPublicSeriesSelector): this;
    /**
     * Sets the series axis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setSeriesAxis(0, univerAPI.Enum.ChartSeriesAxis.Right);
     * ```
     */
    setSeriesAxis(selector: ChartPublicSeriesSelector, value: ChartSeriesAxis): this;
    /**
     * Removes the series override so the series uses the primary value axis.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetSeriesAxis(0);
     * ```
     */
    resetSeriesAxis(selector: ChartPublicSeriesSelector): this;
}
