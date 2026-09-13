import type { IBoundRectNoAngle } from '@univerjs/engine-render';
import type { IShape3D, IShapeData, IShapeRect, IShapeRenderParameters, IShapeScene3D } from '../shape-type';
import type { BaseShapeContext } from './base-shape-context';
import type { BaseShapeRenderModel } from './shape-render-model';
import { ShapeBevelPresetEnum, ShapeMaterialPresetEnum } from '../shape-enum';
/** PowerPoint's implicit bevel extent, stored in the public model as points for OOXML round-trips. */
export declare const DEFAULT_SHAPE_BEVEL_EXTENT = 6;
export declare function resolveShapeBevelExtent(preset: ShapeBevelPresetEnum | undefined, extent: number | undefined): number;
export declare function resolveProjectedFlatMaterialFactor(scene3d?: IShapeScene3D): number;
interface IShape3DProjection {
    x: number;
    y: number;
}
interface IShapeBevelProfile {
    /** Effective inset in units of the OOXML bevel width/height. */
    widthScale: number;
    heightScale: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
    inner?: number;
    secondary?: number;
    /** Fraction of the bevel occupied by the outer face in a compound profile. */
    outerRatio?: number;
    /** Reverses the inner face light response for concave profiles. */
    innerTop?: number;
    innerRight?: number;
    innerBottom?: number;
    innerLeft?: number;
}
export interface IShape3DProjectedPoint {
    x: number;
    y: number;
    depth: number;
}
export interface IShape3DProjectedQuad {
    topLeft: IShape3DProjectedPoint;
    topRight: IShape3DProjectedPoint;
    bottomRight: IShape3DProjectedPoint;
    bottomLeft: IShape3DProjectedPoint;
}
export declare function applyShape3DCameraTransform(canvasContext: CanvasRenderingContext2D, rect: IShapeRect, scene3d?: IShapeScene3D): void;
/** Stable renderer-level signature used by regression tests and cached glyph render plans. */
export declare function resolveShapeBevelProfileSignature(preset?: ShapeBevelPresetEnum): string;
/**
 * Stable, fill-independent description of a PowerPoint bevel's light response.
 * Consumers apply these signed alpha values over the current fill; presets never
 * carry a source color of their own.
 */
export declare function resolveShapeBevelLightCurveSignature(preset?: ShapeBevelPresetEnum, scene3d?: IShapeScene3D, material?: ShapeMaterialPresetEnum): string;
export interface IShape3DGlyphRenderPlan {
    projection: IShape3DProjection;
    layerCount: number;
    extrusionColor: string;
    extrusionInheritsFill: boolean;
    extrusionOpacity: number;
    lightFactor: number;
    lightAngle: number;
    materialGradientStops: ReadonlyArray<readonly [number, string]>;
    bevel?: IShapeBevelProfile & {
        width: number;
        height: number;
    };
    contourWidth: number;
    contourColor: string;
}
/** Resolves the Shape 2.5D semantics for a cached text-glyph alpha layer. */
export declare function resolveShape3DGlyphRenderPlan(scene3d: IShapeScene3D | undefined, shape3d: IShape3D | undefined, baseColor?: string, sceneRect?: IShapeRect): IShape3DGlyphRenderPlan | undefined;
export declare function shadeShape3DColor(color: string, factor: number): string;
export declare function getShape3DCameraTransformedBounds(bounds: IBoundRectNoAngle, sceneRect: IShapeRect, scene3d?: IShapeScene3D): IBoundRectNoAngle;
export declare function isShape3DProjectiveScene(scene3d?: IShapeScene3D): boolean;
export declare function projectShape3DPoint(point: {
    x: number;
    y: number;
    z?: number;
}, sceneRect: IShapeRect, scene3d: IShapeScene3D): IShape3DProjectedPoint;
export declare function projectShape3DRect(rect: IShapeRect, sceneRect: IShapeRect, scene3d: IShapeScene3D, z?: number): IShape3DProjectedQuad;
export declare function renderProjectedShapeRect(canvasContext: CanvasRenderingContext2D, sceneRect: IShapeRect, rect: IShapeRect, scene3d: IShapeScene3D, shapeData: IShapeData, image?: HTMLImageElement): void;
export declare function renderShape3D(canvasContext: CanvasRenderingContext2D, rect: IShapeRect, shapeContext: BaseShapeContext, shapeData: IShapeData, renderOption: IShapeRenderParameters, renderModel: BaseShapeRenderModel): void;
export declare function renderShape3DFrontBevel(canvasContext: CanvasRenderingContext2D, rect: IShapeRect, shapeContext: BaseShapeContext, shapeData: IShapeData, renderOption: IShapeRenderParameters, renderModel: BaseShapeRenderModel): void;
interface IMaterialSurfaceAdjustment {
    add: number;
    colorCurve?: readonly number[];
    scale: number;
}
/** Continuous material response shared by preset and explicit DrawingML camera rotations. */
export declare function resolveProjectedMaterialSurfaceAdjustment(material: ShapeMaterialPresetEnum, scene3d?: IShapeScene3D, shape3d?: IShape3D): IMaterialSurfaceAdjustment;
export declare function getShape3DBounds(rect: IShapeRect, scene3d?: IShapeScene3D, shape3d?: IShape3D, sceneRect?: IShapeRect, strokeWidth?: number): IBoundRectNoAngle | undefined;
export declare const DEFAULT_SHAPE_3D_SCENE: IShapeScene3D;
export {};
