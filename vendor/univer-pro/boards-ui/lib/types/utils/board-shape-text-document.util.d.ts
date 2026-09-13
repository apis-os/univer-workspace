import type { IDocumentData, ITextStyle } from '@univerjs/core';
import { HorizontalAlign, VerticalAlign, WrapStrategy } from '@univerjs/core';
export interface IBoardPlainTextToDocumentOptions {
    horizontalAlign?: HorizontalAlign;
    id?: string;
    textStyle?: ITextStyle;
    verticalAlign?: VerticalAlign;
    wrapStrategy?: WrapStrategy;
}
export declare function plainTextToBoardDocumentData(text: string, options?: IBoardPlainTextToDocumentOptions): IDocumentData;
export declare function cloneBoardTextDocument(editorId: string, documentData: IDocumentData): IDocumentData;
export declare function documentDataToBoardPlainText(documentData: IDocumentData): string;
