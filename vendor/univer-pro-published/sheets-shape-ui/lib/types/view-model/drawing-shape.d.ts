import type { ICustomShapeTextData, IShapeData, ShapeModel } from '@univerjs-pro/engine-shape';
import type { IShapeFormulaPresentation } from '@univerjs-pro/shape-editor';
import type { IDocumentData, IDrawingParam, ISrcRect, LocaleService, Nullable } from '@univerjs/core';
import type { IShapeProps, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { DrawingTypeEnum } from '@univerjs/core';
import { RENDER_CLASS_TYPE, Shape, Transform } from '@univerjs/engine-render';
export interface IDrawingShapeProps extends IShapeProps {
    shapeModel: ShapeModel;
    /**
     * 20.1.8.55 srcRect (Source Rectangle)
     */
    srcRect?: Nullable<ISrcRect>;
    /**
     * 20.1.9.18 prstGeom (Preset geometry)
     */
    prstGeom?: Nullable<string>;
    drawingType: DrawingTypeEnum;
    /**
     * LocaleService for rich text rendering
     */
    localeService?: LocaleService;
    shapeId: string;
    /**
     * The unit ID (workbook ID).
     */
    unitId: string;
    /**
     * The sub-unit ID (worksheet ID).
     */
    subUnitId: string;
    /**
     * Whether the shape is currently being edited
     */
    isEditing?: boolean;
    /**
     * Pre-loaded HTMLImageElement for picture fill rendering.
     * Populated asynchronously by the render controller after image loading.
     */
    image?: HTMLImageElement;
    formulaPresentation?: IShapeFormulaPresentation;
    animateFormulaPresentation?: boolean;
}
export interface IDrawingShapeData extends IDrawingParam {
    /**
     * 20.1.8.55 srcRect (Source Rectangle)
     */
    srcRect?: Nullable<ISrcRect>;
    /**
     * 20.1.9.18 prstGeom (Preset geometry)
     */
    prstGeom?: Nullable<string>;
}
export declare function resolveDrawingShapeTextRenderPolicy(shapeData: IShapeData, customTextData: ICustomShapeTextData, documentData?: IDocumentData): {
    clip: boolean;
    wrapStrategy: import("@univerjs/core").WrapStrategy;
};
export declare class DrawingShape extends Shape<IDrawingShapeProps> {
    protected _props: IDrawingShapeProps;
    private readonly _formulaAnimation;
    private _transformCalculateSrcRect;
    private readonly _drawingType;
    isDrawingObject: boolean;
    constructor(id: string, config: IDrawingShapeProps);
    private _init;
    setPrstGeom(prstGeom?: Nullable<string>): void;
    setEditing(isEditing: boolean): void;
    setFormulaPresentation(presentation: IShapeFormulaPresentation | undefined, animate?: boolean): void;
    private _applyFormulaAutoFitSize;
    get unitId(): string;
    get subUnitId(): string;
    private _updateSrcRectByTransform;
    setSrcRect(srcRect?: Nullable<ISrcRect>): void;
    setFillImage(image: HTMLImageElement | undefined): void;
    set transform(trans: Transform);
    get transform(): Transform;
    get shapeModel(): ShapeModel;
    get shapeId(): string;
    get classType(): RENDER_CLASS_TYPE;
    _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    getDrawingPoints(_bounds: IViewportInfo): void;
    private _drawShapeText;
    private _drawSimpleText;
    private _drawRichText;
    private _drawRichTextLayer;
    render(mainCtx: UniverRenderingContext, bounds: IViewportInfo, _drawAdj?: boolean): this;
    getInverseCoord(coord: Vector2): Vector2;
    isHit(coord: Vector2): boolean;
    dispose(): void;
}
