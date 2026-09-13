import type { IDocumentData, ITextStyle } from '@univerjs/core';
import type { IEditorUIDocumentLayout } from '../types';
import { WrapStrategy } from '@univerjs/core';
export interface IPrepareEditorUIDocumentOptions extends Pick<IEditorUIDocumentLayout, 'rect' | 'horizontalAlign' | 'verticalAlign' | 'isHorizontal'> {
    wrapStrategy?: WrapStrategy;
}
export interface IEditorUITextStyleOptions {
    fontFamily?: string;
    fontSize?: number;
    textColor?: string | null;
    textBackgroundColor?: string | null;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
}
export declare function getEditorUITextStyle(options: IEditorUITextStyleOptions): ITextStyle;
export declare function applyEditorUIDocumentAlignment(documentData: IDocumentData, options: Pick<IEditorUIDocumentLayout, 'horizontalAlign' | 'verticalAlign'>): IDocumentData;
export declare function applyEditorUIDocumentTextStyle(documentData: IDocumentData, options: IEditorUITextStyleOptions): IDocumentData;
export declare function shouldKeepEditorUIEnterInDoc(documentData: IDocumentData): boolean;
export declare function prepareEditorUIDocumentData(documentData: IDocumentData, options: IPrepareEditorUIDocumentOptions): IDocumentData;
export declare function stripEditorUIDocumentData(documentData: IDocumentData): IDocumentData;
