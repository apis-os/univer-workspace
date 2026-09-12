import type { Injector } from '@univerjs/core';
import type { IDocsLatexCreateFacadeOptions } from './types';
import { FDocumentParagraph } from '@univerjs/docs/facade';
import { FDocumentLatex } from './f-document-latex';
/**
 * LaTeX methods mixed into `FDocumentParagraph` by importing
 * `@univerjs-pro/docs-latex/facade`.
 */
export interface IFDocumentParagraphLatexMixin {
    /**
     * Appends one inline LaTeX formula before this paragraph's trailing paragraph break.
     *
     * The insert command generates and persists the underlying custom-range id.
     * LaTeX source must not include `$` or `$$` delimiters.
     *
     * @param {string} latex LaTeX source without delimiters.
     * @param {IDocsLatexCreateFacadeOptions} [options] Optional visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when the command fails.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const paragraph = document.appendParagraph('Newton second law: ');
     * const formula = paragraph.appendLatex('F = ma');
     * if (!formula) throw new Error('Failed to append LaTeX formula');
     *
     * const description = formula.describe();
     * if (!description || description.latex !== 'F = ma') {
     *   throw new Error('LaTeX formula verification failed');
     * }
     * console.log(description);
     * ```
     */
    appendLatex(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    /**
     * Prepends one inline LaTeX formula at the start of this paragraph.
     *
     * The insert command generates and persists the underlying custom-range id.
     * LaTeX source must not include `$` or `$$` delimiters.
     *
     * @param {string} latex LaTeX source without delimiters.
     * @param {IDocsLatexCreateFacadeOptions} [options] Optional visual properties.
     * @returns {FDocumentLatex | null} The inserted formula, or `null` when the command fails.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const paragraph = document.appendParagraph(' is the energy equation.');
     * const formula = paragraph.prependLatex('E = mc^2');
     * if (!formula) throw new Error('Failed to prepend LaTeX formula');
     * console.log(formula.describe());
     * ```
     */
    prependLatex(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
}
export declare class FDocumentParagraphLatexMixin extends FDocumentParagraph implements IFDocumentParagraphLatexMixin {
    private _docsLatexCommandService;
    _initialize(injector: Injector): void;
    appendLatex(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    prependLatex(latex: string, options?: IDocsLatexCreateFacadeOptions): FDocumentLatex | null;
    private _insertLatex;
}
declare module '@univerjs/docs/facade' {
    interface FDocumentParagraph extends IFDocumentParagraphLatexMixin {
    }
}
