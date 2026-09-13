import type { ChartPublicSeriesSelector, IChartInfo, IChartSeriesPatch, IChartSeriesStyleSpec, IChartWaterfallConnectorStyleSpec, IChartWaterfallPointRoleSpec, WaterfallStackTypeEnum } from '@univerjs-pro/engine-chart';
import { FCartesianChartBuilder } from '../f-cartesian-chart-builder';
/**
 * Fluent, type-specific Builder for Waterfall Charts.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
 *   .setSource('A1:B8')
 *   .setPointRoles([{ series: 0, dataPointIndex: 3, role: univerAPI.Enum.ChartWaterfallPointRole.Total }])
 *   .setConnector(true)
 *   .setStackType(univerAPI.Enum.ChartWaterfallStackTypeEnum.Arrangement)
 *   .setUseSubtotal(true)
 *   .setPositiveStyle(0, { color: '#16a34a' })
 *   .setNegativeStyle(0, { color: '#dc2626' })
 *   .setSubtotalStyle(0, { color: '#2563eb' })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
 *   .setSource([['Stage', 'Change'], ['Revenue', 300], ['Costs', -180], ['Profit', 120]])
 *   .setPointRoles([{ series: 0, dataPointIndex: 2, role: univerAPI.Enum.ChartWaterfallPointRole.Total }])
 *   .setConnector(true)
 *   .setStackType(univerAPI.Enum.ChartWaterfallStackTypeEnum.Arrangement)
 *   .setUseSubtotal(true)
 *   .setPositiveStyle(0, { color: '#16a34a' })
 *   .setNegativeStyle(0, { color: '#dc2626' })
 *   .setSubtotalStyle(0, { color: '#2563eb' })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
 *   .setSource([['Stage', 'Change'], ['Revenue', 300], ['Costs', -180], ['Profit', 120]])
 *   .setPointRoles([{ series: 0, dataPointIndex: 2, role: univerAPI.Enum.ChartWaterfallPointRole.Total }])
 *   .setConnector(true)
 *   .setStackType(univerAPI.Enum.ChartWaterfallStackTypeEnum.Arrangement)
 *   .setUseSubtotal(true)
 *   .setPositiveStyle(0, { color: '#16a34a' })
 *   .setNegativeStyle(0, { color: '#dc2626' })
 *   .setSubtotalStyle(0, { color: '#2563eb' })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Waterfall)
 *   .setSource([['Stage', 'Change'], ['Revenue', 300], ['Costs', -180], ['Profit', 120]])
 *   .setPointRoles([{ series: 0, dataPointIndex: 2, role: univerAPI.Enum.ChartWaterfallPointRole.Total }])
 *   .setConnector(true)
 *   .setStackType(univerAPI.Enum.ChartWaterfallStackTypeEnum.Arrangement)
 *   .setUseSubtotal(true)
 *   .setPositiveStyle(0, { color: '#16a34a' })
 *   .setNegativeStyle(0, { color: '#dc2626' })
 *   .setSubtotalStyle(0, { color: '#2563eb' })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FWaterfallChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FCartesianChartBuilder<Omit<IChartSeriesPatch, 'selector'>, IChartSeriesStyleSpec, TSource, TDataSource, TInfo> {
    /**
     * Replaces all Waterfall point roles.
     *
     * Duplicate series/point identities use the last input and read back in canonical order.
     *
     * @param roles The complete point-role collection.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setPointRoles([{ series: 0, dataPointIndex: 0, role: univerAPI.Enum.ChartWaterfallPointRole.Total }]);
     * const roles = builder.build().config.waterfall?.pointRoles;
     * ```
     */
    setPointRoles(roles: readonly IChartWaterfallPointRoleSpec[]): this;
    /**
     * Enables, disables, or styles derived Waterfall connectors.
     *
     * Passing `true` renders a 1 px dashed connector with full opacity, no endpoint symbols,
     * and a neutral `#8C8C8C` base color that is adapted by the active light or dark theme. An object
     * starts from those defaults and overrides only the supplied fields. Pass `false` to hide it.
     *
     * Read the current value from `builder.build().config.waterfall?.connector`.
     *
     * @param value `false` disables, `true` enables the default dashed style, and an object enables style overrides.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setConnector(true);
     * const connector = builder.build().config.waterfall?.connector;
     * ```
     */
    setConnector(value: boolean | IChartWaterfallConnectorStyleSpec): this;
    /**
     * Clears connector configuration. With no persisted connector setting, the renderer does not
     * draw connectors; call `setConnector(true)` to restore the default dashed connector.
     *
     * Read the cleared value from `builder.build().config.waterfall?.connector`.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearConnector();
     * const connector = builder.build().config.waterfall?.connector;
     * ```
     */
    clearConnector(): this;
    /**
     * Sets the stack type configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setStackType(univerAPI.Enum.ChartWaterfallStackTypeEnum.Arrangement);
     * ```
     */
    setStackType(value: WaterfallStackTypeEnum): this;
    /**
     * Restores the stack type to `Arrangement` and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetStackType();
     * ```
     */
    resetStackType(): this;
    /**
     * Sets the use subtotal configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setUseSubtotal(true);
     * ```
     */
    setUseSubtotal(value: boolean): this;
    /**
     * Restores automatic subtotal generation to its default of `true` and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetUseSubtotal();
     * ```
     */
    resetUseSubtotal(): this;
    /**
     * Sets the positive style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setPositiveStyle(0, { color: '#52c41a' });
     * const positive = builder.build().config.series[0]?.waterfallStyles?.positive;
     * ```
     */
    setPositiveStyle(selector: ChartPublicSeriesSelector, value: Omit<IChartSeriesPatch, 'selector'>): this;
    /**
     * Clears the positive style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearPositiveStyle(0);
     * const positive = builder.build().config.series[0]?.waterfallStyles?.positive;
     * ```
     */
    clearPositiveStyle(selector: ChartPublicSeriesSelector): this;
    /**
     * Sets the negative style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setNegativeStyle(0, { color: '#f5222d' });
     * const negative = builder.build().config.series[0]?.waterfallStyles?.negative;
     * ```
     */
    setNegativeStyle(selector: ChartPublicSeriesSelector, value: Omit<IChartSeriesPatch, 'selector'>): this;
    /**
     * Clears the negative style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearNegativeStyle(0);
     * const negative = builder.build().config.series[0]?.waterfallStyles?.negative;
     * ```
     */
    clearNegativeStyle(selector: ChartPublicSeriesSelector): this;
    /**
     * Sets the subtotal style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setSubtotalStyle(0, { color: '#1677ff' });
     * const subtotal = builder.build().config.series[0]?.waterfallStyles?.subtotal;
     * ```
     */
    setSubtotalStyle(selector: ChartPublicSeriesSelector, value: Omit<IChartSeriesPatch, 'selector'>): this;
    /**
     * Clears the subtotal style configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param selector The target series selector.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearSubtotalStyle(0);
     * const subtotal = builder.build().config.series[0]?.waterfallStyles?.subtotal;
     * ```
     */
    clearSubtotalStyle(selector: ChartPublicSeriesSelector): this;
}
