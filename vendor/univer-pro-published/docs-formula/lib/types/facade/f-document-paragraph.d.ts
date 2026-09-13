import type { Injector } from '@univerjs/core';
import type { IDocFormulaCreateFacadeOptions } from './types';
import { FDocumentParagraph } from '@univerjs/docs/facade';
import { FDocumentFormula } from './f-document-formula';
/** Formula insertion methods added to main-body `FDocumentParagraph` handles. */
export interface IFDocumentParagraphFormulaMixin {
    /**
     * Inserts one Formula at a paragraph-relative UTF-16 offset.
     *
     * The paragraph handle is backed by its persisted `paragraphId`. The
     * Command resolves that id against the latest document snapshot and only
     * then converts `offset` to a document position. Edits before this paragraph
     * therefore do not invalidate the insertion anchor.
     *
     * Use `0` to insert at the content start. Prefer `appendFormula()` for the
     * current content end because it resolves the semantic `'end'` position
     * without requiring the caller to measure UTF-16 text length.
     *
     * @param offset Zero-based UTF-16 offset relative to this paragraph's text.
     * @param formula Formula text.
     * @param options Optional number format and stable external Source bindings.
     * @returns The inserted formula, or `null` when the paragraph is missing,
     * outside the main body, the offset is invalid, or Command validation fails.
     * @example Insert between a stable label and its suffix
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function insertFormulaInsideParagraph(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *
     *   const paragraph = document.appendParagraph('Revenue: USD');
     *   const paragraphId = paragraph.getId();
     *
     *   // This edit changes every following absolute document offset.
     *   document.insertParagraph(0, 'Quarterly report');
     *
     *   const stableParagraph = document.getParagraph(paragraphId);
     *   if (!stableParagraph) throw new Error('Revenue paragraph was removed');
     *   const formula = stableParagraph.insertFormula('Revenue: '.length, '=1000/4', {
     *     numberFormat: { pattern: '#,##0.00' },
     *   });
     *   if (!formula) throw new Error('Failed to insert Doc Formula');
     *   return formula.describe();
     * }
     * ```
     */
    insertFormula(offset: number, formula: string, options?: IDocFormulaCreateFacadeOptions): FDocumentFormula | null;
    /**
     * Appends one Formula before this paragraph's trailing paragraph token.
     *
     * The Command resolves the persisted `paragraphId` and the semantic `'end'`
     * position together. It does not capture an absolute document offset or a
     * paragraph length in advance. Header/footer paragraphs are rejected because
     * Doc Formula v1 supports the main body only.
     *
     * @param formula Formula text.
     * @param options Optional number format and stable external Source bindings.
     * @returns The inserted formula, or `null` when the paragraph is missing,
     * outside the main body, or the command validation fails.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function appendParagraphFormula(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const paragraph = document.appendParagraph('Revenue: ');
     *   const formula = paragraph.appendFormula('=1000/4', {
     *     numberFormat: { pattern: '$#,##0.00' },
     *   });
     *   if (!formula) throw new Error('Failed to append Doc Formula');
     *   return formula.describe();
     * }
     * ```
     */
    appendFormula(formula: string, options?: IDocFormulaCreateFacadeOptions): FDocumentFormula | null;
}
export declare class FDocumentParagraphFormulaMixin extends FDocumentParagraph implements IFDocumentParagraphFormulaMixin {
    private _docsFormulaCommandService;
    _initialize(injector: Injector): void;
    insertFormula(offset: number, formula: string, options?: IDocFormulaCreateFacadeOptions): FDocumentFormula | null;
    appendFormula(formula: string, options?: IDocFormulaCreateFacadeOptions): FDocumentFormula | null;
    private _insert;
}
declare module '@univerjs/docs/facade' {
    interface FDocumentParagraph extends IFDocumentParagraphFormulaMixin {
    }
}
