import type { IPdfPage, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IFBlobSource } from '@univerjs/core/facade';
import type { FPdfPageElement } from './f-pdf-page-element';
import type { IPdfAnnotationInsertOptions, IPdfDividerInsertOptions, IPdfImageBuilderInfo, IPdfImageInsertOptions, IPdfListInsertOptions, IPdfParagraphInsertOptions, IPdfTableInsertOptions, IPdfTextBoxInsertOptions } from './types';
import { Injector } from '@univerjs/core';
import { FPdfAnnotation } from './f-pdf-annotation';
import { FPdfDivider } from './f-pdf-divider';
import { FPdfImage, FPdfImageBuilder } from './f-pdf-image';
import { FPdfList } from './f-pdf-list';
import { FPdfParagraph } from './f-pdf-paragraph';
import { FPdfTable } from './f-pdf-table';
import { FPdfTextBox } from './f-pdf-text-box';
import { FPdfTextSpan } from './f-pdf-text-span';
/**
 * Facade for one materialized PDF page.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * const page = pdf.getPageByIndex(0);
 * console.log(page.getElements());
 * ```
 */
export declare class FPdfPage {
    private readonly _model;
    private readonly _pageId;
    private readonly _injector;
    constructor(_model: PdfDocumentModel, _pageId: string, _injector: Injector);
    /**
     * Return the stable page ID.
     *
     * @returns {string} The page ID.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getId());
     * ```
     */
    getId(): string;
    /**
     * Return the current zero-based page index.
     *
     * @returns {number} The current page index.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getIndex());
     * ```
     */
    getIndex(): number;
    /**
     * Return a detached snapshot of the current materialized page.
     *
     * @returns {Readonly<IPdfPage>} The current page snapshot.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getData());
     * ```
     */
    getData(): Readonly<IPdfPage>;
    /**
     * Return all editable page elements in z-order.
     *
     * @returns {FPdfPageElement[]} The editable element Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getElements());
     * ```
     */
    getElements(): FPdfPageElement[];
    /**
     * Return one editable page element by ID.
     *
     * @param {string} id The element ID.
     * @returns {FPdfPageElement | null} The element Facade, or `null` when it does not exist.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const element = page.getElementById('element-id');
     * console.log(element);
     * ```
     */
    getElementById(id: string): FPdfPageElement | null;
    /**
     * Return all simple editable text boxes in z-order.
     *
     * @returns {FPdfTextBox[]} The text-box Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getTextBoxes());
     * ```
     */
    getTextBoxes(): FPdfTextBox[];
    /**
     * Return all editable managed images in z-order.
     *
     * @returns {FPdfImage[]} The image Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getImages());
     * ```
     */
    getImages(): FPdfImage[];
    /**
     * Return all story-backed paragraph frames in z-order.
     *
     * @returns {FPdfParagraph[]} The paragraph Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getParagraphs());
     * ```
     */
    getParagraphs(): FPdfParagraph[];
    /**
     * Return all semantic lists in z-order.
     *
     * @returns {FPdfList[]} The list Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getLists());
     * ```
     */
    getLists(): FPdfList[];
    /**
     * Return all structured tables in z-order.
     *
     * @returns {FPdfTable[]} The table Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getTables());
     * ```
     */
    getTables(): FPdfTable[];
    /**
     * Return all editable dividers in z-order.
     *
     * @returns {FPdfDivider[]} The divider Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getDividers());
     * ```
     */
    getDividers(): FPdfDivider[];
    /**
     * Return all editable annotations in z-order.
     *
     * @returns {FPdfAnnotation[]} The annotation Facades.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getAnnotations());
     * ```
     */
    getAnnotations(): FPdfAnnotation[];
    /**
     * Return snapshot Facades for every currently visible native text operation.
     *
     * @returns {FPdfTextSpan[]} The current native-text span snapshots.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * console.log(page.getTextSpans());
     * ```
     */
    getTextSpans(): FPdfTextSpan[];
    /**
     * Insert a simple editable text box using PDF-point geometry.
     *
     * @param {IPdfTextBoxInsertOptions} options Text, placement, and initial text style.
     * @returns {FPdfTextBox} The inserted text-box Facade.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.insertTextBox({
     *   text: 'Hello PDF',
     *   left: 36,
     *   top: 36
     * });
     * ```
     */
    insertTextBox(options: IPdfTextBoxInsertOptions): FPdfTextBox;
    /**
     * Insert one story-backed paragraph frame.
     *
     * @param {IPdfParagraphInsertOptions} options Paragraph text, placement, and initial style.
     * @returns {FPdfParagraph} The inserted paragraph Facade.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const paragraph = page.insertParagraph({
     *   text: 'First paragraph',
     *   fontSize: 24,
     * });
     * ```
     */
    insertParagraph(options: IPdfParagraphInsertOptions): FPdfParagraph;
    /**
     * Insert one story-backed semantic list.
     *
     * @param {IPdfListInsertOptions} options List text, kind, preset, and placement.
     * @returns {FPdfList} The inserted list Facade.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const list = page.insertList({
     *   text: 'First item',
     *   kind: univerAPI.Enum.PdfListKind.UNORDERED,
     *   preset: univerAPI.Enum.PdfListPresetId.UNORDERED_DISC,
     * });
     *
     * list
     *   .insertItem(1, { text: '第二项' })
     *   .insertItem(2, { text: '子项', level: 1 })
     *   .insertItem(3, { text: '第四项' });
     * ```
     */
    insertList(options: IPdfListInsertOptions): FPdfList;
    /**
     * Insert one structured editable table.
     *
     * @param {IPdfTableInsertOptions} options Grid dimensions, values, placement, and theme.
     * @returns {FPdfTable} The inserted table Facade.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.insertTable({
     *   rowCount: 2,
     *   columnCount: 3,
     *   cellTexts: ['A', 'B', 'C']
     * });
     * ```
     */
    insertTable(options: IPdfTableInsertOptions): FPdfTable;
    /**
     * Insert one editable vector divider.
     *
     * @param {IPdfDividerInsertOptions} [options] Placement and stroke options.
     * @returns {FPdfDivider} The inserted divider Facade.
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
     * ```
     */
    insertDivider(options?: IPdfDividerInsertOptions): FPdfDivider;
    /**
     * Insert one durable PDF annotation.
     *
     * @param {IPdfAnnotationInsertOptions} options Annotation type, geometry, and placement.
     * @returns {FPdfAnnotation} The inserted annotation Facade.
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
     * ```
     */
    insertAnnotation(options: IPdfAnnotationInsertOptions): FPdfAnnotation;
    /**
     * Return a detached image builder, optionally initialized from an image or ID.
     *
     * @param {FPdfImage | string} [existing] An image Facade or explicit image ID to initialize.
     * @returns {FPdfImageBuilder} A detached image builder.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setSize(240, 135)
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    newImage(existing?: FPdfImage | string): FPdfImageBuilder;
    /**
     * Insert an image from detached builder information.
     *
     * @param {IPdfImageBuilderInfo} info The image builder result.
     * @param {number} [index] The optional z-order index.
     * @returns {FPdfImage} The inserted image Facade.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const imageInfo = page.newImage()
     *   .setSource('https://avatars.githubusercontent.com/u/61444807?s=48&v=4')
     *   .setSize(240, 135)
     *   .build();
     * page.insertImage(imageInfo);
     * ```
     */
    insertImage(info: IPdfImageBuilderInfo, index?: number): FPdfImage;
    /**
     * Insert an image directly from a string or Blob source.
     *
     * @param {string | IFBlobSource} source A URL, UUID, base64 value, or Blob source.
     * @param {IPdfImageInsertOptions} [options] Optional placement, crop, opacity, and source type.
     * @returns {Promise<FPdfImage>} The inserted image Facade.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const image = await page.insertImageAsync('https://avatars.githubusercontent.com/u/61444807?s=48&v=4', {
     *   left: 36,
     *   top: 36,
     *   width: 240,
     *   height: 135
     * });
     * ```
     */
    insertImageAsync(source: string | IFBlobSource, options?: IPdfImageInsertOptions): Promise<FPdfImage>;
    private _filterTextElements;
    private _getTextStory;
    private _createElement;
    private _getCurrentPage;
}
