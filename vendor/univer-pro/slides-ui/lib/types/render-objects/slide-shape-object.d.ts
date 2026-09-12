import type { IShapeRect } from '@univerjs-pro/engine-shape';
import type { IShapeFormulaPresentation } from '@univerjs-pro/shape-editor';
import type { ISlideShapeElement } from '@univerjs-pro/slides';
import type { ITransformState, LocaleService } from '@univerjs/core';
import type { IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { ShapeModel } from '@univerjs-pro/engine-shape';
import { Shape, Vector2 } from '@univerjs/engine-render';
export interface ISlideShapeObjectProps {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
    flipX?: boolean;
    flipY?: boolean;
    skewX?: number;
    skewY?: number;
    zIndex?: number;
    visible?: boolean;
    evented?: boolean;
    shapeModel: ShapeModel;
    element: ISlideShapeElement;
    localeService?: LocaleService;
    formulaPresentation?: IShapeFormulaPresentation;
    animateFormulaPresentation?: boolean;
    smartArtImagePlaceholderColors?: {
        background: string;
        border: string;
        accent: string;
    };
}
export interface ISlideShapeHyperLinkHit {
    linkId: string;
    url: string;
    startIndex: number;
    endIndex: number;
}
export declare class SlideShapeObject extends Shape<ISlideShapeObjectProps> {
    private readonly _shapeModel;
    private readonly _localeService?;
    private readonly _smartArtImagePlaceholderColors?;
    private _element;
    private _isEditing;
    private _selectedSmartArtPresentationShapeId;
    private _editingSmartArtPresentationShapeId;
    private readonly _documentTextRenderCache;
    private readonly _shapeText3DRenderCache;
    private readonly _smartArtTextObjects;
    private readonly _smartArtTextRenderStates;
    private readonly _formulaAnimation;
    private _fillImage?;
    private readonly _smartArtFillImages;
    private _formulaPresentation?;
    isDrawingObject: boolean;
    constructor(key: string, config: ISlideShapeObjectProps);
    updateElement(element: ISlideShapeElement): void;
    getElement(): ISlideShapeElement;
    getShapeModel(): ShapeModel;
    getTransformerState(): ITransformState;
    resolveHyperLinkAt(coord: Vector2): ISlideShapeHyperLinkHit | null;
    measureTextBoxNaturalCrossSize(width: number, height: number): number | null;
    isLineShape(): boolean;
    /**
     * Returns the text rect in top-left-origin coordinates `{ 0, 0, w, h }` space.
     * This is the single source of truth used by both the canvas text renderer
     * and the DOM editor overlay — guaranteeing they always occupy the same area.
     *
     * Line shapes have no text area and return the full bounding rect.
     */
    getTextRect(width: number, height: number): IShapeRect;
    setEditing(isEditing: boolean): void;
    setFillImage(image?: HTMLImageElement): void;
    setSmartArtFillImage(presentationShapeId: string, image?: HTMLImageElement): void;
    setFormulaPresentation(presentation: IShapeFormulaPresentation | undefined, animate?: boolean): void;
    private _applyNoWrapAutoFitSize;
    private _translateHorizontalAutoFit;
    private _translateVerticalAutoFit;
    _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawProjectedShapeText;
    private _drawSmartArtImagePlaceholders;
    private _drawSmartArtShapeText;
    private _disposeStaleSmartArtTextObjects;
    private _resolveSmartArtTextObject;
    setSelectedSmartArtPresentationShapeId(presentationShapeId: string | null): void;
    setEditingSmartArtPresentationShapeId(presentationShapeId: string | null): void;
    resolveSmartArtPresentationShapeAt(coord: Vector2): {
        presentationShapeId: string;
        nodeId?: string;
    } | null;
    private _resolveDocumentTextOffsetAt;
    private _drawSmartArtSelection;
    private _drawShapeText;
    private _drawShapeTextLayer;
    private _renderPreparedShapeText;
    private _applyReadableTextFlip;
    private _renderShapePath;
    render(mainCtx: UniverRenderingContext, bounds: IViewportInfo): this;
    getInverseCoord(coord: Vector2): Vector2;
    dispose(): void;
    private _disposeSmartArtTextObjects;
    isHit(coord: Vector2): boolean;
    static createShapeModel(element: ISlideShapeElement): ShapeModel;
}
