import type { IShapeCreateInput } from '@univerjs-pro/engine-shape';
import type { ISlideBackgroundData, ISlideImageElement, ISlidePage, ISlidePageElement, ISlidePageSize, ISlideTransition, SlideModel, SlidePage } from '@univerjs-pro/slides';
import type { IGroupBaseBound, ImageSourceType } from '@univerjs/core';
import type { IFBlobSource } from '@univerjs/core/facade';
import type { ISlideImageBuilderInfo } from './f-image';
import type { FPresentation } from './f-presentation';
import { FConnectorShape, FShape } from '@univerjs-pro/engine-shape/facade';
import { ICommandService, Injector, IPermissionService } from '@univerjs/core';
import { FBaseInitialable } from '@univerjs/core/facade';
import { FGroup } from './f-group';
import { FImage, FImageBuilder } from './f-image';
import { FPageElement } from './f-page-element';
import { FSlideObjectPermission } from './f-slide-permission';
export interface ISlideImageInsertOptions {
    id?: string;
    imageSourceType?: ImageSourceType;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    rotation?: number;
    crop?: ISlideImageElement['crop'];
    prstGeom?: ISlideImageElement['prstGeom'];
    adjustValues?: ISlideImageElement['adjustValues'];
    shapeData?: ISlideImageElement['shapeData'];
    index?: number;
}
export type FSlidePageElement = FPageElement | FShape | FConnectorShape;
export interface ISlideFacadeElementLayout {
    id: string;
    orderIndex: number;
    bounds: IGroupBaseBound | null;
}
export interface ISlideFacadePageLayout {
    pageId: string;
    pageSize: ISlidePageSize;
    elements: ISlideFacadeElementLayout[];
}
/**
 * The facade class for a slide page.
 * @hideconstructor
 */
