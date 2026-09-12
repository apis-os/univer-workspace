import type { ITableJson } from '@univerjs/sheets-table';
export declare enum ResponseDataMode {
    /** none - no data, default */
    None = "none",
    /** all - all data */
    All = "all",
    /** sample - sample data */
    Sample = "sample"
}
export interface ITableJsonWidthData extends ITableJson {
    data?: string | undefined;
}
