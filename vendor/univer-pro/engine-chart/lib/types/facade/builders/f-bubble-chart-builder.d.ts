import type { IChartBubbleMappingSpec, IChartInfo, IChartSolidSeriesPatch, IChartSolidSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for Bubble Charts.
 *
 * The data source is an observation table: each row represents one bubble. X and Y
 * must map to numeric fields. Size is an optional numeric field; label and series are
 * optional categorical fields for point labels and grouping. All mapped fields are
 * aligned by row, so their source vectors must have the same length.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Bubble)
 *   .setSource({
 *     range: 'A1:E8',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setBubbleMapping({ xIndex: 0, yIndex: 1, sizeIndex: 2, labelIndex: 3, seriesIndex: 4 })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Bubble)
 *   .setSource([['X', 'Y', 'Size'], [10, 20, 5], [18, 32, 9]])
 *   .setBubbleMapping({ xIndex: 0, yIndex: 1, sizeIndex: 2 })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Bubble)
 *   .setSource([['X', 'Y', 'Size'], [10, 20, 5], [18, 32, 9]])
 *   .setBubbleMapping({ xIndex: 0, yIndex: 1, sizeIndex: 2 })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Bubble)
 *   .setSource([['X', 'Y', 'Size'], [10, 20, 5], [18, 32, 9]])
 *   .setBubbleMapping({ xIndex: 0, yIndex: 1, sizeIndex: 2 })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FBubbleChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSolidSeriesPatch, 'selector'>, IChartSolidSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Sets the bubble mapping configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setBubbleMapping({ xIndex: 0, yIndex: 1, sizeIndex: 2 });
     * ```
     */
    setBubbleMapping(value: IChartBubbleMappingSpec): this;
    /**
     * Clears the bubble mapping configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearBubbleMapping();
     * ```
     */
    clearBubbleMapping(): this;
}
