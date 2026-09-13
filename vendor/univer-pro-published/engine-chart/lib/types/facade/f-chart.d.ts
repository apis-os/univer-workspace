import type { ChartAggregationTarget, ChartAppearanceTarget, ChartLegendSpec, ChartSubtitleSpec, ChartTitleSpec, ChartTypeString, IChartAggregationSpec, IChartAppearanceSpec, IChartDescription, IChartInfo, IChartLiveAdapter, InvalidValueType } from '@univerjs-pro/engine-chart';
import type { DeepReadonly, Injector } from '@univerjs/core';
import type { FChartInfoBuilder } from './create-chart-builder';
import { FBase } from '@univerjs/core/facade';
/**
 * Base facade for a live Chart that has already been inserted into a host.
 *
 * Use host APIs such as `FWorksheet.newChart()` to build detached Chart information
 * and `insertChart()` to obtain a host-specific subclass of this facade.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * fWorksheet.getRange('A1:B4').setValues([
 *   ['Month', 'Sales'],
 *   ['Jan', 120],
 *   ['Feb', 180],
 *   ['Mar', 160],
 * ]);
 * fWorksheet.getRange('D1:E4').setValues([
 *   ['Month', 'Sales'],
 *   ['Apr', 200],
 *   ['May', 240],
 *   ['Jun', 220],
 * ]);
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource('A1:B4')
 *   .setPosition('G2')
 *   .setSize(640, 360)
 *   .setLineStyle({ width: 2 })
 *   .build();
 * const fChart = await fWorksheet.insertChart(chartInfo);
 *
 * console.log(fChart.getId(), fChart.getInfo());
 * fChart
 *   .setTitle('Monthly sales')
 *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
 *   .setPosition('H3')
 *   .setSize(720, 400);
 * await fChart.setDataSource('D1:E4');
 *
 * const updatedInfo = fChart
 *   .toBuilder()
 *   .setSubtitle('Second quarter')
 *   .setPalette(['#1677ff'])
 *   .build();
 * await fChart.update(updatedInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource([
 *     ['Month', 'Sales'],
 *     ['Jan', 120],
 *     ['Feb', 180],
 *     ['Mar', 160],
 *   ])
 *   .setFloating()
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setLineStyle({ width: 2 })
 *   .build();
 * const fChart = await fDocument.insertChart(chartInfo);
 *
 * console.log(fChart.getId(), fChart.getInfo());
 * fChart
 *   .setTitle('Monthly sales')
 *   .setAppearance({ background: { color: 'transparent' } })
 *   .setAbsolutePosition(160, 100)
 *   .setSize(720, 400);
 * await fChart.setDataSource([
 *   ['Month', 'Sales'],
 *   ['Apr', 200],
 *   ['May', 240],
 *   ['Jun', 220],
 * ]);
 *
 * const updatedInfo = fChart
 *   .toBuilder()
 *   .setSubtitle('Second quarter')
 *   .setPalette(['#1677ff'])
 *   .build();
 * await fChart.update(updatedInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource([
 *     ['Month', 'Sales'],
 *     ['Jan', 120],
 *     ['Feb', 180],
 *     ['Mar', 160],
 *   ])
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setLineStyle({ width: 2 })
 *   .build();
 * const fChart = await fSlide.insertChart(chartInfo);
 *
 * console.log(fChart.getId(), fChart.getInfo());
 * fChart
 *   .setTitle('Monthly sales')
 *   .setLegend({ position: univerAPI.Enum.ChartLegendPositionEnum.Bottom })
 *   .setAbsolutePosition(160, 100)
 *   .setSize(720, 400);
 * await fChart.setDataSource([
 *   ['Month', 'Sales'],
 *   ['Apr', 200],
 *   ['May', 240],
 *   ['Jun', 220],
 * ]);
 *
 * const updatedInfo = fChart
 *   .toBuilder(univerAPI.Enum.ChartTypeString.Area)
 *   .setSubtitle('Second quarter')
 *   .setPalette(['#1677ff'])
 *   .build();
 * await fChart.update(updatedInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource([
 *     ['Month', 'Sales'],
 *     ['Jan', 120],
 *     ['Feb', 180],
 *     ['Mar', 160],
 *   ])
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setLineStyle({ width: 2 })
 *   .build();
 * const fChart = await fBoard.insertChart(chartInfo);
 *
 * console.log(fChart.getId(), fChart.getInfo());
 * fChart
 *   .setTitle('Monthly sales')
 *   .setAutoGradientFill(true)
 *   .setAbsolutePosition(160, 100)
 *   .setSize(720, 400);
 * await fChart.setDataSource([
 *   ['Month', 'Sales'],
 *   ['Apr', 200],
 *   ['May', 240],
 *   ['Jun', 220],
 * ]);
 *
 * const updatedInfo = fChart
 *   .toBuilder()
 *   .setSubtitle('Second quarter')
 *   .setPalette(['#1677ff'])
 *   .build();
 * await fChart.update(updatedInfo);
 * ```
 *
 * @hideconstructor
 */
