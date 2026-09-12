import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IShapeData, IShapeRect } from '@univerjs-pro/engine-shape';
import type { IShapeFormulaPresentation } from '@univerjs-pro/shape-editor';
import type { IImageIoService, LocaleService, ThemeService } from '@univerjs/core';
import type { ICanvasColorService, IObjectFullState, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { ShapeModel, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { Shape } from '@univerjs/engine-render';
export type IBoardShapeElement = IBoardElementData['element'] & {
    shapeData: IShapeData;
};
export interface IBoardShapeObjectProps {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
    flipX?: boolean;
    flipY?: boolean;
    zIndex?: number;
    visible?: boolean;
    evented?: boolean;
    shapeModel: ShapeModel;
    element: IBoardShapeElement;
    localeService?: LocaleService;
    themeService?: ThemeService;
    canvasColorService?: ICanvasColorService;
    imageIoService?: IImageIoService;
    focusedLaneId?: string | null;
    focusedTitle?: boolean;
    formulaPresentation?: IShapeFormulaPresentation;
    animateFormulaPresentation?: boolean;
}
/**
 * Board canvas object for board shape elements.
 *
 * It keeps the board render layer independent while still using the shared
 * engine-shape renderer for preset geometry.
 */
export declare class BoardShapeObject extends Shape<IBoardShapeObjectProps> {
    private readonly _shapeModel;
    private readonly _localeService?;
    private readonly _imageIoService?;
    private readonly _themeService?;
    private readonly _canvasColorService?;
    private _titleColors?;
    private _element;
    private _focusedLaneId;
    private _focusedTitle;
    private _isEditing;
    private _fillImage?;
    private _fillImageRequestId;
    private readonly _documentTextRenderCache;
    private readonly _formulaAnimation;
    private _formulaPresentation?;
    isDrawingObject: boolean;
    constructor(key: string, config: IBoardShapeObjectProps);
    updateElement(element: IBoardShapeElement): void;
    private _refreshTitleColors;
    getElement(): IBoardShapeElement;
    getShapeModel(): ShapeModel;
    setFormulaPresentation(presentation: IShapeFormulaPresentation | undefined, animate?: boolean): void;
    private _applyFormulaAutoFitSize;
    measureTextBoxNaturalCrossSize(width: number, height: number): number | null;
    setFocusedLaneId(focusedLaneId: string | null | undefined): void;
    setFocusedTitle(focusedTitle: boolean | null | undefined): void;
    transformByState(option: IObjectFullState): this;
    setEditing(isEditing: boolean): void;
    setFillImage(image?: HTMLImageElement): void;
    isImageFillLoaded(): boolean;
    private _refreshFillImage;
    getTextRect(width: number, height: number): IShapeRect;
    _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawShapeModel;
    private _drawEngineParticipantShape;
    private _drawSequenceLifeline;
    private _drawGenericContainerTitleLabel;
    private _resolveGenericContainerTitleLabelBounds;
    private _drawFocusedSwimlaneLane;
    private _drawSwimlaneLanes;
    private _drawSwimlaneTitleBar;
    private _drawSwimlaneTitleSeparator;
    private _drawSwimlaneLaneHeaderBands;
    private _drawSwimlaneLaneTitles;
    private _drawSwimlaneLaneHeaderSeparators;
    private _drawShapeText;
    private _drawShapeTextLayer;
    dispose(): void;
    render(mainCtx: UniverRenderingContext, bounds: IViewportInfo): this;
    private _resolveRenderCullingBound;
    getInverseCoord(coord: Vector2): Vector2;
    isHit(coord: Vector2): boolean;
    static createShapeModel(element: IBoardShapeElement): ShapeModel;
    static resolveShapeModelData(element: IBoardShapeElement): {
        shapeType: ShapeTypeEnum;
        shapeData: IShapeData;
    };
}
