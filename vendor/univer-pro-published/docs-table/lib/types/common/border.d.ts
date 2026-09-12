import type { IDocumentData, ITableCellBorder, JSONXActions } from '@univerjs/core';
import type { IDocsTableCellRange } from './type';
export declare enum DocsTableBorderPreset {
    All = "all",
    Inner = "inner",
    Outer = "outer",
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
    None = "none",
    InnerHorizontal = "innerHorizontal",
    InnerVertical = "innerVertical"
}
export interface ISetTableBorderActionParams extends IDocsTableCellRange {
    documentData: IDocumentData;
    tableId: string;
    preset: DocsTableBorderPreset;
    border?: ITableCellBorder;
}
export interface ISetTableBorderActionResult {
    nextDocumentData: IDocumentData;
}
export interface ISetTableCellBackgroundActionParams extends IDocsTableCellRange {
    documentData: IDocumentData;
    tableId: string;
    color: string | null;
}
export type TTableBorderStylePatch = Partial<ITableCellBorder> & {
    clearColor?: boolean;
};
export interface IUpdateTableBorderStyleActionParams extends IDocsTableCellRange {
    documentData: IDocumentData;
    tableId: string;
    border: TTableBorderStylePatch;
}
export declare function buildSetTableBorderActions(params: ISetTableBorderActionParams): ISetTableBorderActionResult;
export declare function buildSetTableBorderMutationActions(params: ISetTableBorderActionParams): JSONXActions | null;
export declare function buildSetTableCellBackgroundActions(params: ISetTableCellBackgroundActionParams): ISetTableBorderActionResult;
export declare function buildUpdateTableBorderStyleActions(params: IUpdateTableBorderStyleActionParams): ISetTableBorderActionResult;
export declare function buildUpdateTableBorderStyleMutationActions(params: IUpdateTableBorderStyleActionParams): JSONXActions | null;
