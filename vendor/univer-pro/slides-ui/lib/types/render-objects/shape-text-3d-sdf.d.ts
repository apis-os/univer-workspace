import { ShapeBevelPresetEnum, ShapeMaterialPresetEnum } from '@univerjs-pro/engine-shape';
/** Excludes translucent outer shadows while retaining antialiased glyph edges. */
export declare const SHAPE_TEXT_GLYPH_ALPHA_THRESHOLD = 128;
export interface IShapeText3DMaterialLighting {
    ambient: number;
    diffuse: number;
    specular: number;
    shininess: number;
    sheen: number;
}
/** Positive values are inside the glyph mask; negative values are outside. */
export declare function createShapeTextSignedDistanceField(alpha: Uint8ClampedArray, width: number, height: number, alphaThreshold?: number): Float32Array;
export declare function encodeShapeTextSignedDistanceField(signedDistance: Float32Array, range: number): Uint8Array;
export declare function resolveShapeTextBevelProfileCode(preset?: ShapeBevelPresetEnum): number;
export declare function resolveShapeText3DMaterialLighting(material?: ShapeMaterialPresetEnum): IShapeText3DMaterialLighting;
