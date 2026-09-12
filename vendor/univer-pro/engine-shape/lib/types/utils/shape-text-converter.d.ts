import type { IDocumentData, ITextStyle } from '@univerjs/core';
import type { ICustomShapeTextData, IShapeData, IShapeTextData } from '../shape-type';
import { HorizontalAlign, RichTextValue, VerticalAlign } from '@univerjs/core';
export interface IShapeTextAlignmentOptions {
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
}
export declare function applyShapeTextAlignment(shapeData: IShapeData, options: IShapeTextAlignmentOptions): IShapeData;
export declare function shapeTextToRichTextValue(shapeText: IShapeTextData | undefined): RichTextValue | null;
export declare function applyRichTextToShapeText(current: IShapeTextData | undefined, richText: RichTextValue): ICustomShapeTextData;
export declare function applyTextToShapeText(current: IShapeTextData | undefined, text: string): ICustomShapeTextData;
export declare function applyShapeTextStyle(current: IShapeTextData | undefined, style: ITextStyle): ICustomShapeTextData;
export declare function applyDocumentToShapeText(current: IShapeTextData | undefined, documentData: IDocumentData): ICustomShapeTextData;
export declare function normalizeShapeTextData(shapeText: IShapeTextData | undefined): ICustomShapeTextData | null;
