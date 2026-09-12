import type { WordCloudShape } from '../../types';
export interface IWordCloudShapeProfileOptions {
    readonly shapePaddingRatio?: number | null;
    readonly angleBins?: number | null;
}
export interface IWordCloudShapeProfile {
    readonly shape: BuiltinWordCloudShape;
    readonly width: number;
    readonly height: number;
    readonly center: readonly [number, number];
    readonly maxRadius: number;
    readonly radiusBins: readonly number[];
    readonly cosBins: readonly number[];
    readonly sinBins: readonly number[];
    readonly contains: (x: number, y: number) => boolean;
    readonly radiusAt: (theta: number) => number;
}
export type BuiltinWordCloudShape = Exclude<WordCloudShape, 'cloud'>;
export declare function createBuiltinShapeProfile(shape: BuiltinWordCloudShape, width: number, height: number, options?: IWordCloudShapeProfileOptions): IWordCloudShapeProfile;
export declare function createBuiltinShapeProfile(shape: WordCloudShape, width: number, height: number, options?: IWordCloudShapeProfileOptions): IWordCloudShapeProfile | undefined;
