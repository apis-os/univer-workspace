import type { IDocumentData } from '@univerjs/core';
export declare function isShapeTextEditorDocumentEmpty(documentData: IDocumentData | null | undefined): boolean;
export declare function createShapeTextPlaceholderDocumentData(options: {
    documentData?: IDocumentData;
    isTextBox: boolean;
    placeholder: string;
    showPlaceholder?: boolean;
    text?: string;
}): IDocumentData | undefined;
