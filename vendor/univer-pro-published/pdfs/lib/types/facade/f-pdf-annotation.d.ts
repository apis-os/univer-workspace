import type { IPdfAnnotationObject, PdfAnnotationType, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IPdfAnnotationInk, IPdfAnnotationMarkup, IPdfAnnotationStyle } from './types';
import { Injector } from '@univerjs/core';
import { FPdfPageElement } from './f-pdf-page-element';
/**
 * Facade for one durable editable PDF annotation.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * const annotation = page.insertAnnotation({
 *   annotationType: univerAPI.Enum.PdfAnnotationType.HIGHLIGHT,
 *   left: 36,
 *   top: 72,
 *   width: 180,
 *   height: 18,
 * });
 * console.log(annotation.getAnnotationType());
 * console.log(annotation.getMarkup());
 * console.log(annotation.getStyle());
 *
 * annotation.setStyle({
 *   fill: { color: '#fff59d' },
 *   opacity: 0.6
 * });
 * ```
 */
export declare class FPdfAnnotation extends FPdfPageElement<IPdfAnnotationObject> {
    constructor(model: PdfDocumentModel, pageId: string, objectId: string, injector: Injector);
    /**
     * Return the annotation subtype.
     *
     * @returns {PdfAnnotationType} The annotation subtype.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const annotation = page.getAnnotations()[0];
     * console.log(annotation?.getAnnotationType());
     * ```
     */
    getAnnotationType(): PdfAnnotationType;
    /**
     * Return detached markup geometry.
     *
     * Coordinates are returned in PDF points.
     *
     * @returns {Readonly<IPdfAnnotationMarkup> | null} The markup geometry, or `null` for another subtype.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const annotation = page.getAnnotations()[0];
     * console.log(annotation?.getMarkup());
     * ```
     */
    getMarkup(): Readonly<IPdfAnnotationMarkup> | null;
    /**
     * Return detached ink geometry.
     *
     * Coordinates are returned in PDF points.
     *
     * @returns {Readonly<IPdfAnnotationInk> | null} The ink geometry, or `null` for another subtype.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const annotation = page.getAnnotations()[0];
     * console.log(annotation?.getInk());
     * ```
     */
    getInk(): Readonly<IPdfAnnotationInk> | null;
    /**
     * Return the supported appearance projected from subtype data.
     *
     * @returns {Readonly<IPdfAnnotationStyle>} The supported appearance snapshot.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const annotation = page.getAnnotations()[0];
     * console.log(annotation?.getStyle());
     * ```
     */
    getStyle(): Readonly<IPdfAnnotationStyle>;
    /**
     * Update model-supported annotation fill, stroke, and opacity fields.
     *
     * @param {IPdfAnnotationStyle} style The appearance patch.
     * @returns {this} This annotation Facade for chaining.
     * @throws {RangeError} If opacity is outside the inclusive 0-through-1 range.
     * @throws {Error} If the annotation is stale or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const annotation = page.getAnnotations()[0];
     * if (annotation) {
     *   annotation.setStyle({
     *     fill: {
     *       color: '#fff59d'
     *     },
     *     stroke: {
     *       color: '#fbc02d',
     *       width: 1,
     *     },
     *     opacity: 0.6
     *   });
     * }
     * ```
     */
    setStyle(style: IPdfAnnotationStyle): this;
}
