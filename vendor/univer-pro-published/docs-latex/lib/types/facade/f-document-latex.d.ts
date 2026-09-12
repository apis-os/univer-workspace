import type { IDocsLatexFormulaConfig } from '@univerjs-pro/docs-latex';
import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsLatexInfo, IDocsLatexRange, IDocsLatexUpdateFacadeOptions } from './types';
import { DocsLatexModel } from '@univerjs-pro/docs-latex';
import { ICommandService } from '@univerjs/core';
/**
 * Facade object for a single LaTeX formula in a Univer document.
 * @example
 * ```ts
 * const univerAPI = FUniver.newAPI(univer);
 * const document = univerAPI.getActiveDocument();
 * if (!document) throw new Error('No active document');
 * const formula = document.getLatexFormulas()[0];
 * if (!formula) throw new Error('No LaTeX formula');
 * console.log(formula.getLatex());
 * console.log(formula.getConfig());
 * if (!formula.update({ latex: '\\frac{a}{b}' })) throw new Error('Cannot update LaTeX formula');
 * ```
 */
export declare class FDocumentLatex {
    private _document;
    private _rangeId;
    private _segmentId;
    private readonly _commandService;
    private readonly _model;
    private readonly _unitId;
    constructor(_document: FDocument, _rangeId: string, _segmentId: string, _commandService: ICommandService, _model: DocsLatexModel);
    /**
     * Returns the LaTeX formula range id.
     * @returns {string} The custom range id that identifies this formula.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * console.log(formula.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns this formula's document data-stream range.
     * @returns {IDocsLatexRange | null} The formula range, or `null` if it no longer exists.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * console.log(formula.getRange());
     * ```
     */
    getRange(): IDocsLatexRange | null;
    /**
     * Returns the editable LaTeX source for this formula.
     * @returns {string} The LaTeX source, or an empty string if the formula range is gone.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * console.log(formula.getLatex());
     * ```
     */
    getLatex(): string;
    /**
     * Returns the normalized formula configuration.
     * @returns {IDocsLatexFormulaConfig} The formula source and visual properties.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * console.log(formula.getConfig().kind);
     * ```
     */
    getConfig(): IDocsLatexFormulaConfig;
    /**
     * Returns an agent-friendly description of this formula.
     * @returns {IDocsLatexInfo | null} The formula id, range, source, and config, or `null` if it no longer exists.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * console.log(formula.describe());
     * ```
     */
    describe(): IDocsLatexInfo | null;
    /**
     * Updates this formula's source and optional visual properties.
     * @param {IDocsLatexUpdateFacadeOptions} options The replacement LaTeX source and property patch.
     * @returns {boolean} Whether the update command succeeded.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * if (!formula.update({ latex: '\\frac{a}{b}' })) throw new Error('Cannot update LaTeX formula');
     * ```
     */
    update(options: IDocsLatexUpdateFacadeOptions): boolean;
    /**
     * Removes this formula and its source text from the document.
     * @returns {boolean} Whether the remove command succeeded.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * if (!formula.remove()) throw new Error('Failed to remove LaTeX formula');
     * ```
     */
    remove(): boolean;
    /**
     * Replaces this formula with plain text.
     * @param {string} text Plain replacement text.
     * @returns {boolean} Whether the replace command succeeded.
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document');
     *
     * const formula = document.getLatexFormulas()[0];
     * if (!formula) throw new Error('No LaTeX formula');
     * if (!formula.replaceWithText('F = ma')) throw new Error('Failed to replace LaTeX formula');
     * ```
     */
    replaceWithText(text: string): boolean;
    private _getBody;
    private _getCustomRange;
    private _getContainingParagraph;
}
