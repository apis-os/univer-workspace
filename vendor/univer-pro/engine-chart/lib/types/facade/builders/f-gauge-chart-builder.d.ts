import type { ChartGaugeMode, DeepNullish, IChartGaugeAnchorSpec, IChartGaugeAnglesSpec, IChartGaugeAxisLabelSpec, IChartGaugeAxisLineSpec, IChartGaugeAxisTickSpec, IChartGaugeDetailSpec, IChartGaugePointerSpec, IChartGaugeProgressSpec, IChartGaugeRangeSpec, IChartGaugeScaleSpec, IChartGaugeSplitLineSpec, IChartGaugeTicksPatch, IChartGaugeTitleSpec, IChartInfo } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent semantic builder for Google-style label/value Gauge data.
 *
 * The category field is the label and exactly one value field is selected. Each
 * finite numeric observation renders as an independently wrapped gauge; invalid
 * values are skipped without coercion. Scale defaults to 0–100. Out-of-range raw
 * values retain their source formatting for detail and tooltip text while only
 * the rendered indicator is clamped. Angles use degrees, length/offset ratios use
 * 0–1 units, and range bounds use scale-domain values. All style is chart-wide.
 * Layout is derived at render time and is never part of this builder's state.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
 *   .setSource('A1:B4')
 *   .setCategoryField(0)
 *   .setGaugeValueField(1)
 *   .setGaugeMode(univerAPI.Enum.ChartGaugeMode.Modern)
 *   .setGaugeScale({ min: 0, max: 100 })
 *   .setGaugeTicks({ majorDivisions: 10, minorDivisionsPerMajor: 5 })
 *   .setGaugeAngles({ startAngle: 225, endAngle: -45 })
 *   .setGaugeRanges([{ from: 0, to: 60, color: '#dc2626' }])
 *   .setGaugeAxisLine({ visible: true, width: 12 })
 *   .setGaugeAxisTick({ visible: true, length: 6 })
 *   .setGaugeSplitLine({ visible: true, length: 12 })
 *   .setGaugeAxisLabel({ visible: true, color: '#334155' })
 *   .setGaugePointer({ visible: true, shape: univerAPI.Enum.ChartGaugePointerShape.Needle, color: '#2563eb' })
 *   .setGaugeAnchor({ visible: true, size: 8 })
 *   .setGaugeProgress({ visible: true, width: 12 })
 *   .setGaugeTitle({ visible: true, color: '#334155' })
 *   .setGaugeDetail({ visible: true, color: '#0f172a' })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
 *   .setSource([['Metric', 'Value'], ['Completion', 72]])
 *   .setCategoryField(0)
 *   .setGaugeValueField(1)
 *   .setGaugeMode(univerAPI.Enum.ChartGaugeMode.Modern)
 *   .setGaugeScale({ min: 0, max: 100 })
 *   .setGaugeTicks({ majorDivisions: 10, minorDivisionsPerMajor: 5 })
 *   .setGaugeAngles({ startAngle: 225, endAngle: -45 })
 *   .setGaugeRanges([{ from: 0, to: 60, color: '#dc2626' }])
 *   .setGaugeAxisLine({ visible: true, width: 12 })
 *   .setGaugeAxisTick({ visible: true, length: 6 })
 *   .setGaugeSplitLine({ visible: true, length: 12 })
 *   .setGaugeAxisLabel({ visible: true, color: '#334155' })
 *   .setGaugePointer({ visible: true, shape: univerAPI.Enum.ChartGaugePointerShape.Needle, color: '#2563eb' })
 *   .setGaugeAnchor({ visible: true, size: 8 })
 *   .setGaugeProgress({ visible: true, width: 12 })
 *   .setGaugeTitle({ visible: true, color: '#334155' })
 *   .setGaugeDetail({ visible: true, color: '#0f172a' })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
 *   .setSource([['Metric', 'Value'], ['Completion', 72]])
 *   .setCategoryField(0)
 *   .setGaugeValueField(1)
 *   .setGaugeMode(univerAPI.Enum.ChartGaugeMode.Modern)
 *   .setGaugeScale({ min: 0, max: 100 })
 *   .setGaugeTicks({ majorDivisions: 10, minorDivisionsPerMajor: 5 })
 *   .setGaugeAngles({ startAngle: 225, endAngle: -45 })
 *   .setGaugeRanges([{ from: 0, to: 60, color: '#dc2626' }])
 *   .setGaugeAxisLine({ visible: true, width: 12 })
 *   .setGaugeAxisTick({ visible: true, length: 6 })
 *   .setGaugeSplitLine({ visible: true, length: 12 })
 *   .setGaugeAxisLabel({ visible: true, color: '#334155' })
 *   .setGaugePointer({ visible: true, shape: univerAPI.Enum.ChartGaugePointerShape.Needle, color: '#2563eb' })
 *   .setGaugeAnchor({ visible: true, size: 8 })
 *   .setGaugeProgress({ visible: true, width: 12 })
 *   .setGaugeTitle({ visible: true, color: '#334155' })
 *   .setGaugeDetail({ visible: true, color: '#0f172a' })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Gauge)
 *   .setSource([['Metric', 'Value'], ['Completion', 72]])
 *   .setCategoryField(0)
 *   .setGaugeValueField(1)
 *   .setGaugeMode(univerAPI.Enum.ChartGaugeMode.Modern)
 *   .setGaugeScale({ min: 0, max: 100 })
 *   .setGaugeTicks({ majorDivisions: 10, minorDivisionsPerMajor: 5 })
 *   .setGaugeAngles({ startAngle: 225, endAngle: -45 })
 *   .setGaugeRanges([{ from: 0, to: 60, color: '#dc2626' }])
 *   .setGaugeAxisLine({ visible: true, width: 12 })
 *   .setGaugeAxisTick({ visible: true, length: 6 })
 *   .setGaugeSplitLine({ visible: true, length: 12 })
 *   .setGaugeAxisLabel({ visible: true, color: '#334155' })
 *   .setGaugePointer({ visible: true, shape: univerAPI.Enum.ChartGaugePointerShape.Needle, color: '#2563eb' })
 *   .setGaugeAnchor({ visible: true, size: 8 })
 *   .setGaugeProgress({ visible: true, width: 12 })
 *   .setGaugeTitle({ visible: true, color: '#334155' })
 *   .setGaugeDetail({ visible: true, color: '#0f172a' })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FGaugeChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Selects the only value field; labels use `setCategoryField()`.
     *
     * @param index Zero-based value field index.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeValueField(1);
     * ```
     */
    setGaugeValueField(index: number): this;
    /**
     * Sets the Gauge display mode.
     *
     * @param value Gauge display mode.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeMode(univerAPI.Enum.ChartGaugeMode.Modern);
     * ```
     */
    setGaugeMode(value: ChartGaugeMode): this;
    /**
     * Resets the Gauge display mode to its default.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeMode();
     * ```
     */
    resetGaugeMode(): this;
    /**
     * Sets the Gauge minimum, maximum, and optional major-division count.
     *
     * @param value Gauge scale settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeScale({ min: 0, max: 100, splitNumber: 10 });
     * ```
     */
    setGaugeScale(value: IChartGaugeScaleSpec): this;
    /**
     * Resets the Gauge scale to 0 through 100.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeScale();
     * ```
     */
    resetGaugeScale(): this;
    /**
     * Sets regular major scale divisions and minor divisions per major interval.
     *
     * @param value Gauge tick settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeTicks({ majorDivisions: 10, minorDivisionsPerMajor: 5 });
     * ```
     */
    setGaugeTicks(value: IChartGaugeTicksPatch): this;
    /**
     * Sets the Gauge start and end angles.
     *
     * @param value Gauge angle settings in degrees.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeAngles({ startAngle: 225, endAngle: -45 });
     * ```
     */
    setGaugeAngles(value: IChartGaugeAnglesSpec): this;
    /**
     * Resets Gauge angles to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeAngles();
     * ```
     */
    resetGaugeAngles(): this;
    /**
     * Sets colored Gauge scale ranges in scale-domain units.
     *
     * @param value Gauge scale ranges.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeRanges([{ from: 0, to: 60, color: '#dc2626' }]);
     * ```
     */
    setGaugeRanges(value: readonly IChartGaugeRangeSpec[]): this;
    /**
     * Clears authored Gauge scale ranges.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeRanges();
     * ```
     */
    resetGaugeRanges(): this;
    /**
     * Sets Gauge axis-line visibility and styling.
     *
     * @param value Gauge axis-line settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeAxisLine({ visible: true, width: 12 });
     * ```
     */
    setGaugeAxisLine(value: IChartGaugeAxisLineSpec): this;
    /**
     * Resets Gauge axis-line styling to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeAxisLine();
     * ```
     */
    resetGaugeAxisLine(): this;
    /**
     * Sets Gauge minor tick visibility and styling.
     *
     * @param value Gauge minor-tick settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeAxisTick({ visible: true, length: 6 });
     * ```
     */
    setGaugeAxisTick(value: IChartGaugeAxisTickSpec): this;
    /**
     * Resets Gauge minor ticks to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeAxisTick();
     * ```
     */
    resetGaugeAxisTick(): this;
    /**
     * Sets Gauge major division-line visibility and styling.
     *
     * @param value Gauge division-line settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeSplitLine({ visible: true, length: 12 });
     * ```
     */
    setGaugeSplitLine(value: IChartGaugeSplitLineSpec): this;
    /**
     * Resets Gauge major division lines to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeSplitLine();
     * ```
     */
    resetGaugeSplitLine(): this;
    /**
     * Sets Gauge scale-label visibility, formatting, and styling.
     *
     * @param value Gauge scale-label settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeAxisLabel({ visible: true, color: '#334155' });
     * ```
     */
    setGaugeAxisLabel(value: DeepNullish<IChartGaugeAxisLabelSpec>): this;
    /**
     * Resets Gauge scale labels to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeAxisLabel();
     * ```
     */
    resetGaugeAxisLabel(): this;
    /**
     * Sets the pointer visibility, dimensions, color, and semantic shape preset.
     *
     * @param value Gauge pointer settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugePointer({
     *   visible: true,
     *   shape: univerAPI.Enum.ChartGaugePointerShape.Needle,
     *   color: '#2563eb',
     * });
     * ```
     */
    setGaugePointer(value: IChartGaugePointerSpec): this;
    /**
     * Resets the Gauge pointer to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugePointer();
     * ```
     */
    resetGaugePointer(): this;
    /**
     * Sets the center anchor rendered beneath the Gauge pointer.
     *
     * @param value Gauge anchor settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeAnchor({ visible: true, size: 8 });
     * ```
     */
    setGaugeAnchor(value: IChartGaugeAnchorSpec): this;
    /**
     * Resets the Gauge center anchor to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeAnchor();
     * ```
     */
    resetGaugeAnchor(): this;
    /**
     * Sets Gauge progress-arc visibility and styling.
     *
     * @param value Gauge progress-arc settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeProgress({ visible: true, width: 12 });
     * ```
     */
    setGaugeProgress(value: IChartGaugeProgressSpec): this;
    /**
     * Resets Gauge progress-arc settings to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeProgress();
     * ```
     */
    resetGaugeProgress(): this;
    /**
     * Sets the per-observation Gauge title styling and offset.
     *
     * @param value Gauge title settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeTitle({ visible: true, color: '#334155' });
     * ```
     */
    setGaugeTitle(value: IChartGaugeTitleSpec): this;
    /**
     * Resets the Gauge title to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeTitle();
     * ```
     */
    resetGaugeTitle(): this;
    /**
     * Sets the Gauge value-detail formatter, styling, and offset.
     *
     * @param value Gauge detail settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setGaugeDetail({ visible: true, color: '#0f172a' });
     * ```
     */
    setGaugeDetail(value: DeepNullish<IChartGaugeDetailSpec>): this;
    /**
     * Resets the Gauge value detail to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetGaugeDetail();
     * ```
     */
    resetGaugeDetail(): this;
}
