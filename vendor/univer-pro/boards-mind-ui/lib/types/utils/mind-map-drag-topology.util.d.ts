import type { IBoardElementData } from '@univerjs-pro/boards';
import type { MindMapNodeSide } from '@univerjs-pro/boards-mind';
export type MindMapDragTopologyAction = {
    kind: 'none';
} | {
    kind: 'detach';
    left?: number;
    top?: number;
} | {
    kind: 'reparent';
    newParentNodeId: string;
    side: MindMapNodeSide;
    referenceNodeId?: string;
    placement?: 'before' | 'after';
};
export interface IMindMapDragTopologyBounds {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
export declare function resolveMindMapDragTopologyAction(elementData: Record<string, IBoardElementData>, nodeId: string, options?: {
    boundsByElementId?: Readonly<Record<string, IMindMapDragTopologyBounds | undefined>>;
    detachWhenNoSnap?: boolean;
    allowRootReparent?: boolean;
}): MindMapDragTopologyAction;
