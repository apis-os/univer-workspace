import type { ICommand, IDocumentData } from '@univerjs/core';
export interface IInsertDocColumnGroupCommandParams {
    unitId?: string;
    offset?: number;
    columnCount?: number;
    columnGroupId?: string;
    columnIds?: string[];
    gap?: number;
    value?: string | number;
    widthRatios?: number[];
}
export declare const InsertDocColumnGroupCommand: ICommand<IInsertDocColumnGroupCommandParams>;
export declare function canResolveDocsColumnInsertOffset(documentData: IDocumentData | null | undefined, offset: number | null | undefined): boolean;
export declare function normalizeDocsColumnInsertOffset(documentData: IDocumentData, offset: number, options?: {
    snapToParagraphEnd?: boolean;
}): number;
