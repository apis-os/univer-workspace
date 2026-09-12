import type { ColumnPosition, ICustomColumnGroup, IDocsColumnGroupOffsetRange } from '@univerjs-pro/docs-column';
import type { Injector } from '@univerjs/core';
import type { FDocument, FDocumentParagraph } from '@univerjs/docs/facade';
import type { IDocsColumnDescription } from './types';
import { FDocumentColumn } from './f-document-column';
/**
 * Facade object for a docs column group.
 *
 * ColumnGroup is available only in modern documents. Read methods return empty values
 * if a retained facade is used after switching to traditional mode; mutation methods
 * throw `DocsColumnUnsupportedDocumentFlavorError`.
 *
 * A column group is the horizontal block container that owns two to five columns.
 * Mutating methods run synchronously through the Univer rich-text mutation pipeline,
 * so undo/redo and collaboration receive the same document changes as UI operations.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const groups = fDocument.getColumnGroups();
 * console.log(groups.map((group) => group.describe()));
 *
 * const group = fDocument.findColumnGroupByText('Launch');
 * console.log(group?.describe());
 *
 * group?.setWidthRatios([1.2, 1, 0.8]);
 * ```
 */
export declare class FDocumentColumnGroup {
    private readonly _document;
    private readonly _columnGroupId;
    private readonly _injector;
    constructor(_document: FDocument, _columnGroupId: string, _injector: Injector);
    /**
     * Returns the column group id.
     * @returns {string} The persisted column group id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   console.log(group.getId());
     * }
     * ```
     */
    getId(): string;
    /**
     * Returns the column group config stored in `documentData.body.columnGroups`.
     * @returns {ICustomColumnGroup | undefined} The group config, or `undefined` if the group is missing.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   console.log(group.getConfig());
     * }
     * ```
     */
    getConfig(): ICustomColumnGroup | undefined;
    /**
     * Returns the structural range for this column group.
     * The group range includes the column group start and end structural tokens.
     * @returns {IDocsColumnGroupOffsetRange | null} The parsed group range, or `null` if the group is missing.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   console.log(group.getRange());
     * }
     * ```
     */
    getRange(): IDocsColumnGroupOffsetRange | null;
    /**
     * Returns the number of columns in the group.
     * @returns {number} The column count, or `0` if the group is missing.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   console.log(group.getColumnCount());
     * }
     * ```
     */
    getColumnCount(): number;
    /**
     * Returns all column wrappers in document order.
     * @returns {FDocumentColumn[]} Column wrappers, or an empty array when the group is missing.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   const columns = group.getColumns();
     *   columns.forEach((column) => console.log(column.getText()));
     * }
     * ```
     */
    getColumns(): FDocumentColumn[];
    /**
     * Returns all paragraph facades inside the group, in column and document order.
     * @returns {FDocumentParagraph[]} Paragraphs in column and document order.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument?.findColumnGroupByText('Launch');
     * const paragraphs = group?.getParagraphs() ?? [];
     * console.log(paragraphs.map((paragraph) => paragraph.getText()));
     * ```
     */
    getParagraphs(): FDocumentParagraph[];
    /**
     * Returns a column by zero-based index or by column id.
     * @param {number | string} indexOrId Zero-based column index, or persisted column id.
     * @returns {FDocumentColumn | null} The column wrapper, or `null` if no column matches.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *
     *   const columnWithIndex = group.getColumn(0);
     *   console.log(columnWithIndex?.getText());
     *
     *   const columnWithId = group.getColumn('right-column');
     *   console.log(columnWithId?.getText());
     * }
     * ```
     */
    getColumn(indexOrId: number | string): FDocumentColumn | null;
    /**
     * Returns the current column width ratios.
     * @returns {number[]} The width ratios from the column group config.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   console.log(group.getWidthRatios());
     * }
     * ```
     */
    getWidthRatios(): number[];
    /**
     * Returns a compact, serializable description of the column group.
     * @returns {IDocsColumnDescription} Id, layout config, column ratios, and sample column text.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     *
     * if (groups.length > 0) {
     *   const group = groups[0];
     *   console.log(group.describe());
     * }
     * ```
     */
    describe(): IDocsColumnDescription;
    /**
     * Updates the width ratios for every column in the group.
     * The number of ratios must match the current column count and every ratio must be positive.
     * @param {number[]} widthRatios New positive width ratios, in column order.
     * @returns {boolean} `true` if the mutation was committed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * group.setWidthRatios([1.2, 1, 0.8]);
     * ```
     */
    setWidthRatios(widthRatios: number[]): boolean;
    /**
     * Adds an empty column to the left or right of an existing column.
     * @param {string} targetColumnId Existing column id used as the insertion anchor.
     * @param {ColumnPosition} position Whether the new column is inserted to the left or right of the target column.
     * @param {string} [columnId] Optional id for the inserted column. A random id is generated when omitted.
     * @returns {FDocumentColumn | null} The inserted column wrapper, or `null` if the mutation failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const columns = group.getColumns();
     *
     * // Add a new column to the left of the last column in the group.
     * if (columns.length > 0) {
     *   const rightColumn = group.getColumn(columns.length - 1);
     *   const inserted = group.addColumn(
     *     rightColumn.getId(),
     *     univerAPI.Enum.DocsColumnPositionEnum.LEFT,
     *     'new-column'
     *   );
     *   console.log(inserted?.getInsertOffset());
     * }
     * ```
     */
    addColumn(targetColumnId: string, position: ColumnPosition, columnId?: string): FDocumentColumn | null;
    /**
     * Deletes a column from this group.
     * Column groups must keep at least two columns, so deleting from a two-column group returns `false`.
     * @param {string} columnId The column id to delete.
     * @returns {boolean} `true` if the mutation was committed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const columns = group.getColumns();
     *
     * // Delete the first column in the group.
     * group.deleteColumn(columns[0].getId());
     * ```
     */
    deleteColumn(columnId: string): boolean;
    /**
     * Deletes the entire column group from the document body.
     * @returns {boolean} `true` if the mutation was committed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * const removed = group.remove();
     * console.log(removed);
     * ```
     */
    remove(): boolean;
    private _createFDocumentColumn;
    private _assertModernDocument;
}