export declare class FChart<TSource, TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>, TExtension extends object = object> extends FBase {
    private readonly _id;
    private readonly _createAdapter;
    private readonly _createBuilder;
    protected readonly _injector: Injector;
    constructor(_id: string, _createAdapter: () => IChartLiveAdapter<TSource, TInfo>, _createBuilder: IChartInfoBuilderFactory<TSource, TDataSource, TInfo, TExtension>, _injector: Injector);
    /**
     * Returns the stable identifier of this Chart.
     * @returns {string} The Chart identifier.
     * @example
     * ```ts
     * const fChart = fWorksheet.getCharts()[0];
     * console.log(fChart.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the current type of this Chart.
     * @returns {ChartTypeString} The current Chart type.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * console.log(fChart.getType());
     * ```
     */
    getType(): ChartTypeString;
    /**
     * Returns a detached, read-only snapshot of this Chart's configuration, data source, and placement.
     * Mutating the returned object does not update the live Chart.
     * @returns {DeepReadonly<TInfo>} The complete Chart information snapshot.
     * @example
     * ```ts
     * const info = fWorksheet.getCharts()[0].getInfo();
     * console.log(info.config.type, info.dataSource);
     * ```
     */
    getInfo(): DeepReadonly<TInfo>;
    /**
     * Creates a detached Builder prefilled from this Chart.
     *
     * The Builder does not update the live Chart. Call `build()` to obtain a new
     * information snapshot, then pass it to {@link update} or insert the
     * complete snapshot as another Chart. Pass a Chart type to build a converted copy.
     *
     * @returns {FChartInfoBuilder<ChartTypeString, TSource, TDataSource, TInfo, TExtension>} A detached Builder using the current Chart type.
     * @example
     * ```ts
     * const fChart = fWorksheet.getCharts()[0];
     * const updatedInfo = fChart.toBuilder()
     *   .setTitle('Updated sales')
     *   .build();
     * await fChart.update(updatedInfo);
     * ```
     */
    toBuilder(): FChartInfoBuilder<ChartTypeString, TSource, TDataSource, TInfo, TExtension>;
    /**
     * Creates a detached Builder prefilled from this Chart and changes the copy's Chart type.
     * @typeParam T The target Chart type, which determines the returned type-specific Builder.
     * @param {T} type The target Chart type for the detached copy.
     * @returns {FChartInfoBuilder<T, TSource, TDataSource, TInfo, TExtension>} A detached type-specific Builder.
     * @example
     * ```ts
     * const fChart = fWorksheet.getCharts()[0];
     * const pieInfo = fChart
     *   .toBuilder(univerAPI.Enum.ChartTypeString.Pie)
     *   .setDoughnutHole(0.4)
     *   .build();
     * await fChart.update(pieInfo);
     * ```
     */
    toBuilder<T extends ChartTypeString>(type: T): FChartInfoBuilder<T, TSource, TDataSource, TInfo, TExtension>;
    /**
     * Replaces this live Chart from complete host Chart information.
     *
     * The host applies configuration, data source, placement, and host-specific fields as one
     * update so the change is represented by one undo/redo history item. Use the shortcut methods
     * below when only one common configuration property needs to change.
     *
     * @param {TInfo} info The complete Chart information returned by `toBuilder().build()`.
     * @returns {Promise<this>} This live Chart facade after the update completes.
     * @example
     * ```ts
     * const fChart = fWorksheet.getCharts()[0];
     * const info = fChart.toBuilder().setTitle('Updated sales').build();
     * await fChart.update(info);
     * ```
     */
    update(info: TInfo): Promise<this>;
    /**
     * Sets the type of this live Chart without changing its data source or placement.
     * @param {ChartTypeString} type The target Chart type.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setType(univerAPI.Enum.ChartTypeString.Pie);
     * ```
     */
    setType(type: ChartTypeString): this;
    /**
     * Sets the title of this live Chart.
     * @param {ChartTitleSpec} value The title text or title configuration.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setTitle('Quarterly sales');
     * ```
     */
    setTitle(value: ChartTitleSpec): this;
    /**
     * Clears the title of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearTitle();
     * ```
     */
    clearTitle(): this;
    /**
     * Sets the subtitle of this live Chart.
     * @param {ChartSubtitleSpec} value The subtitle text or subtitle configuration.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setSubtitle('FY 2026');
     * ```
     */
    setSubtitle(value: ChartSubtitleSpec): this;
    /**
     * Clears the subtitle of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearSubtitle();
     * ```
     */
    clearSubtitle(): this;
    /**
     * Sets the legend of this live Chart.
     * @param {ChartLegendSpec} value Whether to show the legend or its configuration.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setLegend(true);
     * ```
     */
    setLegend(value: ChartLegendSpec): this;
    /**
     * Clears the legend configuration of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearLegend();
     * ```
     */
    clearLegend(): this;
    /**
     * Sets a built-in or custom registered theme on this live Chart.
     *
     * Use `univerAPI.Enum.ChartThemeName` for built-in themes. Custom names must first be
     * registered through `univerAPI.registerTheme()`. A non-empty palette continues to override
     * the selected theme's series colors until {@link clearPalette} is called.
     *
     * @param {string} name A built-in Chart theme name or the stable name of a custom registered theme.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setTheme(univerAPI.Enum.ChartThemeName.UniverGradient1);
     * ```
     */
    setTheme(name: string): this;
    /**
     * Clears the registered theme override of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearTheme();
     * ```
     */
    clearTheme(): this;
    /**
     * Sets the ordered series palette colors of this live Chart.
     * @param {readonly string[]} colors CSS colors that override the selected theme's series colors.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setPalette(['#1677ff', '#52c41a']);
     * ```
     */
    setPalette(colors: readonly string[]): this;
    /**
     * Clears the palette override and returns series-color control to the selected theme.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearPalette();
     * ```
     */
    clearPalette(): this;
    /**
     * Sets common appearance properties of this live Chart.
     * @param {IChartAppearanceSpec} value The background and border configuration to apply.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setAppearance({ background: { color: '#ffffff' } });
     * ```
     */
    setAppearance(value: IChartAppearanceSpec): this;
    /**
     * Clears all common appearance properties or one selected property.
     * @param {ChartAppearanceTarget} [target] The appearance property to clear. Omit it to clear all common appearance.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearAppearance(univerAPI.Enum.ChartAppearanceTarget.Background);
     * ```
     */
    clearAppearance(target?: ChartAppearanceTarget): this;
    /**
     * Enables or disables the automatic gradient preset for supported Chart marks.
     * @param {boolean} value Whether to apply the Chart type's automatic gradient preset.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setAutoGradientFill(true);
     * ```
     */
    setAutoGradientFill(value: boolean): this;
    /**
     * Clears the automatic-gradient override and restores the Chart type's default.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.resetAutoGradientFill();
     * ```
     */
    resetAutoGradientFill(): this;
    /**
     * Sets how this live Chart handles invalid source values.
     * @param {InvalidValueType} value The invalid-value strategy to apply.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setInvalidValueStrategy(univerAPI.Enum.ChartInvalidValueType.Zero);
     * ```
     */
    setInvalidValueStrategy(value: InvalidValueType): this;
    /**
     * Restores the default invalid-value strategy of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.resetInvalidValueStrategy();
     * ```
     */
    resetInvalidValueStrategy(): this;
    /**
     * Sets the zero-based category field index used by this live Chart.
     * @param {number} index The zero-based source field index.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setCategoryField(0);
     * ```
     */
    setCategoryField(index: number): this;
    /**
     * Sets the ordered category fields used by this live Chart's multi-level category axis.
     * @param {readonly number[]} indexes The zero-based source field indexes in root-to-leaf order.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setCategoryFields([0, 1, 2]);
     * ```
     */
    setCategoryFields(indexes: readonly number[]): this;
    /**
     * Clears the ordered category fields used by this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearCategoryFields();
     * ```
     */
    clearCategoryFields(): this;
    /**
     * Enables or disables the multi-level category axis for this live Chart's selected category fields.
     * @param {boolean} enabled Whether to render the selected category fields as one multi-level axis.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setMultiLevelCategoryAxis(true);
     * ```
     */
    setMultiLevelCategoryAxis(enabled: boolean): this;
    /**
     * Clears the category field mapping of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearCategoryField();
     * ```
     */
    clearCategoryField(): this;
    /**
     * Sets the ordered, zero-based value field indexes used by this live Chart.
     * @param {readonly number[]} indexes The zero-based source field indexes.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setValueFields([1, 2]);
     * ```
     */
    setValueFields(indexes: readonly number[]): this;
    /**
     * Clears the value field mappings of this live Chart.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearValueFields();
     * ```
     */
    clearValueFields(): this;
    /**
     * Sets the data aggregation configuration of this live Chart.
     * @param {IChartAggregationSpec} value The aggregation configuration to apply.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.setAggregation({ topN: { count: 10, sourceIndex: 1 } });
     * ```
     */
    setAggregation(value: IChartAggregationSpec): this;
    /**
     * Clears all data aggregation or one selected aggregation property.
     * @param {ChartAggregationTarget} [target] The aggregation property to clear. Omit it to clear all aggregation.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * fChart.clearAggregation(univerAPI.Enum.ChartAggregationTarget.TopN);
     * ```
     */
    clearAggregation(target?: ChartAggregationTarget): this;
    /**
     * Replaces this live Chart's host data source without changing its configuration.
     * Sheet Charts accept Sheet range sources.
     * Slide, Board, and Document Charts accept inline tables or resource references.
     * Resource references targeting a Sheet use a `range` part.
     * Base references currently select a complete table with a `table` part.
     * @param {TSource} source The host-specific Chart data source.
     * @returns {Promise<this>} This live Chart facade after the data source update completes.
     * @example Sheet Chart - Sheet range
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     * const fChart = fWorksheet.getCharts()[0];
     * await fChart.setDataSource('A1:C12');
     * ```
     * @example Slide / Board / Document Chart - Inline table
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const fChart = fSlide.getCharts()[0];
     *
     * await fChart.setDataSource([
     *   ['Quarter', 'Revenue'],
     *   ['Q1', 120],
     *   ['Q2', 180],
     * ]);
     * ```
     * @example Slide / Board / Document Chart - Referenced Sheet range
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const fChart = fSlide.getCharts()[0];
     *
     * await fChart.setDataSource({
     *   unit: { selector: 'workbook-unit-id', type: 'sheet' },
     *   part: {
     *     kind: 'range',
     *     ref: 'Data!A1:B10',
     *     sheetId: 'data-sheet-id',
     *     sheetName: 'Data',
     *     range: 'A1:B10',
     *   },
     * });
     * ```
     * @example Slide / Board / Document Chart - Referenced Base table
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const fChart = fSlide.getCharts()[0];
     *
     * await fChart.setDataSource({
     *   unit: { selector: 'base-unit-id', type: 'base' },
     *   part: {
     *     kind: 'table',
     *     tableId: 'tasks-table-id',
     *     tableName: 'Tasks',
     *   },
     * });
     * ```
     */
    setDataSource(source: TSource): Promise<this>;
    /**
     * Sets this live Chart's absolute host position.
     * @param {number} x The horizontal host coordinate.
     * @param {number} y The vertical host coordinate.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].setAbsolutePosition(120, 80);
     * ```
     */
    setAbsolutePosition(x: number, y: number): this;
    /**
     * Sets this live Chart's host size.
     * @param {number} width The width in host coordinates.
     * @param {number} height The height in host coordinates.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].setSize(640, 360);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Moves this live Chart to the front of its host's persisted drawing order.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].bringToFront();
     * ```
     */
    bringToFront(): this;
    /**
     * Moves this live Chart forward by one level in its host's persisted drawing order.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].bringForward();
     * ```
     */
    bringForward(): this;
    /**
     * Moves this live Chart backward by one level in its host's persisted drawing order.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].sendBackward();
     * ```
     */
    sendBackward(): this;
    /**
     * Moves this live Chart to the back of its host's persisted drawing order.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].sendToBack();
     * ```
     */
    sendToBack(): this;
    /**
     * Moves this live Chart to a zero-based index in its host's persisted drawing order.
     * The host clamps an out-of-range index to its nearest valid position.
     * @param {number} index The zero-based target order index.
     * @returns {this} This live Chart facade for chaining.
     * @example
     * ```ts
     * fWorksheet.getCharts()[0].setZOrder(2);
     * ```
     */
    setZOrder(index: number): this;
    /**
     * Removes this Chart from its host.
     * @returns {Promise<boolean>} Whether the Chart was removed successfully.
     * @example
     * ```ts
     * const removed = await fWorksheet.getCharts()[0].remove();
     * console.log(removed);
     * ```
     */
    remove(): Promise<boolean>;
    private _arrange;
    private _apply;
    private _commit;
}
interface IChartInfoBuilderFactory<TSource, TDataSource, TInfo extends IChartInfo<TDataSource>, TExtension extends object = object> {
    <T extends ChartTypeString>(info: TInfo, description: IChartDescription, type: T): FChartInfoBuilder<T, TSource, TDataSource, TInfo, TExtension>;
}
export {};
