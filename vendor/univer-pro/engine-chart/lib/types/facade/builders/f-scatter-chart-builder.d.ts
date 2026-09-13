import type { IChartInfo, IChartSolidSeriesPatch, IChartSolidSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for Scatter Charts.
 *
 * Scatter uses the ordinary Cartesian category/value mapping. Select the optional X-axis
 * field with `setCategoryField()` and every Y/value series with `setValueFields()`.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Scatter)
 *   .setSource({
 *     range: 'A1:C8',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Scatter)
 *   .setSource([['X', 'Y'], [10, 20], [18, 32], [24, 28]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Scatter)
 *   .setSource([['X', 'Y'], [10, 20], [18, 32], [24, 28]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Scatter)
 *   .setSource([['X', 'Y'], [10, 20], [18, 32], [24, 28]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FScatterChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSolidSeriesPatch, 'selector'>, IChartSolidSeriesStyleSpec, TSource, TDataSource, TInfo> {
}
