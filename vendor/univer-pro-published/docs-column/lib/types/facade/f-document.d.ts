import type { IDocsColumnFindQuery, IDocsColumnInsertFacadeOptions } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentColumnGroup } from './f-document-column-group';
/**
 * Modern-document-only ColumnGroup APIs.
 *
 * Read APIs return empty values in traditional documents. Mutation APIs throw
 * `DocsColumnUnsupportedDocumentFlavorError`; use SectionBreak column APIs there.
 */
export interface IFDocumentColumnMixin {
    /**
     * Returns all column groups in this document.
     * @returns {FDocumentColumnGroup[]} Column group wrappers, or an empty array when the document has no column groups.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groups = fDocument.getColumnGroups();
     * console.log(groups.map((group) => group.describe()));
     * ```
     */
    getColumnGroups(): FDocumentColumnGroup[];
    /**
     * Returns a column group by id.
     * @param {string} columnGroupId The column group id stored in `body.columnGroups`.
     * @returns {FDocumentColumnGroup | null} The column group wrapper, or `null` if no group has the id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.getColumnGroup('column-group-1');
     * console.log(group?.describe());
     * ```
     */
    getColumnGroup(columnGroupId: string): FDocumentColumnGroup | null;
    /**
     * Returns the column group that contains a data-stream offset.
     * @param {number} offset Zero-based document body data-stream offset.
     * @returns {FDocumentColumnGroup | null} The containing column group, or `null` when the offset is outside all groups.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.getColumnGroupAt(128);
     * console.log(group?.describe());
     * ```
     */
    getColumnGroupAt(offset: number): FDocumentColumnGroup | null;
    /**
     * Finds the first column group that contains a column with matching text.
     * @param {string} text Plain text to search inside columns.
     * @returns {FDocumentColumnGroup | null} The first matching column group, or `null` when no group contains the text.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const group = fDocument.findColumnGroupByText('Launch');
     * console.log(group?.describe());
     * ```
     */
    findColumnGroupByText(text: string): FDocumentColumnGroup | null;
    /**
     * Finds column groups by text or by id.
     * @param {string | IDocsColumnFindQuery} query Plain text to search inside columns, or a structured query.
     * @returns {FDocumentColumnGroup[]} Matching column groups in document order.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const groupsWithText = fDocument.findColumnGroups('Launch');
     * const groupsWithId = fDocument.findColumnGroups({ columnGroupId: 'column-group-1' });
     * console.log(groupsWithText, groupsWithId);
     * ```
     */
    findColumnGroups(query: string | IDocsColumnFindQuery): FDocumentColumnGroup[];
    /**
     * Inserts an empty column group into the document.
     *
     * By default the group is inserted before the final body section break. Pass `offset`
     * when you need to insert at a specific data-stream position. Every inserted column
     * contains an editable empty paragraph. Column groups are supported only in modern
     * documents; traditional documents throw `DocsColumnUnsupportedDocumentFlavorError`.
     * @param {number} columnCount Number of columns to create. Values below two are normalized to two; values above five fail.
     * @param {IDocsColumnInsertFacadeOptions} [options] Optional id, column ids, insertion offset, gap, and initial width ratios.
     * @returns {FDocumentColumnGroup | null} The inserted column group wrapper, or `null` if insertion failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * const group = fDocument.insertColumnGroup(3, {
     *   gap: 18,
     *   widthRatios: [1.1, 1, 0.9],
     * });
     *
     * const [left, middle, right] = group?.getColumns() ?? [];
     *
     * const leftOffset = left?.getInsertOffset();
     * if (leftOffset != null) {
     *   fDocument.insertText(leftOffset, 'Editorial brief\rUse columns for compact narrative layout.');
     * }
     *
     * const middleOffset = middle?.getInsertOffset();
     * if (middleOffset != null) {
     *   fDocument.insertText(middleOffset, 'Production checklist\rDrag content into this column.');
     * }
     *
     * const rightOffset = right?.getInsertOffset();
     * if (rightOffset != null) {
     *   fDocument.insertTableFromData([
     *     ['Metric', 'Now', 'Next'],
     *     ['Adoption', '68%', '80%'],
     *     ['Quality', 'A-', 'A'],
     *   ], {
     *     offset: rightOffset,
     *     headerRowCount: 1
     *   });
     * }
     *
     * console.log(group?.describe());
     * ```
     */
    insertColumnGroup(columnCount: number, options?: IDocsColumnInsertFacadeOptions): FDocumentColumnGroup | null;
}
export declare class FDocumentColumnMixin extends FDocument implements IFDocumentColumnMixin {
    getColumnGroups(): FDocumentColumnGroup[];
    getColumnGroup(columnGroupId: string): FDocumentColumnGroup | null;
    getColumnGroupAt(offset: number): FDocumentColumnGroup | null;
    findColumnGroupByText(text: string): FDocumentColumnGroup | null;
    findColumnGroups(query: string | IDocsColumnFindQuery): FDocumentColumnGroup[];
    insertColumnGroup(columnCount: number, options?: IDocsColumnInsertFacadeOptions): FDocumentColumnGroup | null;
    private _getColumnGroups;
    private _createFDocumentColumnGroup;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentColumnMixin {
    }
}
