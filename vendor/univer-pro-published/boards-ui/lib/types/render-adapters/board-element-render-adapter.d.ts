import type { IBoardElementData, IBoardThemeData } from '@univerjs-pro/boards';
import type { IShapeFormulaPresentation } from '@univerjs-pro/shape-editor';
import type { IImageIoService, LocaleService, ThemeService } from '@univerjs/core';
import type { BaseObject, ICanvasColorService } from '@univerjs/engine-render';
import type { IBoardFocusedSwimlaneLane } from '../services/board-element-state.service';
import { BoardConnectorObject } from '../render-objects/board-connector-object';
export declare const BOARD_ELEMENT_OBJECT_PREFIX = "board-element";
type BoardConnectorLineJumpCacheOption = ConstructorParameters<typeof BoardConnectorObject>[1]['lineJumpCache'];
type BoardConnectorRoutingCacheOption = ConstructorParameters<typeof BoardConnectorObject>[1]['routingCache'];
export interface IBoardElementRenderObjectKey {
    unitId: string;
    elementId: string;
}
export interface IBoardElementRenderBounds {
    left: number;
    top: number;
    width: number;
    height: number;
    angle: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface ICreateBoardElementRenderObjectOptions {
    canvasColorService?: ICanvasColorService;
    themeService?: ThemeService;
    unitId: string;
    elementDataItem: IBoardElementData;
    elementData?: Record<string, IBoardElementData>;
    zIndex?: number;
    imageIoService?: IImageIoService;
    localeService?: LocaleService;
    lineJumpCache?: BoardConnectorLineJumpCacheOption;
    routingCache?: BoardConnectorRoutingCacheOption;
    adapters?: readonly IBoardElementRenderAdapter[];
    focusedSwimlaneLane?: IBoardFocusedSwimlaneLane | null;
    formulaPresentation?: IShapeFormulaPresentation;
    animateFormulaPresentation?: boolean;
    themeData?: IBoardThemeData;
}
export interface ISyncBoardElementRenderObjectOptions {
    adapters?: readonly IBoardElementRenderAdapter[];
    preserveTransform?: boolean;
    elementData?: Record<string, IBoardElementData>;
    unitId?: string;
    zIndex?: number;
    focusedSwimlaneLane?: IBoardFocusedSwimlaneLane | null;
    formulaPresentation?: IShapeFormulaPresentation;
    animateFormulaPresentation?: boolean;
    lineJumpCache?: BoardConnectorLineJumpCacheOption;
    routingCache?: BoardConnectorRoutingCacheOption;
}
export interface IBoardElementRenderAdapterContext {
    canvasColorService?: ICanvasColorService;
    themeService?: ThemeService;
    unitId: string;
    elementDataItem: IBoardElementData;
    elementData?: Record<string, IBoardElementData>;
    key: string;
    bounds: IBoardElementRenderBounds;
    zIndex?: number;
    imageIoService?: IImageIoService;
    localeService?: LocaleService;
    lineJumpCache?: BoardConnectorLineJumpCacheOption;
    routingCache?: BoardConnectorRoutingCacheOption;
    focusedSwimlaneLane?: IBoardFocusedSwimlaneLane | null;
    formulaPresentation?: IShapeFormulaPresentation;
    animateFormulaPresentation?: boolean;
}
export interface IBoardElementRenderAdapter {
    name: string;
    createObject: (context: IBoardElementRenderAdapterContext) => BaseObject | null;
    shouldRecreateObject?: (object: BaseObject, context: IBoardElementRenderAdapterSyncContext) => boolean;
    syncObject?: (object: BaseObject, context: IBoardElementRenderAdapterSyncContext) => boolean;
}
export interface IBoardElementRenderAdapterSyncContext extends IBoardElementRenderAdapterContext {
    preserveTransform?: boolean;
}
export declare function getBoardElementRenderObjectKey(unitId: string, elementId: string): string;
export declare function parseBoardElementRenderObjectKey(oKey: string): IBoardElementRenderObjectKey | null;
export declare function getBoardElementRenderBounds(elementDataItem: IBoardElementData, elementData?: Record<string, IBoardElementData>): IBoardElementRenderBounds;
export declare const BOARD_CONNECTOR_ELEMENT_RENDER_ADAPTER: IBoardElementRenderAdapter;
export declare const BOARD_SHAPE_ELEMENT_RENDER_ADAPTER: IBoardElementRenderAdapter;
export declare const BOARD_IMAGE_ELEMENT_RENDER_ADAPTER: IBoardElementRenderAdapter;
export declare const BOARD_ELEMENT_RENDER_ADAPTERS: readonly IBoardElementRenderAdapter[];
export declare function createBoardElementRenderObject({ canvasColorService, themeService, unitId, elementDataItem, elementData, zIndex, imageIoService, localeService, lineJumpCache, routingCache, adapters, focusedSwimlaneLane, formulaPresentation, themeData, }: ICreateBoardElementRenderObjectOptions): BaseObject | null;
export declare function syncBoardElementRenderObject(object: BaseObject, elementDataItem: IBoardElementData, options?: ISyncBoardElementRenderObjectOptions): boolean;
export {};
