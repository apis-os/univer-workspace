import { PdfAnnotationType, PdfListKind, PdfListPresetId, PdfTableCellVerticalAlign, PdfTextAnchor } from '@univerjs-pro/pdfs';
/** PDF enums exposed through `univerAPI.Enum`. */
export interface IFPdfEnumMixin {
    /**
     * Supported PDF annotation subtypes.
     *
     * @returns {typeof PdfAnnotationType} The PDF annotation-type enum.
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
    PdfAnnotationType: typeof PdfAnnotationType;
    /**
     * Semantic ordered and unordered PDF list kinds.
     *
     * @returns {typeof PdfListKind} The PDF list-kind enum.
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
    PdfListKind: typeof PdfListKind;
    /**
     * Built-in PDF list marker presets.
     *
     * @returns {typeof PdfListPresetId} The PDF list-preset enum.
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
    PdfListPresetId: typeof PdfListPresetId;
    /**
     * Vertical anchors for editable PDF text boxes.
     *
     * @returns {typeof PdfTextAnchor} The PDF text-anchor enum.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const textBox = page.getTextBoxes()[0];
     * if (textBox) {
     *   textBox.setTextAnchor(univerAPI.Enum.PdfTextAnchor.MIDDLE);
     * }
     * ```
     */
    PdfTextAnchor: typeof PdfTextAnchor;
    /**
     * Vertical alignment values for PDF table cells.
     *
     * @returns {typeof PdfTableCellVerticalAlign} The table-cell vertical-alignment enum.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const page = pdf.getPageByIndex(0);
     * const table = page.getTables()[0];
     * const cell = table?.getCell(0, 0);
     * if (cell) {
     *   cell.setStyle({
     *     fill: { color: '#eef3ff' },
     *     fontColor: '#dc2626',
     *     horizontalAlignment: univerAPI.Enum.HorizontalAlign.CENTER,
     *     verticalAlign: univerAPI.Enum.PdfTableCellVerticalAlign.MIDDLE
     *   });
     * }
     * ```
     */
    PdfTableCellVerticalAlign: typeof PdfTableCellVerticalAlign;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFPdfEnumMixin {
    }
}
