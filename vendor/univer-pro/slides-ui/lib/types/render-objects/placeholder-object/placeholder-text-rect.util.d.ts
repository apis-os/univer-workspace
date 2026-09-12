import type { IShapeRect } from '@univerjs-pro/engine-shape';
export declare const SLIDE_PLACEHOLDER_TEXT_HORIZONTAL_INSET = 12;
export declare const SLIDE_PLACEHOLDER_TEXT_VERTICAL_INSET: number;
export declare function resolveSlidePlaceholderTextRect(width: number, height: number, options?: {
    horizontalInset?: number;
    verticalInset?: number;
}): IShapeRect;
