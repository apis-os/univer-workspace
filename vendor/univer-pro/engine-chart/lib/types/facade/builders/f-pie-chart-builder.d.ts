import type { DeepNullish, IChartInfo, IChartPieCompositeSpec, IChartPieLabelSpec, IChartSliceStyleSpec } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent, type-specific Builder for Pie and Donut Charts.
 *
 * For a conventional category/value source, select the slice-label field with
 * `setCategoryField()` and select its numeric value field with `setValueFields([index])`.
 * Field indexes are zero-based in the normalized data source. A value field is required;
 * without an explicit category field, slices fall back to generated ordinal labels.
 * Explicit mapping is recommended for ambiguous sources, especially Sheet ranges containing
 * only numeric values, because automatic inference cannot determine the intended label column.
 *
 * A regular Pie uses the first selected value series. This example intentionally selects one
 * value field so each source row becomes one labeled slice. Negative values render by absolute
 * magnitude and retain a negative label and tooltip.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Donut)
 *   .setSource('A1:B8')
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setDoughnutHole(0.4)
 *   .setSliceStyle(0, { color: '#2563eb', fillOpacity: 0.8 })
 *   .setExplosion(0.01)
 *   .setSliceBorderColor('#ffffff')
 *   .setPaddingAngleEnabled(true)
 *   .setLabelLineVisible(true)
 *   .setValueScale(1)
 *   .setPieLabel({ visible: true, position: univerAPI.Enum.ChartPieLabelPosition.Outside })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Donut)
 *   .setSource([['Channel', 'Sales'], ['Online', 180], ['Retail', 120]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setDoughnutHole(0.4)
 *   .setSliceStyle(0, { color: '#2563eb', fillOpacity: 0.8 })
 *   .setExplosion(0.01)
 *   .setSliceBorderColor('#ffffff')
 *   .setPaddingAngleEnabled(true)
 *   .setLabelLineVisible(true)
 *   .setValueScale(1)
 *   .setPieLabel({ visible: true, position: univerAPI.Enum.ChartPieLabelPosition.Outside })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Donut)
 *   .setSource([['Channel', 'Sales'], ['Online', 180], ['Retail', 120]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setDoughnutHole(0.4)
 *   .setSliceStyle(0, { color: '#2563eb', fillOpacity: 0.8 })
 *   .setExplosion(0.01)
 *   .setSliceBorderColor('#ffffff')
 *   .setPaddingAngleEnabled(true)
 *   .setLabelLineVisible(true)
 *   .setValueScale(1)
 *   .setPieLabel({ visible: true, position: univerAPI.Enum.ChartPieLabelPosition.Outside })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Donut)
 *   .setSource([['Channel', 'Sales'], ['Online', 180], ['Retail', 120]])
 *   .setCategoryField(0)
 *   .setValueFields([1])
 *   .setDoughnutHole(0.4)
 *   .setSliceStyle(0, { color: '#2563eb', fillOpacity: 0.8 })
 *   .setExplosion(0.01)
 *   .setSliceBorderColor('#ffffff')
 *   .setPaddingAngleEnabled(true)
 *   .setLabelLineVisible(true)
 *   .setValueScale(1)
 *   .setPieLabel({ visible: true, position: univerAPI.Enum.ChartPieLabelPosition.Outside })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FPieChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Sets secondary-plot and composite layout options for a Pie Chart.
     *
     * @param value The composite Pie specification.
     * @returns This Builder for chaining.
     * @example
     * ```ts
     * builder.setPieComposite({
     *   enabled: true,
     *   secondaryPlot: { type: univerAPI.Enum.ChartPieSecondaryPlotType.Pie },
     * });
     * ```
     */
    setPieComposite(value: DeepNullish<IChartPieCompositeSpec>): this;
    /**
     * Clears composite Pie layout options.
     *
     * @returns This Builder for chaining.
     * @example
     * ```ts
     * builder.clearPieComposite();
     * ```
     */
    clearPieComposite(): this;
    /**
     * Sets the style for the materialized slice at `index`.
     *
     * This method executes synchronously.
     *
     * @param index The zero-based slice index.
     * @param value The slice style patch.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * import { chartLinearGradient } from '@univerjs-pro/engine-chart';
     *
     * const color = chartLinearGradient({
     *     start: { x: 0, y: 0 },
     *     end: { x: 1, y: 1 },
     *     stops: [
     *         { offset: 0, color: '#fff1b8' },
     *         { offset: 1, color: '#faad14' },
     *     ],
     * });
     * builder.setSliceStyle(0, { color });
     * ```
     */
    setSliceStyle(index: number, value: IChartSliceStyleSpec): this;
    /**
     * Clears the authored style for the materialized slice at `index`.
     *
     * This method executes synchronously.
     *
     * @param index The zero-based slice index.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearSliceStyle(0);
     * ```
     */
    clearSliceStyle(index: number): this;
    /**
     * Sets the doughnut hole configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setDoughnutHole(0.6);
     * ```
     */
    setDoughnutHole(value: number): this;
    /**
     * Clears the doughnut hole override. Doughnut charts fall back to a 50% inner radius; pie charts remain solid.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearDoughnutHole();
     * ```
     */
    clearDoughnutHole(): this;
    /**
     * Sets the distance that every slice is offset from the Pie center.
     *
     * The value is a ratio of the Chart's shorter side, not a pixel distance. For example,
     * `0.01` produces an offset of about 2.2 px in a 480 px square Chart. Large values can
     * move every slice outside the visible plot area.
     *
     * @param value Non-negative explosion ratio.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setExplosion(0.01);
     * ```
     */
    setExplosion(value: number): this;
    /**
     * Restores the default of no slice explosion and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetExplosion();
     * ```
     */
    resetExplosion(): this;
    /**
     * Sets the slice border color configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setSliceBorderColor('#ffffff');
     * ```
     */
    setSliceBorderColor(value: string): this;
    /**
     * Clears the slice border override so the renderer uses its theme-aware white base color.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearSliceBorderColor();
     * ```
     */
    clearSliceBorderColor(): this;
    /**
     * Sets the padding angle enabled configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setPaddingAngleEnabled(true);
     * ```
     */
    setPaddingAngleEnabled(value: boolean): this;
    /**
     * Restores the default of rendering slices without padding angles.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetPaddingAngleEnabled();
     * ```
     */
    resetPaddingAngleEnabled(): this;
    /**
     * Sets the half pie configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setHalfPie(true);
     * ```
     */
    setHalfPie(value: boolean): this;
    /**
     * Restores the default full-circle pie layout.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetHalfPie();
     * ```
     */
    resetHalfPie(): this;
    /**
     * Sets the rose pie configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setRosePie(true);
     * ```
     */
    setRosePie(value: boolean): this;
    /**
     * Restores the default non-rose pie layout.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetRosePie();
     * ```
     */
    resetRosePie(): this;
    /**
     * Sets the label line visible configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setLabelLineVisible(true);
     * ```
     */
    setLabelLineVisible(value: boolean): this;
    /**
     * Removes the label-line visibility override so the renderer determines visibility from the label layout.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetLabelLineVisible();
     * ```
     */
    resetLabelLineVisible(): this;
    /**
     * Sets the value scale configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setValueScale(1);
     * ```
     */
    setValueScale(value: number): this;
    /**
     * Restores the value scale to 1 and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetValueScale();
     * ```
     */
    resetValueScale(): this;
    /**
     * Sets the pie label configuration and returns this builder for chaining.
     *
     * Omitted fields keep their current values. With no explicit label overrides, labels are visible
     * outside the pie and contain category, value, and percentage using 12 px active-theme text.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setPieLabel({ visible: true, position: univerAPI.Enum.ChartPieLabelPosition.Outside });
     * ```
     */
    setPieLabel(value: DeepNullish<IChartPieLabelSpec>): this;
    /**
     * Clears the pie label override. Labels fall back to visible outside labels containing category,
     * value, and percentage with the active chart font and theme colors.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearPieLabel();
     * ```
     */
    clearPieLabel(): this;
}
