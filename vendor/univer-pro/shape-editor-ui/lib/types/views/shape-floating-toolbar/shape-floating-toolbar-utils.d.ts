import type { IShapeData, IShapeTextDataModel } from '@univerjs-pro/engine-shape';
import type { IDocumentData, ITextStyle, PresetListType } from '@univerjs/core';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export interface IShapeTextUpdateOptions {
    textStyle?: ITextStyle;
    verticalAlign?: VerticalAlign;
    horizontalAlign?: HorizontalAlign;
    listType?: PresetListType | null;
}
export declare function createDefaultShapeTextDocument(textStyle?: ITextStyle, horizontalAlign?: HorizontalAlign, text?: string): IDocumentData;
export declare function getShapeTextModel(shapeData: IShapeData, options: IShapeTextUpdateOptions): IShapeTextDataModel;
export declare function getShapeTextListState(shapeData: IShapeData, family: PresetListType.ORDER_LIST | PresetListType.BULLET_LIST): {
    active: boolean;
    mixed: boolean;
    value?: PresetListType;
};
export declare function buildShapeTextDataUpdate(shapeData: IShapeData, options: IShapeTextUpdateOptions): IShapeData;
