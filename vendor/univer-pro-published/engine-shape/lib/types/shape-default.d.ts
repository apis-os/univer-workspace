import type { ShapeTypeEnum } from './shape-enum';
import type { IShapeData } from './shape-type';
import { ShapeFillEnum, ShapeGradientTypeEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeSketchTypeEnum } from './shape-enum';
export declare const DEFAULT_INSERTED_SHAPE_STYLE: {
    readonly fillColor: "#4472C4";
    readonly strokeColor: "#44546A";
    readonly strokeWidth: 1.5;
    readonly textColor: "#FFFFFF";
    readonly textFontSize: 18;
};
/** Creates the shared default style for newly inserted non-connector Shapes. */
export declare function createDefaultInsertedShapeData(shapeType: ShapeTypeEnum): IShapeData;
export declare const ShapeDefaultConfig: {
    fillType: ShapeFillEnum;
    fill: string;
    fillOpacity: number;
    gradientType: ShapeGradientTypeEnum;
    gradientAngle: number;
    gradientEndColor: string;
    lineType: ShapeLineTypeEnum;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: number;
    cornerRadius: number;
    sketchType: ShapeSketchTypeEnum;
    cxnPointRadius: number;
    cxnPointFill: string;
    cxnPointStroke: string;
    cxnPointStrokeWidth: number;
    adjHandleSize: number;
    adjHandleFill: string;
    adjHandleStroke: string;
    adjHandleStrokeWidth: number;
    lineDashType: ShapeLineDashEnum;
    lineCapType: ShapeLineCapEnum;
    lineJoinType: ShapeLineJoinEnum;
    shapeText: {
        padding: number;
        fontSize: number;
        fontFamily: string;
        color: string;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    };
};
