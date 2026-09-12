import type { HorizontalAlign, IDocumentData, ITextStyle, VerticalAlign, WrapStrategy } from '@univerjs/core';
export interface ICreateBoardShapeTextDocumentOptions {
    horizontalAlign: HorizontalAlign;
    id?: string;
    text: string;
    textStyle?: ITextStyle;
    verticalAlign: VerticalAlign;
    wrapStrategy: WrapStrategy;
}
export declare function createBoardShapeTextDocument(options: ICreateBoardShapeTextDocumentOptions): IDocumentData;
