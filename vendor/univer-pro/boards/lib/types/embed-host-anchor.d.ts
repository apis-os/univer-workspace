import type { UniverInstanceType } from '@univerjs/core';
import type { IBoardShapeElement } from './board.type';
export declare const EMBED_BOARDS_FLOATING_CUSTOM_KEY = "UNIVER_EMBED_BOARDS_FLOATING";
export interface IEmbedBoardsFloatingCustomData {
    version: 1;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export interface IEmbedBoardsFloatingElementParams {
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
export declare function createEmbedBoardsFloatingElement(params: IEmbedBoardsFloatingElementParams): IBoardShapeElement;
export declare function getEmbedBoardsFloatingCustomData(element: Pick<IBoardShapeElement, 'custom'>): IEmbedBoardsFloatingCustomData | undefined;
export declare function isEmbedBoardsFloatingElement(element: {
    type: string;
    custom?: Record<string, unknown> | null;
} | null | undefined): element is IBoardShapeElement;
export declare function isSameEmbedBoardsFloatingChild(first: {
    type: string;
    custom?: Record<string, unknown> | null;
} | null | undefined, second: {
    type: string;
    custom?: Record<string, unknown> | null;
} | null | undefined): boolean;
