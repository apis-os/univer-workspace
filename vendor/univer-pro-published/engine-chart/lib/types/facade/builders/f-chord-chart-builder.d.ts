import type { IChartChordEmphasisSpec, IChartChordLabelSpec, IChartChordLayoutSpec, IChartChordMappingSpec, IChartChordNodeStyleSpec, IChartChordRibbonStyleSpec, IChartInfo } from '@univerjs-pro/engine-chart';
import { FChartBuilderBase } from '../f-chart-builder-base';
/**
 * Fluent semantic builder for an undirected Source/Target/optional-Value edge list.
 *
 * Final display labels own node identity. Duplicate and reverse rows aggregate,
 * omitted Value means unit-weight counts, and blank endpoints, self-links, and
 * non-positive/non-finite mapped weights are skipped without coercion. Aggregate
 * values are formatted after summing. Defaults are renderer-owned and require the
 * native ECharts 6.1 Chord series; no renderer nodes, links, or layout are persisted.
 *
 * @example Sheet
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook();
 * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
 * const chartInfo = fWorksheet
 *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
 *   .setSource('A1:C8')
 *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
 *   .setChordLayout({ startAngle: 90, clockwise: true, innerRadiusRatio: 0.4, outerRadiusRatio: 0.8 })
 *   .setChordNode({ color: '#2563eb', opacity: 0.8 })
 *   .setChordLabel({ visible: true, position: univerAPI.Enum.ChartChordLabelPosition.Outside, color: '#334155' })
 *   .setChordRibbon({ color: univerAPI.Enum.ChartChordRibbonColorMode.Gradient, opacity: 0.6 })
 *   .setChordEmphasis({ focus: univerAPI.Enum.ChartChordFocusMode.Adjacency })
 *   .build();
 * await fWorksheet.insertChart(chartInfo);
 * ```
 *
 * @example Doc
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
 *   .setSource([['Source', 'Target', 'Value'], ['A', 'B', 5], ['A', 'C', 3], ['B', 'C', 2]])
 *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
 *   .setChordLayout({ startAngle: 90, clockwise: true, innerRadiusRatio: 0.4, outerRadiusRatio: 0.8 })
 *   .setChordNode({ color: '#2563eb', opacity: 0.8 })
 *   .setChordLabel({ visible: true, position: univerAPI.Enum.ChartChordLabelPosition.Outside, color: '#334155' })
 *   .setChordRibbon({ color: univerAPI.Enum.ChartChordRibbonColorMode.Gradient, opacity: 0.6 })
 *   .setChordEmphasis({ focus: univerAPI.Enum.ChartChordFocusMode.Adjacency })
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 *
 * @example Slide
 * ```ts
 * const fPresentation = univerAPI.getActivePresentation();
 * const fSlide = fPresentation.getSlideByIndex(0);
 * const chartInfo = fSlide
 *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
 *   .setSource([['Source', 'Target', 'Value'], ['A', 'B', 5], ['A', 'C', 3], ['B', 'C', 2]])
 *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
 *   .setChordLayout({ startAngle: 90, clockwise: true, innerRadiusRatio: 0.4, outerRadiusRatio: 0.8 })
 *   .setChordNode({ color: '#2563eb', opacity: 0.8 })
 *   .setChordLabel({ visible: true, position: univerAPI.Enum.ChartChordLabelPosition.Outside, color: '#334155' })
 *   .setChordRibbon({ color: univerAPI.Enum.ChartChordRibbonColorMode.Gradient, opacity: 0.6 })
 *   .setChordEmphasis({ focus: univerAPI.Enum.ChartChordFocusMode.Adjacency })
 *   .build();
 * await fSlide.insertChart(chartInfo);
 * ```
 *
 * @example Board
 * ```ts
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Chord)
 *   .setSource([['Source', 'Target', 'Value'], ['A', 'B', 5], ['A', 'C', 3], ['B', 'C', 2]])
 *   .setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 })
 *   .setChordLayout({ startAngle: 90, clockwise: true, innerRadiusRatio: 0.4, outerRadiusRatio: 0.8 })
 *   .setChordNode({ color: '#2563eb', opacity: 0.8 })
 *   .setChordLabel({ visible: true, position: univerAPI.Enum.ChartChordLabelPosition.Outside, color: '#334155' })
 *   .setChordRibbon({ color: univerAPI.Enum.ChartChordRibbonColorMode.Gradient, opacity: 0.6 })
 *   .setChordEmphasis({ focus: univerAPI.Enum.ChartChordFocusMode.Adjacency })
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export declare class FChordChartBuilder<TSource = never[], TDataSource = TSource, TInfo extends IChartInfo<TDataSource> = IChartInfo<TDataSource>> extends FChartBuilderBase<TSource, TDataSource, TInfo> {
    /**
     * Sets the Source, Target, and optional Value field indexes for Chord edges.
     *
     * @param value Zero-based field indexes for each edge component.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setChordMapping({ sourceIndex: 0, targetIndex: 1, valueIndex: 2 });
     * ```
     */
    setChordMapping(value: IChartChordMappingSpec): this;
    /**
     * Sets the Chord radius, rotation, and spacing layout.
     *
     * @param value Chord layout settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setChordLayout({ startAngle: 90, clockwise: true });
     * ```
     */
    setChordLayout(value: IChartChordLayoutSpec): this;
    /**
     * Resets the Chord layout to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetChordLayout();
     * ```
     */
    resetChordLayout(): this;
    /**
     * Sets Chart-wide Chord node styling.
     *
     * @param value Chord node appearance settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setChordNode({ color: '#2563eb', opacity: 0.8 });
     * ```
     */
    setChordNode(value: IChartChordNodeStyleSpec): this;
    /**
     * Resets Chord node styling to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetChordNode();
     * ```
     */
    resetChordNode(): this;
    /**
     * Sets Chord node-label visibility, position, and styling.
     *
     * @param value Chord label settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setChordLabel({
     *   visible: true,
     *   position: univerAPI.Enum.ChartChordLabelPosition.Outside,
     *   color: '#334155',
     * });
     * ```
     */
    setChordLabel(value: IChartChordLabelSpec): this;
    /**
     * Resets Chord labels to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetChordLabel();
     * ```
     */
    resetChordLabel(): this;
    /**
     * Sets Chord ribbon color, opacity, and border styling.
     *
     * @param value Chord ribbon appearance settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setChordRibbon({
     *   color: univerAPI.Enum.ChartChordRibbonColorMode.Gradient,
     *   opacity: 0.6,
     * });
     * ```
     */
    setChordRibbon(value: IChartChordRibbonStyleSpec): this;
    /**
     * Resets Chord ribbon styling to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetChordRibbon();
     * ```
     */
    resetChordRibbon(): this;
    /**
     * Sets hover emphasis and focus behavior.
     *
     * @param value Chord emphasis settings.
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.setChordEmphasis({ focus: univerAPI.Enum.ChartChordFocusMode.Adjacency });
     * ```
     */
    setChordEmphasis(value: IChartChordEmphasisSpec): this;
    /**
     * Resets Chord emphasis behavior to renderer defaults.
     *
     * @returns This builder for chaining.
     * @example
     * ```ts
     * builder.resetChordEmphasis();
     * ```
     */
    resetChordEmphasis(): this;
}
