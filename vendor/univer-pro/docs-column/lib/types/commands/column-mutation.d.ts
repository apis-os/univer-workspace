import type { IAccessor, IDocumentData, JSONXActions } from '@univerjs/core';
import { ICommandService } from '@univerjs/core';
export interface IDocsColumnCommandContext {
    commandService: ICommandService;
    snapshot: IDocumentData;
    unitId: string;
}
export interface IDocsColumnTextRange {
    collapsed: boolean;
    endOffset: number;
    startOffset: number;
}
export declare function getDocsColumnCommandContext(accessor: IAccessor, unitId?: string): IDocsColumnCommandContext | null;
export declare function commitColumnActionsMutation(context: IDocsColumnCommandContext, actions: JSONXActions | null, textRanges?: IDocsColumnTextRange[]): boolean;
export interface IDocsColumnMutationActionResult {
    actions: JSONXActions;
    cursorOffset: number;
}
export interface IDocsColumnGroupInsertMutationOptions {
    columnCount: number;
    columnGroupId: string;
    columnIds: string[];
    gap?: number;
    offset: number;
    widthRatios?: number[];
}
export declare function buildResizeColumnGroupMutationActionsFromRatios(previousDocumentData: IDocumentData, columnGroupId: string, widthRatios: number[]): JSONXActions | null;
export declare function buildInsertColumnMutationActions(documentData: IDocumentData, columnGroupId: string, targetColumnId: string, position: 'left' | 'right', columnId: string): IDocsColumnMutationActionResult | null;
export declare function buildDeleteColumnMutationActions(documentData: IDocumentData, columnGroupId: string, columnId: string): IDocsColumnMutationActionResult | null;
export declare function buildInsertColumnGroupMutationActions(documentData: IDocumentData, options: IDocsColumnGroupInsertMutationOptions): IDocsColumnMutationActionResult | null;
export declare function buildDeleteColumnGroupMutationActions(documentData: IDocumentData, columnGroupId: string): IDocsColumnMutationActionResult | null;
export declare function buildNormalizeColumnGroupsMutationActions(documentData: IDocumentData): JSONXActions | null;
