import type { ISlideDrawingTransform, ISlidePageElement, SlideModel } from '@univerjs-pro/slides';
import type { Injector } from '@univerjs/core';
import { ICommandService, IPermissionService, RichTextValue } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
import { FSlideObjectPermission } from './f-slide-permission';
/**
 * The facade class for a slide page element.
 * @template T The slide page element data type wrapped by this facade.
 * @hideconstructor
 */
export declare class FPageElement<T extends ISlidePageElement = ISlidePageElement> extends FBase {
    /** @ignore */
    readonly unitId: string;
    /** @ignore */
    readonly subUnitId: string;
    /** @ignore */
    readonly elementId: string;
    /** @ignore */
    protected readonly _slideModel: SlideModel;
    /** @ignore */
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _permissionService: IPermissionService;
    constructor(
    /** @ignore */
    unitId: string, 
    /** @ignore */
    subUnitId: string, 
    /** @ignore */
    elementId: string, 
    /** @ignore */
    _slideModel: SlideModel, 
    /** @ignore */
    _injector: Injector, _commandService: ICommandService, _permissionService: IPermissionService);
    /**
     * Get the element id.
     * @returns {string} The element id.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const elements = fSlide.getElements();
     * console.log(elements[0]?.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns this ordinary Slide element's permission facade.
     * @returns {FSlideObjectPermission} Permission facade combining Presentation, Slide, and Element Edit points.
     * @example
     * ```ts
     * const element = univerAPI.getActivePresentation()?.getSlideByIndex(0)?.getElements()[0];
     * if (!element) throw new Error('Slide element not found.');
     * await element.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FSlideObjectPermission;
    /**
     * Get the element type.
     * @returns {ISlidePageElement['type']} The slide element type.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * if (element && 'getType' in element) {
     *   console.log(element.getType());
     * }
     * ```
     */
    getType(): T['type'];
    /**
     * Get the raw slide element data.
     * @returns {ISlidePageElement} The slide element data.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * if (element && 'getType' in element) {
     *   console.log(element.getData());
     * }
     * ```
     */
    getData(): T;
    /**
     * Returns this element's text as a detached rich-text value.
     *
     * Text and placeholder elements are supported. Legacy plain text is normalized to the same document model.
     * Shapes returned by `FSlide.getElements()` use the common Shape facade and expose rich text through
     * `FShape.getText().getRichText()`. Images, groups, and other non-text elements return `null`.
     *
     * Call {@link RichTextValue.copy} before editing. The detached builder can update text-run lengths without changing
     * this slide until it is passed to {@link setRichText}.
     *
     * @returns A detached rich-text value, or `null` when this element cannot contain text.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     *
     * const slide = presentation.getSlideByIndex(0);
     * if (!slide) throw new Error('The presentation has no slides');
     * for (const element of slide.getElements()) {
     *   const richText = ('getType' in element
     *     ? element.getRichText()
     *     : element.getText().getRichText())?.copy();
     *   if (!richText) continue;
     *
     *   for (const paragraph of richText.getParagraphs()) {
     *     for (const run of paragraph.getTextRuns()) {
     *       console.log(run.getText());
     *     }
     *   }
     * }
     * ```
     */
    getRichText(): RichTextValue | null;
    /**
     * Replaces this element's text document with a detached rich-text value.
     *
     * Only text content and its document metadata are replaced. The existing element transform, size, rotation, fill,
     * stroke, text-box padding, wrapping, direction, and auto-fit behavior are preserved. The live update is executed
     * through `UpdateSlideDrawingCommand`, so it participates in the standard Slide command/mutation and undo-redo path.
     *
     * @param richText Rich text normally obtained from `getRichText().copy()` or `univerAPI.newRichText()`.
     * @returns This element for chaining.
     * @throws When this element type cannot contain text.
     * @example
     * ```ts
     * const presentation = univerAPI.getActivePresentation();
     * if (!presentation) throw new Error('No active presentation');
     *
     * const slide = presentation.getSlideByIndex(0);
     * if (!slide) throw new Error('The presentation has no slides');
     * for (const element of slide.getElements()) {
     *   const richText = ('getType' in element
     *     ? element.getRichText()
     *     : element.getText().getRichText())?.copy();
     *   if (!richText) continue;
     *
     *   for (const paragraph of richText.getParagraphs()) {
     *     for (const run of paragraph.getTextRuns()) {
     *       // The agent supplies the new value directly. It may be longer or shorter.
     *       run.setText('New English text');
     *     }
     *   }
     *
     *   if ('getType' in element) {
     *     element.setRichText(richText);
     *   } else {
     *     element.getText().setRichText(richText);
     *   }
     * }
     * ```
     */
    setRichText(richText: RichTextValue): this;
    /**
     * Get the transform of this element.
     * @returns {ISlideDrawingTransform} The transform data, including position, size, rotation, and flip state.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * console.log(element.getTransform());
     * ```
     */
    getTransform(): ISlideDrawingTransform;
    /**
     * Update the transform of this element.
     * @param {Partial<ISlideDrawingTransform>} transform The transform fields to update.
     * @param {number} [transform.left] The x-coordinate of the element's top-left corner.
     * @param {number} [transform.top] The y-coordinate of the element's top-left corner.
     * @param {number} [transform.width] The element width.
     * @param {number} [transform.height] The element height.
     * @param {number} [transform.rotation] The element rotation in degrees.
     * @param {boolean} [transform.flipX] Whether the element is flipped horizontally.
     * @param {boolean} [transform.flipY] Whether the element is flipped vertically.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * element.setTransform({ left: 80, top: 120, width: 320, height: 180 });
     * ```
     */
    setTransform(transform: Partial<ISlideDrawingTransform>): this;
    /**
     * Set the element position by absolute slide coordinates.
     * @param {number} left The x-coordinate of the element's top-left corner.
     * @param {number} top The y-coordinate of the element's top-left corner.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * if (element && 'getType' in element) {
     *   element.setPosition(80, 120);
     * }
     * ```
     */
    setPosition(left: number, top: number): this;
    /**
     * Set the element size.
     * @param {number} width The element width.
     * @param {number} height The element height.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * element.setSize(320, 180);
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Set the element name.
     * @param {string} name The element name.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * element.setName('Title shape');
     * ```
     */
    setName(name: string): this;
    /**
     * Set the element description.
     * @param {string} description The element description, usually used as accessibility text.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * element.setDescription('Company logo');
     * ```
     */
    setDescription(description: string): this;
    /**
     * Set whether the element is visible.
     * @param {boolean} visible Whether the element is visible.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * element.setVisible(false);
     * ```
     */
    setVisible(visible: boolean): this;
    /**
     * Set whether the element can be selected.
     * @param {boolean} selectable Whether the element can be selected.
     * @returns {FPageElement} This element, for chaining.
     *
     * @example
     * ```ts
     * const fPresentation = univerAPI.getActivePresentation();
     * const fSlide = fPresentation.getSlideByIndex(0);
     * const element = fSlide.getElements()[0];
     * element.setSelectable(false);
     * ```
     */
    setSelectable(selectable: boolean): this;
    /**
     * @ignore
     */
    protected _updateElement(element: T): this;
}
