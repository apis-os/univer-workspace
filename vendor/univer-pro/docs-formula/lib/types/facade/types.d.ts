import type { IDocFormulaConfig, IDocFormulaResult } from '@univerjs-pro/docs-formula';
import type { IHostExternalReference } from '@univerjs-pro/engine-formula';
/**
 * Options shared by every Doc Formula insertion API.
 *
 * `externalReferences` must include a stable Source Unit binding for every
 * external qualifier that is not already present in the Host External
 * Reference Resource. The insertion command validates and persists those
 * bindings atomically with the formula.
 *
 * @example
 * ```ts
 * import type { IDocFormulaCreateFacadeOptions } from '@univerjs-pro/docs-formula/facade';
 *
 * export const formulaOptions: IDocFormulaCreateFacadeOptions = {
 *   numberFormat: { pattern: '#,##0.00' },
 *   externalReferences: [],
 * };
 * ```
 */
export interface IDocFormulaCreateFacadeOptions {
    /** Optional Univer number-format pattern used to render the scalar result. */
    numberFormat?: {
        pattern: string;
    };
    /** Stable external Source bindings selected by the formula editor or caller. */
    externalReferences?: readonly IHostExternalReference[];
}
/**
 * Options for replacing a Doc Formula binding.
 *
 * Updating the formula clears its persisted `lastValue`; a subsequent
 * successful calculation session may write a new derived cache value.
 *
 * @example
 * ```ts
 * import type { IDocFormulaUpdateFacadeOptions } from '@univerjs-pro/docs-formula/facade';
 *
 * export const formulaUpdate: IDocFormulaUpdateFacadeOptions = {
 *   formula: '=SUM(1, 2, 3)',
 *   numberFormat: { pattern: '0.00' },
 * };
 * ```
 */
export interface IDocFormulaUpdateFacadeOptions extends IDocFormulaCreateFacadeOptions {
    /** Formula text. A leading `=` is recommended and preserved. */
    formula: string;
}
/**
 * Explicit main-body insertion request for headless and deterministic callers.
 *
 * The half-open range `[startOffset, endOffset)` is snapshot-relative and is
 * replaced immediately by one Formula custom range. A collapsed range inserts
 * at the cursor. The range must remain within one legal Doc structural
 * container. For an insertion anchor retained across document edits, use a
 * stable `FDocumentParagraph` handle instead.
 *
 * @example
 * ```ts
 * import type { IDocFormulaInsertFacadeOptions } from '@univerjs-pro/docs-formula/facade';
 *
 * export const insertAtStart: IDocFormulaInsertFacadeOptions = {
 *   formula: '=40+2',
 *   startOffset: 0,
 *   endOffset: 0,
 * };
 * ```
 */
export interface IDocFormulaInsertFacadeOptions extends IDocFormulaCreateFacadeOptions {
    /** Exclusive replacement end offset. */
    endOffset: number;
    /** Formula text to calculate. */
    formula: string;
    /** Inclusive replacement start offset. */
    startOffset: number;
}
/**
 * Main-body data-stream range occupied by one whole-entity Doc Formula.
 *
 * @example
 * ```ts
 * import type { IDocFormulaRange } from '@univerjs-pro/docs-formula/facade';
 *
 * export function isCollapsedFormulaRange(range: IDocFormulaRange) {
 *   return range.endOffset === range.startOffset + 1;
 * }
 * ```
 */
export interface IDocFormulaRange {
    /** Exclusive end offset. */
    endOffset: number;
    /** Stable custom-range identity. */
    rangeId: string;
    /** Inclusive start offset. */
    startOffset: number;
}
/**
 * Agent-friendly snapshot of one Doc Formula and its current presentation.
 *
 * @example
 * ```ts
 * import type { IDocFormulaInfo } from '@univerjs-pro/docs-formula/facade';
 *
 * export function summarizeFormula(info: IDocFormulaInfo) {
 *   return {
 *     id: info.rangeId,
 *     formula: info.formula,
 *     displayText: info.result.text,
 *     stale: info.result.stale,
 *   };
 * }
 * ```
 */
export interface IDocFormulaInfo extends IDocFormulaRange {
    /** Persisted binding, number format, and optional last successful value. */
    config: IDocFormulaConfig;
    /** Editable formula text. */
    formula: string;
    /**
     * Current presentation.
     *
     * A persisted fallback has `source: 'persisted'` and `stale: true`.
     * It is Host content and inherits the Host document's read permissions.
     */
    result: IDocFormulaResult;
    /** Stable discriminator for agent tooling. */
    type: 'formula';
}
