import { ChartSourceOrientation } from '@univerjs-pro/sheets-chart';
import { FEnum } from '@univerjs/core/facade';
/** @ignore */
export interface IFSheetsChartEnumMixin {
    /**
     * Controls how a Sheet range is interpreted as Chart series.
     *
     * - `Auto` lets Sheet Chart infer the orientation from the selected range.
     * - `Row`, `Rows`, and `RowsAsSeries` are equivalent: each row is treated as a series.
     * - `Column`, `Columns`, and `ColumnsAsSeries` are equivalent: each column is treated as a series.
     *
     * Pass a value through `orientation` when calling a Sheet Chart builder's
     * `setSource()` method or a live Sheet Chart's `setDataSource()` method.
     *
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
     *   .build();
     *
     * await fWorksheet.insertChart(chartInfo);
     * ```
     */
    ChartSourceOrientation: typeof ChartSourceOrientation;
}
/** @ignore */
export declare class FSheetsChartEnumMixin extends FEnum implements IFSheetsChartEnumMixin {
    get ChartSourceOrientation(): typeof ChartSourceOrientation;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSheetsChartEnumMixin {
    }
}
