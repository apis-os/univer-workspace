import type { ChartDataSourceValue, ChartTypeString, IChartDataSourceInput, IResourceRefChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { HostComposedChartBuilder, IChartBuilderTypeMap } from '@univerjs-pro/engine-chart/facade';
import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { ISlidePlaceholderData } from '@univerjs-pro/slides';
import type { ISlideChartInfo } from '@univerjs-pro/slides-chart';
import { FSlide } from '@univerjs-pro/slides/facade';
import { FSlideChart } from './f-slide-chart';
/** Slide-only methods composed onto every Slide Chart Builder. */
export interface ISlideChartMethods {
    /**
     * Sets or clears the placeholder metadata of the Slide element created for the Chart.
     *
     * @param {ISlidePlaceholderData} [placeholder] The Slide placeholder metadata. Pass `undefined` to clear it.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const chartInfo = fSlide
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setPlaceholder({
     *     id: 'sales-chart-placeholder',
     *     type: univerAPI.Enum.SlidePlaceholderTypeEnum.Chart,
     *   })
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .build();
     *
     * await fSlide.insertChart(chartInfo);
     * ```
     */
    setPlaceholder(placeholder?: ISlidePlaceholderData): this;
    /**
     * Sets or clears the frame stroke of the Slide element created for the Chart.
     *
     * @param {IShapeLineStyle} [stroke] The frame stroke style. Pass `undefined` to clear it.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const chartInfo = fSlide
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setStroke({ color: '#d1d5db', width: 1 })
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .build();
     *
     * await fSlide.insertChart(chartInfo);
     * ```
     */
    setStroke(stroke?: IShapeLineStyle): this;
    /**
     * Sets the insertion index of the Chart in the Slide element order.
     *
     * @param {number} index The zero-based insertion index in the Slide element order.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const chartInfo = fSlide
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setZOrder(1)
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .build();
     *
     * await fSlide.insertChart(chartInfo);
     * ```
     */
    setZOrder(index: number): this;
}
/** A type-specific Chart Builder composed with Slide-only insertion methods. */
export type FSlideChartBuilderOf<T extends ChartTypeString> = HostComposedChartBuilder<IChartBuilderTypeMap<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IChartDataSourceInput, ISlideChartInfo>[T], ISlideChartMethods>;
/** @ignore */
export interface IFSlideChartMixin {
    /**
     * Creates a detached, type-specific Chart Builder for this Slide.
     * @param {ChartTypeString} type The Chart type to create.
     * @returns {FSlideChartBuilderOf<T>} A detached Builder that produces insertable Slide Chart information.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const info = fSlide.newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180]
     *   ])
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .build();
     * const fChart = await fSlide.insertChart(info);
     * console.log(fChart);
     * ```
     */
    newChart<T extends ChartTypeString>(type: T): FSlideChartBuilderOf<T>;
    /**
     * Inserts a Chart into this Slide from detached Chart information.
     * @param {ISlideChartInfo} info The configuration, data source, and placement produced by a Slide Chart Builder.
     * @returns {Promise<FSlideChart>} A live facade for the inserted Slide Chart.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const info = fSlide.newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180]
     *   ])
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .build();
     * const fChart = await fSlide.insertChart(info);
     * console.log(fChart);
     * ```
     */
    insertChart(info: ISlideChartInfo): Promise<FSlideChart>;
    /**
     * Returns a Chart by its Chart id or Slide element id.
     * @param {string} chartIdOrElementId A Chart resource id or Slide element id.
     * @returns {FSlideChart | null} The live Slide Chart facade, or `null` if it does not exist.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const fChart = fSlide.getChart('chart-1');
     * console.log(fChart);
     * ```
     */
    getChart(chartIdOrElementId: string): FSlideChart | null;
    /**
     * Returns all Charts in this Slide.
     * @returns {FSlideChart[]} An array of live Slide Chart facades.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const charts = fSlide.getCharts();
     * console.log(charts);
     * ```
     */
    getCharts(): FSlideChart[];
}
/** @ignore */
export declare class FSlideChartMixin extends FSlide {
    newChart<T extends ChartTypeString>(type: T): FSlideChartBuilderOf<T>;
    insertChart(info: ISlideChartInfo): Promise<FSlideChart>;
    getChart(chartIdOrElementId: string): FSlideChart | null;
    getCharts(): FSlideChart[];
    private _resolveReferencedValues;
}
declare module '@univerjs-pro/slides/facade' {
    interface FSlide extends IFSlideChartMixin {
    }
}
