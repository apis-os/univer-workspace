import type { IChartInfo, IChartSolidSeriesPatch, IChartSolidSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Boxplot keeps its existing automatic preset but does not expose explicit gradients.
 *
 * Each selected numeric field is one distribution and must contain its raw samples.
 * The renderer calculates the five-number summary; do not supply precomputed
 * Min/Q1/Median/Q3/Max rows. Field headers become distribution labels.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * fWorksheet.getRange('A1:C6').setValues([
 *   ['Group A', 'Group B', 'Group C'],
 *   [12, 18, 9],
 *   [15, 20, 13],
 *   [19, 24, 16],
 *   [22, 28, 21],
 *   [25, 31, 24],
 * ]);
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Boxplot)
 *   .setSource({
 *     range: 'A1:C6',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setValueFields([0, 1, 2])
 *   .setTitle('Distribution')
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Boxplot)
 *   .setSource([
 *     ['Group A', 'Group B'],
 *     [12, 18],
 *     [15, 20],
 *     [19, 24],
 *     [22, 28]
 *   ])
 *   .setValueFields([0, 1])
 *   .setTitle('Distribution')
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Boxplot)
 *   .setSource([
 *     ['Group A', 'Group B'],
 *     [12, 18],
 *     [15, 20],
 *     [19, 24],
 *     [22, 28]
 *   ])
 *   .setValueFields([0, 1])
 *   .setTitle('Distribution')
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Boxplot)
 *   .setSource([
 *     ['Group A', 'Group B'],
 *     [12, 18],
 *     [15, 20],
 *     [19, 24],
 *     [22, 28]
 *   ])
 *   .setValueFields([0, 1])
 *   .setTitle('Distribution')
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FBoxplotChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSolidSeriesPatch, 'selector'>, IChartSolidSeriesStyleSpec, TSource, TDataSource, TInfo> {
}
