import type { PdfDocumentModel, PdfObject, PdfObjectType } from '@univerjs-pro/pdfs';
import type { Injector } from '@univerjs/core';
import type { IPdfFacadeTransform } from './types';
/**
 * Shared live Facade for an editable PDF page element.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const element = page.getElements()[0];
 * console.log(element?.getTransform());
 * ```
 */
export declare class FPdfPageElement<T extends PdfObject = PdfObject> {
    protected readonly _model: PdfDocumentModel;
    protected readonly _pageId: string;
    protected readonly _objectId: string;
    protected readonly _objectType: PdfObjectType;
    protected readonly _injector: Injector;
    constructor(_model: PdfDocumentModel, _pageId: string, _objectId: string, _objectType: PdfObjectType, _injector: Injector);
    /**
     * Return the stable page-element ID.
     *
     * @returns {string} The element ID.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * console.log(element?.getId());
     * ```
     */
    getId(): string;
    /**
     * Return the underlying PDF object type.
     *
     * @returns {PdfObjectType} The persisted PDF object type.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * console.log(element?.getType());
     * ```
     */
    getType(): PdfObjectType;
    /**
     * Return a detached snapshot of the current page-element data.
     *
     * @returns {Readonly<T>} A detached object snapshot in core PDF units.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * console.log(element?.getData());
     * ```
     */
    getData(): Readonly<T>;
    /**
     * Return the current placement in PDF points.
     *
     * @returns {IPdfFacadeTransform} The position, size, rotation, and flips.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * console.log(element?.getTransform());
     * ```
     */
    getTransform(): IPdfFacadeTransform;
    /**
     * Update the complete placement using PDF points and degrees.
     *
     * @param {IPdfFacadeTransform} transform The complete new placement.
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.setTransform({
     *     left: 36,
     *     top: 36,
     *     width: 144,
     *     height: 72,
     *     rotation: 0,
     *     flipX: false,
     *     flipY: false
     *   });
     * }
     * ```
     */
    setTransform(transform: IPdfFacadeTransform): this;
    /**
     * Set the top-left position in PDF points.
     *
     * @param {number} left The left position in points.
     * @param {number} top The top position in points.
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.setPosition(36, 72);
     * }
     * ```
     */
    setPosition(left: number, top: number): this;
    /**
     * Set the element size in PDF points while keeping its position.
     *
     * @param {number} width The width in points.
     * @param {number} height The height in points.
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.setSize(288, 144);
     * }
     * ```
     */
    setSize(width: number, height: number): this;
    /**
     * Set the rotation in degrees around the element center.
     *
     * @param {number} rotation The rotation in degrees.
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.setRotation(15);
     * }
     * ```
     */
    setRotation(rotation: number): this;
    /**
     * Set whether the element is visible.
     *
     * @param {boolean} visible Whether the element is visible.
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.setVisible(false);
     * }
     * ```
     */
    setVisible(visible: boolean): this;
    /**
     * Set whether the element is locked.
     *
     * @param {boolean} locked Whether the element is locked.
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.setLocked(true);
     * }
     * ```
     */
    setLocked(locked: boolean): this;
    /**
     * Move this element above every other editable element on the page.
     *
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.bringToFront();
     * }
     * ```
     */
    bringToFront(): this;
    /**
     * Move this element to the back of the editable-element stack.
     *
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.sendToBack();
     * }
     * ```
     */
    sendToBack(): this;
    /**
     * Move this element one step forward.
     *
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.bringForward();
     * }
     * ```
     */
    bringForward(): this;
    /**
     * Move this element one step backward.
     *
     * @returns {this} This element Facade for chaining.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.sendBackward();
     * }
     * ```
     */
    sendBackward(): this;
    /**
     * Remove this editable element from the page.
     *
     * @returns {void}
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElements()[0];
     * if (element) {
     *   element.remove();
     * }
     * ```
     */
    remove(): void;
    protected _getCurrentObject(): T;
    private _setPlacement;
    private _setZIndex;
    private _reorderBy;
    private _getPageZIndexes;
}
