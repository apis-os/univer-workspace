import type { ICustomShapeTextData, IShapeTextBodyBehavior } from '@univerjs-pro/engine-shape';
import type { IDocumentData, ITextStyle } from '@univerjs/core';
import { ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType } from '@univerjs-pro/engine-shape';
import { HorizontalAlign, VerticalAlign, WrapStrategy } from '@univerjs/core';
export declare const BOARD_TEXT_BOX_TEXT_WRAP = ShapeTextWrapType.None;
export declare const BOARD_TEXT_BOX_AUTO_FIT_TYPE = ShapeTextAutoFitType.SpAutoFit;
export declare function createBoardTextBoxShapeTextBehavior(textWrap?: ShapeTextWrapType): IShapeTextBodyBehavior;
export interface ICreateBoardTextBoxShapeTextDataOptions {
    bold?: boolean;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    horizontal?: boolean;
    horizontalAlign?: HorizontalAlign;
    id?: string;
    italic?: boolean;
    strikethrough?: boolean;
    text: string;
    textFill?: ITextStyle['textFill'];
    textStyle?: ITextStyle;
    textWrap?: ShapeTextWrapType;
    underline?: boolean;
    verticalAlign?: VerticalAlign;
    wrapStrategy?: WrapStrategy;
}
interface IBoardShapeTextStyleLike {
    bold?: boolean;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    italic?: boolean;
    strikethrough?: boolean;
    textFill?: ITextStyle['textFill'];
    underline?: boolean;
}
export declare function shapeTextToBoardDocumentTextStyle(shapeTextData: unknown): ITextStyle;
export declare function documentTextStyleToBoardShapeTextStyle(textStyle: ITextStyle | undefined): Partial<IBoardShapeTextStyleLike>;
export declare function createBoardTextBoxShapeTextData(options: ICreateBoardTextBoxShapeTextDataOptions): ICustomShapeTextData & {
    bold?: boolean;
    color?: string;
    dataModel: {
        doc: IDocumentData;
        ha: HorizontalAlign;
        va: VerticalAlign;
    };
    fontFamily?: string;
    fontSize?: number;
    horizontalAlign: HorizontalAlign;
    italic?: boolean;
    strikethrough?: boolean;
    text: string;
    textDirection: ShapeTextDirection;
    textFill?: ITextStyle['textFill'];
    underline?: boolean;
    verticalAlign: VerticalAlign;
};
export {};