export declare class FSlide extends FBaseInitialable {
    protected readonly _fPresentation: FPresentation;
    protected readonly _slideModel: SlideModel;
    protected readonly _slidePage: SlidePage;
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _permissionService: IPermissionService;
    constructor(_fPresentation: FPresentation, _slideModel: SlideModel, _slidePage: SlidePage, _injector: Injector, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Get the slide id.
     * @returns {string} The slide id.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * if (!fPresentation) throw new Error('No active presentation.');
     * const fSlide = fPresentation.getSlideByIndex(0);
     * if (!fSlide) throw new Error('Slide not found.');
     * console.log(fSlide.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the Slide page permission facade.
     * @returns {FSlideObjectPermission} Permission facade combining Presentation and Slide page Edit points.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * if (!slide) throw new Error('Slide not found.');
     * await slide.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FSlideObjectPermission;
    /**
     * Returns the permission facade for one element on this Slide.
     * @param {string} elementId Stable element id.
     * @returns {FSlideObjectPermission} Permission facade combining Presentation, Slide, and Element Edit points.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * if (!slide) throw new Error('Slide not found.');
     * const element = slide.getElements()[0];
     * if (!element) throw new Error('Slide element not found.');
     * await slide.getElementPermission(element.getId()).setReadOnly();
     * ```
     */
    getElementPermission(elementId: string): FSlideObjectPermission;
    /**
     * Get the slide name.
     * @returns {string} The slide name.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getName());
     * ```
     */
    getName(): string;
    /**
     * Get the raw slide data.
     * @returns {ISlidePage} The slide page data.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getData());
     * ```
     */
    getData(): ISlidePage;
    /**
     * Get this slide's speaker notes.
     * @returns {string | undefined} The speaker notes, or `undefined` if none are set.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getSpeakerNotes());
     * ```
     */
    getSpeakerNotes(): string | undefined;
    /**
     * Set or clear this slide's speaker notes.
     * @param {string} [speakerNotes] The speaker notes. Pass an empty string or omit the argument to clear them.
     * @returns {FSlide} This slide, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * fSlide.setSpeakerNotes('Review Q2 revenue');
     * console.log(fSlide.getSpeakerNotes()); // 'Review Q2 revenue'
     *
     * fSlide.setSpeakerNotes();
     * console.log(fSlide.getSpeakerNotes()); // undefined
     * ```
     */
    setSpeakerNotes(speakerNotes?: string): this;
    /**
     * Get the transition used when entering this slide during playback.
     * @returns {ISlideTransition | undefined} The resolved slide transition, or `undefined` if there is no transition.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getTransition());
     * ```
     */
    getTransition(): ISlideTransition | undefined;
    /**
     * Set the transition used when entering this slide during playback.
     *
     * For example, setting a transition on slide 2 is visible when playback moves from slide 1
     * to slide 2. Setting a transition on the current slide is not visible when moving to the
     * next slide unless the next slide has its own transition.
     * @param {ISlideTransition} [transition] The slide transition to set. Omit to clear the slide's explicit transition.
     * @returns {FSlide} This slide, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * fSlide.setTransition({
     *   type: univerAPI.Enum.SlideTransitionTypeEnum.Push,
     *   duration: 1000,
     *   direction: univerAPI.Enum.SlideTransitionDirectionEnum.Right,
     * });
     * ```
     */
    setTransition(transition?: ISlideTransition): this;
    /**
     * Get the underlying slide page model.
     * @returns {SlidePage} The slide page model.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getSlide());
     * ```
     */
    getSlide(): SlidePage;
    /**
     * Get this slide's page size, falling back to the presentation default.
     * @returns {ISlidePageSize} The resolved page size.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getPageSize());
     * ```
     */
    getPageSize(): ISlidePageSize;
    /**
     * Returns this page's model-space size and ordered element bounds.
     *
     * This model-only query does not include viewport, screen, scroll, or zoom
     * coordinates and does not require a UI or render plugin.
     *
     * @returns {ISlideFacadePageLayout} Page size and element bounds in Slide model coordinates.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * const slide = presentation?.getSlideByIndex(0);
     * console.log(slide?.getPageLayout());
     * ```
     */
    getPageLayout(): ISlideFacadePageLayout;
    /**
     * Set this slide's page size.
     * @param {Partial<ISlidePageSize>} pageSize The new slide page size.
     * @returns {FSlide} This slide, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * fSlide.setPageSize({
     *   width: 1280,
     *   preset: univerAPI.Enum.SlidePageSizePresetEnum.WideScreen16By9,
     * });
     * ```
     */
    setPageSize(pageSize: Partial<ISlidePageSize>): this;
    /**
     * Get this slide's explicit background.
     * @returns {ISlideBackgroundData | undefined} The explicit background.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getBackground());
     * ```
     */
    getBackground(): ISlideBackgroundData | undefined;
    /**
     * Set this slide's explicit background.
     * @param {ISlideBackgroundData} [background] The slide background. Omit to clear it.
     * @returns {FSlide} This slide, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * // Set a solid background color on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Solid,
     *   color: '#4f90ff',
     * });
     *
     * // Set a gradient background on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Gradient,
     *   angle: 45,
     *   stops: [
     *     {
     *       color: '#4f90ff',
     *       position: 0,
     *     },
     *     {
     *       color: '#ffffff',
     *       position: 1,
     *     }
     *   ],
     * });
     *
     * // Set an image background on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Image,
     *   source: 'https://example.com/image.png',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.URL,
     *   fit: univerAPI.Enum.SlidePresentationBackgroundGraphicFitEnum.Cover,
     * });
     *
     * // Set a pattern background on this slide.
     * fSlide.setBackground({
     *   type: univerAPI.Enum.SlideBackgroundTypeEnum.Pattern,
     *   pattern: 'diagonal',
     *   foregroundColor: '#4f90ff',
     *   backgroundColor: '#ffffff',
     * });
     * ```
     */
    setBackground(background?: ISlideBackgroundData): this;
    /**
     * Set whether this slide shows inherited master shapes and background graphics.
     * @param {boolean} show Whether inherited master background content is shown.
     * @returns {FSlide} This slide, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * fSlide.setShowMasterBackground(false);
     * ```
     */
    setShowMasterBackground(show: boolean): this;
    /**
     * Returns all page elements on this slide.
     * @returns {FSlidePageElement[]} All page elements in element order.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getElements());
     * ```
     */
    getElements(): FSlidePageElement[];
    /**
     * Returns a page element by element id.
     * @param {string} id The element id.
     * @returns {FSlidePageElement | null} The page element, or `null` when it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElementById('shape-1');
     * console.log(element);
     * ```
     */
    getElementById(id: string): FSlidePageElement | null;
    /**
     * Adds a page element to this slide.
     * @param {ISlidePageElement} element The slide element data.
     * @param {number} [index] The insert index in the element order.
     * @returns {FSlidePageElement} The inserted element.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const shapeElement = fSlide.insertElement(element);
     * console.log(shapeElement);
     * ```
     */
    insertElement(element: ISlidePageElement, index?: number): FSlidePageElement;
    /**
     * Removes a page element from this slide.
     * @param {FSlidePageElement} element The element to remove.
     * @returns {boolean} Whether the element was removed successfully.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const element = fSlide.getElements()[0];
     * if (element) {
     *   fSlide.deleteElement(element);
     * }
     * ```
     */
    deleteElement(element: FSlidePageElement): boolean;
    /**
     * Adds a shape to this slide.
     * @param {IShapeCreateInput} input The common Shape creation input.
     * @returns {FShape | FConnectorShape | null} The inserted Shape facade, or `null` when creation fails.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const fShape = fSlide.insertShape({
     *   shapeType: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   transform: { left: 100, top: 120, width: 240, height: 120 },
     *   visible: true,
     *   selectable: true,
     *   shapeData: {
     *     fill: { fillType: univerAPI.Enum.ShapeFillEnum.SolidFill, color: '#fef3c7' },
     *     stroke: {
     *       lineStrokeType: univerAPI.Enum.ShapeLineTypeEnum.SolidLine,
     *       color: '#d97706',
     *       width: 2,
     *     },
     *   },
     * });
     * if (!fShape) throw new Error('Shape could not be inserted.');
     * fShape
     *   .setRotation(-6)
     *   .setStrokeLineJoinType(univerAPI.Enum.ShapeLineJoinEnum.Round);
     * const richText = univerAPI.newRichText()
     *   .text('Open ')
     *   .link('the project brief', 'https://example.com/project-brief');
     * fShape.getText()
     *   .setRichText(richText)
     *   .setHorizontalAlign(univerAPI.Enum.HorizontalAlign.CENTER)
     *   .setVerticalAlign(univerAPI.Enum.VerticalAlign.MIDDLE);
     * ```
     */
    insertShape(input: IShapeCreateInput): FShape | FConnectorShape | null;
    /**
     * Inserts an editable SmartArt composite using one of the built-in layout IDs.
     * All model writes are delegated to the Slide Shape host adapter command path.
     * @param {string} layoutId The built-in SmartArt layout id.
     * @param {IShapeCreateInput['transform']} [transform] The optional position, size, rotation, and flip overrides.
     * @returns {FShape | FConnectorShape | null} The SmartArt Shape facade, or `null` when the layout or host is unavailable.
     * @example Slide — executable with `univer execute`
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * const slide = presentation?.getActiveSlide();
     * if (!slide) throw new Error('No active slide');
     * const smartArt = slide.insertSmartArt(
     *   'urn:microsoft.com/office/officeart/2005/8/layout/orgChart1',
     *   { left: 120, top: 90, width: 720, height: 360 }
     * );
     * if (!smartArt) throw new Error('Cannot insert SmartArt');
     * console.log(smartArt.getSmartArtData()?.layout.id);
     * ```
     */
    insertSmartArt(layoutId: string, transform?: IShapeCreateInput['transform']): FShape | FConnectorShape | null;
    /**
     * Returns a shape by id.
     * @param {string} id The shape id.
     * @returns {FShape | FConnectorShape | null} The Shape facade, or `null` when it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const fShape = fSlide.getShape('shape-1');
     * console.log(fShape);
     * ```
     */
    getShape(id: string): FShape | FConnectorShape | null;
    /**
     * Returns all shapes on this slide.
     * @returns {Array<FShape | FConnectorShape>} The Shape facades on this slide.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const fShapes = fSlide.getShapes();
     * console.log(fShapes);
     * ```
     */
    getShapes(): Array<FShape | FConnectorShape>;
    /**
     * Returns a builder to create a new image for this slide. The builder will not automatically upload or choose an image.
     * @param {FImage} [existing] An existing image to initialize the builder with for updating or a string element id to create a new image with that id. Omit to create a new image with an auto-generated id.
     * @returns {FImageBuilder} A new image builder.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setAbsolutePosition(80, 120)
     *   .setSize(320, 180)
     *   .setRotation(15)
     *   .setCrop({
     *     left: 10,
     *     top: 10,
     *     right: 10,
     *     bottom: 10
     *   })
     *   .setClipShape(univerAPI.Enum.ShapeTypeEnum.RoundRect, { adj1: 5000 })
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    newImage(existing?: FImage | string): FImageBuilder;
    /**
     * Adds an image to this slide.
     * @param {ISlideImageBuilderInfo} imageBuilderInfo The image builder info returned by `FImageBuilder.build()`.
     * @param {number} [index] The insert index in the element order.
     * @returns {FImage} The inserted image.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const imageInfo = fSlide.newImage()
     *   .setSource('https://example.com/image.png', univerAPI.Enum.ImageSourceType.URL)
     *   .setAbsolutePosition(80, 120)
     *   .setSize(320, 180)
     *   .setRotation(15)
     *   .setCrop({
     *     left: 10,
     *     top: 10,
     *     right: 10,
     *     bottom: 10
     *   })
     *   .setClipShape(univerAPI.Enum.ShapeTypeEnum.RoundRect, { adj1: 5000 })
     *   .build();
     * fSlide.insertImage(imageInfo);
     * ```
     */
    insertImage(imageBuilderInfo: ISlideImageBuilderInfo, index?: number): FImage;
    /**
     * Insert an image from a string source or blob source.
     * @param {string | IFBlobSource} source The image source or blob source.
     * @param {ISlideImageInsertOptions} [options] Image insertion options.
     * @returns {Promise<FImage>} The inserted image.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * // Insert an image from a URL.
     * await fSlide.insertImageAsync('https://example.com/image.png', {
     *   imageSourceType: univerAPI.Enum.ImageSourceType.URL,
     *   left: 80,
     *   top: 120,
     *   width: 320,
     *   height: 180,
     *   rotation: 15,
     *   crop: {
     *     left: 10,
     *     top: 10,
     *     right: 10,
     *     bottom: 10
     *   },
     *   prstGeom: univerAPI.Enum.ShapeTypeEnum.RoundRect,
     *   adjustValues: { adj1: 5000 },
     * });
     *
     * // Insert an image from a blob source.
     * const blobSource = createBlobSourceFromFile(fileInput.files[0]);
     * await fSlide.insertImageAsync(blobSource, {
     *   imageSourceType: univerAPI.Enum.ImageSourceType.BASE64,
     *   left: 80,
     *   top: 120,
     *   width: 320,
     *   height: 180,
     * });
     * ```
     */
    insertImageAsync(source: string | IFBlobSource, options?: ISlideImageInsertOptions): Promise<FImage>;
    /**
     * Updates an existing image on this slide.
     * @param {ISlideImageBuilderInfo} imageBuilderInfo The image builder info returned by `FImageBuilder.build()`.
     * @returns {FImage} The updated image.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   const imageInfo = image.toBuilder()
     *     .setSize(480, 300)
     *     .build();
     *   fSlide.updateImage(imageInfo);
     * }
     * ```
     */
    updateImage(imageBuilderInfo: ISlideImageBuilderInfo): FImage;
    /**
     * Returns all images on this slide.
     * @returns {FImage[]} The images on this slide.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getImages());
     * ```
     */
    getImages(): FImage[];
    /**
     * Removes an image from this slide.
     * @param {FImage | string} image The image or image element id to remove.
     * @returns {boolean} Whether the image was removed successfully.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const image = fSlide.getImages()[0];
     * if (image) {
     *   fSlide.removeImage(image);
     * }
     * ```
     */
    removeImage(image: FImage): boolean;
    /**
     * Returns all group elements on this slide.
     * @returns {FGroup[]} The groups on this slide.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * console.log(fSlide.getGroups());
     * ```
     */
    getGroups(): FGroup[];
    /**
     * Group two or more slide elements.
     * @param {FSlidePageElement[]} elements The elements to group.
     * @returns {FGroup} The created group.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const element1 = fSlide.getElements()[0];
     * const element2 = fSlide.getElements()[1];
     * if (element1 && element2) {
     *   const group = fSlide.group([element1, element2]);
     *   console.log(group);
     * }
     * ```
     */
    group(elements: FSlidePageElement[]): FGroup;
    /**
     * Ungroup a slide group.
     * @param {FGroup | string} group The group facade or group id to ungroup.
     * @returns {FSlidePageElement[]} The released child elements.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     *
     * const group = fSlide.getGroups()[0];
     * if (group) {
     *   const releasedElements = fSlide.ungroup(group);
     *   console.log(releasedElements);
     * }
     * ```
     */
    ungroup(group: FGroup): FSlidePageElement[];
    private _getShapeScope;
    private _getShapeAdapter;
    private _createShapeHandle;
}
