import type { IShapeData, IShapeTextBoxOptions, IShapeTextRectPadding, ShapeTextHorizontalAnchor } from '../shape-type';
import { ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType } from '../shape-type';
export interface IResolvedShapeTextBodyBehavior {
    autoFitType: ShapeTextAutoFitType;
    fontScale?: number;
    horizontalAnchor?: ShapeTextHorizontalAnchor;
    isTextBox: boolean;
    lineSpaceReduction?: number;
    textRectPadding: IShapeTextRectPadding;
    textWrap: ShapeTextWrapType;
}
export interface IResolvedShapeTextBoxOptions {
    textDirection: ShapeTextDirection;
    autoFitType: ShapeTextAutoFitType;
    textWrap: ShapeTextWrapType;
    padding: IShapeTextRectPadding;
}
export declare function resolveShapeTextBodyBehavior(shapeData: IShapeData): IResolvedShapeTextBodyBehavior;
export declare function resolveShapeTextBoxOptions(shapeData: IShapeData): IResolvedShapeTextBoxOptions;
export declare function applyShapeTextBoxOptions<T extends IShapeData>(shapeData: T, options: IShapeTextBoxOptions): T;
export declare function shouldUseFullShapeTextRectForAutoFit(shapeData: IShapeData): boolean;
