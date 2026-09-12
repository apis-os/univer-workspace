import type { IUniverBoardsUIConfig } from '../config/config';
export declare const BOARD_IMAGE_INSERT_DEFAULT: {
    fallbackWidth: number;
    fallbackHeight: number;
    minEdge: number;
    fitRatio: number;
    minPositionOffset: number;
};
export type IResolvedBoardImageInsertConfig = typeof BOARD_IMAGE_INSERT_DEFAULT;
export interface IBoardImageSize {
    width: number;
    height: number;
}
export interface IBoardImageInsertPoint {
    x: number;
    y: number;
}
export declare function fitBoardImageSize(width: number, height: number, maxWidth: number, maxHeight: number, config?: IResolvedBoardImageInsertConfig): IBoardImageSize;
export declare function resolveBoardImageInsertConfig(config?: Pick<IUniverBoardsUIConfig, 'insert'>): IResolvedBoardImageInsertConfig;
export declare function createBoardCenteredImageTransform(pageWidth: number, pageHeight: number, size: IBoardImageSize, config?: IResolvedBoardImageInsertConfig): {
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare function createBoardImageTransformAtPoint(point: IBoardImageInsertPoint, size: IBoardImageSize): {
    left: number;
    top: number;
    width: number;
    height: number;
};
