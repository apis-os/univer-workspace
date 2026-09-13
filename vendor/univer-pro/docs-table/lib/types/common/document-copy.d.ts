import type { IDocumentData } from '@univerjs/core';
interface IEditableDocumentCopyOptions {
    cloneBody?: boolean;
    tableIds?: string[];
}
export declare function createEditableDocumentDataCopy(documentData: IDocumentData, options?: IEditableDocumentCopyOptions): IDocumentData;
export {};
