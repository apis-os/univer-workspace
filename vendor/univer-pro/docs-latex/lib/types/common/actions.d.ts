import type { ICustomRange, IDocumentData } from '@univerjs/core';
import type { IDocsLatexActionBuildResult, IDocsLatexFormulaProperties, IDocsLatexMetadataResource } from './type';
export declare const DOCS_LATEX_CUSTOM_RANGE_KIND = "univer-docs-latex-formula";
export declare class InvalidLatexInsertRangeError extends Error {
    constructor();
}
export interface IInsertLatexFormulaActionParams {
    documentData: IDocumentData;
    metadata?: IDocsLatexMetadataResource;
    rangeId: string;
    latex: string;
    startOffset?: number;
    endOffset?: number;
    properties?: Partial<IDocsLatexFormulaProperties>;
}
export interface IUpdateLatexFormulaActionParams {
    documentData: IDocumentData;
    metadata?: IDocsLatexMetadataResource;
    rangeId: string;
    latex: string;
    properties?: Partial<IDocsLatexFormulaProperties>;
}
export interface IRemoveLatexFormulaActionParams {
    documentData: IDocumentData;
    metadata?: IDocsLatexMetadataResource;
    rangeId: string;
    text?: string;
}
export declare function buildInsertLatexFormulaActions(params: IInsertLatexFormulaActionParams): IDocsLatexActionBuildResult;
export declare function buildUpdateLatexFormulaActions(params: IUpdateLatexFormulaActionParams): IDocsLatexActionBuildResult | null;
export declare function buildRemoveLatexFormulaActions(params: IRemoveLatexFormulaActionParams): IDocsLatexActionBuildResult | null;
export declare function getFormulaLatexFromRange(range: ICustomRange, dataStream: string): string;
export declare function isDocsLatexFormulaRange(range: ICustomRange | undefined | null): range is ICustomRange;
