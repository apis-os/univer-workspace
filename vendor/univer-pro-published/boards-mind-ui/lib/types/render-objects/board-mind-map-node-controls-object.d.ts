import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IMindMapNodeControl } from '../utils/mind-map-node-controls.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardMindMapNodeControlsObjectState {
    controls: IMindMapNodeControl[];
    hoveredControl?: IMindMapNodeControl | null;
}
export declare const BOARD_MIND_MAP_NODE_CONTROLS_OBJECT_KEY = "board-mind-map-node-controls-object";
export declare const BOARD_MIND_MAP_NODE_CONTROLS_OBJECT_LAYER_INDEX: 5;
export declare class BoardMindMapNodeControlsObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardMindMapNodeControlsObjectState>);
    updateState(state?: Partial<IBoardMindMapNodeControlsObjectState>): void;
    setHoveredControl(control: IMindMapNodeControl | null): void;
    getHitControl(point: {
        x: number;
        y: number;
    }): IMindMapNodeControl | null;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
