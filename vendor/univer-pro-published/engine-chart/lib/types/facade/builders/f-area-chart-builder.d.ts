import type { AreaLineStyle, IChartInfo, IChartLineSeriesPatch, IChartSeriesStyleSpec } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for Area Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Area)
 *   .setSource('A1:D8')
 *   .setAreaLineStyle(univerAPI.Enum.ChartAreaLineStyle.Smooth)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Area)
 *   .setSource([['Month', 'East', 'West'], ['Jan', 120, 95], ['Feb', 180, 130]])
 *   .setAreaLineStyle(univerAPI.Enum.ChartAreaLineStyle.Smooth)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Area)
 *   .setSource([['Month', 'East', 'West'], ['Jan', 120, 95], ['Feb', 180, 130]])
 *   .setAreaLineStyle(univerAPI.Enum.ChartAreaLineStyle.Smooth)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Area)
 *   .setSource([['Month', 'East', 'West'], ['Jan', 120, 95], ['Feb', 180, 130]])
 *   .setAreaLineStyle(univerAPI.Enum.ChartAreaLineStyle.Smooth)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FAreaChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartLineSeriesPatch, 'selector'>, IChartSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Sets the area line style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAreaLineStyle(univerAPI.Enum.ChartAreaLineStyle.Smooth);
     * ```
     */
    setAreaLineStyle(value: AreaLineStyle): this;
    /**
     * Clears the area line style override and restores a straight line between points.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearAreaLineStyle();
     * ```
     */
    clearAreaLineStyle(): this;
}
