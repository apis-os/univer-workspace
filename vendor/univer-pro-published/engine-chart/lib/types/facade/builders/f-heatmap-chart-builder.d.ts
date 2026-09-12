import type { ChartVisualMapType, IChartHeatmapLabelSpec, IChartInfo } from '@univerjs-pro/engine-chart';
import { FAxisChartBuilder } from '../f-axis-chart-builder';
/**
 * Fluent, type-specific Builder for Heatmap Charts.
 *
 * The data source is a matrix-shaped table expressed as one category field plus one or
 * more numeric value fields. Category values become Y-axis rows, value-field headers
 * become X-axis columns, and each aligned numeric observation becomes one cell.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Heatmap)
 *   .setSource({
 *     range: 'A1:D8',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setCategoryField(0)
 *   .setValueFields([1, 2, 3])
 *   .setVisualMapType(univerAPI.Enum.ChartVisualMapType.Continuous)
 *   .setValueRange(0, 100)
 *   .setCellLabel({ visible: true, position: univerAPI.Enum.ChartSeriesLabelPosition.Inside })
 *   .setValueUnit('tickets')
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Heatmap)
 *   .setSource([['Day', 'Morning', 'Evening'], ['Mon', 24, 62], ['Tue', 38, 81]])
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setVisualMapType(univerAPI.Enum.ChartVisualMapType.Continuous)
 *   .setValueRange(0, 100)
 *   .setCellLabel({ visible: true, position: univerAPI.Enum.ChartSeriesLabelPosition.Inside })
 *   .setValueUnit('tickets')
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Heatmap)
 *   .setSource([['Day', 'Morning', 'Evening'], ['Mon', 24, 62], ['Tue', 38, 81]])
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setVisualMapType(univerAPI.Enum.ChartVisualMapType.Continuous)
 *   .setValueRange(0, 100)
 *   .setCellLabel({ visible: true, position: univerAPI.Enum.ChartSeriesLabelPosition.Inside })
 *   .setValueUnit('tickets')
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Heatmap)
 *   .setSource([['Day', 'Morning', 'Evening'], ['Mon', 24, 62], ['Tue', 38, 81]])
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setVisualMapType(univerAPI.Enum.ChartVisualMapType.Continuous)
 *   .setValueRange(0, 100)
 *   .setCellLabel({ visible: true, position: univerAPI.Enum.ChartSeriesLabelPosition.Inside })
 *   .setValueUnit('tickets')
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FHeatmapChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FAxisChartBuilder<TSource, TDataSource, TInfo> {
    /**
     * Sets the visual map type configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setVisualMapType(univerAPI.Enum.ChartVisualMapType.Continuous);
     * ```
     */
    setVisualMapType(value: ChartVisualMapType): this;
    /**
     * Restores the visual map type to `Continuous` and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetVisualMapType();
     * ```
     */
    resetVisualMapType(): this;
    /**
     * Sets the value range configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param min The minimum value.
     * @param max The maximum value.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setValueRange(0, 100);
     * ```
     */
    setValueRange(min: number, max: number): this;
    /**
     * Clears the value range configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearValueRange();
     * ```
     */
    clearValueRange(): this;
    /**
     * Sets the value label rendered inside each Heatmap cell.
     *
     * With `{ visible: true }`, omitted style fields default to the cell value, an inside position,
     * 12 px text, the chart font (or Arial), and the active theme's mark-text color.
     *
     * @param value Cell-label visibility and typography.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder
     *   .setPalette(['#eff6ff', '#1d4ed8'])
     *   .setValueRange(0, 80)
     *   .setValueUnit('tickets')
     *   .setCellLabel({ visible: true, position: univerAPI.Enum.ChartSeriesLabelPosition.Inside });
     * ```
     */
    setCellLabel(value: IChartHeatmapLabelSpec): this;
    /**
     * Clears the explicit Heatmap cell-label style. Heatmap cells render without labels until
     * labels are enabled again with `setCellLabel({ visible: true })`.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearCellLabel();
     * ```
     */
    clearCellLabel(): this;
    /**
     * Sets the unit appended to the Heatmap visual-map boundary labels.
     *
     * @param value Unit text such as `tickets`.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setValueUnit('tickets');
     * ```
     */
    setValueUnit(value: string): this;
    /**
     * Clears the explicit Heatmap value unit.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearValueUnit();
     * ```
     */
    clearValueUnit(): this;
}
