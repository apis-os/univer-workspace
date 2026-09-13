import type { IFormulaLastValue } from '@univerjs-pro/engine-formula';
import type { IShapeData, IShapeFormulaBinding, IShapeTextRectPadding } from '@univerjs-pro/engine-shape';
import type { ITextStyle } from '@univerjs/core';
import { VerticalAlign } from '@univerjs/core';
export declare const FORMULA_SHAPE_DEFAULT_TEXT_RECT_PADDING: Readonly<IShapeTextRectPadding>;
export declare function createShapeTextBoxShapeData(options: Pick<IShapeData, 'fill' | 'stroke'> & {
    isHorizontal: boolean;
    textStyle?: ITextStyle;
    verticalAlign?: VerticalAlign;
}): IShapeData;
export declare function createFormulaShapeData(options?: Pick<IShapeData, 'fill' | 'stroke'> & {
    formula?: string;
    isHorizontal?: boolean;
    lastValue?: IFormulaLastValue;
    numberFormatPattern?: string;
    textRectPadding?: Partial<IShapeTextRectPadding>;
    textStyle?: ITextStyle;
    verticalAlign?: VerticalAlign;
}): IShapeData;
/** Promotes persisted Shape data before the host adapter executes its update command. */
export declare function createFormulaShapeDataFromShape(shapeData: IShapeData, formulaBinding: IShapeFormulaBinding): IShapeData;
