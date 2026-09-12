import type { ICustomRange, IDocumentBody, IDocumentData } from '@univerjs/core';
import type { IDocFormulaConfig, IDocFormulaResource } from './type';
export declare class InvalidDocFormulaInsertRangeError extends Error {
    constructor();
}
export interface IDocFormulaActionBuildResult {
    nextDocumentData: IDocumentData;
    nextResource: IDocFormulaResource;
    cursorOffset: number;
}
export interface IInsertDocFormulaActionParams {
    documentData: IDocumentData;
    resource?: IDocFormulaResource;
    rangeId: string;
    config: IDocFormulaConfig;
    startOffset?: number;
    endOffset?: number;
}
export interface IUpdateDocFormulaActionParams {
    documentData: IDocumentData;
    resource?: IDocFormulaResource;
    rangeId: string;
    config: IDocFormulaConfig;
}
export interface IRemoveDocFormulaActionParams {
    documentData: IDocumentData;
    resource?: IDocFormulaResource;
    rangeId: string;
    text?: string;
}
export interface IDocFormulaTextReplacement {
    rangeId: string;
    text: string;
}
export declare function buildInsertDocFormulaActions(params: IInsertDocFormulaActionParams): IDocFormulaActionBuildResult;
export declare function buildUpdateDocFormulaActions(params: IUpdateDocFormulaActionParams): IDocFormulaActionBuildResult | null;
export declare function buildRemoveDocFormulaActions(params: IRemoveDocFormulaActionParams): IDocFormulaActionBuildResult | null;
export declare function buildDocFormulaTextProjection(documentData: IDocumentData, replacements: readonly IDocFormulaTextReplacement[]): IDocumentData;
export declare function isDocFormulaRange(range: ICustomRange | undefined | null): range is ICustomRange;
export declare function findDocFormulaRange(body: IDocumentBody | undefined, rangeId: string): ICustomRange | undefined;
export declare function assertSafeDocFormulaInsertRange(body: IDocumentBody, startOffset: number, endOffset: number): void;
