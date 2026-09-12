import type { IInkPoint, IInkSourceModel } from './ink-types';
export declare function getInkModelBounds(model: IInkSourceModel): {
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare function buildPenSvgPath(model: Extract<IInkSourceModel, {
    kind: 'pen';
}>, offset: IInkPoint): string;
export declare function buildBrushSvgPath(model: Extract<IInkSourceModel, {
    kind: 'brush' | 'highlighter';
}>, offset: IInkPoint): string;
export declare function buildInkSvgPath(model: IInkSourceModel, offset: IInkPoint): string;
