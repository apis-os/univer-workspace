import type { IHostExternalReference } from '@univerjs-pro/engine-formula';
import type { FormulaSequenceNode, IFormulaRefSelection } from '@univerjs/engine-formula';
export interface IFormulaBindingReferenceSelectionChange {
    references: string[];
    visibleReferenceIndexes: number[];
    activeReferenceIndex?: number;
    isCtrlAddMode: boolean;
    externalReference?: IHostExternalReference;
}
export interface IFormulaBindingReferenceEditResult {
    formula: string;
    selectionStart: number;
    selectionEnd: number;
}
export declare function applyFormulaBindingReferenceSelection(options: {
    formula: string;
    sequenceNodes: FormulaSequenceNode[];
    referenceSelections?: IFormulaRefSelection[];
    selectionStart: number;
    selectionEnd: number;
    change: IFormulaBindingReferenceSelectionChange;
}): IFormulaBindingReferenceEditResult | null;
export declare function normalizeFormulaBindingFormula(formula: string): string;
