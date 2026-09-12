import { FormulaShapeResultStatus } from '@univerjs-pro/shape-editor';
import { FEnum } from '@univerjs/core/facade';
/** Formula Shape enums exposed through `univerAPI.Enum`. */
export interface IFShapeFormulaEnumMixin {
    /**
     * Calculation states returned by `shape.getFormulaResult()`.
     *
     * @example Check for a successful result in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * const result = shape?.getFormulaResult();
     * if (result?.status === univerAPI.Enum.FormulaShapeResultStatus.SUCCESS) {
     *     console.log(result.displayText);
     * }
     * ```
     *
     * @example Check for a formula error in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const result = board.getShape('formula-shape-1')?.getFormulaResult();
     * if (result?.status === univerAPI.Enum.FormulaShapeResultStatus.ERROR) {
     *     console.error(result.value);
     * }
     * ```
     */
    readonly FormulaShapeResultStatus: typeof FormulaShapeResultStatus;
}
/** @ignore */
export declare class FShapeFormulaEnumMixin extends FEnum implements IFShapeFormulaEnumMixin {
    get FormulaShapeResultStatus(): typeof FormulaShapeResultStatus;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFShapeFormulaEnumMixin {
    }
}
