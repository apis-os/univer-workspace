import type { IDocumentData } from '@univerjs/core';
export interface IDocsCodeConfig {
    language: string;
    showLineNumbers: boolean;
    tabSize: number;
    wrap: boolean;
}
export interface IDocsCodeMetadataResource {
    codes: Record<string, IDocsCodeConfig>;
}
export interface IDocsCodeActionBuildResult {
    nextDocumentData: IDocumentData;
    nextMetadata?: IDocsCodeMetadataResource;
    cursorOffset: number;
}
