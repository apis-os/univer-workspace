import type { IDocumentData } from '@univerjs/core';
export interface IDocsColumnDowngradeOptions {
    tableIdFactory?: (columnGroupId: string) => string;
}
export interface IDocsColumnDowngradeResult {
    nextDocumentData: IDocumentData;
    tableIdsByColumnGroupId: Record<string, string>;
}
export declare function downgradeColumnGroupsToTables(documentData: IDocumentData, options?: IDocsColumnDowngradeOptions): IDocsColumnDowngradeResult;
