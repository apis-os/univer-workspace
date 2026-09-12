import type { UniverRenderingContext } from '@univerjs/engine-render';
export interface IRatexColor {
    a?: number;
    b: number;
    g: number;
    r: number;
}
export interface IRatexGlyphPathItem {
    char_code: number;
    color: IRatexColor;
    font: string;
    scale: number;
    type: 'GlyphPath';
    x: number;
    y: number;
}
export interface IRatexLineItem {
    color: IRatexColor;
    dashed?: boolean;
    thickness: number;
    type: 'Line';
    width: number;
    x: number;
    y: number;
}
export type IRatexPathCommand = {
    type: 'MoveTo';
    x: number;
    y: number;
} | {
    type: 'LineTo';
    x: number;
    y: number;
} | {
    type: 'CubicTo';
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
} | {
    type: 'QuadTo';
    x: number;
    x1: number;
    y: number;
    y1: number;
} | {
    type: 'Close';
};
export interface IRatexRectItem {
    color: IRatexColor;
    height: number;
    type: 'Rect';
    width: number;
    x: number;
    y: number;
}
export interface IRatexPathItem {
    color: IRatexColor;
    commands: IRatexPathCommand[];
    fill: boolean;
    type: 'Path';
    x: number;
    y: number;
}
export interface IRatexDisplayList {
    depth: number;
    height: number;
    items: Array<IRatexGlyphPathItem | IRatexLineItem | IRatexPathItem | IRatexRectItem>;
    version: number;
    width: number;
}
export interface IRenderRatexDisplayListOptions {
    baselineX: number;
    baselineY: number;
    fontSize: number;
}
export declare function renderRatexDisplayList(ctx: UniverRenderingContext, displayList: IRatexDisplayList, options: IRenderRatexDisplayListOptions): void;
