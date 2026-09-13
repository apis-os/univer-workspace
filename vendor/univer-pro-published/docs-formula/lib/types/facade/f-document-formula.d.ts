import type { IDocFormulaConfig, IDocFormulaResult } from '@univerjs-pro/docs-formula';
import type { IDocFormulaInfo, IDocFormulaRange, IDocFormulaUpdateFacadeOptions } from './types';
import { DocFormulaModel, DocFormulaService } from '@univerjs-pro/docs-formula';
import { ICommandService, IUniverInstanceService } from '@univerjs/core';
/**
 * Facade handle for one inline data formula in a Univer document.
 *
 * The handle is identified by `rangeId`. It remains usable across recalculation,
 * but mutating methods return `false` after the underlying custom range is
 * removed. All writes execute public Doc Formula Commands; this class never
 * mutates document or Resource state directly.
 *
 * @example
 * ```ts
 * import type { FUniver } from '@univerjs/core/facade';
 * import '@univerjs-pro/docs-formula/facade';
 *
 * export function inspectFirstDocFormula(univerAPI: FUniver) {
 *   const document = univerAPI.getActiveDocument();
 *   if (!document) throw new Error('No active document');
 *
 *   const formula = document.getFormulas()[0];
 *   if (!formula) throw new Error('No Doc Formula');
 *
 *   const info = formula.describe();
 *   if (!info) throw new Error('The formula was removed');
 *   return info;
 * }
 * ```
 */
