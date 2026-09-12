export interface IPixelBitsetBoard {
    readonly width: number;
    readonly height: number;
    readonly stride: number;
    readonly words: Uint32Array;
    blockedPixelCount: number;
    occupiedPixelCount: number;
}
export interface IPixelBitsetSprite {
    readonly width: number;
    readonly height: number;
    readonly stride: number;
    readonly words: Uint32Array;
    readonly activeWords: readonly IPixelBitsetSpriteWord[];
    readonly activeWordCount: number;
    readonly alphaPixelCount: number;
}
export interface IPixelBitsetSpriteWord {
    readonly row: number;
    readonly wordIndex: number;
    readonly bits: number;
}
export interface ICreateBitsetBoardOptions {
    readonly shapeMask?: Uint8Array;
}
export interface ICreateBitsetSpriteOptions {
    readonly width: number;
    readonly height: number;
    readonly pixels: Uint8Array;
}
export interface ICreateBitsetSpriteFromSpansOptions {
    readonly width: number;
    readonly height: number;
    readonly spans: readonly IPixelBitsetSpriteSpan[];
}
export interface IPixelBitsetSpriteSpan {
    readonly y: number;
    readonly x0: number;
    readonly x1: number;
}
export declare function createBitsetBoard(width: number, height: number, options?: ICreateBitsetBoardOptions): IPixelBitsetBoard;
export declare function createBitsetSpriteFromPixels(options: ICreateBitsetSpriteOptions): IPixelBitsetSprite;
export declare function createBitsetSpriteFromSpans(options: ICreateBitsetSpriteFromSpansOptions): IPixelBitsetSprite;
export declare function collideSprite(board: IPixelBitsetBoard, sprite: IPixelBitsetSprite, left: number, top: number): boolean;
export declare function stampSprite(board: IPixelBitsetBoard, sprite: IPixelBitsetSprite, left: number, top: number): void;
