import type { IChartInfo, IChartLineSeriesPatch, IChartSeriesBorderSpec, IChartSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for Line Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource('A1:D8')
 *   .setLineStyle({ width: 2 })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource([['Month', 'Sales'], ['Jan', 120], ['Feb', 180]])
 *   .setLineStyle({ width: 2 })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource([['Month', 'Sales'], ['Jan', 120], ['Feb', 180]])
 *   .setLineStyle({ width: 2 })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource([['Month', 'Sales'], ['Jan', 120], ['Feb', 180]])
 *   .setLineStyle({ width: 2 })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FLineChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartLineSeriesPatch, 'selector'>, IChartSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Sets the line style configuration and returns this builder for chaining.
     *
     * Omitted fields keep their current values. Without explicit overrides, lines use a 2 px solid
     * stroke at full opacity in their active theme color.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setLineStyle({ width: 2, color: '#1677ff' });
     * ```
     */
    setLineStyle(value: IChartSeriesBorderSpec): this;
    /**
     * Clears the line style override so the line uses a 2 px solid stroke in its active theme color.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearLineStyle();
     * ```
     */
    clearLineStyle(): this;
}
