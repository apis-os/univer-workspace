export type ChartInlineCellValue = string | number | boolean | null;
export interface IChartInlineTableEditorProps<T extends ChartInlineCellValue = ChartInlineCellValue> {
    onChange: (values: T[][]) => void;
    parsePastedText: (text: string) => T[][];
    values: T[][];
    minColumns?: number;
    minRows?: number;
}
export declare function coerceInlineTableCell(value: string): ChartInlineCellValue;
export declare function normalizeInlineTableValues<T extends ChartInlineCellValue>(values: T[][], minRows?: number, minColumns?: number): T[][];
export declare function appendInlineTableRow<T extends ChartInlineCellValue>(values: T[][]): T[][];
export declare function appendInlineTableColumn<T extends ChartInlineCellValue>(values: T[][]): T[][];
export declare function compactInlineTableValues<T extends ChartInlineCellValue>(values: T[][]): T[][];
/**
 * Replaces an inline-table adapter's data with the complete pasted matrix.
 * The matrix follows the starter-data contract: downstream host adapters interpret
 * row 0 as field names (`dimensions`) and all remaining rows as observations.
 */
export declare function applyInlineTablePaste<T extends ChartInlineCellValue>(pastedText: string, parsePastedText: (text: string) => T[][], minRows?: number, minColumns?: number): T[][] | null;
export declare function ChartInlineTableEditor<T extends ChartInlineCellValue>(props: IChartInlineTableEditorProps<T>): import("react").JSX.Element;
