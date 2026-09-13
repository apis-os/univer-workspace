import type { IDocsColumnOffsetRange } from '@univerjs-pro/docs-column';
import type { ITextStyle } from '@univerjs/core';
import type { FDocument, FDocumentParagraph, FDocumentTextRange } from '@univerjs/docs/facade';
import type { IDocsColumnContentRange } from './types';
/**
 * Facade object for a single column inside a docs column group.
 *
 * Columns in this facade belong to the modern-document ColumnGroup model. Read methods
 * return empty values in traditional mode; mutation methods throw a flavor-specific error.
 *
 * The column wrapper resolves its range from persisted column ids every time a method
 * is called, so it stays useful after edits insert content before the column group.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const group = fDocument.findColumnGroupByText('Launch');
 * console.log(group?.describe());
 *
 * const column = group?.getColumn(0);
 * console.log(column?.getText());
 * console.log(column?.getInsertOffset());
 * ```
 */
export declare class FDocumentColumn {
    private readonly _document;
    private readonly _columnGroupId;
    private readonly _columnId;
    constructor(_document: FDocument, _columnGroupId: string, _columnId: string);
    /**
     * Returns the column id stored in the parent column group config.
     * @returns {string} The persisted column id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const column = group?.getColumn(0);
     * console.log(column?.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the parent column group id.
     * @returns {string} The persisted column group id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const column = group?.getColumn(0);
     * console.log(column?.getColumnGroupId());
     * ```
     */
    getColumnGroupId(): string;
    /**
     * Returns the current zero-based column index inside the parent group.
     * @returns {number} The column index, or `-1` when the column no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const column = group?.getColumn(0);
     * console.log(column?.getIndex());
     * ```
     */
    getIndex(): number;
    /**
     * Returns the structural data-stream range for this column.
     * The range includes the column start and end structural tokens.
     * @returns {IDocsColumnOffsetRange | null} The column range, or `null` if the column no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const column = group?.getColumn(0);
     * console.log(column?.getRange());
     * ```
     */
    getRange(): IDocsColumnOffsetRange | null;
    /**
     * Returns the editable content range inside this column.
     *
     * The range excludes the column structural tokens and stops before the trailing
     * paragraph or section-break token that keeps the column editable. Use this range
     * for text replacement and `getInsertOffset()` for inserting blocks, such as tables.
     * @returns {IDocsColumnContentRange | null} The editable range, or `null` if the column no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const column = group?.getColumn(0);
     * console.log(column?.getContentRange());
     * ```
     */
    getContentRange(): IDocsColumnContentRange | null;
    /**
     * Returns the safest insertion offset for adding content at the end of this column.
     *
     * This offset is intentionally placed before the trailing paragraph or section-break
     * token when one exists. Keeping that trailing token after inserted tables prevents
     * the table from being parsed as content outside the column group.
     * @returns {number | null} The insertion offset, or `null` if the column no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const thirdColumn = group?.getColumn(2);
     * const offset = thirdColumn?.getInsertOffset();
     *
     * if (offset != null) {
     *   fDocument?.insertTableFromData([
     *     ['Metric', 'Now', 'Next'],
     *     ['Adoption', '68%', '80%'],
     *   ], {
     *     offset
     *   });
     * }
     * ```
     */
    getInsertOffset(): number | null;
    /**
     * Returns plain text inside the column.
     * Paragraph breaks are normalized to `\n`, and trailing structural breaks are omitted.
     * @returns {string} The column text, or an empty string if the column no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const column = group?.getColumn(0);
     * console.log(column?.getText());
     * ```
     */
    getText(): string;
    /**
     * Returns paragraph facades whose paragraph marks are contained in this column.
     * @returns {FDocumentParagraph[]} Paragraphs in column-local order.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const column = fDocument?.findColumnGroupByText('Launch')?.getColumn(0);
     * const paragraphs = column?.getParagraphs() ?? [];
     * console.log(paragraphs.map((paragraph) => paragraph.getText()));
     * ```
     */
    getParagraphs(): FDocumentParagraph[];
    /**
     * Inserts a plain-text paragraph at a column-local paragraph index.
     *
     * The index is relative to this column, not the whole document. Passing the
     * current paragraph count appends inside the column, before `COLUMN_END`.
     * @param {number} index The zero-based column-local paragraph insertion index.
     * @param {string} text The paragraph text. Defaults to an empty paragraph.
     * @returns {FDocumentParagraph} The inserted paragraph facade.
     * @throws {RangeError} If the index is outside `0..getParagraphs().length`.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const column = fDocument?.findColumnGroupByText('Launch')?.getColumn(0);
     *
     * // The index is relative to this column. This inserts before its first paragraph.
     * const paragraph = column?.insertParagraph(0, 'Executive summary');
     * console.log(paragraph?.getText());
     * ```
     */
    insertParagraph(index: number, text?: string): FDocumentParagraph;
    /**
     * Appends a plain-text paragraph inside this column.
     * @param {string} text The paragraph text. Defaults to an empty paragraph.
     * @returns {FDocumentParagraph} The appended paragraph facade.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const column = fDocument?.findColumnGroupByText('Launch')?.getColumn(0);
     * const paragraph = column?.appendParagraph('Next steps');
     * console.log(paragraph?.getText());
     * ```
     */
    appendParagraph(text?: string): FDocumentParagraph;
    /**
     * Returns an editable text-range facade for the column content.
     * @returns {FDocumentTextRange | null} The editable range, or `null` if the column no longer exists.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const column = fDocument?.findColumnGroupByText('Launch')?.getColumn(0);
     * console.log(column?.getTextRange()?.getText());
     * ```
     */
    getTextRange(): FDocumentTextRange | null;
    /**
     * Replaces the editable column content with plain text.
     * @param {string} text The replacement text.
     * @returns {boolean} `true` if the edit was applied.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const column = fDocument?.findColumnGroupByText('Launch')?.getColumn(0);
     * column?.setText('Launch plan\nOwner: Product');
     * ```
     */
    setText(text: string): boolean;
    /**
     * Applies a text-style patch across the editable column content.
     * `style.fs` is a font size in points (pt), not CSS pixels.
     * @param {ITextStyle} style The text-style patch to apply.
     * @returns {boolean} `true` if the edit was applied.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const column = fDocument?.findColumnGroupByText('Launch')?.getColumn(0);
     * column?.setTextStyle({ fs: 10.5, bl: univerAPI.Enum.BooleanNumber.TRUE });
     * ```
     */
    setTextStyle(style: ITextStyle): boolean;
    private _assertModernDocument;
}
