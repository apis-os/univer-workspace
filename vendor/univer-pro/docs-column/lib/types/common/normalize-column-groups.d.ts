import type { IDocumentData } from '@univerjs/core';
export interface IDocsColumnNormalizeResult {
    nextDocumentData: IDocumentData;
    changed: boolean;
}
export declare function normalizeColumnGroups(documentData: IDocumentData): IDocsColumnNormalizeResult;
