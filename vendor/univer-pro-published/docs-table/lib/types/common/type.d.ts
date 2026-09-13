export declare enum DocsTableColumnType {
    Text = "text",
    Number = "number",
    Date = "date",
    Checkbox = "checkbox",
    Dropdown = "dropdown"
}
export interface IDocsTableDropdownOption {
    id: string;
    label: string;
    color?: string;
}
export interface IDocsTableColumnTypeConfig {
    type: DocsTableColumnType;
    dropdownOptions?: IDocsTableDropdownOption[];
}
export interface IDocsTableMetadata {
    titleRow?: boolean;
    headerRowCount?: number;
    columnTypes?: Record<number, IDocsTableColumnTypeConfig>;
}
export interface IDocsTableMetadataResource {
    tables: Record<string, IDocsTableMetadata>;
}
export declare enum DocsTableSelectionKind {
    None = "none",
    Text = "text",
    Cell = "cell",
    Range = "range",
    Row = "row",
    Column = "column",
    Table = "table"
}
export declare enum DocsTableSelectionSource {
    Rect = "rect",
    Structural = "structural",
    Text = "text"
}
export interface IDocsTableCellRange {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}
export interface IDocsTableSegmentOptions {
    segmentId?: string;
}
export interface IDocsTableSelection extends IDocsTableCellRange {
    kind: DocsTableSelectionKind;
    unitId: string;
    segmentId: string;
    tableId: string;
    startOffset: number;
    endOffset: number;
    source?: DocsTableSelectionSource;
}
