import type { IShapeData, IShapeTextDataModel } from '@univerjs-pro/engine-shape';
import type { ITextStyle } from '@univerjs/core';
export declare function normalizeShapeTextModel(dataModel: IShapeTextDataModel | null | undefined): IShapeTextDataModel | null;
export declare function getTextModel(shapeData: IShapeData): IShapeTextDataModel | null;
export declare function getTextStyle(shapeData: IShapeData): ITextStyle;
