import type { IPdfShadingFallbackMesh } from '../types';
export interface IPdfShadingMeshDecodeInput {
    shadingType?: number;
    bitsPerFlag?: number;
    bitsPerCoordinate?: number;
    bitsPerComponent?: number;
    verticesPerRow?: number;
    bytes?: number[];
    decode?: number[];
}
export declare function createShadingFallbackMesh(input: IPdfShadingMeshDecodeInput): IPdfShadingFallbackMesh | undefined;
export declare function isDegenerateMeshShading(bytes: number[], stride: number): boolean;
