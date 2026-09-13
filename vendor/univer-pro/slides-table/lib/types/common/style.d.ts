import type { ISlideTableBorder, ISlideTableCellStyle, ISlideTableSnapshot, ISlideTableThemeSnapshot } from '../types';
export interface ISlideTableResolvedCellStyle extends ISlideTableCellStyle {
    roles: string[];
}
export interface ISlideTableResolvedCell {
    row: number;
    column: number;
    rowSpan: number;
    columnSpan: number;
    hidden: boolean;
    bounds: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    style: ISlideTableResolvedCellStyle;
}
export interface ISlideTableRenderModel {
    width: number;
    height: number;
    cells: ISlideTableResolvedCell[];
}
export interface IResolveSlideTableRenderModelOptions {
    themes?: Record<string, ISlideTableThemeSnapshot>;
}
export declare function resolveSlideTableRenderModel(table: ISlideTableSnapshot, options?: IResolveSlideTableRenderModelOptions): ISlideTableRenderModel;
export declare function mergeSlideTableCellStyle(current: ISlideTableCellStyle | undefined, patch: ISlideTableCellStyle): ISlideTableCellStyle;
export declare function resolveSlideTableCellBoundaryBorder(primary: ISlideTableBorder | undefined, secondary: ISlideTableBorder | undefined): ISlideTableBorder | undefined;
export declare function isSlideTableBorderDrawable(border: ISlideTableBorder | undefined): border is ISlideTableBorder;
