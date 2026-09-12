import type { ChartAxisTarget, IChartAxisSpec, IChartInfo, IChartMarkLineSpec } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from './f-chart-builder-base';
/**
 * Fluent base Builder for Charts that expose Cartesian axes and mark lines.
 *
 * @example
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Line)
 *   .setSource('A1:D8')
 *   .setYAxisTitle('Revenue')
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 */
export declare abstract class FAxisChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Replaces all fixed-axis mark lines.
     *
     * Omitted line-style fields use a 1 px solid stroke at full opacity and inherit the carrier
     * series color, falling back to the active theme. Endpoint symbols are hidden. Labels are hidden
     * unless a `label` object is supplied; an empty label object shows the axis-formatted value.
     *
     * Read the current value from `builder.build().config.markLines`.
     *
     * @param lines The complete ordered mark-line collection. An empty list clears it.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setMarkLines([{ axis: univerAPI.Enum.ChartSemanticAxis.PrimaryValue, value: 80 }]);
     * const markLines = builder.build().config.markLines;
     * ```
     */
    setMarkLines(lines: readonly IChartMarkLineSpec[]): this;
    /**
     * Clears all fixed-axis mark lines.
     *
     * Read the cleared value from `builder.build().config.markLines`.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearMarkLines();
     * const markLines = builder.build().config.markLines;
     * ```
     */
    clearMarkLines(): this;
    /**
     * Sets the xaxis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setXAxis({ title: 'Month' });
     * ```
     */
    setXAxis(value: IChartAxisSpec): this;
    /**
     * Clears the xaxis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearXAxis(univerAPI.Enum.ChartAxisTarget.Label);
     * ```
     */
    clearXAxis(target?: ChartAxisTarget): this;
    /**
     * Sets the yaxis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setYAxis({ title: 'Revenue' });
     * ```
     */
    setYAxis(value: IChartAxisSpec): this;
    /**
     * Clears the yaxis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearYAxis(univerAPI.Enum.ChartAxisTarget.GridLine);
     * ```
     */
    clearYAxis(target?: ChartAxisTarget): this;
    /**
     * Sets the right yaxis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setRightYAxis({ title: 'Margin' });
     * ```
     */
    setRightYAxis(value: IChartAxisSpec): this;
    /**
     * Clears the right yaxis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param target The configuration field to clear or reset.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearRightYAxis(univerAPI.Enum.ChartAxisTarget.Line);
     * ```
     */
    clearRightYAxis(target?: ChartAxisTarget): this;
    /**
     * Sets the xaxis title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setXAxisTitle('Month');
     * ```
     */
    setXAxisTitle(value: string): this;
    /**
     * Clears the xaxis title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearXAxisTitle();
     * ```
     */
    clearXAxisTitle(): this;
    /**
     * Sets the yaxis title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setYAxisTitle('Revenue');
     * ```
     */
    setYAxisTitle(value: string): this;
    /**
     * Clears the yaxis title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearYAxisTitle();
     * ```
     */
    clearYAxisTitle(): this;
    /**
     * Sets the right yaxis title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setRightYAxisTitle('Margin');
     * ```
     */
    setRightYAxisTitle(value: string): this;
    /**
     * Clears the right yaxis title configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearRightYAxisTitle();
     * ```
     */
    clearRightYAxisTitle(): this;
    /**
     * Sets the use date axis configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setUseDateAxis(true);
     * ```
     */
    setUseDateAxis(value: boolean): this;
    /**
     * Restores the default of using a category axis instead of a date axis and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetUseDateAxis();
     * ```
     */
    resetUseDateAxis(): this;
}
