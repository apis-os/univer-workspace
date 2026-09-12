import type { ShapeTextHorizontalAnchor } from '@univerjs-pro/engine-shape';
import type { IDocumentData } from '@univerjs/core';
import { ShapeTextWrapType } from '@univerjs-pro/engine-shape';
import { HorizontalAlign } from '@univerjs/core';
export interface IShapeTextNoWrapRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IShapeTextNoWrapLayout {
    contentWidth: number;
    measureAsNoWrap: boolean;
    textRect: IShapeTextNoWrapRect;
}
export interface IResolveShapeTextNoWrapLayoutOptions {
    documentData?: IDocumentData;
    horizontalAlign?: HorizontalAlign;
    horizontalAnchor?: ShapeTextHorizontalAnchor;
    isHorizontal?: boolean;
    textRect: IShapeTextNoWrapRect;
    textWrap?: ShapeTextWrapType;
    widthBuffer?: number;
}
export declare function resolveShapeTextNoWrapLayout(options: IResolveShapeTextNoWrapLayoutOptions): IShapeTextNoWrapLayout;
