import type { IBuildFormulaReferenceOptions, IRemoveHostExternalReferenceCommandParams, IUpsertHostExternalReferenceCommandParams } from '@univerjs-pro/engine-formula';
import { FFormula } from '@univerjs/engine-formula/facade';
/** Formula-reference APIs contributed by Univer Pro. */
export interface IFFormulaReferenceMixin {
    /**
     * Builds one Sheet-range or Base-table reference fragment for Facade authoring.
     *
     * Use this method when the caller knows both the Host Unit ID and the stable
     * Source Unit ID. For a cross-Unit Source, it synchronously persists the
     * Host-owned External Reference before returning. For a Host-local Source, it
     * only returns local reference syntax. An unchanged binding is an idempotent
     * no-op.
     *
     * The returned value is a reference fragment, not a complete formula: it has no
     * leading `=` and does not start calculation. The method does not load the Source
     * Unit. Formula calculation later reads the Source through its stable `unitId`.
     *
     * Authoring rule:
     * - Cell formula: build the reference, then pass the returned fragment to
     *   `range.setFormula(...)`; the binding has already been persisted.
     * - Formula Shape: build the reference, then pass the same Source identity again
     *   in `shape.setFormula({ formula, externalReferences })`. The duplicate binding
     *   write is a no-op and the Shape setter remains the final consistency boundary.
     * - Hand-written or imported formula text: call `upsertExternalReference()` before
     *   writing the formula because the engine never guesses `unitId` from a name.
     *
     * @param {IBuildFormulaReferenceOptions} options Host, caller-provided source Unit, and reference target.
     * @returns {string} A formula reference fragment.
     *
     * @example Write a cross-Unit Sheet reference to a cell
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     *
     * const salesWorkbook = {
     *     unitId: 'sales-workbook',
     *     formulaQualifier: 'Sales Workbook',
     * };
     * const reference = univerAPI.getFormula().buildReference({
     *     hostUnitId: workbook.getId(),
     *     unit: salesWorkbook,
     *     target: {
     *         kind: univerAPI.Enum.FormulaReferenceType.SHEET_RANGE,
     *         sheetName: 'Sales',
     *         range: { startRow: 1, endRow: 9, startColumn: 1, endColumn: 1 },
     *     },
     * });
     * workbook.getActiveSheet().getRange('C1').setFormula(`=SUM(${reference})`);
     * ```
     *
     * @example Build a Host-local Sheet reference without creating a binding
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     *
     * const reference = univerAPI.getFormula().buildReference({
     *     hostUnitId: workbook.getId(),
     *     unit: {
     *         unitId: workbook.getId(),
     *         formulaQualifier: workbook.getName(),
     *     },
     *     target: {
     *         kind: univerAPI.Enum.FormulaReferenceType.SHEET_RANGE,
     *         sheetName: 'Sales',
     *         range: { startRow: 1, endRow: 9, startColumn: 1, endColumn: 1 },
     *     },
     * });
     * // reference contains local syntax such as Sales!B2:B10.
     * ```
     */
    buildReference(options: IBuildFormulaReferenceOptions): string;
    /**
     * Creates or rebinds one Host-owned External Reference.
     *
     * Use this explicit API when formula text is hand-written, imported, or generated
     * in a batch without `buildReference()`. Call it before writing the formula.
     * `qualifier` is the public name used inside the formula, without brackets or
     * quotes; `sourceUnitId` is the stable identity used for data requests.
     *
     * Repeating the same mapping succeeds without mutation, dirty data, or undo.
     *
     * @param {IUpsertHostExternalReferenceCommandParams} options Host and stable Source binding.
     * @returns {boolean} `true` when the binding already matches or was persisted.
     *
     * @example Bind a hand-written cross-workbook formula before writing it
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     *
     * const formula = univerAPI.getFormula();
     * const bound = formula.upsertExternalReference({
     *     unitId: workbook.getId(),
     *     qualifier: 'Sales Workbook',
     *     sourceUnitId: 'sales-workbook',
     *     sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_SHEET,
     * });
     * if (!bound) throw new Error('Could not bind the Sales Workbook source.');
     *
     * workbook
     *     .getActiveSheet()
     *     .getRange('C1')
     *     .setFormula("=SUM('[Sales Workbook]Sales'!B2:B10)");
     * ```
     */
    upsertExternalReference(options: IUpsertHostExternalReferenceCommandParams): boolean;
    /**
     * Removes one Host-owned External Reference by `referenceId` or `qualifier`.
     *
     * Removing a binding does not rewrite or delete formulas. It marks only the Host
     * dirty; the next Host calculation resolves the remaining formula under the
     * normal External Reference rules.
     *
     * @param {IRemoveHostExternalReferenceCommandParams} options Host plus reference ID or qualifier.
     * @returns {boolean} `true` when an existing binding was removed.
     *
     * @example Remove a Host binding by qualifier
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     *
     * const removed = univerAPI.getFormula().removeExternalReference({
     *     unitId: workbook.getId(),
     *     qualifier: 'Sales Workbook',
     * });
     * if (!removed) throw new Error('External Reference was not found.');
     * ```
     */
    removeExternalReference(options: IRemoveHostExternalReferenceCommandParams): boolean;
}
/** @ignore */
export declare class FFormulaReferenceMixin extends FFormula implements IFFormulaReferenceMixin {
    buildReference(options: IBuildFormulaReferenceOptions): string;
    upsertExternalReference(options: IUpsertHostExternalReferenceCommandParams): boolean;
    removeExternalReference(options: IRemoveHostExternalReferenceCommandParams): boolean;
}
declare module '@univerjs/engine-formula/facade' {
    interface FFormula extends IFFormulaReferenceMixin {
    }
}
