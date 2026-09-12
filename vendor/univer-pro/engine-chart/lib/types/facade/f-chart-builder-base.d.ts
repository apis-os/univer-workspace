import type { ChartAggregationTarget, ChartAppearanceTarget, ChartBuilder, ChartDescription, ChartLegendSpec, ChartPendingConfig, ChartSubtitleSpec, ChartTitleSpec, IChartAggregationSpec, IChartAppearanceSpec, IChartInfo, InvalidValueType } from '@univerjs-pro/engine-chart';
import type { DeepReadonly } from '@univerjs/core';
import type { IChartBuilderFacadeContext } from './internal/chart-builder-facade-context';
/**
 * Fluent base Builder for detached Chart information.
 *
 * Builder methods only modify the detached draft. Call {@link build} to create an
 * insertable `IChartInfo`; use a live `FChart` facade to update an inserted Chart.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * fWorksheet.getRange('A1:C5').setValues([
 *   ['Quarter', 'Revenue', 'Cost'],
 *   ['Q1', 120, 80],
 *   ['Q2', 180, 110],
 *   ['Q3', 160, 100],
 *   ['Q4', 220, 130],
 * ]);
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Column)
 *   .setSource({
 *     range: 'A1:C5',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setTitle('Quarterly performance')
 *   .setSubtitle('FY 2026')
 *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
 *   .setPalette(['#1677ff', '#52c41a'])
 *   .setAppearance({
 *     background: { color: 'transparent' },
 *     border: { color: '#d9d9d9', width: 1 },
 *   })
 *   .setAutoGradientFill(true)
 *   .setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Zero)
 *   .setAggregation({ aggregate: true })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Column)
 *   .setSource([
 *     ['Quarter', 'Revenue', 'Cost'],
 *     ['Q1', 120, 80],
 *     ['Q2', 180, 110],
 *     ['Q3', 160, 100],
 *     ['Q4', 220, 130],
 *   ])
 *   .setFloating()
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setTitle('Quarterly performance')
 *   .setSubtitle('FY 2026')
 *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
 *   .setPalette(['#1677ff', '#52c41a'])
 *   .setAppearance({
 *     background: { color: 'transparent' },
 *     border: { color: '#d9d9d9', width: 1 },
 *   })
 *   .setAutoGradientFill(true)
 *   .setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Zero)
 *   .setAggregation({ aggregate: true })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Column)
 *   .setSource([
 *     ['Quarter', 'Revenue', 'Cost'],
 *     ['Q1', 120, 80],
 *     ['Q2', 180, 110],
 *     ['Q3', 160, 100],
 *     ['Q4', 220, 130],
 *   ])
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setTitle('Quarterly performance')
 *   .setSubtitle('FY 2026')
 *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
 *   .setPalette(['#1677ff', '#52c41a'])
 *   .setAppearance({
 *     background: { color: 'transparent' },
 *     border: { color: '#d9d9d9', width: 1 },
 *   })
 *   .setAutoGradientFill(true)
 *   .setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Zero)
 *   .setAggregation({ aggregate: true })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Column)
 *   .setSource([
 *     ['Quarter', 'Revenue', 'Cost'],
 *     ['Q1', 120, 80],
 *     ['Q2', 180, 110],
 *     ['Q3', 160, 100],
 *     ['Q4', 220, 130],
 *   ])
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setCategoryField(0)
 *   .setValueFields([1, 2])
 *   .setTitle('Quarterly performance')
 *   .setSubtitle('FY 2026')
 *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
 *   .setPalette(['#1677ff', '#52c41a'])
 *   .setAppearance({
 *     background: { color: 'transparent' },
 *     border: { color: '#d9d9d9', width: 1 },
 *   })
 *   .setAutoGradientFill(true)
 *   .setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Zero)
 *   .setAggregation({ aggregate: true })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FChartBuilderBase<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>, TBuilder extends ChartBuilder = ChartBuilder, TDescription extends ChartDescription = ChartDescription> {
    protected readonly _context: IChartBuilderFacadeContext<TBuilder, TSource, TDataSource, TInfo>;
    protected readonly _builder: TBuilder;
    protected readonly _info: Partial<TInfo>;
    constructor(_context: IChartBuilderFacadeContext<TBuilder, TSource, TDataSource, TInfo>);
    /**
     * Sets the host-specific descriptor stored in the detached Chart information.
     * The Builder deep-clones this value; it does not retain or create a runtime DataSource.
     * @param {TSource} source The host descriptor, such as a Sheet range or a two-dimensional value array.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * builder.setSource('A1:D8');
     * ```
     */
    setSource(source: TSource): this;
    /**
     * Sets an absolute position in the target host.
     * @param {number} x The horizontal host coordinate.
     * @param {number} y The vertical host coordinate.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * builder.setAbsolutePosition(120, 80);
     * ```
     */
    setAbsolutePosition(x: number, y: number): this;
    /**
     * Sets the Chart size in the target host.
     * @param {number} width The width in host coordinates.
     * @param {number} height The height in host coordinates.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * builder.setSize(640, 360);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Builds a detached Chart information snapshot without mutating a host.
     * @returns {TInfo} A deep-cloned, insertable Chart information object.
     * @throws {Error} If a new Chart Builder has no data source.
     * @example
     * ```ts
     * const chartInfo = builder.build();
     * ```
     */
    build(): TInfo;
    protected _record(patch: ChartPendingConfig): this;
    protected _describe(): DeepReadonly<TDescription>;
    /**
     * Sets the title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setTitle({ text: 'Quarterly sales' });
     * ```
     */
    setTitle(value: ChartTitleSpec): this;
    /**
     * Clears the title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearTitle();
     * ```
     */
    clearTitle(): this;
    /**
     * Sets the subtitle configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setSubtitle({ text: 'FY 2026' });
     * ```
     */
    setSubtitle(value: ChartSubtitleSpec): this;
    /**
     * Clears the subtitle configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearSubtitle();
     * ```
     */
    clearSubtitle(): this;
    /**
     * Sets the legend configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setLegend(true);
     * ```
     */
    setLegend(value: ChartLegendSpec): this;
    /**
     * Clears the legend configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearLegend();
     * ```
     */
    clearLegend(): this;
    /**
     * Sets a built-in or custom registered theme and returns this builder for chaining.
     *
     * A non-empty chart palette takes precedence over the theme's series colors. This method does
     * not clear that palette; call `clearPalette()` explicitly to use the selected theme colors.
     * Use `univerAPI.Enum.ChartThemeName` for built-in themes. Custom names must first be
     * registered through `univerAPI.registerTheme()`.
     *
     * This method executes synchronously.
     *
     * @param name A built-in Chart theme name or the stable name of a custom registered theme.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource('A1:B8')
     *   .setTheme(univerAPI.Enum.ChartThemeName.UniverGradient1)
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    setTheme(name: string): this;
    /**
     * Clears the theme configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearTheme();
     * ```
     */
    clearTheme(): this;
    /**
     * Sets absolute series palette colors and returns this builder for chaining.
     *
     * The values are copied, persisted with the chart, and used unchanged in light and dark mode.
     * A non-empty palette takes precedence over the selected theme's series colors without clearing
     * the selected theme. Call `clearPalette()` to return series-color control to the theme.
     * An empty array has the same effect as `clearPalette()`.
     *
     * @param colors Ordered CSS colors that override the selected theme's series colors.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setPalette(['#1677ff', '#52c41a']);
     * ```
     */
    setPalette(colors: readonly string[]): this;
    /**
     * Clears the chart-owned palette and returns to the selected theme colors.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * const chart = fWorksheet.getCharts()[0];
     * const info = chart.toBuilder().clearPalette().build();
     * await chart.update(info);
     * ```
     */
    clearPalette(): this;
    /**
     * Sets the appearance configuration and returns this builder for chaining.
     *
     * Supported by Sheet, Document, Slide, and Board chart builders. An explicit
     * `'transparent'` background remains transparent, and border width `0` hides
     * the persisted host border without removing selection or transformer chrome.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAppearance({
     *     background: { color: 'transparent' },
     *     border: { width: 0 },
     * });
     * ```
     */
    setAppearance(value: IChartAppearanceSpec): this;
    /**
     * Clears the appearance configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearAppearance(univerAPI.Enum.ChartAppearanceTarget.Background);
     * ```
     */
    clearAppearance(target?: ChartAppearanceTarget): this;
    /**
     * Enables or disables the automatic gradient preset for supported chart marks.
     *
     * Explicit gradient colors configured on a series or slice take precedence over this preset.
     * This method executes synchronously.
     *
     * @param value Whether to apply the chart type's automatic gradient preset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAutoGradientFill(true);
     * ```
     */
    setAutoGradientFill(value: boolean): this;
    /**
     * Clears the automatic-gradient override and restores the chart type's default behavior.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAutoGradientFill(true);
     * builder.resetAutoGradientFill();
     * ```
     */
    resetAutoGradientFill(): this;
    /**
     * Sets the invalid value strategy configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Break);
     * ```
     */
    setInvalidValueStrategy(value: InvalidValueType): this;
    /**
     * Restores the invalid value strategy to `Break` and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetInvalidValueStrategy();
     * ```
     */
    resetInvalidValueStrategy(): this;
    /**
     * Sets the category field configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param index The zero-based field or series index.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setCategoryField(0);
     * ```
     */
    setCategoryField(index: number): this;
    /**
     * Sets the ordered category fields used by a multi-level category axis.
     *
     * This method executes synchronously.
     *
     * @param indexes The zero-based field indexes in root-to-leaf order.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setCategoryFields([0, 1, 2]);
     * ```
     */
    setCategoryFields(indexes: readonly number[]): this;
    /**
     * Clears the ordered category field configuration.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearCategoryFields();
     * ```
     */
    clearCategoryFields(): this;
    /**
     * Enables or disables the multi-level category axis for the selected category fields.
     *
     * This method executes synchronously and does not replace the selected category fields.
     *
     * @param enabled Whether to render the selected category fields as one multi-level axis.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setMultiLevelCategoryAxis(true);
     * ```
     */
    setMultiLevelCategoryAxis(enabled: boolean): this;
    /**
     * Clears the category field configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearCategoryField();
     * ```
     */
    clearCategoryField(): this;
    /**
     * Sets the value fields configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param indexes The zero-based field indexes.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setValueFields([1, 2]);
     * ```
     */
    setValueFields(indexes: readonly number[]): this;
    /**
     * Clears the value fields configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearValueFields();
     * ```
     */
    clearValueFields(): this;
    /**
     * Sets the aggregation configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setAggregation({
     *     aggregate: true,
     *     topN: { count: 10, sourceIndex: 2 },
     * });
     * ```
     */
    setAggregation(value: IChartAggregationSpec): this;
    /**
     * Clears the aggregation configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearAggregation(univerAPI.Enum.ChartAggregationTarget.TopN);
     * ```
     */
    clearAggregation(target?: ChartAggregationTarget): this;
}
