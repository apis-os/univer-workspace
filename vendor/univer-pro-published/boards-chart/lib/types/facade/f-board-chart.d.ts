import type { IBoardChartElement } from '@univerjs-pro/boards';
import type { IBoardChartInfo } from '@univerjs-pro/boards-chart';
import type { FBoard } from '@univerjs-pro/boards/facade';
import type { ChartDataSourceValue, IChartDataSourceInput, IChartResourceDataSource, IChartResourceSnapshot, IResourceRefChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { Injector } from '@univerjs/core';
import type { IBoardChartMethods } from './f-board';
import { FChart } from '@univerjs-pro/engine-chart/facade';
/**
 * Live facade for an inserted Board Chart element.
 *
 * Use the inherited shortcut methods to update one property immediately. Use `toBuilder()` when several
 * properties should be changed together, then pass the built Board Chart information to `update()`.
 *
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
 * const fChart = await fBoard.insertChart(chartInfo);
 *
 * fChart
 *   .setSubtitle('FY 2026')
 *   .setAbsolutePosition(160, 100)
 *   .setSize(720, 400);
 * await fChart.setDataSource([
 *   ['Quarter', 'Sales'],
 *   ['Q3', 210],
 *   ['Q4', 260],
 * ]);
 *
 * const updatedInfo = fChart
 *   .toBuilder(univerAPI.Enum.ChartTypeString.Pie)
 *   .setTitle('Second-half sales')
 *   .setDoughnutHole(0.4)
 *   .build();
 * await fChart.update(updatedInfo);
 * ```
 *
 * @hideconstructor
 */
export declare class FBoardChart extends FChart<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IChartDataSourceInput, IBoardChartInfo, IBoardChartMethods> {
    private readonly _board;
    /** The identifier of the Board that owns this Chart. */
    readonly unitId: string;
    /** The stable Board element identifier that hosts this Chart. */
    readonly elementId: string;
    /** The stable Chart resource identifier. */
    readonly chartId: string;
    constructor(_board: FBoard, _injector: Injector, params: {
        elementId: string;
        chartId: string;
    });
    /**
     * Returns the stable Board element identifier that hosts this Chart.
     *
     * @returns {string} The Board element identifier.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const fChart = fBoard.getCharts()[0];
     * console.log(fChart?.getElementId());
     * ```
     */
    getElementId(): string;
    /**
     * Returns the current Board Chart element snapshot.
     *
     * @returns {IBoardChartElement | null} The Chart element, or `null` if it no longer exists.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const fChart = fBoard.getCharts()[0];
     * console.log(fChart?.getElement());
     * ```
     */
    getElement(): IBoardChartElement | null;
    /**
     * Returns the current Chart resource snapshot stored by the Board.
     *
     * @returns {IChartResourceSnapshot | null} The Chart resource, or `null` if it no longer exists.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const fChart = fBoard.getCharts()[0];
     * console.log(fChart?.getChart());
     * ```
     */
    getChart(): IChartResourceSnapshot | null;
    /**
     * Returns the current Chart data-source resource stored by the Board.
     *
     * @returns {IChartResourceDataSource | null} The data-source resource, or `null` if it no longer exists.
     * @example
     * ```javascript
     * const fBoard = univerAPI.getActiveBoard();
     * const fChart = fBoard.getCharts()[0];
     * console.log(fChart?.getDataSource());
     * ```
     */
    getDataSource(): IChartResourceDataSource | null;
}
