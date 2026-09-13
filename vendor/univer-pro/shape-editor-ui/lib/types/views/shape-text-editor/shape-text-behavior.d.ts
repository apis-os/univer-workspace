import type { IShapeData, IShapeTextData } from '@univerjs-pro/engine-shape';
import type { Nullable, WrapStrategy as WrapStrategyType } from '@univerjs/core';
export declare function resolveShapeTextEditorBehaviorShapeData(shapeData: Nullable<IShapeData> | undefined, shapeTextData: IShapeTextData): IShapeData;
export declare function resolveShapeTextEditorWrapStrategy(shapeData: IShapeData, fallbackWrapStrategy?: WrapStrategyType): WrapStrategyType;
export declare function shouldClipShapeTextDocument(shapeData: IShapeData, wrapStrategy?: WrapStrategyType): boolean;
export declare function shouldAutoFitShapeTextEditorNoWrap(shapeData: IShapeData): boolean;
export type ShapeTextFlowAxis = 'width' | 'height';
/** Text layout is horizontal internally; vertical text rotates it onto height. */
export declare function resolveShapeTextEditorFlowAxis(shapeData: IShapeData): ShapeTextFlowAxis;
export declare function shouldAllowShapeTextEditorHostSizeShrink(shapeData: Nullable<IShapeData> | undefined, options?: {
    textLike?: boolean;
}): boolean;
