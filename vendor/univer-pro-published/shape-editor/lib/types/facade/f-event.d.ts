import type { IShapeRef } from '@univerjs-pro/engine-shape';
import type { FShape } from '@univerjs-pro/engine-shape/facade';
import type { IFormulaShapeResult } from '@univerjs-pro/shape-editor';
import type { IEventBase } from '@univerjs/core/facade';
import { FEventName } from '@univerjs/core/facade';
/** Event payload emitted after a Formula Shape result actually changes. */
export interface IFormulaShapeResultChangedEventParams extends IEventBase {
    /** Live host-neutral Shape facade. */
    shape: FShape;
    /** Stable host and Shape identity. */
    shapeRef: IShapeRef;
    /** Newly applied result. */
    result: IFormulaShapeResult;
    /** Result visible before this change. */
    previousResult: IFormulaShapeResult;
}
/** Formula Shape event names exposed through `univerAPI.Event`. */
export interface IFShapeFormulaEventNameMixin {
    /**
     * Fired when a Formula Shape calculation or formatted display result changes.
     * Shape geometry and ordinary visual-style updates do not fire this event.
     *
     * @example Listen to all Formula Shape result changes
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     *
     * const disposable = univerAPI.addEvent(
     *     univerAPI.Event.FormulaShapeResultChanged,
     *     ({ shape: changedShape, result }) => {
     *         if (changedShape.getId() !== shape.getId()) return;
     *         console.log(changedShape.getFormula(), result.displayText);
     *     }
     * );
     * const formula = univerAPI.getFormula();
     * const applied = formula.onCalculationResultApplied(30_000);
     * shape.setFormula({
     *     formula: '=SUM(A1:B10)',
     *     externalReferences: [], // Required; empty only because this formula has no external Unit.
     * });
     * await applied;
     * disposable.dispose();
     * ```
     *
     * @example Listen to one Formula Shape in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const shape = board.getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     *
     * const disposable = univerAPI.addEvent(
     *     univerAPI.Event.FormulaShapeResultChanged,
     *     ({ shape: changedShape, result, previousResult }) => {
     *         if (changedShape.getId() !== shape.getId()) return;
     *         console.log(previousResult.displayText, result.displayText);
     *     }
     * );
     * shape.setFormulaNumberFormat('$#,##0.00');
     * disposable.dispose();
     * ```
     */
    readonly FormulaShapeResultChanged: 'FormulaShapeResultChanged';
}
/** @ignore */
export interface IShapeFormulaEventParamConfig {
    FormulaShapeResultChanged: IFormulaShapeResultChangedEventParams;
}
/** @ignore */
export declare class FShapeFormulaEventNameMixin extends FEventName implements IFShapeFormulaEventNameMixin {
    get FormulaShapeResultChanged(): 'FormulaShapeResultChanged';
}
declare module '@univerjs/core/facade' {
    interface FEventName extends IFShapeFormulaEventNameMixin {
    }
    interface IEventParamConfig extends IShapeFormulaEventParamConfig {
    }
}
