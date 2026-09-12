import type { IBoardChartInfo } from '@univerjs-pro/boards-chart';
import type { ChartDataSourceValue, ChartTypeString, IChartDataSourceInput, IResourceRefChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { HostComposedChartBuilder, IChartBuilderTypeMap } from '@univerjs-pro/engine-chart/facade';
import { FBoard } from '@univerjs-pro/boards/facade';
import { FBoardChart } from './f-board-chart';
/** Board-only methods composed onto every Board Chart Builder. */
export interface IBoardChartMethods {
    /**
     * Sets or clears the container that will own the inserted Board Chart.
     *
     * @param {string} [containerId] The Board container identifier. Pass `undefined` to insert the Chart at the page root.
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const containerId = `chart-container-${Date.now()}`;
     * if (!fBoard.createContainer({
     *   id: containerId,
     *   left: 80,
     *   top: 80,
     *   width: 800,
     *   height: 500,
     *   title: 'Charts',
     * })) {
     *   throw new Error('Cannot create chart container.');
     * }
     *
     * const chartInfo = fBoard
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setContainer(containerId)
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     * await fBoard.insertChart(chartInfo);
     * ```
     */
    setContainer(containerId?: string): this;
    /**
     * Sets or clears the swimlane lane that will own the inserted Board Chart.
     *
     * Call {@link setContainer} with the owning swimlane identifier when setting a lane.
     *
     * @param {string} [laneId] The swimlane lane identifier. Pass `undefined` to clear the lane assignment.
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const swimlaneId = `chart-swimlane-${Date.now()}`;
     * if (!fBoard.createSwimlane({
     *   id: swimlaneId,
     *   left: 80,
     *   top: 80,
     *   width: 800,
     *   height: 500,
     *   title: 'Sales workflow',
     *   lanes: [{ id: 'reporting', title: 'Reporting' }],
     * })) {
     *   throw new Error('Cannot create chart swimlane.');
     * }
     *
     * const chartInfo = fBoard
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setContainer(swimlaneId)
     *   .setLane('reporting')
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     * await fBoard.insertChart(chartInfo);
     * ```
     */
    setLane(laneId?: string): this;
    /**
     * Sets the insertion index of the Chart in the Board element order.
     *
     * @param {number} index The zero-based insertion index in the Board element order.
     * @returns {this} This Builder for chaining.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const chartInfo = fBoard
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setZOrder(0)
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     * await fBoard.insertChart(chartInfo);
     * ```
     */
    setZOrder(index: number): this;
}
/**
 * A detached, type-specific Chart Builder composed with Board-only insertion methods.
 *
 * The selected Chart type controls which type-specific configuration methods are available. Calling `build()`
 * returns complete Board Chart information that can be passed to `FBoard.insertChart()` or `FBoardChart.update()`.
 *
 * @example
 * ```javascript
 * const fBoard = univerAPI.getActiveBoard();
 * const chartInfo = fBoard
 *   .newChart(univerAPI.Enum.ChartTypeString.Pie)
 *   .setSource([
 *     ['Category', 'Value'],
 *     ['Hardware', 45],
 *     ['Software', 55],
 *   ])
 *   .setAbsolutePosition(120, 80)
 *   .setSize(640, 360)
 *   .setTitle('Revenue mix')
 *   .setDoughnutHole(0.4)
 *   .build();
 * await fBoard.insertChart(chartInfo);
 * ```
 */
export type FBoardChartBuilderOf<T extends ChartTypeString> = HostComposedChartBuilder<IChartBuilderTypeMap<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IChartDataSourceInput, IBoardChartInfo>[T], IBoardChartMethods>;
/** @ignore */
export interface IFBoardChartMixin {
    /**
     * Creates a detached, type-specific Chart Builder for this Board.
     *
     * @param {ChartTypeString} type The Chart type to create.
     * @returns {FBoardChartBuilderOf<T>} A detached Builder that produces insertable Board Chart information.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const chartInfo = fBoard
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     *
     * const fChart = await fBoard.insertChart(chartInfo);
     * console.log(fChart.getId(), fChart.getElementId());
     * ```
     */
    newChart<T extends ChartTypeString>(type: T): FBoardChartBuilderOf<T>;
    /**
     * Inserts a Chart into this Board from detached Chart information.
     *
     * @param {IBoardChartInfo} info The configuration, data source, placement, and ownership produced by a Board Chart Builder.
     * @returns {Promise<FBoardChart>} A live facade for the inserted Board Chart.
     * @throws {Error} If the data source or size is invalid, a reference cannot be resolved, or insertion fails.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const chartInfo = fBoard
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource([
     *     ['Quarter', 'Sales'],
     *     ['Q1', 120],
     *     ['Q2', 180],
     *   ])
     *   .setAbsolutePosition(120, 80)
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     *
     * const fChart = await fBoard.insertChart(chartInfo);
     * fChart.setSubtitle('FY 2026');
     * ```
     */
    insertChart(info: IBoardChartInfo): Promise<FBoardChart>;
    /**
     * Returns a Board Chart by its Chart resource id or Board element id.
     *
     * @param {string} chartIdOrElementId A Chart resource id or Board element id.
     * @returns {FBoardChart | null} The live Board Chart facade, or `null` if it does not exist.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const fChart = fBoard.getChart('chart-1234');
     * console.log(fChart?.getInfo());
     * ```
     */
    getChart(chartIdOrElementId: string): FBoardChart | null;
    /**
     * Returns all Charts in this Board.
     *
     * @returns {FBoardChart[]} Live Chart facades in Board element order.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const fCharts = fBoard.getCharts();
     * fCharts.forEach((fChart) => {
     *   console.log(fChart.getId(), fChart.getElementId(), fChart.getInfo());
     * });
     * ```
     */
    getCharts(): FBoardChart[];
}
/** @ignore */
export declare class FBoardChartMixin extends FBoard implements IFBoardChartMixin {
    newChart<T extends ChartTypeString>(type: T): FBoardChartBuilderOf<T>;
    insertChart(info: IBoardChartInfo): Promise<FBoardChart>;
    getChart(chartIdOrElementId: string): FBoardChart | null;
    getCharts(): FBoardChart[];
    private _elements;
    private _hasCompleteResource;
    private _getStoragePageId;
    private _resolveReferencedValues;
}
declare module '@univerjs-pro/boards/facade' {
    interface FBoard extends IFBoardChartMixin {
    }
}
