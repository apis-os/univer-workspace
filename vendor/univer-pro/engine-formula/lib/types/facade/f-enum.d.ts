import { FormulaReferenceType } from '@univerjs-pro/engine-formula';
import { FEnum } from '@univerjs/core/facade';
/** Formula-reference enums exposed through `univerAPI.Enum`. */
export interface IFFormulaReferenceEnumMixin {
    /**
     * Reference target kinds accepted by `formula.buildReference()`.
     *
     * @example Select a Sheet range target
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * const formula = univerAPI.getFormula();
     * const reference = formula.buildReference({
     *     hostUnitId: workbook.getId(),
     *     unit: {
     *         unitId: workbook.getId(),
     *         formulaQualifier: 'Current Workbook',
     *     },
     *     target: {
     *         kind: univerAPI.Enum.FormulaReferenceType.SHEET_RANGE,
     *         sheetName: 'Sheet1',
     *         range: { startRow: 0, endRow: 9, startColumn: 0, endColumn: 1 },
     *     },
     * });
     * shape.setFormula({
     *     formula: `=SUM(${reference})`,
     *     externalReferences: [], // Required; empty only because Source and Host are the same Unit.
     * });
     * ```
     *
     * @example Select a Base table-column target
     * ```ts
     * import type { IFormulaReferenceUnit } from '@univerjs-pro/engine-formula';
     *
     * function setSalesBaseFormula(baseUnit: IFormulaReferenceUnit) {
     *     const board = univerAPI.getActiveBoard();
     *     if (!board) throw new Error('No active board.');
     *     const shape = board.getShape('formula-shape-1');
     *     if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     *     const reference = univerAPI.getFormula().buildReference({
     *         hostUnitId: board.getId(),
     *         unit: baseUnit,
     *         target: {
     *             kind: univerAPI.Enum.FormulaReferenceType.TABLE_COLUMN,
     *             tableName: 'SalesTable',
     *             columnName: 'Amount',
     *         },
     *     });
     *     shape.setFormula({
     *         formula: `=SUM(${reference})`,
     *         externalReferences: [{
     *             qualifier: baseUnit.formulaQualifier,
     *             sourceUnitId: baseUnit.unitId,
     *             sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_BASE,
     *         }],
     *     });
     * }
     *
     * setSalesBaseFormula({
     *     unitId: 'sales-base',
     *     formulaQualifier: 'Sales Base',
     * });
     * ```
     */
    readonly FormulaReferenceType: typeof FormulaReferenceType;
}
/** @ignore */
export declare class FFormulaReferenceEnumMixin extends FEnum implements IFFormulaReferenceEnumMixin {
    get FormulaReferenceType(): typeof FormulaReferenceType;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFFormulaReferenceEnumMixin {
    }
}
