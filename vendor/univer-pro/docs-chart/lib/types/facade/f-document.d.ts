import type { DocChartInsertAnchor, IDocChartLayoutSpec, IDocumentChartInfo } from '@univerjs-pro/docs-chart';
import type { ChartDataSourceValue, ChartTypeString, IChartDataSourceInput, IResourceRefChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { HostComposedChartBuilder, IChartBuilderTypeMap } from '@univerjs-pro/engine-chart/facade';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentChart } from './f-document-chart';
/**
 * Document-only methods composed onto every Document Chart Builder.
 *
 * Use these methods to choose where the Chart is inserted and how it participates in Document text layout.
 */
export interface IDocumentChartMethods {
    /**
     * Sets the text insertion anchor for the new Document Chart.
     *
     * The anchor can target the active selection, a body offset, a paragraph, or an explicit text range.
     *
     * @param {DocChartInsertAnchor} position The insertion anchor in the Document body.
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setPosition({
     *     kind: univerAPI.Enum.DocsChartInsertAnchorKind.BodyOffset,
     *     offset: 0,
     *   })
     *   .setInline()
     *   .setSize(640, 360)
     *   .build();
     * await fDocument.insertChart(chartInfo);
     * ```
     */
    setPosition(position: DocChartInsertAnchor): this;
    /**
     * Sets the Document Chart's text layout and optionally its floating position and size.
     *
     * Omitted fields keep the values already stored in this Builder. On insertion, the default size is
     * 480 by 320 pixels and the default layout is inline.
     *
     * @param {IDocChartLayoutSpec} layout The Document layout, floating position, and size.
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Line)
     *   .setSource([
     *     ['Month', 'Sales'],
     *     ['Jan', 120],
     *     ['Feb', 180],
     *   ])
     *   .setLayout({
     *     layoutType: univerAPI.Enum.DocsChartLayoutType.WRAP_SQUARE,
     *     position: { x: 120, y: 80 },
     *     width: 640,
     *     height: 360,
     *   })
     *   .setLineStyle({ width: 2 })
     *   .build();
     * await fDocument.insertChart(chartInfo);
     * ```
     */
    setLayout(layout: IDocChartLayoutSpec): this;
    /**
     * Places the new Chart inline with Document text.
     *
     * An inline Chart participates in text flow like a character, so its absolute position is ignored by layout.
     *
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Pie)
     *   .setSource([
     *     ['Category', 'Value'],
     *     ['Hardware', 45],
     *     ['Software', 55],
     *   ])
     *   .setInline()
     *   .setSize(480, 320)
     *   .setDoughnutHole(0.4)
     *   .build();
     * await fDocument.insertChart(chartInfo);
     * ```
     */
    setInline(): this;
    /**
     * Places the new Chart as a floating drawing with square text wrapping.
     *
     * Use {@link FChartBuilderBase.setAbsolutePosition} to set its floating offsets.
     *
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Bar)
     *   .setSource([
     *     ['Team', 'Tasks'],
     *     ['Design', 12],
     *     ['Engineering', 18],
     *   ])
     *   .setFloating()
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .build();
     * await fDocument.insertChart(chartInfo);
     * ```
     */
    setFloating(): this;
}
/**
 * A type-specific Chart Builder composed with Document-only insertion methods.
 *
 * The selected Chart type controls which type-specific configuration methods are available.
 *
 * @example
 * ```javascript
 * const fDocument = univerAPI.getActiveDocument();
 * const chartInfo = fDocument
 *   .newChart(univerAPI.Enum.ChartTypeString.Pie)
 *   .setSource([
 *     ['Category', 'Value'],
 *     ['Hardware', 45],
 *     ['Software', 55],
 *   ])
 *   .setInline()
 *   .setSize(480, 320)
 *   .setDoughnutHole(0.4)
 *   .build();
 * await fDocument.insertChart(chartInfo);
 * ```
 */
export type FDocumentChartBuilderOf<T extends ChartTypeString> = HostComposedChartBuilder<IChartBuilderTypeMap<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IChartDataSourceInput, IDocumentChartInfo>[T], IDocumentChartMethods>;
/** @ignore */
export interface IFDocumentChartMixin {
    /**
     * Creates a detached, type-specific Chart Builder for this Document.
     *
     * @param {ChartTypeString} type The Chart type to create.
     * @returns {FDocumentChartBuilderOf<T>} A detached Builder that produces insertable Document Chart information.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) throw new Error('No active document.');
     *
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
     *   .setTitle('Monthly sales')
     *   .setLineStyle({ width: 2 })
     *   .build();
     *
     * const fChart = await fDocument.insertChart(chartInfo);
     * console.log(fChart.getId(), fChart.getDrawingId());
     * ```
     */
    newChart<T extends ChartTypeString>(type: T): FDocumentChartBuilderOf<T>;
    /**
     * Inserts a Chart into this Document from detached Chart information.
     *
     * @param {IDocumentChartInfo} info The configuration, data source, and layout produced by a Document Chart Builder.
     * @returns {Promise<FDocumentChart>} A live facade for the inserted Document Chart.
     * @throws {Error} If the data source, insertion anchor, layout, or command is invalid.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const chartInfo = fDocument
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setPosition({
     *     kind: univerAPI.Enum.DocsChartInsertAnchorKind.BodyOffset,
     *     offset: 0,
     *   })
     *   .setInline()
     *   .setSize(640, 360)
     *   .build();
     * const fChart = await fDocument.insertChart(chartInfo);
     * fChart.setTitle('Quarterly sales');
     * ```
     */
    insertChart(info: IDocumentChartInfo): Promise<FDocumentChart>;
    /**
     * Returns a Document Chart by its Chart resource id or drawing id.
     *
     * @param {string} chartIdOrDrawingId A Chart resource id or Document drawing id.
     * @returns {FDocumentChart | null} The live Document Chart facade, or `null` if it does not exist.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const fChart = fDocument.getChart('chartIdOrDrawingId');
     * console.log(fChart?.getInfo());
     * ```
     */
    getChart(chartIdOrDrawingId: string): FDocumentChart | null;
    /**
     * Returns all Charts in this Document.
     *
     * @returns {FDocumentChart[]} Live Chart facades in Document drawing order.
     * @example
     * ```javascript
     * const fDocument = univerAPI.getActiveDocument();
     * const fCharts = fDocument.getCharts();
     * fCharts.forEach((fChart) => {
     *   console.log(fChart.getId(), fChart.getDrawingId(), fChart.getInfo());
     * });
     * ```
     */
    getCharts(): FDocumentChart[];
}
/** @ignore */
export declare class FDocumentChartMixin extends FDocument implements IFDocumentChartMixin {
    newChart<T extends ChartTypeString>(type: T): FDocumentChartBuilderOf<T>;
    insertChart(info: IDocumentChartInfo): Promise<FDocumentChart>;
    getChart(chartIdOrDrawingId: string): FDocumentChart | null;
    getCharts(): FDocumentChart[];
    private _getChartResource;
    private _resolveReferencedValues;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentChartMixin {
    }
}
