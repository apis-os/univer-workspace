import type { ChartTypeString } from '@univerjs-pro/engine-chart';
import type { HostComposedChartBuilder, IChartBuilderTypeMap } from '@univerjs-pro/engine-chart/facade';
import type { ChartAnchorSpec, ChartSourceSpec, ISheetChartInfo } from '@univerjs-pro/sheets-chart';
import { FWorksheet } from '@univerjs/sheets/facade';
import { FSheetChart } from './f-chart';
/** Sheet-only methods composed onto every Sheet Chart Builder. */
export interface ISheetChartMethods {
    /**
     * Sets the cell anchor used when inserting the Chart.
     * @param {ChartAnchorSpec} anchor A1 notation or a zero-based row/column anchor with optional offsets.
     * @returns {this} This Builder for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     *
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource({
     *     range: 'A1:D8',
     *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
     *   })
     *   .setPosition({
     *     row: 1,
     *     column: 5,
     *     rowOffset: 10,
     *     columnOffset: 20,
     *   })
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    setPosition(anchor: ChartAnchorSpec): this;
}
/** A type-specific Chart Builder composed with Sheet-only insertion methods. */
export type FSheetChartBuilderOf<T extends ChartTypeString> = HostComposedChartBuilder<IChartBuilderTypeMap<ChartSourceSpec, ChartSourceSpec, ISheetChartInfo>[T], ISheetChartMethods>;
/** @ignore */
export interface IFWorksheetChartMixin {
    /**
     * Creates a detached, type-specific Chart builder for this worksheet.
     *
     * @param {ChartTypeString} type The Chart type to create.
     * @returns {FSheetChartBuilderOf<T>} A detached builder that produces insertable Sheet Chart information.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     *
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Column)
     *   .setSource({
     *     range: 'A1:D8',
     *     orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
     *   })
     *   .setPosition('F2')
     *   .setSize(640, 360)
     *   .setTitle('Quarterly sales')
     *   .build();
     *
     * const fChart = await fWorksheet.insertChart(chartInfo);
     * console.log(fChart.getId());
     * ```
     */
    newChart<T extends ChartTypeString>(type: T): FSheetChartBuilderOf<T>;
    /**
     * Inserts a Chart into this worksheet from detached Chart information.
     *
     * @param {ISheetChartInfo} info The Chart configuration, Sheet data source, and optional placement produced by a Chart builder.
     * @returns {Promise<FSheetChart>} A live facade for the inserted Sheet Chart.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     *
     * const chartInfo = fWorksheet
     *   .newChart(univerAPI.Enum.ChartTypeString.Pie)
     *   .setSource('A1:B8')
     *   .setPosition('D2')
     *   .setSize(480, 320)
     *   .setDoughnutHole(0.4)
     *   .build();
     *
     * const fChart = await fWorksheet.insertChart(chartInfo);
     * fChart.setPosition('E3');
     * ```
     */
    insertChart(info: ISheetChartInfo): Promise<FSheetChart>;
    /**
     * Returns a Chart on this worksheet by its stable Chart identifier.
     *
     * @param {string} chartId The identifier returned by {@link FSheetChart.getId}.
     * @returns {FSheetChart | null} A live Sheet Chart facade, or `null` if the Chart does not exist on this worksheet.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     *
     * const firstChart = fWorksheet.getCharts()[0];
     * const fChart = firstChart ? fWorksheet.getChart(firstChart.getId()) : null;
     * console.log(fChart?.getInfo());
     * ```
     */
    getChart(chartId: string): FSheetChart | null;
    /**
     * Returns all Charts on this worksheet.
     *
     * @returns {FSheetChart[]} Live Sheet Chart facades in the worksheet's model order.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getSheetByName('Sheet1');
     *
     * const fCharts = fWorksheet.getCharts();
     * fCharts.forEach((fChart) => {
     *   console.log(fChart.getId(), fChart.getInfo());
     * });
     * ```
     */
    getCharts(): FSheetChart[];
}
/** @ignore */
export declare class FWorksheetChartMixin extends FWorksheet implements IFWorksheetChartMixin {
    newChart<T extends ChartTypeString>(type: T): FSheetChartBuilderOf<T>;
    insertChart(info: ISheetChartInfo): Promise<FSheetChart>;
    getChart(chartId: string): FSheetChart | null;
    getCharts(): FSheetChart[];
    private _chartSourceContext;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetChartMixin {
    }
}
