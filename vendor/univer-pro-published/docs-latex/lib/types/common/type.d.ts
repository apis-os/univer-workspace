import type { IDocumentData, ITextRangeParam } from '@univerjs/core';
export type DocsLatexFormulaKind = 'inline';
export type DocsLatexFormulaDisplayMode = 'inline';
export interface IDocsLatexFormulaProperties {
    displayMode: DocsLatexFormulaDisplayMode;
    kind: DocsLatexFormulaKind;
}
export interface IDocsLatexFormulaConfig extends IDocsLatexFormulaProperties {
    latex: string;
}
export interface IDocsLatexMetadataResource {
    formulas: Record<string, IDocsLatexFormulaConfig>;
}
export interface IDocsLatexActionBuildResult {
    nextDocumentData: IDocumentData;
    nextMetadata?: IDocsLatexMetadataResource;
    cursorOffset: number;
}
export interface IDocsLatexInsertCommandParams {
    unitId?: string;
    latex: string;
    startOffset?: number;
    endOffset?: number;
    selection?: ITextRangeParam;
    segmentId?: string;
    properties?: Partial<IDocsLatexFormulaProperties>;
}
export interface IDocsLatexInsertCommandResult {
    endOffset: number;
    rangeId: string;
    segmentId: string;
    startOffset: number;
}
export interface IDocsLatexUpdateCommandParams {
    unitId?: string;
    rangeId: string;
    segmentId?: string;
    latex: string;
    properties?: Partial<IDocsLatexFormulaProperties>;
}
export interface IDocsLatexRemoveCommandParams {
    unitId?: string;
    rangeId: string;
    segmentId?: string;
}
export interface IDocsLatexReplaceWithTextCommandParams extends IDocsLatexRemoveCommandParams {
    text: string;
}
