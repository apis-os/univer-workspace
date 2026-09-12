import type { IFormulaLastValue, IFormulaResultPresentation, IHostExternalReference } from '@univerjs-pro/engine-formula';
import type { CellValueType, ITextRangeParam } from '@univerjs/core';
import type { DOC_FORMULA_SCHEMA_VERSION } from './const';
export interface IDocFormulaConfig {
    formula: string;
    numberFormat?: {
        pattern: string;
    };
    lastValue?: IFormulaLastValue;
}
export interface IDocFormulaResource {
    schemaVersion: typeof DOC_FORMULA_SCHEMA_VERSION;
    formulas: Record<string, IDocFormulaConfig>;
}
export type DocFormulaResourceLoadError = 'invalid-resource' | 'unsupported-version';
export declare enum DocFormulaResultStatus {
    EMPTY = "empty",
    PENDING = "pending",
    SUCCESS = "success",
    ERROR = "error"
}
export interface IDocFormulaResult extends IFormulaResultPresentation {
    status: DocFormulaResultStatus;
    value: unknown;
    valueType?: CellValueType;
}
/**
 * Insertion target used by `InsertDocFormulaCommand`.
 *
 * - `paragraph` resolves a persisted `paragraphId` against the latest body.
 *   Numeric positions are zero-based UTF-16 offsets relative to the paragraph;
 *   `'end'` is the semantic append position.
 * - `range` is a snapshot-relative main-body range for immediate replacement.
 * - `selection` is an editor selection captured for one immediate insertion.
 */
export type IDocFormulaInsertTarget = {
    type: 'paragraph';
    paragraphId: string;
    position: 'end' | number;
} | {
    type: 'range';
    startOffset: number;
    endOffset: number;
} | {
    type: 'selection';
    selection: ITextRangeParam;
};
export interface IDocFormulaInsertCommandParams {
    unitId?: string;
    formula: string;
    numberFormat?: {
        pattern: string;
    };
    externalReferences?: readonly IHostExternalReference[];
    /**
     * Stable paragraph, immediate range, or captured selection target.
     *
     * When omitted, the Command uses the active main-body editor selection.
     */
    target?: IDocFormulaInsertTarget;
}
export interface IDocFormulaInsertCommandResult {
    endOffset: number;
    rangeId: string;
    startOffset: number;
}
export interface IDocFormulaUpdateCommandParams {
    unitId?: string;
    rangeId: string;
    formula: string;
    numberFormat?: {
        pattern: string;
    };
    externalReferences?: readonly IHostExternalReference[];
}
export interface IDocFormulaSetNumberFormatCommandParams {
    unitId?: string;
    rangeId: string;
    numberFormat?: {
        pattern: string;
    };
}
export interface IDocFormulaRemoveCommandParams {
    unitId?: string;
    rangeId: string;
}
