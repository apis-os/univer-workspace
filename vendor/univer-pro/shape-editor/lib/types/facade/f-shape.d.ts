import type { IFormulaShapeResult } from '@univerjs-pro/shape-editor';
import type { FormulaUnitType } from '@univerjs/engine-formula';
import { FShape } from '@univerjs-pro/engine-shape/facade';
export interface IShapeFormulaExternalReference {
    /**
     * Public Source name used by the formula qualifier. Supply the name only
     * (`Sales Workbook`), not formula syntax (`[Sales Workbook]`). It must match the
     * qualifier in `formula` under the engine's existing name-normalization rules.
     * Positive integers are reserved for imported Excel external-link slots.
     */
    qualifier: string;
    /**
     * Stable Source Unit ID used for every Formula Reference Data request. It must
     * identify a different Unit from the Shape Host.
     */
    sourceUnitId: string;
    /** Source business type. External Formula Shape Sources support Sheet and Base. */
    sourceUnitType: FormulaUnitType;
}
export interface ISetShapeFormulaOptions {
    /**
     * Complete formula text beginning with `=`, or an empty string. Keep public
     * qualifier names in this text; the engine resolves them through the Host mapping.
     */
    formula: string;
    /**
     * Required, complete Host-owned bindings for this formula write. This property
     * must be supplied on every call, including when `formula` is empty.
     *
     * Use `[]` only when the formula has no external Unit qualifier such as
     * `[Sales Workbook]` or `[Sales Base]`. Never use `[]` as a placeholder for an
     * external formula. Include every external Sheet/Base Source, including Sources
     * referenced through dynamic functions such as `INDIRECT`, because dynamic
     * qualifiers cannot always be discovered from static formula text.
     */
    externalReferences: readonly IShapeFormulaExternalReference[];
}
/** Formula APIs contributed to every host-neutral Shape facade. */
export interface IFShapeFormulaMixin {
    /**
     * Returns whether this Shape has a Formula Shape binding.
     * @returns {boolean} `true` when the Shape is a Formula Shape.
     *
     * @example Check a Shape in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * console.log(shape?.isFormulaShape() ?? false);
     * ```
     *
     * @example Find Formula Shapes in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const formulaShapes = board.getShapes().filter((shape) => shape.isFormulaShape());
     * console.log(formulaShapes.map((shape) => shape.getId()));
     * ```
     */
    isFormulaShape(): boolean;
    /**
     * Returns the Formula Shape formula string.
     * @returns {string | null} Formula text, or `null` for a missing/non-formula Shape.
     *
     * @example Read a formula from the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * console.log(shape?.getFormula());
     * ```
     *
     * @example Read a formula from the active Document
     * ```ts
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document.');
     * const shape = document.getShape('formula-shape-1');
     * console.log(shape?.getFormula());
     * ```
     */
    getFormula(): string | null;
    /**
     * Synchronously writes every required Host External Reference and then sets the
     * formula through the Shape host adapter. A regular Shape becomes a Formula
     * Shape when this method is first called.
     * Registering a new non-empty formula marks it dirty. With automatic calculation
     * enabled, callers do not need to call `formula.executeCalculation()` and the
     * result may finish later. Applications configured with `notExecuteFormula: true`
     * intentionally use manual calculation and must trigger their calculation batch.
     * If any External Reference cannot be written, the Shape formula is left unchanged.
     * The setter does not parse formula text to guess bindings; an omitted mapping is
     * reported by calculation as an unresolved reference.
     *
     * A Shape hosted by a worksheet may use its Host-local A1 context, a qualified
     * worksheet reference, or a local structured-table reference, for example
     * `=SUM(A1:B10)`, `=SUM(Sheet1!A1:B10)`, or `=SUM(Orders[Amount])`.
     * A Shape hosted by a Document, Slide, or Board has no local worksheet context,
     * so references must include the workbook or Base qualifier, for example
     * `='[Sales Workbook]Sheet1'!A1` or `=[Sales Base]!Orders[Amount]`.
     *
     * OtherFormula ownership does not provide an implicit reference target. Reference
     * targets come only from these formula qualifiers. Prefer
     * `univerAPI.getFormula().buildReference(...)` instead of assembling these strings
     * manually. Use `FormulaReferenceType.SHEET_RANGE` for workbook references and
     * `FormulaReferenceType.TABLE_COLUMN` for Base references; the helper quotes and
     * escapes workbook, Base, worksheet, table, and column names as needed.
     * A qualifier identifies the target but does not load it. `externalReferences`
     * is therefore mandatory on every call. Every external qualifier used by this
     * authoring operation must include its stable Source Unit binding in that array.
     * `externalReferences: []` is valid only when the formula has no external Unit
     * qualifier. It is not a default value for an external formula. If
     * `formula.buildReference()` already created the same binding, passing it here
     * is still required and the repeated upsert is an idempotent no-op.
     *
     * Authoring rule:
     * - Sheet-hosted formula with no external Unit: explicitly pass
     *   `externalReferences: []`.
     * - Cross-Unit Shape formula: use `formula.buildReference()` for safe syntax and
     *   pass the same stable Source identity in `externalReferences`.
     * - Hand-written Shape formula: put every qualifier-to-Unit mapping directly in
     *   `externalReferences`; do not call `upsertExternalReference()` separately.
     * - Never pass only a formula string. There is no string overload.
     *
     * @param {ISetShapeFormulaOptions} options Formula text and the required, complete external binding list. Use `[]` only for a Host-local formula.
     * @returns {FShape} This Shape facade for chaining.
     *
     * @example Set a current-workbook formula in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (!shape) throw new Error('Shape not found.');
     * shape.setFormula({
     *     formula: '=SUM(A1:B10)',
     *     externalReferences: [], // Required; empty only because this formula has no external Unit.
     * });
     * ```
     *
     * @example Set a cross-Unit Sheet formula in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const shape = board.insertShape({
     *     shapeType: univerAPI.Enum.ShapeTypeEnum.Rect,
     *     transform: { left: 120, top: 80, width: 240, height: 72 },
     * });
     * if (!shape) throw new Error('Formula Shape could not be inserted.');
     *
     * const salesWorkbook = {
     *     unitId: 'sales-workbook',
     *     formulaQualifier: 'Sales Workbook',
     * };
     * const reference = univerAPI.getFormula().buildReference({
     *     hostUnitId: board.getId(),
     *     unit: salesWorkbook,
     *     target: {
     *         kind: univerAPI.Enum.FormulaReferenceType.SHEET_RANGE,
     *         sheetName: 'Sales',
     *         range: { startRow: 0, endRow: 9, startColumn: 1, endColumn: 1 },
     *     },
     * });
     * shape.setFormula({
     *     formula: `=SUM(${reference})`,
     *     externalReferences: [{
     *         qualifier: salesWorkbook.formulaQualifier,
     *         sourceUnitId: salesWorkbook.unitId,
     *         sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_SHEET,
     *     }],
     * });
     * ```
     *
     * @example Set a cross-Unit Base formula in the active Document
     * ```ts
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document.');
     * const shape = document.getShape('formula-shape-1');
     * if (!shape) throw new Error('Shape not found.');
     *
     * const salesBase = {
     *     unitId: 'sales-base',
     *     formulaQualifier: 'Sales Base',
     * };
     * const reference = univerAPI.getFormula().buildReference({
     *     hostUnitId: document.getId(),
     *     unit: salesBase,
     *     target: {
     *         kind: univerAPI.Enum.FormulaReferenceType.TABLE_COLUMN,
     *         tableName: 'Orders',
     *         columnName: 'Amount',
     *     },
     * });
     * shape.setFormula({
     *     formula: `=SUM(${reference})`,
     *     externalReferences: [{
     *         qualifier: salesBase.formulaQualifier,
     *         sourceUnitId: salesBase.unitId,
     *         sourceUnitType: univerAPI.Enum.UniverInstanceType.UNIVER_BASE,
     *     }],
     * });
     * ```
     */
    setFormula(options: ISetShapeFormulaOptions): this;
    /**
     * Removes the Formula binding and converts the Shape to a regular Shape.
     * Existing Shape text and visual styles are preserved.
     * @returns {FShape} This Shape facade for chaining.
     *
     * @example Remove a formula in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (shape?.isFormulaShape()) shape.removeFormula();
     * ```
     *
     * @example Remove a formula in the active Document
     * ```ts
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document.');
     * const shape = document.getShape('formula-shape-1');
     * if (shape?.isFormulaShape()) shape.removeFormula();
     * ```
     */
    removeFormula(): this;
    /**
     * Returns the latest calculated and formatted Formula Shape result.
     * @returns {IFormulaShapeResult | null} Result snapshot, or `null` when unavailable.
     *
     * @example Read the currently available result
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const shape = board.getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * console.log(shape.getFormulaResult());
     * ```
     *
     * @example Wait for calculation before reading the result
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * const formula = univerAPI.getFormula();
     * const applied = formula.onCalculationResultApplied(30_000);
     * shape.setFormula({
     *     formula: '=SUM(A1:B10)',
     *     externalReferences: [], // Required; empty only because this formula has no external Unit.
     * });
     * await applied;
     * console.log(shape.getFormulaResult());
     * ```
     */
    getFormulaResult(): IFormulaShapeResult | null;
    /**
     * Returns the configured Formula Shape number-format pattern.
     * @returns {string | null} Pattern, or `null` for a missing/non-formula Shape.
     *
     * @example Read a number format in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * console.log(shape?.getFormulaNumberFormat());
     * ```
     *
     * @example Read a number format in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * console.log(board.getShape('formula-shape-1')?.getFormulaNumberFormat());
     * ```
     */
    getFormulaNumberFormat(): string | null;
    /**
     * Sets the Formula Shape number-format pattern.
     * @param {string} pattern Univer number-format pattern. An empty string resets it to `General`.
     * @returns {FShape} This Shape facade for chaining.
     *
     * @example Apply a currency format in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * shape.setFormulaNumberFormat('$#,##0.00');
     * ```
     *
     * @example Apply a custom colored format in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const shape = board.getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * shape.setFormulaNumberFormat('[Red]#,##0;[Blue]-#,##0');
     * ```
     */
    setFormulaNumberFormat(pattern: string): this;
    /**
     * Returns whether value-change animation is enabled for this Formula Shape.
     * @returns {boolean} `true` when enabled; Formula Shapes default to enabled.
     *
     * @example Check animation in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * console.log(shape?.isFormulaAnimationEnabled() ?? false);
     * ```
     *
     * @example List animated Formula Shapes in the active Board
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * if (!board) throw new Error('No active board.');
     * const animated = board.getShapes().filter(
     *     (shape) => shape.isFormulaShape() && shape.isFormulaAnimationEnabled()
     * );
     * console.log(animated.map((shape) => shape.getId()));
     * ```
     */
    isFormulaAnimationEnabled(): boolean;
    /**
     * Enables or disables Formula Shape value-change animation.
     * @param {boolean} enabled Whether value changes should animate.
     * @returns {FShape} This Shape facade for chaining.
     *
     * @example Disable animation in the active Document
     * ```ts
     * const document = univerAPI.getActiveDocument();
     * if (!document) throw new Error('No active document.');
     * const shape = document.getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * shape.setFormulaAnimationEnabled(false);
     * ```
     *
     * @example Set a local formula and keep animation enabled in the active worksheet
     * ```ts
     * const workbook = univerAPI.getActiveWorkbook();
     * if (!workbook) throw new Error('No active workbook.');
     * const shape = workbook.getActiveSheet().getShape('formula-shape-1');
     * if (!shape?.isFormulaShape()) throw new Error('Formula Shape not found.');
     * shape
     *     .setFormula({
     *         formula: '=SUM(B2:B10)',
     *         externalReferences: [], // Required; empty only because this formula has no external Unit.
     *     })
     *     .setFormulaAnimationEnabled(true);
     * ```
     */
    setFormulaAnimationEnabled(enabled: boolean): this;
}
/** @ignore */
export declare class FShapeFormulaMixin extends FShape implements IFShapeFormulaMixin {
    isFormulaShape(): boolean;
    getFormula(): string | null;
    setFormula(options: ISetShapeFormulaOptions): this;
    removeFormula(): this;
    getFormulaResult(): IFormulaShapeResult | null;
    getFormulaNumberFormat(): string | null;
    setFormulaNumberFormat(pattern: string): this;
    isFormulaAnimationEnabled(): boolean;
    setFormulaAnimationEnabled(enabled: boolean): this;
    private _updateFormulaBinding;
    private _getFormulaIdentity;
    private _getFormulaShapeData;
}
declare module '@univerjs-pro/engine-shape/facade' {
    interface FShape extends IFShapeFormulaMixin {
    }
}
