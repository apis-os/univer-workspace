import type { Injector } from '@univerjs/core';
import type { IDocFormulaCreateFacadeOptions } from './types';
import { FDocumentTextRange } from '@univerjs/docs/facade';
import { FDocumentFormula } from './f-document-formula';
/** Formula insertion methods added to fixed `FDocumentTextRange` handles. */
export interface IFDocumentTextRangeFormulaMixin {
    /**
     * Replaces this complete text range with one whole-entity Doc Formula.
     *
     * The fixed range must be in the main body and must not cross paragraph,
     * table-cell, section, column, or protected structural boundaries.
     *
     * @param formula Formula text.
     * @param options Optional number format and complete external Source bindings.
     * @returns The inserted formula, or `null` when range/binding validation fails.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function replacePlaceholderWithFormula(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const paragraph = document.findParagraphByText('FORMULA_PLACEHOLDER');
     *   const range = paragraph?.findText('FORMULA_PLACEHOLDER');
     *   if (!range) throw new Error('Formula placeholder not found');
     *   const formula = range.replaceWithFormula('=SUM(10,20)');
     *   if (!formula) throw new Error('Failed to replace the range');
     *   return formula.describe();
     * }
     * ```
     */
    replaceWithFormula(formula: string, options?: IDocFormulaCreateFacadeOptions): FDocumentFormula | null;
}
export declare class FDocumentTextRangeFormulaMixin extends FDocumentTextRange implements IFDocumentTextRangeFormulaMixin {
    private _docsFormulaCommandService;
    _initialize(injector: Injector): void;
    replaceWithFormula(formula: string, options?: IDocFormulaCreateFacadeOptions): FDocumentFormula | null;
    private _insert;
}
declare module '@univerjs/docs/facade' {
    interface FDocumentTextRange extends IFDocumentTextRangeFormulaMixin {
    }
}
