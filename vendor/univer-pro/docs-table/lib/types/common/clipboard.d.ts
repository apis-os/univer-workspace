import type { IDocumentData, JSONXActions } from '@univerjs/core';
import type { IDocsTableCellRange } from './type';
export interface ITableClipboardParams extends IDocsTableCellRange {
    documentData: IDocumentData;
    tableId: string;
}
export interface IPastePlainTextTableParams extends ITableClipboardParams {
    text: string;
}
export interface IPastePlainTextTableResult {
    nextDocumentData: IDocumentData;
}
export interface IPasteHtmlTableParams extends ITableClipboardParams {
    html: string;
}
export interface IPasteHtmlTableResult {
    nextDocumentData: IDocumentData;
}
export interface IParsedHtmlTableCell {
    html: string;
    text: string;
    rowSpan: number;
    colSpan: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
}
export interface IParsedHtmlTableRow {
    cells: Array<IParsedHtmlTableCell | null>;
    height?: number;
}
export interface IParsedHtmlTableClipboard {
    rows: IParsedHtmlTableRow[];
    columnWidths: Array<number | undefined>;
}
export declare function parseHtmlTablesClipboard(html: string): IParsedHtmlTableClipboard[];
export declare function convertPlainTextTableToHtml(text: string): string | null;
export declare function serializeTableSelectionAsPlainText(params: ITableClipboardParams): string;
export declare function serializeTableSelectionAsHtml(params: ITableClipboardParams): string;
export declare function buildPastePlainTextTableActions(params: IPastePlainTextTableParams): IPastePlainTextTableResult;
export declare function buildPastePlainTextTableMutationActions(params: IPastePlainTextTableParams, bodyPath?: string[]): JSONXActions | null;
export declare function buildPasteHtmlTableActions(params: IPasteHtmlTableParams): IPasteHtmlTableResult;
export declare function parseHtmlTableClipboard(html: string): IParsedHtmlTableClipboard;
