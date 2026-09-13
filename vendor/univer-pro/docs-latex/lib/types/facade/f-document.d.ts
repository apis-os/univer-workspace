import type { Injector } from '@univerjs/core';
import type { IDocsLatexCreateFacadeOptions, IDocsLatexFindQuery } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentLatex } from './f-document-latex';
/**
 * LaTeX formula methods mixed into `FDocument` by importing `@univerjs-pro/docs-latex/facade`.
 *
 * @example
 * ```ts
 * const univerAPI = FUniver.newAPI(univer);
 * const document = univerAPI.getActiveDocument();
 * if (!document) throw new Error('No active document');
 * console.log(document.getLatexFormulas().map((formula) => formula.getLatex()));
 * ```
 */
export interface IFDocumentLatexMixin {
    /**
     * Returns all LaTeX formulas in this document.
     * @param {string} [segmentId] Header/footer segment id. Omit it for the main document body.
     * @returns {FDocumentLatex[]} An array of formula facade objects, or an empty array if the document has none.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formulas = document.getLatexFormulas();
     * console.log(formulas.map((formula) => formula.getLatex()));
     * ```
     */
    getLatexFormulas(segmentId?: string): FDocumentLatex[];
    /**
     * Returns a LaTeX formula by its range id.
     * @param {string} rangeId The formula custom range id.
     * @param {string} [segmentId] Header/footer segment id. Omit it for the main document body.
     * @returns {FDocumentLatex | null} The matching formula facade object, or `null` if no formula has that id.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const existing = document.getLatexFormulas()[0];
     * if (!existing) throw new Error('No LaTeX formula');
     * const formula = document.getLatexFormula(existing.getId());
     * if (!formula) throw new Error('Cannot find LaTeX formula by id');
     * console.log(formula.describe());
     * ```
     */
    getLatexFormula(rangeId: string, segmentId?: string): FDocumentLatex | null;
    /**
     * Returns the LaTeX formula that contains a document data-stream offset.
     * @param {number} offset The document data-stream offset.
     * @param {string} [segmentId] Header/footer segment id. Omit it for the main document body.
     * @returns {FDocumentLatex | null} The formula at the offset, or `null` if the offset is not inside a formula.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const existing = document.getLatexFormulas()[0];
     * if (!existing) throw new Error('No LaTeX formula');
     * const range = existing.getRange();
     * if (!range) throw new Error('LaTeX formula has no range');
     * const formula = document.getLatexFormulaAt(range.startOffset);
     * if (!formula) throw new Error('Cannot find LaTeX formula at offset');
     * console.log(formula.getLatex());
     * ```
     */
    getLatexFormulaAt(offset: number, segmentId?: string): FDocumentLatex | null;
    /**
     * Finds the first LaTeX formula whose source contains the given text.
     * @param {string} latex Text to search for inside formula source.
     * @param {string} [segmentId] Header/footer segment id. Omit it for the main document body.
     * @returns {FDocumentLatex | null} The first matching formula, or `null` if no match is found.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const existing = document.getLatexFormulas()[0];
     * if (!existing) throw new Error('No LaTeX formula');
     * const formula = document.findLatexFormulaByText(existing.getLatex());
     * if (!formula) throw new Error('Cannot find LaTeX formula by text');
     * console.log(formula.getRange());
     * ```
     */
    findLatexFormulaByText(latex: string, segmentId?: string): FDocumentLatex | null;
    /**
     * Finds LaTeX formulas by source text or range id.
     * @param {string | IDocsLatexFindQuery} query A source-text query or a structured query.
     * @param {string} [segmentId] Header/footer segment id. Omit it for the main document body.
     * @returns {FDocumentLatex[]} Matching formula facade objects, or an empty array if no match is found.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const existing = document.getLatexFormulas()[0];
     * if (!existing) throw new Error('No LaTeX formula');
     * const byText = document.findLatexFormulas(existing.getLatex());
     * const byId = document.findLatexFormulas({ rangeId: existing.getId() });
     * console.log(byText, byId);
     * ```
     */
    findLatexFormulas(query: string | IDocsLatexFindQuery, segmentId?: string): FDocumentLatex[];
    /**
     * Inserts a LaTeX formula at an explicit document offset.
     *
     * This is a low-level API. Agent-authored code should prefer
     * `FDocumentParagraph.appendLatex` or `FDocumentTextRange.replaceWithLatex`.
     *
     * @param {number} offset Inclusive insertion offset.
     * @param {string} latex LaTeX source without `$` or `$$` delimiters.
     * @param {IDocsLatexCreateFacadeOptions & { segmentId?: string }} [options] Segment and visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when the command fails.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const paragraph = document.appendParagraph('Energy: ');
     * const formula = document.insertLatexAtOffset(
     *   paragraph.getInfo().endOffset,
     *   'E = mc^2'
     * );
     * if (!formula) throw new Error('Failed to insert LaTeX formula');
     * console.log(formula.describe());
     * ```
     */
    insertLatexAtOffset(offset: number, latex: string, options?: IDocsLatexCreateFacadeOptions & {
        segmentId?: string;
    }): FDocumentLatex | null;
    /**
     * Inserts or replaces a LaTeX formula at the active editor selection.
     *
     * This UI-selection API is not suitable for headless runtimes.
     *
     * @param {string} latex LaTeX source without `$` or `$$` delimiters.
     * @param {IDocsLatexCreateFacadeOptions} [options] Optional visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when no valid selection exists.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * // The user must first select text in the active Docs editor.
     * const formula = document.insertLatexAtSelection('F = ma');
     * if (!formula) {
     *   throw new Error('No valid Docs selection, or the insertion failed');
     * }
     * console.log(formula.describe());
     * ```
     */
    insertLatexAtSelection(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
}
export declare class FDocumentLatexMixin extends FDocument implements IFDocumentLatexMixin {
    private _docsLatexCommandService;
    _initialize(injector: Injector): void;
    getLatexFormulas(segmentId?: string): FDocumentLatex[];
    getLatexFormula(rangeId: string, segmentId?: string): FDocumentLatex | null;
    getLatexFormulaAt(offset: number, segmentId?: string): FDocumentLatex | null;
    findLatexFormulaByText(latex: string, segmentId?: string): FDocumentLatex | null;
    findLatexFormulas(query: string | IDocsLatexFindQuery, segmentId?: string): FDocumentLatex[];
    insertLatexAtOffset(offset: number, latex: string, options?: IDocsLatexCreateFacadeOptions & {
        segmentId?: string;
    }): FDocumentLatex | null;
    insertLatexAtSelection(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    private _insertLatexFormula;
    private _getLatexRanges;
    private _createFDocumentLatex;
    private _getLatexFromRange;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentLatexMixin {
    }
}
