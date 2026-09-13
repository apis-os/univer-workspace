import type { IChartInfo, WordCloudShapeEnum } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent, type-specific Builder for Word Cloud Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.WordCloud)
 *   .setSource('A1:B8')
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setShape(univerAPI.Enum.ChartWordCloudShapeEnum.Circle)
 *   .setRepeat(true)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.WordCloud)
 *   .setSource([['Word', 'Frequency'], ['Univer', 42], ['Chart', 28], ['Data', 18]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setShape(univerAPI.Enum.ChartWordCloudShapeEnum.Circle)
 *   .setRepeat(true)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.WordCloud)
 *   .setSource([['Word', 'Frequency'], ['Univer', 42], ['Chart', 28], ['Data', 18]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setShape(univerAPI.Enum.ChartWordCloudShapeEnum.Circle)
 *   .setRepeat(true)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.WordCloud)
 *   .setSource([['Word', 'Frequency'], ['Univer', 42], ['Chart', 28], ['Data', 18]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setShape(univerAPI.Enum.ChartWordCloudShapeEnum.Circle)
 *   .setRepeat(true)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FWordCloudChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Sets the shape configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setShape(univerAPI.Enum.ChartWordCloudShapeEnum.Cloud);
     * ```
     */
    setShape(value: WordCloudShapeEnum): this;
    /**
     * Restores the word-cloud shape to `Cloud` and returns this builder for chaining.
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
     * Sets the mask image configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param resourceId The host resource ID.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setMaskImage('resource-id');
     * ```
     */
    setMaskImage(resourceId: string): this;
    /**
     * Clears the mask image configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearMaskImage();
     * ```
     */
    clearMaskImage(): this;
    /**
     * Sets the repeat configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setRepeat(true);
     * ```
     */
    setRepeat(value: boolean): this;
    /**
     * Restores the default of not repeating words and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetRepeat();
     * ```
     */
    resetRepeat(): this;
}
