import type { IChartInfo, IChartRelationForceSpec, LinePointShape, RelationChartLayoutEnum } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Configures a relation chart.
 *
 * @remarks
 * Relation chart sources are recognized in the following order:
 *
 * 1. **Co-word matrix**. For `N` node rows, the converted chart data must contain `N + 2`
 *    dimension headers and `N + 1` source columns. Headers starting at index `2`
 *    provide node names, source column `1` provides each node's category, and numeric matrix cells
 *    provide link weights. This format is checked before the edge-list format.
 *    Use this format when nodes need different categories.
 * 2. **Edge list**. Column `0` is the source node and column `1` is the target node. Both must
 *    contain non-empty strings. An optional numeric weight column must contain finite, non-negative
 *    values; without one, every link has weight `1`.
 *
 * A two-column edge list is treated as unweighted. A three-column edge list uses column `2` as its
 * weight automatically. Use this canonical two- or three-column shape so the Source, Target, and
 * optional Weight roles are inferred together. Do not call {@link FChartBuilderBase.setCategoryField}
 * or {@link FChartBuilderBase.setValueFields} for this shape: those generic mapping methods cannot
 * describe both endpoint roles and replace the automatic Relation mapping. A weighted edge list
 * creates at most one category, named after the weight column when that column has a non-empty
 * header. An unweighted edge list creates no categories.
 *
 * @example Sheet
 * A worksheet range `A1:C4` can contain this weighted edge list:
 *
 * | Source | Target | Weight |
 * | --- | --- | ---: |
 * | A | B | 5 |
 * | A | C | 3 |
 * | C | B | 2 |
 *
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Relation)
 *   .setSource({
 *     range: 'A1:C4',
 *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   })
 *   .setLayout(univerAPI.Enum.ChartRelationChartLayoutEnum.Force)
 *   .setUseValueAsSymbolSize(true)
 *   .setEmphasisEnabled(true)
 *   .setForce({ gravity: 0.2, repulsion: 50 })
 *   .setNodeShape(univerAPI.Enum.ChartLinePointShape.Circle)
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Relation)
 *   .setSource([['Source', 'Target', 'Weight'], ['A', 'B', 5], ['A', 'C', 3], ['C', 'B', 2]])
 *   .setLayout(univerAPI.Enum.ChartRelationChartLayoutEnum.Force)
 *   .setUseValueAsSymbolSize(true)
 *   .setEmphasisEnabled(true)
 *   .setForce({ gravity: 0.2, repulsion: 50 })
 *   .setNodeShape(univerAPI.Enum.ChartLinePointShape.Circle)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Relation)
 *   .setSource([['Source', 'Target', 'Weight'], ['A', 'B', 5], ['A', 'C', 3], ['C', 'B', 2]])
 *   .setLayout(univerAPI.Enum.ChartRelationChartLayoutEnum.Force)
 *   .setUseValueAsSymbolSize(true)
 *   .setEmphasisEnabled(true)
 *   .setForce({ gravity: 0.2, repulsion: 50 })
 *   .setNodeShape(univerAPI.Enum.ChartLinePointShape.Circle)
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Relation)
 *   .setSource([['Source', 'Target', 'Weight'], ['A', 'B', 5], ['A', 'C', 3], ['C', 'B', 2]])
 *   .setLayout(univerAPI.Enum.ChartRelationChartLayoutEnum.Force)
 *   .setUseValueAsSymbolSize(true)
 *   .setEmphasisEnabled(true)
 *   .setForce({ gravity: 0.2, repulsion: 50 })
 *   .setNodeShape(univerAPI.Enum.ChartLinePointShape.Circle)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FRelationChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Sets the layout configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setLayout(univerAPI.Enum.ChartRelationChartLayoutEnum.Force);
     * ```
     */
    setLayout(value: RelationChartLayoutEnum): this;
    /**
     * Restores the layout to `None`, which uses Univer's fixed relation layout, and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetLayout();
     * ```
     */
    resetLayout(): this;
    /**
     * Sets the use value as symbol size configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setUseValueAsSymbolSize(true);
     * ```
     */
    setUseValueAsSymbolSize(value: boolean): this;
    /**
     * Restores the default of scaling node symbols from their values and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetUseValueAsSymbolSize();
     * ```
     */
    resetUseValueAsSymbolSize(): this;
    /**
     * Sets the emphasis enabled configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setEmphasisEnabled(true);
     * ```
     */
    setEmphasisEnabled(value: boolean): this;
    /**
     * Restores the default of emphasizing adjacent nodes and links on hover and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetEmphasisEnabled();
     * ```
     */
    resetEmphasisEnabled(): this;
    /**
     * Sets the force configuration and returns this builder for chaining.
     *
     * Omitted fields keep their current values. Without explicit overrides, force layout uses
     * gravity `0.1`, repulsion `5000`, and an edge length equal to one fifth of the chart's shorter side.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setForce({ gravity: 0.2, repulsion: 50 });
     * ```
     */
    setForce(value: IChartRelationForceSpec): this;
    /**
     * Clears the force configuration and returns this builder for chaining.
     *
     * Force layout then uses gravity `0.1`, repulsion `5000`, and an edge length equal to one fifth
     * of the chart's shorter side.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.clearForce();
     * ```
     */
    clearForce(): this;
    /**
     * Sets the circular label rotation configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setCircularLabelRotation(true);
     * ```
     */
    setCircularLabelRotation(value: boolean): this;
    /**
     * Restores the default of keeping circular-layout labels unrotated and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetCircularLabelRotation();
     * ```
     */
    resetCircularLabelRotation(): this;
    /**
     * Sets the node shape configuration and returns this builder for chaining.
     *
     * This method executes synchronously.
     *
     * @param value The semantic value to record.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setNodeShape(univerAPI.Enum.ChartLinePointShape.Circle);
     * ```
     */
    setNodeShape(value: LinePointShape): this;
    /**
     * Removes the node-shape override so relation nodes use the renderer's circular symbol.
     *
     * This method executes synchronously.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetNodeShape();
     * ```
     */
    resetNodeShape(): this;
}
