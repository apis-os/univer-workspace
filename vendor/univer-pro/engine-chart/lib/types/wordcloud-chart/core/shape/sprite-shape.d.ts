import type { IWordCloudMaskGrid, IWordCloudTextSprite } from '../../types';
export interface ISpriteShapePlacement {
    readonly sprite: Pick<IWordCloudTextSprite, 'width' | 'height' | 'pixels' | 'anchorX' | 'anchorY' | 'dpr' | 'textMetrics'>;
    readonly shapeMask: Uint8Array;
    readonly width: number;
    readonly height: number;
    readonly left: number;
    readonly top: number;
}
export interface IClippedSpriteToShape {
    readonly sprite: IWordCloudTextSprite;
    readonly left: number;
    readonly top: number;
    readonly width: number;
    readonly height: number;
    readonly alphaPixelCount: number;
}
export declare function createShapeMask(maskGrid: IWordCloudMaskGrid | undefined, width: number, height: number): Uint8Array;
export declare function clipSpriteToShape(options: ISpriteShapePlacement): IClippedSpriteToShape | undefined;
