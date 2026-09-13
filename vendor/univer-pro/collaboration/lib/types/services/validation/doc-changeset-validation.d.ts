import type { IDocumentBody, IDocumentData } from '@univerjs/core';
export interface IDocBodyValidationResult {
    ok: boolean;
    errors: string[];
}
export declare function validateDocBodyAfterApply(body: IDocumentBody): IDocBodyValidationResult;
export declare function validateDocumentAfterApply(snapshot: Pick<IDocumentData, 'body' | 'headers' | 'footers' | 'tableSource'>): IDocBodyValidationResult;