export declare class FDocumentFormula {
    private readonly _unitId;
    private readonly _rangeId;
    private readonly _commandService;
    private readonly _model;
    private readonly _service;
    private readonly _univerInstanceService;
    constructor(_unitId: string, _rangeId: string, _commandService: ICommandService, _model: DocFormulaModel, _service: DocFormulaService, _univerInstanceService: IUniverInstanceService);
    /**
     * Returns the stable identity shared by the custom range, Resource entry,
     * Other Formula registration, and this Facade handle.
     *
     * @returns The formula's stable `rangeId`.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function readFormulaId(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   return formula.getId();
     * }
     * ```
     */
    getId(): string;
    /**
     * Returns the current main-body data-stream range.
     *
     * The formula occupies exactly one U+FFFC object token internally, so
     * `endOffset` is exclusive and normally equals `startOffset + 1`.
     *
     * @returns The live range, or `null` after the custom range is removed.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function readFormulaRange(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   const range = formula?.getRange();
     *   if (!range) throw new Error('Formula range is unavailable');
     *   return range;
     * }
     * ```
     */
    getRange(): IDocFormulaRange | null;
    /**
     * Returns the editable formula text from the unit-scoped Doc Formula
     * Resource.
     *
     * @returns Formula text, or an empty string when the Resource entry is gone.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function readFormulaText(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   return formula.getFormula();
     * }
     * ```
     */
    getFormula(): string;
    /**
     * Returns a detached copy of the persisted formula configuration.
     *
     * `lastValue` is the last successful scalar result. It is saved as Host
     * content, inherits the document's read permissions, and may be stale until
     * the current calculation session succeeds.
     *
     * @returns The configuration, or `null` when its Resource entry is gone.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function readFormulaConfig(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   const config = formula?.getConfig();
     *   if (!config) throw new Error('Formula config is unavailable');
     *   return config;
     * }
     * ```
     */
    getConfig(): IDocFormulaConfig | null;
    /**
     * Returns the latest calculated or persisted presentation.
     *
     * `source: 'calculated'` identifies a live result. During reload or Source
     * unavailability, the API can return the previous successful value with
     * `source: 'persisted'` and `stale: true`. Formula errors and timeouts never
     * overwrite that persisted value.
     *
     * @returns The current result, or `null` when the formula is not registered.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function readFormulaResult(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   const result = formula?.getResult();
     *   if (!result) throw new Error('Formula result is unavailable');
     *   return result;
     * }
     * ```
     * @example Wait through the shared Formula facade, then read this result
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs/engine-formula/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export async function insertAndReadFormula(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const paragraph = document.getParagraphs()[0];
     *   if (!paragraph) throw new Error('No target paragraph');
     *
     *   // Start watching before the write so a fast calculation cannot be missed.
     *   const applied = univerAPI.getFormula().onCalculationResultApplied(5_000);
     *   const formula = paragraph.appendFormula('=SUM(1,2,3)');
     *   if (!formula) throw new Error('Doc Formula insertion failed');
     *
     *   await applied;
     *   const result = formula.getResult();
     *   if (!result) throw new Error('Formula result is unavailable');
     *   return result;
     * }
     * ```
     */
    getResult(): IDocFormulaResult | null;
    /**
     * Returns an agent-friendly snapshot of identity, range, persisted config,
     * and current presentation.
     *
     * @returns A detached description, or `null` if either side of the
     * custom-range/Resource pair no longer exists.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function describeFormulas(univerAPI: FUniver) {
     *   const formulas = univerAPI.getActiveDocument()?.getFormulas() ?? [];
     *   return formulas
     *     .map((formula) => formula.describe())
     *     .filter((value) => value !== null);
     * }
     * ```
     */
    describe(): IDocFormulaInfo | null;
    /**
     * Replaces the formula binding through `UpdateDocFormulaCommand`.
     *
     * The command validates and persists all external Source bindings, clears
     * the previous `lastValue`, and records one undo item. The caller should
     * provide every newly selected external Source in `externalReferences`.
     *
     * @param options Replacement formula, optional number format, and stable
     * external Source bindings.
     * @returns Whether the command committed successfully.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function updateFormula(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   const updated = formula.update({
     *     formula: '=SUM(1, 2, 3)',
     *     numberFormat: { pattern: '0.00' },
     *   });
     *   if (!updated) throw new Error('Failed to update Doc Formula');
     * }
     * ```
     */
    update(options: IDocFormulaUpdateFacadeOptions): boolean;
    /**
     * Updates only the explicit number format through a Command.
     *
     * Passing `undefined` removes the explicit format. This operation preserves
     * the raw `lastValue`, immediately re-formats the current presentation, and
     * participates in normal undo/redo and collaboration.
     *
     * @param numberFormat New format, or `undefined` to inherit/default.
     * @param numberFormat.pattern Univer number-format pattern.
     * @returns Whether the command committed successfully.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function formatFormula(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   if (!formula.setNumberFormat({ pattern: '$#,##0.00' })) {
     *     throw new Error('Failed to format Doc Formula');
     *   }
     * }
     * ```
     */
    setNumberFormat(numberFormat?: {
        pattern: string;
    }): boolean;
    /**
     * Removes the formula object and its one-character token.
     *
     * @returns Whether the remove command committed successfully.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function removeFormula(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   if (!formula.remove()) throw new Error('Failed to remove Doc Formula');
     * }
     * ```
     */
    remove(): boolean;
    /**
     * Replaces the formula object with caller-provided plain text.
     *
     * Use `convertToText()` when the desired text is the current formatted
     * formula presentation.
     *
     * @param text Plain replacement text.
     * @returns Whether the replace command committed successfully.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function replaceFormula(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   if (!formula.replaceWithText('Total: 42')) {
     *     throw new Error('Failed to replace Doc Formula');
     *   }
     * }
     * ```
     */
    replaceWithText(text: string): boolean;
    /**
     * Converts the formula to its current formatted display text.
     *
     * The Command resolves the presentation; the Facade does not duplicate
     * formatting business logic. A stale persisted presentation is permitted
     * and is converted exactly as displayed. The operation is undoable.
     *
     * @returns Whether conversion committed successfully.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     * export function convertFormula(univerAPI: FUniver) {
     *   const formula = univerAPI.getActiveDocument()?.getFormulas()[0];
     *   if (!formula) throw new Error('No Doc Formula');
     *   if (!formula.convertToText()) {
     *     throw new Error('No presentation was available to convert');
     *   }
     * }
     * ```
     */
    convertToText(): boolean;
    private _getCustomRange;
}
