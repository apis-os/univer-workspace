import type { IPdfDocument, IPdfUnitData, PdfDocumentModel } from '@univerjs-pro/pdfs';
import { Injector } from '@univerjs/core';
import { FBaseInitialable } from '@univerjs/core/facade';
import { FPdfPage } from './f-pdf-page';
/**
 * Facade for a PDF unit.
 */
export declare class FPdf extends FBaseInitialable {
    private readonly _model;
    protected readonly _injector: Injector;
    constructor(_model: PdfDocumentModel, _injector: Injector);
    /**
     * Return the PDF unit ID.
     *
     * @returns {string} The stable PDF unit ID.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getId());
     * ```
     */
    getId(): string;
    /**
     * Return the PDF unit name.
     *
     * @returns {string} The current PDF unit name.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getName());
     * ```
     */
    getName(): string;
    /**
     * Save and return a detached PDF unit snapshot.
     *
     * @returns {IPdfUnitData} The complete current PDF unit snapshot.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const snapshot = pdf?.save();
     * console.log(snapshot);
     * ```
     */
    save(): IPdfUnitData;
    /**
     * Return the current source PDF document.
     *
     * @returns {IPdfDocument} The current source document.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getDocument().pages.length);
     * ```
     */
    getDocument(): IPdfDocument;
    /**
     * Return the underlying PDF document model.
     *
     * @returns {PdfDocumentModel} The underlying model.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getModel().getUnitId());
     * ```
     */
    getModel(): PdfDocumentModel;
    /**
     * Insert a blank PDF page at a zero-based index, or append it when no index is provided.
     *
     * The new page inherits the adjacent page's size, rotation, and PDF boxes. An A4 page is
     * created when the document has no existing pages.
     *
     * @param {number} [index] The zero-based insert index. Omit it to append the page.
     * @returns {FPdfPage} The created page Facade.
     * @throws {RangeError} If the index is outside the document page boundaries.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf?.insertPage();
     * console.log(page?.getIndex());
     * ```
     */
    insertPage(index?: number): FPdfPage;
    /**
     * Return all current PDF pages in materialized document order.
     *
     * @returns {FPdfPage[]} The current page Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getPages());
     * ```
     */
    getPages(): FPdfPage[];
    /**
     * Return a PDF page by ID.
     *
     * @param {string} id The page ID.
     * @returns {FPdfPage | null} The page Facade, or `null` when it does not exist.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf?.getPageById('page-id');
     * console.log(page);
     * ```
     */
    getPageById(id: string): FPdfPage | null;
    /**
     * Return a PDF page by zero-based index.
     *
     * @param {number} index The zero-based page index.
     * @returns {FPdfPage | null} The page Facade, or `null` when the index is out of range.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const firstPage = pdf?.getPageByIndex(0);
     * console.log(firstPage);
     * ```
     */
    getPageByIndex(index: number): FPdfPage | null;
}
