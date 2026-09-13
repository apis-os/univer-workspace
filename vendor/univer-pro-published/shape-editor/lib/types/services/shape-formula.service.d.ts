import type { IFormulaResultPresentation } from '@univerjs-pro/engine-formula';
import type { IShapeFormulaBinding, IShapeRef, IShapeSnapshot, ShapeHostType } from '@univerjs-pro/engine-shape';
import type { CellValueType } from '@univerjs/core';
import type { IOtherFormulaResult } from '@univerjs/engine-formula';
import type { IShapeFormulaPresentation } from './shape-formula-presentation';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Disposable } from '@univerjs/core';
import { RegisterOtherFormulaService } from '@univerjs/engine-formula';
/** Stable identity of a Formula Shape within its host unit and subunit. */
export interface IShapeFormulaIdentity {
    /** Host type. Existing integrations may omit it; persistence then waits for lifecycle reconciliation. */
    hostType?: ShapeHostType;
    /** Host unit identifier. */
    unitId: string;
    /** Worksheet, slide, page, or document subunit identifier. */
    subUnitId: string;
    /** Stable Shape identifier. */
    shapeId: string;
}
/** Presentation change emitted after a Formula Shape result or formatting changes. */
export interface IShapeFormulaPresentationChange extends IShapeFormulaIdentity {
    /** Newly applied presentation. */
    presentation: IShapeFormulaPresentation;
    /** Presentation visible before this change. */
    previousPresentation: IShapeFormulaPresentation;
    /** Newly exposed facade result. */
    result: IFormulaShapeResult;
    /** Facade result visible before this change. */
    previousResult: IFormulaShapeResult;
    /** Whether the renderer should animate this value change. */
    animationEnabled: boolean;
}
/** Calculation state exposed by the Formula Shape facade. */
export declare enum FormulaShapeResultStatus {
    EMPTY = "empty",
    PENDING = "pending",
    SUCCESS = "success",
    ERROR = "error"
}
/** Current calculated and formatted value of a Formula Shape. */
export interface IFormulaShapeResult {
    status: FormulaShapeResultStatus;
    value: unknown;
    valueType?: CellValueType;
    displayText: string;
    color?: string;
    numberFormat: string;
    source: 'persisted' | 'calculated';
    stale: boolean;
}
export interface IRegisteredShapeFormulaSnapshot {
    identity: IShapeRef;
    binding: IShapeFormulaBinding;
    referenceRevision: number;
    liveResult?: IOtherFormulaResult;
    presentation: IFormulaResultPresentation;
}
/** Registers Formula Shapes as OtherFormula entries and exposes their applied presentation results. */
export declare class ShapeFormulaService extends Disposable {
    private readonly _registerOtherFormulaService;
    private readonly _hostExternalReferenceModel;
    private readonly _registrations;
    private readonly _formulaKeys;
    private readonly _presentationChanged$;
    readonly presentationChanged$: import("rxjs").Observable<IShapeFormulaPresentationChange>;
    constructor(_registerOtherFormulaService: RegisterOtherFormulaService, _hostExternalReferenceModel: HostExternalReferenceModel);
    register(identity: IShapeFormulaIdentity, binding: IShapeFormulaBinding): void;
    update(identity: IShapeFormulaIdentity, binding: IShapeFormulaBinding): void;
    unregister(identity: IShapeFormulaIdentity): void;
    unregisterUnit(unitId: string): void;
    syncUnit(unitId: string, shapes: readonly IShapeSnapshot[]): void;
    getPresentation(identity: IShapeFormulaIdentity): IShapeFormulaPresentation | undefined;
    getResult(identity: IShapeFormulaIdentity): IFormulaShapeResult | undefined;
    getRegisteredFormulas(): readonly IRegisteredShapeFormulaSnapshot[];
    private _updateFormulaResult;
    private _setPresentation;
    private _createResult;
    dispose(): void;
}
