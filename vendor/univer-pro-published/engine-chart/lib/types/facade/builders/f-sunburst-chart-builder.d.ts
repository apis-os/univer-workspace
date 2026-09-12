import type { DeepNullish, IChartInfo, IChartSunburstCenterLabelSpec, IChartSunburstLabelSpec } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent semantic builder for an automatically laid-out Sunburst chart.
 *
 * Field indexes are zero-based in the orientation-normalized dataset. Rendering needs at
 * least one ordered hierarchy field and exactly one value field. Duplicate complete paths
 * sum finite numeric values; sparse hierarchy values inherit within ancestor scope; parent
 * facts add to child totals. Ring layout is automatic and root navigation is disabled.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Sunburst)
 *   .setSource('A1:D8')
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setSunburstLabel({ visible: true, position: univerAPI.Enum.ChartSunburstLabelPosition.Outside, color: '#334155' })
 *   .setCenterLabel({ visible: true, color: '#0f172a' })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Sunburst)
 *   .setSource([['Region', 'Country', 'City', 'Sales'], ['Europe', 'France', 'Paris', 120], ['Asia', 'Japan', 'Tokyo', 180]])
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setSunburstLabel({ visible: true, position: univerAPI.Enum.ChartSunburstLabelPosition.Outside, color: '#334155' })
 *   .setCenterLabel({ visible: true, color: '#0f172a' })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Sunburst)
 *   .setSource([['Region', 'Country', 'City', 'Sales'], ['Europe', 'France', 'Paris', 120], ['Asia', 'Japan', 'Tokyo', 180]])
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setSunburstLabel({ visible: true, position: univerAPI.Enum.ChartSunburstLabelPosition.Outside, color: '#334155' })
 *   .setCenterLabel({ visible: true, color: '#0f172a' })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Sunburst)
 *   .setSource([['Region', 'Country', 'City', 'Sales'], ['Europe', 'France', 'Paris', 120], ['Asia', 'Japan', 'Tokyo', 180]])
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setSunburstLabel({ visible: true, position: univerAPI.Enum.ChartSunburstLabelPosition.Outside, color: '#334155' })
 *   .setCenterLabel({ visible: true, color: '#0f172a' })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FSunburstChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Replaces the ordered inner-to-outer hierarchy with zero-based field indexes.
     *
     * @param indexes Ordered hierarchy field indexes.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setHierarchyFields([0, 1, 2]);
     * ```
     */
    setHierarchyFields(indexes: readonly number[]): this;
    /**
     * Replaces the sole numeric value field with a zero-based field index.
     *
     * @param index Numeric value field index.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setValueField(3);
     * ```
     */
    setValueField(index: number): this;
    /**
     * Sets label visibility, content, position, and font appearance.
     *
     * @param label Sunburst label settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setSunburstLabel({
     *   visible: true,
     *   position: univerAPI.Enum.ChartSunburstLabelPosition.Outside,
     *   color: '#334155',
     * });
     * ```
     */
    setSunburstLabel(label: DeepNullish<IChartSunburstLabelSpec>): this;
    /**
     * Removes explicit label style and restores visible category-name labels.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetSunburstLabel();
     * ```
     */
    resetSunburstLabel(): this;
    /**
     * Sets visibility, number format, and font appearance for the aggregate center value.
     *
     * @param centerLabel Center-label settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setCenterLabel({ visible: true, color: '#0f172a' });
     * ```
     */
    setCenterLabel(centerLabel: DeepNullish<IChartSunburstCenterLabelSpec>): this;
    /**
     * Removes the authored center-label style and restores its hidden default.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetCenterLabel();
     * ```
     */
    resetCenterLabel(): this;
}
