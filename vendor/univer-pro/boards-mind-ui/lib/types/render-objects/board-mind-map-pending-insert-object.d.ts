import type { IMindMapChildBlueprint, IMindMapTreeBlueprint, MindMapStructureKind } from '@univerjs-pro/boards-mind';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardMindMapPendingInsertObjectState {
    point: {
        x: number;
        y: number;
    } | null;
    structureKind?: MindMapStructureKind;
    children?: IMindMapChildBlueprint[];
    blueprint?: IMindMapTreeBlueprint;
    zoomRatio?: number;
}
export declare const BOARD_MIND_MAP_PENDING_INSERT_OBJECT_KEY = "board-mind-map-pending-insert-object";
export declare const BOARD_MIND_MAP_PENDING_INSERT_OBJECT_LAYER_INDEX: 3;
export declare class BoardMindMapPendingInsertObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardMindMapPendingInsertObjectState>);
    updateState(state?: Partial<IBoardMindMapPendingInsertObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
