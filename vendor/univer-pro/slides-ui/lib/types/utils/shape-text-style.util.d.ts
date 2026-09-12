import type { IShapeText } from '@univerjs-pro/engine-shape';
import type { ISlideThemeData } from '@univerjs-pro/slides';
import type { ITextStyle } from '@univerjs/core';
/**
 * Resolves legacy slide plain shape text for read-only compatibility paths.
 * New writes should create canonical `shapeText.dataModel.doc` instead.
 */
export declare function resolvePlainShapeTextData(shapeText: Partial<IShapeText> | undefined, themeData?: ISlideThemeData): IShapeText;
export declare function toDocumentTextStyle(shapeText: IShapeText): ITextStyle;
