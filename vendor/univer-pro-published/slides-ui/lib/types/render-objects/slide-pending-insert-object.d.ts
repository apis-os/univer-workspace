import type { ICxnShapeData } from '@univerjs-pro/engine-shape';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { ISlideInsertRect, ISlidePendingInsert } from '../utils/slide-pending-insert.util';
import { BaseObject } from '@univerjs/engine-render';
export interface ISlidePendingInsertObjectState {
    pendingInsert: ISlidePendingInsert | null;
    rect: ISlideInsertRect | null;
    pageOffsetLeft: number;
    pageOffsetTop: number;
    fillColor: string;
    strokeColor: string;
    connectorData: ICxnShapeData | null;
}
export declare const SLIDE_PENDING_INSERT_OBJECT_KEY = "slide-pending-insert-object";
export declare const SLIDE_PENDING_INSERT_OBJECT_LAYER_INDEX: number;
export declare class SlidePendingInsertObject extends BaseObject {
    private _state;
    constructor(key: string, state: ISlidePendingInsertObjectState);
    updateState(state: Partial<ISlidePendingInsertObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _syncVisibility;
    private _drawTextPreview;
    private _drawShapePreview;
}
