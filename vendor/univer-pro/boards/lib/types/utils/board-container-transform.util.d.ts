import type { IBoardElementTransform } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
export interface IBoardRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBoardResolvedElementTransform {
    elementId: string;
    localTransform: IBoardElementTransform;
    worldTransform: IBoardElementTransform;
    parentChain: string[];
}
export interface IResolveBoardElementLocalTransformForParentOptions {
    parentId?: string;
    worldTransform: IBoardElementTransform;
}
export interface IBoardBridgeElementTransform {
    left: number;
    top: number;
    width: number;
    height: number;
    angle: number;
    flipX?: boolean;
    flipY?: boolean;
}
export declare function resolveBoardElementWorldTransform(elementData: Record<string, IBoardElementData>, elementId: string): IBoardResolvedElementTransform | null;
export declare function resolveBoardElementWorldBounds(elementData: Record<string, IBoardElementData>, elementId: string): IBoardRect | null;
export declare function resolveBoardElementLocalTransformForParent(elementData: Record<string, IBoardElementData>, options: IResolveBoardElementLocalTransformForParentOptions): IBoardElementTransform;
export declare function toBoardBridgeElementTransform(transform: IBoardElementTransform): IBoardBridgeElementTransform;
export declare function fromBoardBridgeElementTransform(transform: IBoardBridgeElementTransform): IBoardElementTransform;
