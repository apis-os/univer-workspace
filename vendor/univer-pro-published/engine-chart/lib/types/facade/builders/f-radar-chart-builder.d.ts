import type { IChartInfo, RadarShape } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent, type-specific Builder for Radar Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Radar)
 *   .setSource('A1:D8')
 *   .setCategoryField(0)
 *   .setValueFields([1, 2, 3])
 *   .setShape(univerAPI.Enum.ChartRadarShape.Circle)
 *   .setFill(true)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Radar)
 *   .setSource([['Metric', 'Product A', 'Product B'], ['Speed', 80, 72], ['Quality', 90, 84]])
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setShape(univerAPI.Enum.ChartRadarShape.Circle)
 *   .setFill(true)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Radar)
 *   .setSource([['Metric', 'Product A', 'Product B'], ['Speed', 80, 72], ['Quality', 90, 84]])
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setShape(univerAPI.Enum.ChartRadarShape.Circle)
 *   .setFill(true)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Radar)
 *   .setSource([['Metric', 'Product A', 'Product B'], ['Speed', 80, 72], ['Quality', 90, 84]])
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setShape(univerAPI.Enum.ChartRadarShape.Circle)
 *   .setFill(true)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FRadarChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Sets the shape configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setShape(univerAPI.Enum.ChartRadarShape.Polygon);
     * ```
     */
    setShape(value: RadarShape): this;
    /**
     * Restores the radar grid shape to `Polygon` and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetShape();
     * ```
     */
    resetShape(): this;
    /**
     * Sets the fill configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setFill(true);
     * ```
     */
    setFill(value: boolean): this;
    /**
     * Restores the default of drawing outlines without area fill and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetFill();
     * ```
     */
    resetFill(): this;
}
