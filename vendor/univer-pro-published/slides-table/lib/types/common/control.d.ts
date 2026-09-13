import type { ISlideTableRenderModel } from './style';
export type SlideTableControlKind = 'table-handle' | 'row-select' | 'column-select';
export interface ISlideTableControlRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ISlideTableControl {
    kind: SlideTableControlKind;
    rect: ISlideTableControlRect;
    row?: number;
    column?: number;
}
export interface ISlideTableControlOptions {
    row?: number | null;
    column?: number | null;
    showAll?: boolean;
}
export declare const SLIDE_TABLE_CONTROL_HANDLE_SIZE = 16;
export declare const SLIDE_TABLE_CONTROL_HANDLE_GAP = 4;
export declare const SLIDE_TABLE_CONTROL_BUTTON_SIZE = 16;
export declare const SLIDE_TABLE_CONTROL_GUTTER: number;
export declare const SLIDE_TABLE_CONTROL_INSET: number;
export declare function buildSlideTableControls(model: ISlideTableRenderModel, tableWidth: number, tableHeight: number, options?: ISlideTableControlOptions): ISlideTableControl[];
export declare function hitTestSlideTableControl(controls: ISlideTableControl[], x: number, y: number): ISlideTableControl | null;
export declare function isPointInRect(x: number, y: number, rect: ISlideTableControlRect): boolean;
