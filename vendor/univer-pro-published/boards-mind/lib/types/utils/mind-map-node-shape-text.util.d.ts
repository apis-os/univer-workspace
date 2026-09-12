import type { HorizontalAlign, IDocumentData, ITextStyle, VerticalAlign } from '@univerjs/core';
export declare function buildMindMapNodeTextStyle(shapeText: Record<string, unknown>, textStyle?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    textFill?: ITextStyle['textFill'];
}): ITextStyle;
export declare function createMindMapNodeShapeTextData(options: {
    currentDataModel?: Record<string, unknown>;
    documentData?: IDocumentData;
    horizontalAlign: HorizontalAlign;
    shapeText: Record<string, unknown>;
    text: string;
    textStyle: ITextStyle;
    verticalAlign: VerticalAlign;
}): Record<string, unknown>;
