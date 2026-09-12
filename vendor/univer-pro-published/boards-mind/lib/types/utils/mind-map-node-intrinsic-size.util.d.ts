import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IMindMapNodeElement } from '../types';
export interface IMindMapNodeIntrinsicSize {
    width: number;
    height: number;
}
export interface IMindMapNodeIntrinsicSizeOptions {
    bold?: boolean;
    fontSize: number;
    maxHeight?: number;
    maxWidth?: number;
    minHeight: number;
    minWidth: number;
    text: string;
}
export declare function resolveMindMapNodeIntrinsicSizeFromText(options: IMindMapNodeIntrinsicSizeOptions): IMindMapNodeIntrinsicSize;
export declare function resolveMindMapNodeIntrinsicSize(node: IMindMapNodeElement): IMindMapNodeIntrinsicSize;
export declare function resolveMindMapNodeHostSize(elementData: IBoardElementData, size: IMindMapNodeIntrinsicSize): IMindMapNodeIntrinsicSize | null;
