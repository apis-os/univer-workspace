import type { IPdfPathObject, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IPdfDividerStroke } from './types';
import { Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
/**
 * Facade for one editable vector divider.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const divider = page.insertDivider({
 *   left: 36,
 *   top: 144,
 *   width: 200,
 *   strokeWidth: 1
 * });
 * console.log(divider.getStroke());
 *
 * divider.setStroke({
 *   width: 2,
 *   color: '#3366ff'
 * });
 * ```
 */
export declare class FPdfDivider extends FPdfPageElement<IPdfPathObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return a detached divider-stroke snapshot.
     *
     * Length fields are returned in PDF points.
     *
     * @returns {Readonly<IPdfDividerStroke>} The current stroke snapshot.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const divider = page.getDividers()[0];
     * console.log(divider?.getStroke());
     * ```
     */
    getStroke(): Readonly<IPdfDividerStroke>;
    /**
     * Replace the divider stroke without changing its geometry.
     *
     * Length fields are accepted in PDF points.
     *
     * @param {IPdfDividerStroke} stroke The replacement stroke.
     * @returns {this} This divider Facade for chaining.
     * @throws {Error} If the divider is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const divider = page.getDividers()[0];
     * if (divider) {
     *   divider.setStroke({
     *     width: 2,
     *     color: '#3366ff'
     *   });
     * }
     * ```
     */
    setStroke(stroke: IPdfDividerStroke): this;
}
