import type { IChartInfo } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent, type-specific Builder for Funnel Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Funnel)
 *   .setSource('A1:B8')
 *   .setGap(4)
 *   .setUseAbsoluteValue(true)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Funnel)
 *   .setSource([['Stage', 'Users'], ['Visited', 1000], ['Signed up', 420], ['Purchased', 160]])
 *   .setGap(4)
 *   .setUseAbsoluteValue(true)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Funnel)
 *   .setSource([['Stage', 'Users'], ['Visited', 1000], ['Signed up', 420], ['Purchased', 160]])
 *   .setGap(4)
 *   .setUseAbsoluteValue(true)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Funnel)
 *   .setSource([['Stage', 'Users'], ['Visited', 1000], ['Signed up', 420], ['Purchased', 160]])
 *   .setGap(4)
 *   .setUseAbsoluteValue(true)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FFunnelChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Sets the gap configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGap(8);
     * ```
     */
    setGap(value: number): this;
    /**
     * Restores the gap to 2 px and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGap();
     * ```
     */
    resetGap(): this;
    /**
     * Sets the use absolute value configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setUseAbsoluteValue(true);
     * ```
     */
    setUseAbsoluteValue(value: boolean): this;
    /**
     * Restores the default of preserving signed values and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetUseAbsoluteValue();
     * ```
     */
    resetUseAbsoluteValue(): this;
}
