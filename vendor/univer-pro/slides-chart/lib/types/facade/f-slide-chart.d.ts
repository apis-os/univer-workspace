import type { ChartDataSourceValue, IChartDataSourceInput, IChartResourceDataSource, IChartResourceSnapshot, IResourceRefChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { ISlidePlaceholderData, SlideModel } from '@univerjs-pro/slides';
import type { ISlideChartInfo } from '@univerjs-pro/slides-chart';
import type { Injector } from '@univerjs/core';
import type { ISlideChartMethods } from './f-slide';
import { FChart } from '@univerjs-pro/engine-chart/facade';
/**
 * The facade class for a slide chart element.
 * @hideconstructor
 */
export declare class FSlideChart extends FChart<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IChartDataSourceInput, ISlideChartInfo, ISlideChartMethods> {
    private readonly _unitId;
    private readonly _subUnitId;
    private readonly _chartId;
    private readonly _elementId;
    private readonly _slideModel;
    readonly unitId: string;
    constructor(_unitId: string, _subUnitId: string, _chartId: string, _elementId: string, _slideModel: SlideModel, _injector: Injector);
    /**
     * Returns the stable Slide element identifier that hosts this Chart.
     * @returns {string} The Slide element identifier.
     */
    getElementId(): string;
    /**
     * Get the placeholder metadata associated with this chart.
     * @returns {ISlidePlaceholderData|undefined} The placeholder metadata, or `undefined` if the chart is not created from a placeholder.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     * const charts = fSlide.getCharts();
     * console.log(charts[0].getPlaceholder());
     * ```
     */
    getPlaceholder(): ISlidePlaceholderData | undefined;
    /**
     * Update the placeholder metadata associated with this chart.
     * @param {ISlidePlaceholderData} [placeholder] The placeholder metadata. Pass `undefined` to clear it.
     * @returns {FChart} This chart, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     * const charts = fSlide.getCharts();
     *
     * // Clear the placeholder of the first chart.
     * const chart = charts[0];
     * chart.setPlaceholder(undefined);
     * ```
     */
    setPlaceholder(placeholder?: ISlidePlaceholderData): this;
    /**
     * Get the chart frame stroke style.
     * @returns {ISlideLineStyle|undefined} The chart frame stroke style.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     * const charts = fSlide.getCharts();
     * console.log(charts[0].getStroke());
     * ```
     */
    getStroke(): IShapeLineStyle | undefined;
    /**
     * Update the chart frame stroke style.
     * @param {ISlideLineStyle} [stroke] The stroke style. Pass `undefined` to clear it.
     * @returns {FChart} This chart, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     * const charts = fSlide.getCharts();
     *
     * // Set the stroke of the first chart to a gray thin line.
     * const chart = charts[0];
     * chart.setStroke({ color: '#d1d5db', width: 1 });
     * ```
     */
    setStroke(stroke?: IShapeLineStyle): this;
    /**
     * Get read-only chart resource data stored in the presentation snapshot.
     * Use `getInfo()` for the complete insertion snapshot. `toBuilder()` creates
     * a detached copy Builder and does not update this Chart.
     * @returns {{ chart: IChartResourceSnapshot; dataSource: IChartResourceDataSource } | null} The chart resource data, or `null` when it does not exist.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideById('slide-1');
     * const charts = fSlide.getCharts();
     *
     * // Get the chart resource data of the first chart.
     * const chart = charts[0];
     * const chartData = chart.getChartData();
     * console.log(chartData);
     * ```
     */
    getChartData(): {
        chart: IChartResourceSnapshot;
        dataSource: IChartResourceDataSource;
    } | null;
    private _getElement;
    private _createSlideAdapter;
}
