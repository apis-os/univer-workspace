import type { IShapeData } from '@univerjs-pro/engine-shape';
export type InkToolType = 'pen' | 'brush' | 'highlighter' | 'eraser';
export interface IInkPoint {
    x: number;
    y: number;
}
export interface IInkAnchorPoint extends IInkPoint {
    id: string;
    in?: IInkPoint;
    out?: IInkPoint;
    pointType: 'corner' | 'smooth' | 'symmetric' | 'free';
}
export interface IInkPenModel {
    kind: 'pen';
    closed: boolean;
    anchors: IInkAnchorPoint[];
}
export interface IInkBrushSamplePoint extends IInkPoint {
    pressure?: number;
    t: number;
}
export interface IInkBrushModel {
    kind: 'brush' | 'highlighter';
    points: IInkBrushSamplePoint[];
    color: string;
    width: number;
    opacity: number;
}
export type IInkSourceModel = IInkPenModel | IInkBrushModel;
export interface IInkStyle {
    color?: string;
    width?: number;
    opacity?: number;
    fillColor?: string;
}
export interface IInkRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IInkCustomShapePayload {
    transform: IInkRect & {
        rotation: number;
    };
    shapeData: IShapeData;
    ink: {
        version: 1;
        tool: Exclude<InkToolType, 'eraser'>;
        sourceModel: IInkSourceModel;
        editModel?: IInkPenModel;
        normalizedBounds: IInkRect;
    };
}
