import type { ChartTypeString, IChartCreateConfig, IChartInfo, IChartDescription as IEngineChartDescription } from '@univerjs-pro/engine-chart';
import type { IRange } from '@univerjs/core';
export declare enum ChartSourceOrientation {
    Auto = "auto",
    Row = "row",
    Column = "column",
    Rows = "rows",
    Columns = "columns",
    RowsAsSeries = "rowsAsSeries",
    ColumnsAsSeries = "columnsAsSeries"
}
export declare enum ChartSourceKind {
    Range = "range",
    Ranges = "ranges"
}
export type ChartRangeSpec = string | IRange;
export interface IChartSourceVectorSpec {
    /** One row or one column of values. All vectors are aligned by position. */
    range: ChartRangeSpec;
    /** Optional single-cell display name. It never consumes a value from `range`. */
    header?: ChartRangeSpec;
}
interface IChartSourceLocationSpec {
    sheetName?: string;
    sheetId?: string;
    unitId?: string;
    orientation?: ChartSourceOrientation;
}
/**
 * Chart data from either one rectangular table or explicit positional vectors.
 * Exactly one of `range` and `ranges` may be provided.
 *
 * @example Single rectangular table
 * ```ts
 * {
 *   sheetName: 'Sales',
 *   range: 'H16:M32',
 *   orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   headerRow: 4,
 * }
 * ```
 * `headerRow` is a zero-based offset from the source range start. Data begins
 * on the following row.
 *
 * @example Equal-length positional vectors with optional single-cell headers
 * ```ts
 * {
 *   sheetName: 'Sales',
 *   orientation: univerAPI.Enum.ChartSourceOrientation.Columns,
 *   ranges: [
 *     { header: 'A1', range: 'A2:A7' },
 *     { header: 'C1', range: 'C2:C7' },
 *   ],
 * }
 * ```
 * Vector array order defines mapping indexes. Vectors must have equal lengths
 * and a common row-or-column orientation; no join or padding is performed.
 */
export type ChartSourceSpec = ChartRangeSpec | (IChartSourceLocationSpec & {
    range: ChartRangeSpec;
    ranges?: never;
    headerRow?: number;
}) | (IChartSourceLocationSpec & {
    range?: never;
    ranges: readonly IChartSourceVectorSpec[];
    headerRow?: never;
});
export type ChartAnchorSpec = string | {
    row: number;
    column: number;
    rowOffset?: number;
    columnOffset?: number;
};
export interface IChartSizeSpec {
    width?: number;
    height?: number;
}
export interface IChartLayoutPatch {
    anchor?: ChartAnchorSpec;
    position?: {
        x: number;
        y: number;
    };
    size?: IChartSizeSpec;
}
export interface IChartCreateSpec extends IChartCreateConfig {
    source: ChartSourceSpec;
    anchor?: ChartAnchorSpec;
    position?: {
        x: number;
        y: number;
    };
    size?: IChartSizeSpec;
}
/** Detached Sheet Chart information produced by the Facade builder. */
export interface ISheetChartInfo extends IChartInfo<ChartSourceSpec> {
    anchor?: ChartAnchorSpec;
}
export declare enum ChartDiagnosticCode {
    InvalidRange = "INVALID_RANGE",
    SingleCellSource = "SINGLE_CELL_SOURCE",
    CommandFailed = "COMMAND_FAILED"
}
export declare enum ChartDiagnosticSeverity {
    Error = "error"
}
export declare enum ChartFacadeHostGroup {
    Source = "source",
    Layout = "layout"
}
export declare enum ChartFacadeCreateLayoutKey {
    Anchor = "anchor"
}
export interface IChartDiagnostic {
    code: ChartDiagnosticCode;
    severity: ChartDiagnosticSeverity;
    message: string;
    path?: string;
    details?: unknown;
    allowedValues?: readonly unknown[];
    suggestion?: string;
}
export interface IChartSuggestion {
    type: ChartTypeString;
    orientation: ChartSourceOrientation;
    reason?: string;
}
export interface IChartRangeSourceDescription {
    range: IRange;
    ranges?: never;
    headerRow?: number;
    sheetName?: string;
    sheetId: string;
    unitId: string;
    orientation: ChartSourceOrientation;
}
export interface IChartSourceVectorDescription {
    range: IChartRangeSourceDescription;
    header?: IChartRangeSourceDescription;
}
export interface IChartMultiRangeSourceDescription {
    range?: never;
    ranges: IChartSourceVectorDescription[];
    orientation: ChartSourceOrientation;
}
export type ChartSourceDescription = IChartRangeSourceDescription | IChartMultiRangeSourceDescription;
export interface IChartLayoutDescription {
    position?: {
        x: number;
        y: number;
    };
    size?: IChartSizeSpec;
    anchor?: {
        row: number;
        column: number;
        rowOffset?: number;
        columnOffset?: number;
    };
}
export interface IChartDescription extends IEngineChartDescription {
    identity: {
        unitId: string;
        subUnitId: string;
        chartId: string;
    };
    dataSource: {
        kind: ChartSourceKind;
        source: ChartSourceDescription | null;
    };
    source: ChartSourceDescription | null;
    layout?: IChartLayoutDescription;
}
export {};
