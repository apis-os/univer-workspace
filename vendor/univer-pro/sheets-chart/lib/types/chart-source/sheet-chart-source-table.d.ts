import type { IChartSourceTable } from '@univerjs-pro/engine-chart';
import type { IRange, ParseOptions, Styles, Worksheet } from '@univerjs/core';
export interface IBuildSheetChartSourceTableOptions {
    numfmtOptions: ParseOptions;
    range: IRange;
    styles: Styles;
    worksheet: Worksheet;
}
export declare function buildSheetChartSourceTable({ numfmtOptions, range, styles, worksheet, }: IBuildSheetChartSourceTableOptions): IChartSourceTable;
