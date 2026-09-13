import type { FDocumentParagraph } from '@univerjs/docs/facade';
import type { IDocsCalloutFindQuery, IDocsCalloutInsertFacadeOptions, IDocsCalloutInsertParagraphFacadeOptions } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentCallout } from './f-document-callout';
export interface IFDocumentCalloutMixin {
    /**
     * Returns all callout block ranges in this document.
     * @returns {FDocumentCallout[]} An array of FDocumentCallout instances, or an empty array if no callout block ranges exist in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callouts = fDocument.getCallouts();
     * console.log(callouts);
     * ```
     */
    getCallouts(): FDocumentCallout[];
    /**
     * Returns a callout block range by its block id.
     * @param {string} blockId The callout block range id.
     * @returns {FDocumentCallout | null} The FDocumentCallout instance, or `null` if no callout block range with the id exists in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.getCallout('block-id-123');
     * console.log(callout);
     * ```
     */
    getCallout(blockId: string): FDocumentCallout | null;
    /**
     * Returns the callout block range that contains a document data stream offset.
     * @param {number} offset The document data stream offset.
     * @returns {FDocumentCallout | null} The FDocumentCallout instance, or `null` if no callout block range contains the offset.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.getCalloutAt(150);
     * console.log(callout);
     * ```
     */
    getCalloutAt(offset: number): FDocumentCallout | null;
    /**
     * Finds the first callout whose text contains the given string.
     * @param {string} text Text to search inside callout content.
     * @returns {FDocumentCallout | null} The first matching FDocumentCallout instance, or `null` if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const callout = fDocument.findCalloutByText('important');
     * console.log(callout);
     * ```
     */
    findCalloutByText(text: string): FDocumentCallout | null;
    /**
     * Finds callouts by text or block id.
     * @param {string | IDocsCalloutFindQuery} query A plain text query or a structured callout query.
     * @returns {FDocumentCallout[]} An array of matching FDocumentCallout instances, or an empty array if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const calloutsWithText = fDocument.findCallouts('important');
     * const calloutsWithId = fDocument.findCallouts({ blockId: 'block-id-123' });
     * console.log(calloutsWithText, calloutsWithId);
     * ```
     */
    findCallouts(query: string | IDocsCalloutFindQuery): FDocumentCallout[];
    /**
     * Inserts a callout around a paragraph element.
     * The paragraph wrapper is resolved by persisted `paragraphId` before the command runs, so facade edits
     * inserted before the paragraph do not require recalculating offsets.
     *
     * This API writes `keepLines` and `widowControl` to every inserted paragraph.
     * For multiple paragraphs it also writes `keepNext = TRUE` between adjacent
     * paragraphs and `keepNext = FALSE` on the final paragraph, so the callout
     * does not capture the following body paragraph. Callers do not need to add
     * these pagination styles manually.
     *
     * Traditional Docs apply the styles during physical pagination. A callout
     * that fits on a fresh page stays together; content taller than a fresh page
     * remains splittable. Modern and Unspecified Docs preserve the styles in the
     * model but do not apply them during physical pagination.
     *
     * @param {FDocumentParagraph} paragraph The paragraph to convert to a callout.
     * @param {IDocsCalloutInsertParagraphFacadeOptions} [options] Optional block id and visual config.
     * @returns {FDocumentCallout | null} The inserted FDocumentCallout instance, or `null` if the insert callout failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) {
     *   throw new Error('No active document');
     * }
     *
     * // Insert a callout around a paragraph with the icon config.
     * const paragraph = fDocument.appendParagraph('Remember to review the launch checklist.');
     * const callout = fDocument.insertCallout(paragraph, {
     *   config: { icon: '!' },
     * });
     * if (!callout) {
     *   throw new Error('Failed to insert the callout');
     * }
     * console.log({
     *   blockId: callout.getId(),
     *   wordPaginationApplied: fDocument.isTraditional(),
     * });
     * ```
     */
    insertCallout(paragraph: FDocumentParagraph, options?: IDocsCalloutInsertParagraphFacadeOptions): FDocumentCallout | null;
    /**
     * Inserts a callout around a document range, or inserts an empty callout when the range is collapsed.
     * Prefer the paragraph overload for agent-authored code.
     *
     * The same automatic pagination styles as the paragraph overload are written
     * for every paragraph in the range. Traditional Docs apply them; Modern and
     * Unspecified Docs preserve them in the model but ignore them during physical
     * pagination. Content taller than a fresh page remains splittable.
     *
     * @param {IDocsCalloutInsertFacadeOptions} [options] Optional block id, start/end offsets, and visual config.
     * @returns {FDocumentCallout | null} The inserted FDocumentCallout instance, or `null` if the insert callout failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) {
     *   throw new Error('No active document');
     * }
     *
     * // Insert a callout around the text 'Risk' in a table cell with the icon config.
     * const table = fDocument.findTableByText('Risk');
     * const range = table?.getCell(1, 0)?.getContentRange();
     * if (!range) {
     *   throw new Error('Risk table cell not found');
     * }
     * const callout = fDocument.insertCallout({ ...range, config: { icon: '!' } });
     * if (!callout) {
     *   throw new Error('Failed to insert the table-cell callout');
     * }
     * console.log(callout.getId());
     *
     * // Insert a callout around the text 'Callout' and next paragraph with the icon config.
     * const paragraph = fDocument.findParagraphByText('Callout');
     * if (paragraph) {
     *   const paragraphs = fDocument.getParagraphs();
     *   const { paragraphIndex, startOffset } = paragraph.getInfo();
     *   const finalParagraph = paragraphs[paragraphIndex + 1];
     *   if (!finalParagraph) {
     *     throw new Error('Expected a paragraph after the callout start');
     *   }
     *   const { endOffset } = finalParagraph.getInfo();
     *   const callout2 = fDocument.insertCallout({ startOffset, endOffset, config: { icon: '!' } });
     *   if (!callout2) {
     *     throw new Error('Failed to insert the multi-paragraph callout');
     *   }
     *   console.log(callout2.getId());
     * }
     * ```
     */
    insertCallout(options?: IDocsCalloutInsertFacadeOptions): FDocumentCallout | null;
}
export declare class FDocumentCalloutMixin extends FDocument implements IFDocumentCalloutMixin {
    getCallouts(): FDocumentCallout[];
    getCallout(blockId: string): FDocumentCallout | null;
    getCalloutAt(offset: number): FDocumentCallout | null;
    findCalloutByText(text: string): FDocumentCallout | null;
    findCallouts(query: string | IDocsCalloutFindQuery): FDocumentCallout[];
    insertCallout(paragraph: FDocumentParagraph, options?: IDocsCalloutInsertParagraphFacadeOptions): FDocumentCallout | null;
    insertCallout(options?: IDocsCalloutInsertFacadeOptions): FDocumentCallout | null;
    private _getBlockRanges;
    private _createFDocumentCallout;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentCalloutMixin {
    }
}
