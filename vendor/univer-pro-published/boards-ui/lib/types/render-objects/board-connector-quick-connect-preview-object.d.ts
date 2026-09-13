import type { IBoardShapeElement, IBoardThemeData } from '@univerjs-pro/boards';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardConnectorQuickConnectShapePreviewObjectState {
    element: IBoardShapeElement | null;
    previewAlpha: number;
    themeData?: IBoardThemeData;
}
export declare const BOARD_CONNECTOR_QUICK_CONNECT_SHAPE_PREVIEW_OBJECT_KEY = "board-connector-quick-connect-shape-preview-object";
export declare const BOARD_CONNECTOR_QUICK_CONNECT_PREVIEW_LAYER_INDEX: 3;
export declare const BOARD_CONNECTOR_QUICK_CONNECT_PREVIEW_ALPHA = 0.18;
export declare class BoardConnectorQuickConnectShapePreviewObject extends BaseObject {
    private _state;
    private _shapeModel;
    private _shapeElementId;
    constructor(key?: string, state?: Partial<IBoardConnectorQuickConnectShapePreviewObjectState>);
    updateState(state?: Partial<IBoardConnectorQuickConnectShapePreviewObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _resolveShapeModel;
    private _resolvePreviewAlpha;
}
