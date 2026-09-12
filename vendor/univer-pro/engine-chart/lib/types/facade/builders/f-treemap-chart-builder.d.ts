import type { DeepNullish, IChartInfo, IChartTreemapLabelSpec, TreemapParentLabelLayout } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent semantic builder for an automatically laid-out Treemap.
 *
 * Field indexes are zero-based in the orientation-normalized dataset. Rendering needs at
 * least one ordered hierarchy field and exactly one value field. Duplicate complete paths
 * sum finite numeric values; blank, textual, non-finite, and final non-positive values do
 * not render. Parent-owned facts add to child totals. Layout is automatic and navigation
 * is disabled. The runtime defaults are banner parent labels and visible category-name
 * leaf labels; labels may hide when their rectangle cannot fit the complete content.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Treemap)
 *   .setSource('A1:D8')
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setParentLabelLayout(univerAPI.Enum.ChartTreemapParentLabelLayout.Banner)
 *   .setTreemapLabel({ visible: true, color: '#334155' })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Treemap)
 *   .setSource([['Region', 'Country', 'City', 'Sales'], ['Europe', 'France', 'Paris', 120], ['Asia', 'Japan', 'Tokyo', 180]])
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setParentLabelLayout(univerAPI.Enum.ChartTreemapParentLabelLayout.Banner)
 *   .setTreemapLabel({ visible: true, color: '#334155' })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Treemap)
 *   .setSource([['Region', 'Country', 'City', 'Sales'], ['Europe', 'France', 'Paris', 120], ['Asia', 'Japan', 'Tokyo', 180]])
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setParentLabelLayout(univerAPI.Enum.ChartTreemapParentLabelLayout.Banner)
 *   .setTreemapLabel({ visible: true, color: '#334155' })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Treemap)
 *   .setSource([['Region', 'Country', 'City', 'Sales'], ['Europe', 'France', 'Paris', 120], ['Asia', 'Japan', 'Tokyo', 180]])
 *   .setHierarchyFields([0, 1, 2])
 *   .setValueField(3)
 *   .setParentLabelLayout(univerAPI.Enum.ChartTreemapParentLabelLayout.Banner)
 *   .setTreemapLabel({ visible: true, color: '#334155' })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FTreemapChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Replaces the ordered root-to-leaf hierarchy with zero-based field indexes.
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
     * Sets parent names to a reserved banner, overlapping text, or hidden.
     *
     * @param layout Parent-label layout mode.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setParentLabelLayout(univerAPI.Enum.ChartTreemapParentLabelLayout.Banner);
     * ```
     */
    setParentLabelLayout(layout: TreemapParentLabelLayout): this;
    /**
     * Removes the explicit parent layout and restores the runtime banner default.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetParentLabelLayout();
     * ```
     */
    resetParentLabelLayout(): this;
    /**
     * Sets leaf visibility, content, and font appearance.
     *
     * @param label Treemap leaf-label settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setTreemapLabel({ visible: true, color: '#334155' });
     * ```
     */
    setTreemapLabel(label: DeepNullish<IChartTreemapLabelSpec>): this;
    /**
     * Removes explicit leaf-label style and restores visible category-name labels.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetTreemapLabel();
     * ```
     */
    resetTreemapLabel(): this;
}
