import type { ISlideData, ISlidePage, ISlidePageSize, ISlidePresentationBackgroundGraphic, ISlideTransition, SlideModel } from '@univerjs-pro/slides';
import { PageTypeEnum, SlidePresentationBackgroundGraphicsTargetEnum } from '@univerjs-pro/slides';
import { ICommandService, Injector, IPermissionService, IResourceLoaderService } from '@univerjs/core';
import { FBaseInitialable } from '@univerjs/core/facade';
import { FSlide } from './f-slide';
import { FPresentationPermission, FSlideObjectPermission } from './f-slide-permission';
/**
 * Options for applying presentation-level background graphics.
 */
export interface ISetPresentationBackgroundGraphicsOptions {
    /**
     * Which master pages should receive the managed background graphics.
     * Defaults to `allMasters` so the call behaves like a deck-level setting.
     */
    target?: SlidePresentationBackgroundGraphicsTargetEnum;
    /**
     * Explicit master page ids. When provided, this takes precedence over `target`.
     */
    masterPageIds?: string[];
}
/**
 * The facade class for a presentation.
 * @hideconstructor
 */
export declare class FPresentation extends FBaseInitialable {
    protected readonly _slideModel: SlideModel;
    protected readonly _injector: Injector;
    protected readonly _resourceLoaderService: IResourceLoaderService;
    protected readonly _commandService: ICommandService;
    protected readonly _permissionService: IPermissionService;
    /**
     * @property {string} id The presentation unit id.
     * @ignore
     */
    readonly id: string;
    constructor(_slideModel: SlideModel, _injector: Injector, _resourceLoaderService: IResourceLoaderService, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Get the presentation id.
     * @returns {string} The presentation id.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * console.log(fPresentation.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the Presentation unit permission facade.
     * @returns {FPresentationPermission} Permission facade for Edit, Copy, Print, Export, and Comment.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active Presentation.');
     * await presentation.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FPresentationPermission;
    /**
     * Returns the shared Master and Layout edit permission facade.
     * @returns {FSlideObjectPermission} Permission facade combining Presentation and Master View Edit points.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active Presentation.');
     * await presentation.getMasterViewPermission().setReadOnly();
     * ```
     */
    getMasterViewPermission(): FSlideObjectPermission;
    /**
     * Returns an Element permission facade for a Master or Layout page.
     * @param {PageTypeEnum.Master | PageTypeEnum.Layout} sourcePageType Whether the element belongs to a Master or Layout page.
     * @param {string} pageId Stable source page id.
     * @param {string} elementId Stable element id.
     * @returns {FSlideObjectPermission} Permission facade combining Presentation, Master View, and Element Edit points.
     * @example
     * ```ts
     * import { PageTypeEnum } from '@univerjs-pro/slides';
     *
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active Presentation.');
     * const master = Object.values(presentation.save().masterPages ?? {})[0];
     * const elementId = master?.elementOrder[0];
     * if (!master || !elementId) throw new Error('Master element not found.');
     * await presentation.getMasterElementPermission(PageTypeEnum.Master, master.id, elementId).setReadOnly();
     * ```
     */
    getMasterElementPermission(sourcePageType: PageTypeEnum.Master | PageTypeEnum.Layout, pageId: string, elementId: string): FSlideObjectPermission;
    /**
     * Get the presentation name.
     * @returns {string} The presentation name.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * console.log(fPresentation.getName());
     * ```
     */
    getName(): string;
    /**
     * Set the presentation name.
     * @param {string} name The new presentation name.
     * @returns {FPresentation} This presentation, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.setName('Quarterly Review');
     * ```
     */
    setName(name: string): this;
    /**
     * Get the underlying presentation model.
     * @returns {SlideModel} The presentation model.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const model = fPresentation.getPresentation();
     * console.log(model);
     * ```
     */
    getPresentation(): SlideModel;
    /**
     * Save and return the presentation snapshot.
     * @returns {ISlideData} The presentation snapshot.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const snapshot = fPresentation.save();
     * console.log(snapshot);
     * ```
     */
    save(): ISlideData;
    /**
     * Get the default page size of the presentation.
     * @returns {ISlidePageSize} The page size.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * console.log(fPresentation.getPageSize());
     * ```
     */
    getPageSize(): ISlidePageSize;
    /**
     * Set the default page size of the presentation.
     * @param {Partial<ISlidePageSize>} pageSize The new default page size.
     * @returns {FPresentation} This presentation, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.setPageSize({
     *   width: 1024,
     *   preset: univerAPI.Enum.SlidePageSizePresetEnum.WideScreen16By10
     * });
     * ```
     */
    setPageSize(pageSize: Partial<ISlidePageSize>): this;
    /**
     * Get managed presentation background graphics from a master page.
     * When `masterPageId` is omitted, the active slide's master is used.
     * @param {string} [masterPageId] Optional master page id to read from.
     * @returns {ISlidePresentationBackgroundGraphic[]} The managed deck background graphics.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const graphics = fPresentation.getPresentationBackgroundGraphics();
     * console.log(graphics);
     * ```
     */
    getPresentationBackgroundGraphics(masterPageId?: string): ISlidePresentationBackgroundGraphic[];
    /**
     * Set managed presentation background graphics.
     * The call updates master pages through `SetPresentationBackgroundGraphicsCommand`.
     * @param {ISlidePresentationBackgroundGraphic[]} graphics The managed background graphics.
     * @param {ISetPresentationBackgroundGraphicsOptions} [options] Target master options.
     * @returns {FPresentation} This presentation, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.setPresentationBackgroundGraphics([{
     *   source: 'image-source-id',
     *   imageSourceType: univerAPI.Enum.ImageSourceType.UUID,
     *   fit: univerAPI.Enum.SlidePresentationBackgroundGraphicFitEnum.Cover,
     * }], {
     *   target: univerAPI.Enum.SlidePresentationBackgroundGraphicsTargetEnum.ActiveMaster
     * });
     * ```
     *
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const svg = `
     * <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
     *   <rect width="960" height="540" fill="#e0f2fe"/>
     *   <path d="M0 540 L960 0" stroke="#22c55e" stroke-width="90" opacity="0.45"/>
     *   <path d="M-120 420 L840 -120" stroke="#3b82f6" stroke-width="52" opacity="0.55"/>
     *   <circle cx="760" cy="150" r="90" fill="#f97316" opacity="0.65"/>
     *   <text x="64" y="455" font-size="54" font-family="Arial" fill="#0f172a">Deck background</text>
     * </svg>
     * `;
     * const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
     * fPresentation.setPresentationBackgroundGraphics([{
     *   source: url,
     *   imageSourceType: univerAPI.Enum.ImageSourceType.BASE64,
     *   fit: univerAPI.Enum.SlidePresentationBackgroundGraphicFitEnum.Cover,
     * }], {
     *   target: univerAPI.Enum.SlidePresentationBackgroundGraphicsTargetEnum.AllMasters,
     * });
     * ```
     */
    setPresentationBackgroundGraphics(graphics: ISlidePresentationBackgroundGraphic[], options?: ISetPresentationBackgroundGraphicsOptions): this;
    /**
     * Clear managed presentation background graphics.
     * @param {ISetPresentationBackgroundGraphicsOptions} [options] Target master options.
     * @returns {FPresentation} This presentation, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.clearPresentationBackgroundGraphics({
     *   target: univerAPI.Enum.SlidePresentationBackgroundGraphicsTargetEnum.ActiveMaster
     * });
     * ```
     */
    clearPresentationBackgroundGraphics(options?: ISetPresentationBackgroundGraphicsOptions): this;
    /**
     * Apply a slide transition to all slides that currently exist in the presentation.
     *
     * The transition is visible during slide playback when moving between slides. Slides added
     * after this call are not automatically assigned this transition; call this method again if
     * newly added slides should use the same transition.
     * @param {ISlideTransition} transition The slide transition to apply.
     * @returns {FPresentation} This presentation, for chaining.
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * fPresentation.applyTransitionToAll({
     *   type: univerAPI.Enum.SlideTransitionTypeEnum.Push,
     *   duration: 1000,
     *   direction: univerAPI.Enum.SlideTransitionDirectionEnum.Right,
     * });
     * ```
     */
    applyTransitionToAll(transition: ISlideTransition): this;
    /**
     * Get all slides in the presentation.
     * @returns {FSlide[]} The slides in slide order.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const slides = fPresentation.getSlides();
     * console.log(slides);
     * ```
     */
    getSlides(): FSlide[];
    /**
     * Get a slide by id.
     * @param {string} id The slide id.
     * @returns {FSlide|null} The slide, or `null` if it does not exist.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const slide = fPresentation.getSlideById('slide-1');
     * console.log(slide);
     * ```
     */
    getSlideById(id: string): FSlide | null;
    /**
     * Get a slide by index.
     * @param {number} index The zero-based slide index.
     * @returns {FSlide|null} The slide, or `null` if the index is out of range.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const firstSlide = fPresentation.getSlideByIndex(0);
     * console.log(firstSlide);
     * ```
     */
    getSlideByIndex(index: number): FSlide | null;
    /**
     * Get the active slide.
     * @returns {FSlide|null} The active slide, or `null` if no slide is active.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const activeSlide = fPresentation.getActiveSlide();
     * console.log(activeSlide);
     * ```
     */
    getActiveSlide(): FSlide | null;
    /**
     * Set the active slide.
     * @param {FSlide|string} slide The slide facade or slide id to activate.
     * @returns {FPresentation} This presentation, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const secondSlide = fPresentation.getSlideByIndex(1);
     * if (secondSlide) {
     *   fPresentation.setActiveSlide(secondSlide);
     * }
     * ```
     */
    setActiveSlide(slide: FSlide): this;
    /**
     * Append a new slide to the end of the presentation.
     * @param {Partial<ISlidePage>} [options] The slide creation options.
     * @param {string} [options.id] The slide id. If omitted, a random id is generated.
     * @param {string} [options.name] The slide name.
     * @param {Record<string, ISlidePageElement>} [options.elements] The slide element map.
     * @returns {FSlide} The created slide.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const slide = fPresentation.appendSlide({ name: 'Summary' });
     * console.log(slide);
     * ```
     */
    appendSlide(options?: Partial<ISlidePage>): FSlide;
    /**
     * Insert a new slide at the specified index.
     * @param {number} index The zero-based insert index.
     * @param {Partial<ISlidePage>} [options] The slide creation options.
     * @param {string} [options.id] The slide id. If omitted, a random id is generated.
     * @param {string} [options.name] The slide name.
     * @param {Record<string, ISlidePageElement>} [options.elements] The slide element map.
     * @returns {FSlide} The created slide.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const slide = fPresentation.insertSlide(0, { name: 'Opening' });
     * console.log(slide);
     * ```
     */
    insertSlide(index: number, options?: Partial<ISlidePage>): FSlide;
    /**
     * Move a slide to a new index.
     * @param {FSlide} slide The slide to move.
     * @param {number} toIndex The target zero-based index.
     * @returns {boolean} Whether the slide was moved successfully.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const firstSlide = fPresentation.getSlideByIndex(0);
     * if (firstSlide) {
     *   fPresentation.moveSlide(firstSlide, 1);
     * }
     * ```
     */
    moveSlide(slide: FSlide, toIndex: number): boolean;
    /**
     * Delete a slide.
     * @param {FSlide|string} slide The slide facade or slide id to delete.
     * @returns {boolean} Whether the slide was deleted successfully.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const slide = fPresentation.getSlideByIndex(1);
     * if (slide) {
     *   fPresentation.deleteSlide(slide);
     * }
     * ```
     */
    deleteSlide(slide: FSlide): boolean;
    private _createSlideData;
}
