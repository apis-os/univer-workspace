import type { BoardBackgroundImageFit } from '@univerjs-pro/boards';
export interface IBoardPageBackgroundImageSource {
    fit: BoardBackgroundImageFit;
    image: HTMLImageElement;
}
export interface IDrawBoardPageBackgroundImageOptions {
    cropLeft?: number;
    cropTop?: number;
    frameHeight: number;
    frameWidth: number;
    scaleX?: number;
    scaleY?: number;
}
export declare function getBoardPageBackgroundImageSource(unitId: string, subUnitId: string, root?: ParentNode): IBoardPageBackgroundImageSource | null;
export declare function drawBoardPageBackgroundImage(context: CanvasRenderingContext2D, source: IBoardPageBackgroundImageSource, options: IDrawBoardPageBackgroundImageOptions): void;
