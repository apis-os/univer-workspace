import type { IWordCloudTextSprite } from '../../types';
export interface ICreateTightTextSpriteOptions {
    readonly pixels: Uint8Array;
    readonly width: number;
    readonly height: number;
    readonly alphaBBox?: {
        readonly x: number;
        readonly y: number;
        readonly width: number;
        readonly height: number;
    };
    readonly anchorX?: number;
    readonly anchorY?: number;
    readonly dpr?: number;
    readonly textMetrics?: IWordCloudTextSprite['textMetrics'];
}
export declare function createTightTextSprite(options: ICreateTightTextSpriteOptions): IWordCloudTextSprite;
