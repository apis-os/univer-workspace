import type { FDocumentParagraph } from '@univerjs/docs/facade';
import type { IDocsCodeFindQuery, IDocsCodeInsertFacadeOptions, IDocsCodeInsertParagraphFacadeOptions } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentCode } from './f-document-code';
export interface IFDocumentCodeMixin {
    /**
     * Returns all code block ranges in this document.
     * @returns {FDocumentCode[]} An array of FDocumentCode instances, or an empty array if no code block ranges exist in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const codes = fDocument.getCodes();
     * console.log(codes);
     * ```
     */
    getCodes(): FDocumentCode[];
    /**
     * Returns a code block range by its block id.
     * @param {string} blockId The code block range id.
     * @returns {FDocumentCode | null} The FDocumentCode instance, or `null` if no code block range with the id exists in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.getCode('block-id-123');
     * console.log(code);
     * ```
     */
    getCode(blockId: string): FDocumentCode | null;
    /**
     * Returns the code that contains a document data stream offset.
     * @param {number} offset The document data stream offset.
     * @returns {FDocumentCode | null} The FDocumentCode instance, or `null` if no code block range contains the offset.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.getCodeAt(150);
     * console.log(code);
     * ```
     */
    getCodeAt(offset: number): FDocumentCode | null;
    /**
     * Finds the first code whose text contains the given string.
     * @param {string} text Text to search inside code content.
     * @returns {FDocumentCode | null} The first matching FDocumentCode instance, or `null` if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const code = fDocument.findCodeByText('function');
     * console.log(code);
     * ```
     */
    findCodeByText(text: string): FDocumentCode | null;
    /**
     * Finds codes by text or block id.
     * @param {string | IDocsCodeFindQuery} query A plain text query or a structured code query.
     * @returns {FDocumentCode[]} An array of matching FDocumentCode instances, or an empty array if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const codesWithText = fDocument.findCodes('function');
     * const codesWithId = fDocument.findCodes({ blockId: 'block-id-123' });
     * console.log(codesWithText, codesWithId);
     * ```
     */
    findCodes(query: string | IDocsCodeFindQuery): FDocumentCode[];
    /**
     * Inserts a code block around a paragraph element.
     * The paragraph wrapper is resolved by persisted `paragraphId` before the command runs, so facade edits
     * inserted before the paragraph do not require recalculating offsets.
     *
     * This API writes `keepLines` and `widowControl` to every inserted paragraph.
     * For multiple paragraphs it also writes `keepNext = TRUE` between adjacent
     * paragraphs and `keepNext = FALSE` on the final paragraph, so the code block
     * does not capture the following body paragraph. Callers do not need to add
     * these pagination styles manually.
     *
     * Traditional Docs apply the styles during physical pagination. A code block
     * that fits on a fresh page stays together; content taller than a fresh page
     * remains splittable. Modern and Unspecified Docs preserve the styles in the
     * model but do not apply them during physical pagination.
     *
     * @param {FDocumentParagraph} paragraph The paragraph to convert to a code block.
     * @param {IDocsCodeInsertParagraphFacadeOptions} [options] Optional block id and code config.
     * @returns {FDocumentCode | null} The newly inserted FDocumentCode instance, or `null` if the insert code failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) {
     *   throw new Error('No active document');
     * }
     *
     * // Insert a code block around a paragraph with TypeScript language config.
     * const paragraph = fDocument.appendParagraph('const total = rows.length;');
     * const code = fDocument.insertCode(paragraph, {
     *   config: { language: 'typescript' },
     * });
     * if (!code) {
     *   throw new Error('Failed to insert the code block');
     * }
     * console.log({
     *   language: code.getConfig()?.language,
     *   wordPaginationApplied: fDocument.isTraditional(),
     * });
     * ```
     */
    insertCode(paragraph: FDocumentParagraph, options?: IDocsCodeInsertParagraphFacadeOptions): FDocumentCode | null;
    /**
     * Inserts a code around a document range, or inserts an empty code when the range is collapsed.
     * Prefer the paragraph overload for agent-authored code.
     *
     * The same automatic pagination styles as the paragraph overload are written
     * for every paragraph in the range. Traditional Docs apply them; Modern and
     * Unspecified Docs preserve them in the model but ignore them during physical
     * pagination. Content taller than a fresh page remains splittable.
     *
     * @param {IDocsCodeInsertFacadeOptions} [options] Optional block id and start/end offsets.
     * @returns {FDocumentCode | null} The newly inserted FDocumentCode instance, or `null` if the insert code failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * if (!fDocument) {
     *   throw new Error('No active document');
     * }
     *
     * // Insert a code block around the text "Snippet" in a table cell with TypeScript language config.
     * const table = fDocument.findTableByText('Snippet');
     * const range = table?.getCell(1, 0)?.getContentRange();
     * if (!range) {
     *   throw new Error('Snippet table cell not found');
     * }
     * const code = fDocument.insertCode({ ...range, config: { language: 'typescript' } });
     * if (!code) {
     *   throw new Error('Failed to insert the table-cell code block');
     * }
     * console.log(code.getId());
     *
     * // Insert a code block around the text "const" and the next three paragraphs with TypeScript language config.
     * // const cell = {
     * //   width: 960,
     * //   blocks: ['code', 'callout', 'quote']
     * // };
     * const paragraph = fDocument.findParagraphByText('const');
     * if (paragraph) {
     *   const paragraphs = fDocument.getParagraphs();
     *   const { paragraphIndex, startOffset } = paragraph.getInfo();
     *   const finalParagraph = paragraphs[paragraphIndex + 3];
     *   if (!finalParagraph) {
     *     throw new Error('Expected three paragraphs after the code start');
     *   }
     *   const { endOffset } = finalParagraph.getInfo();
     *   const code2 = fDocument.insertCode({ startOffset, endOffset, config: { language: 'typescript' } });
     *   if (!code2) {
     *     throw new Error('Failed to insert the multi-paragraph code block');
     *   }
     *   console.log(code2.getId());
     * }
     * ```
     */
    insertCode(options?: IDocsCodeInsertFacadeOptions): FDocumentCode | null;
}
export declare class FDocumentCodeMixin extends FDocument implements IFDocumentCodeMixin {
    getCodes(): FDocumentCode[];
    getCode(blockId: string): FDocumentCode | null;
    getCodeAt(offset: number): FDocumentCode | null;
    findCodeByText(text: string): FDocumentCode | null;
    findCodes(query: string | IDocsCodeFindQuery): FDocumentCode[];
    insertCode(paragraph: FDocumentParagraph, options?: IDocsCodeInsertParagraphFacadeOptions): FDocumentCode | null;
    insertCode(options?: IDocsCodeInsertFacadeOptions): FDocumentCode | null;
    private _getBlockRanges;
    private _createFDocumentCode;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentCodeMixin {
    }
}
