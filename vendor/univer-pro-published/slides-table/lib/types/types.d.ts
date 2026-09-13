import type { IDocumentData, IGlowEffect, IShadowEffect } from '@univerjs/core';
export declare const SLIDE_TABLE_PLUGIN_NAME = "SLIDE_TABLE_PLUGIN";
export interface ISlideTableResource {
    version: 1;
    tables: Record<string, ISlideTableSnapshot>;
    themes: Record<string, ISlideTableThemeSnapshot>;
}
export interface ISlideTableSnapshot {
    id: string;
    rev: number;
    name?: string;
    description?: string;
    styleId?: string;
    themeId?: string;
    effects?: ISlideTableEffectData;
    options: ISlideTableStyleOptions;
    columns: ISlideTableColumn[];
    rows: ISlideTableRow[];
    custom?: Record<string, unknown> | null;
}
export interface ISlideTableEffectData {
    outerShadow?: IShadowEffect;
    glow?: IGlowEffect;
}
export interface ISlideTableStyleOptions {
    firstRow?: boolean;
    firstCol?: boolean;
    lastRow?: boolean;
    lastCol?: boolean;
    bandRow?: boolean;
    bandCol?: boolean;
}
export interface ISlideTableColumn {
    width: number;
}
export interface ISlideTableRow {
    height?: number;
    cells: ISlideTableCell[];
}
export interface ISlideTableCell {
    textData?: IDocumentData;
    rowSpan?: number;
    columnSpan?: number;
    hMerge?: boolean;
    vMerge?: boolean;
    style?: ISlideTableCellStyle;
    custom?: Record<string, unknown> | null;
}
export declare enum SlideTableVerticalAlignEnum {
    /** Align cell content to the top edge. */
    Top = "top",
    /** Center cell content vertically. */
    Middle = "middle",
    /** Align cell content to the bottom edge. */
    Bottom = "bottom"
}
export declare enum SlideTableTextDirectionEnum {
    /** Render text from left to right using normal horizontal lines. */
    Horizontal = "horizontal",
    /** Stack or rotate text vertically from top to bottom. */
    Vertical = "vertical",
    /** Render vertical text in the opposite 270-degree direction. */
    Vertical270 = "vertical270",
    WordArtVertical = "wordArtVertical"
}
export interface ISlideTableCellStyle {
    fill?: ISlideTableFill;
    borders?: ISlideTableCellBorders;
    margins?: ISlideTableCellMargins;
    verticalAlign?: SlideTableVerticalAlignEnum;
    textDirection?: SlideTableTextDirectionEnum;
}
export declare enum SlideTableFillTypeEnum {
    /** Do not paint a cell fill. */
    None = "none",
    /** Paint one solid color. */
    Solid = "solid",
    /** Paint a gradient defined by type, angle, and color stops. */
    Gradient = "gradient",
    /** Paint an image using stretch or tile placement. */
    Picture = "picture"
}
export interface ISlideTableFill {
    type?: SlideTableFillTypeEnum;
    color?: string;
    themeColor?: string;
    alpha?: number;
    gradient?: ISlideTableGradientFill;
    picture?: ISlideTablePictureFill;
}
export interface ISlideTableGradientStop {
    color: string;
    offset: number;
    opacity?: number;
}
export declare enum SlideTableGradientFillTypeEnum {
    /** Linear gradient along an angle. */
    Linear = "linear",
    /** Radial gradient expanding from a center point. */
    Radial = "radial",
    /** Angular gradient rotating around a center point. */
    Angular = "angular",
    /** Diamond-shaped gradient expanding toward the corners. */
    Diamond = "diamond"
}
export interface ISlideTableGradientFill {
    type?: SlideTableGradientFillTypeEnum;
    angle?: number;
    stops?: ISlideTableGradientStop[];
}
export declare enum SlideTablePictureFillModeEnum {
    /** Scale one image to cover the cell fill area. */
    Stretch = "stretch",
    /** Repeat the image as tiles inside the cell fill area. */
    Tile = "tile"
}
export interface ISlideTablePictureFill {
    source?: string;
    sourceType?: string;
    opacity?: number;
    mode?: SlideTablePictureFillModeEnum;
}
export interface ISlideTableCellBorders {
    top?: ISlideTableBorder;
    right?: ISlideTableBorder;
    bottom?: ISlideTableBorder;
    left?: ISlideTableBorder;
    insideH?: ISlideTableBorder;
    insideV?: ISlideTableBorder;
}
export declare enum SlideTableBorderDashEnum {
    /** Continuous border line. */
    Solid = "solid",
    /** Dashed border line. */
    Dash = "dash",
    /** Dotted border line. */
    Dot = "dot",
    /** Alternating dash and dot border line. */
    DashDot = "dashDot",
    /** Remove the selected border. */
    None = "none"
}
export interface ISlideTableBorder {
    color?: string;
    themeColor?: string;
    width?: number;
    dash?: SlideTableBorderDashEnum;
}
export interface ISlideTableCellMargins {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface ISlideTableThemeSnapshot {
    id: string;
    name?: string;
    wholeTable?: ISlideTableCellStyle;
    firstRow?: ISlideTableCellStyle;
    firstCol?: ISlideTableCellStyle;
    lastRow?: ISlideTableCellStyle;
    lastCol?: ISlideTableCellStyle;
    bandRow?: ISlideTableCellStyle;
    bandCol?: ISlideTableCellStyle;
    custom?: Record<string, unknown> | null;
}
export interface ISlideTableCellRange {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}
export declare enum SlideTableBorderPresetEnum {
    /** Apply borders to every outer and inner edge. */
    All = "all",
    /** Apply only inner horizontal and vertical borders. */
    Inner = "inner",
    /** Apply only the outside rectangle. */
    Outer = "outer",
    /** Apply only the top edge. */
    Top = "top",
    /** Apply only the bottom edge. */
    Bottom = "bottom",
    /** Apply only the left edge. */
    Left = "left",
    /** Apply only the right edge. */
    Right = "right",
    /** Remove all borders in the target range. */
    None = "none",
    /** Apply only borders between rows. */
    InnerHorizontal = "innerHorizontal",
    /** Apply only borders between columns. */
    InnerVertical = "innerVertical"
}
