import type { IShapeText3DMaterialLighting } from './shape-text-3d-sdf';
interface IShapeText3DGpuOptions {
    front: HTMLCanvasElement;
    signedDistance: Uint8Array;
    width: number;
    height: number;
    distanceRange: number;
    bevelRadius: number;
    bevelDepth: number;
    bevelProfile: number;
    contourWidth: number;
    contourColor: readonly [number, number, number, number];
    lightAngle: number;
    material: IShapeText3DMaterialLighting;
    extrusionOffset: readonly [number, number];
    extrusionColor: readonly [number, number, number, number];
    extrusionInheritsFront: boolean;
    extrusionOpacity: number;
    extrusionLightFactor: number;
    extrusionSteps: number;
    renderExtrusion: boolean;
}
export interface IShapeText3DGpuSurface {
    canvas: HTMLCanvasElement;
    includesExtrusion: boolean;
    dispose: () => void;
}
/** GPU height-field lighting with a CPU/Canvas fallback at the call site. */
export declare function renderShapeTextSdfWithGpu(options: IShapeText3DGpuOptions): IShapeText3DGpuSurface | undefined;
export {};
