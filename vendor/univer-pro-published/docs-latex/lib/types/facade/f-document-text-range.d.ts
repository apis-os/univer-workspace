import type { Injector } from '@univerjs/core';
import type { IDocsLatexCreateFacadeOptions } from './types';
import { FDocumentTextRange } from '@univerjs/docs/facade';
import { FDocumentLatex } from './f-document-latex';
/**
 * LaTeX methods mixed into `FDocumentTextRange` by importing
 * `@univerjs-pro/docs-latex/facade`.
 */
export interface IFDocumentTextRangeLatexMixin {
    /**
     * Replaces this text range with one inline LaTeX formula.
     *
     * The range is fixed when created. Resolve a new range after edits that
     * insert or remove content before it. The range must not cross paragraph,
     * table-cell, column, block, or section boundaries.
     *
     * @param {string} latex LaTeX source without `$` or `$$` delimiters.
     * @param {IDocsLatexCreateFacadeOptions} [options] Optional visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when the command fails.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const paragraph = document.findParagraphByText('FORMULA_PLACEHOLDER');
     * if (!paragraph) throw new Error('Target paragraph not found');
     *
     * const matches = paragraph.findAllText('FORMULA_PLACEHOLDER');
     * if (matches.length !== 1) {
     *   throw new Error(`Expected one placeholder, found ${matches.length}`);
     * }
     *
     * const formula = matches[0].replaceWithLatex('F = ma');
     * if (!formula) throw new Error('Failed to replace text with LaTeX');
     * console.log(formula.describe());
     * ```
     */
    replaceWithLatex(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    /**
     * Inserts one inline LaTeX formula immediately before this text range.
     *
     * The original range content is preserved.
     *
     * @param {string} latex LaTeX source without `$` or `$$` delimiters.
     * @param {IDocsLatexCreateFacadeOptions} [options] Optional visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when the command fails.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const paragraph = document.findParagraphByText('result');
     * const range = paragraph?.findText('result');
     * if (!range) throw new Error('Target text not found');
     *
     * const formula = range.insertLatexBefore('x = 1');
     * if (!formula) throw new Error('Failed to insert LaTeX formula');
     * ```
     */
    insertLatexBefore(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    /**
     * Inserts one inline LaTeX formula immediately after this text range.
     *
     * The original range content is preserved.
     *
     * @param {string} latex LaTeX source without `$` or `$$` delimiters.
     * @param {IDocsLatexCreateFacadeOptions} [options] Optional visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when the command fails.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const paragraph = document.findParagraphByText('Force');
     * const range = paragraph?.findText('Force');
     * if (!range) throw new Error('Target text not found');
     *
     * const formula = range.insertLatexAfter('F = ma');
     * if (!formula) throw new Error('Failed to insert LaTeX formula');
     * ```
     */
    insertLatexAfter(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
}
export declare class FDocumentTextRangeLatexMixin extends FDocumentTextRange implements IFDocumentTextRangeLatexMixin {
    private _docsLatexCommandService;
    _initialize(injector: Injector): void;
    replaceWithLatex(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    insertLatexBefore(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    insertLatexAfter(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    private _insertLatex;
}
declare module '@univerjs/docs/facade' {
    interface FDocumentTextRange extends IFDocumentTextRangeLatexMixin {
    }
}
