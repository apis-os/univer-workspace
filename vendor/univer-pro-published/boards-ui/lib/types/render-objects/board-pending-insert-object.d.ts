import type { IBoardPageElement, IBoardThemeData } from '@univerjs-pro/boards';
import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardPendingInsert } from '../services/board-ui-state.service';
import type { IBoardInsertPoint, IBoardInsertRect } from '../utils/board-insert.util';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardPendingInsertObjectState {
    pendingInsert: IBoardPendingInsert | null;
    point: IBoardInsertPoint | null;
    previewAlpha: number;
    rect?: IBoardInsertRect | null;
    themeData?: IBoardThemeData;
    zoomRatio?: number;
}
export declare const BOARD_PENDING_INSERT_OBJECT_KEY = "board-pending-insert-object";
export declare const BOARD_PENDING_INSERT_OBJECT_LAYER_INDEX: 3;
export declare const BOARD_PENDING_INSERT_ALPHA = 0.18;
export declare function resolveBoardPendingInsertShapeModelData(element: IBoardPageElement, shapeData: IShapeData): {
    shapeType: ShapeTypeEnum;
    shapeData: IShapeData;
};
export declare class BoardPendingInsertObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardPendingInsertObjectState>);
    updateState(state?: Partial<IBoardPendingInsertObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _resolvePreviewAlpha;
    private _resolveZoomRatio;
    private _drawShapePreview;
    private _drawSwimlanePreviewStructure;
    private _drawTablePreview;
    private _drawTextPreview;
}
