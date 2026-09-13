import type { IFormulaLastValue } from '@univerjs-pro/engine-formula';
import type { IAccessor, IDisposable, IMutationInfo } from '@univerjs/core';
import type { ShapeTypeEnum } from '../shape-enum';
import type { IShapeData } from '../shape-type';
import type { SmartArtOperation } from '../smart-art/smart-art-operation';
import { UniverInstanceType } from '@univerjs/core';
export type ShapeHostType = UniverInstanceType.UNIVER_SHEET | UniverInstanceType.UNIVER_DOC | UniverInstanceType.UNIVER_SLIDE | UniverInstanceType.UNIVER_BOARD | UniverInstanceType.UNIVER_BASE;
export declare function isShapeHostType(type: UniverInstanceType): type is ShapeHostType;
export interface IShapeScope {
    /** Univer host type that owns the Shape. */
    hostType: ShapeHostType;
    /** Host unit identifier, such as a workbook, document, presentation, or board id. */
    unitId: string;
    /** Host subunit identifier, such as a worksheet or slide id. */
    subUnitId: string;
}
export interface IShapeRef extends IShapeScope {
    /** Stable Shape identifier within the host subunit. */
    shapeId: string;
}
export interface IShapeHostChange {
    /** Host unit whose persisted Shape projection may have changed. */
    unitId: string;
}
export interface IShapeHostChangeStream {
    subscribe(listener: (change: IShapeHostChange) => void): {
        unsubscribe(): void;
    };
}
export interface IShapeHostAdapterRegistryChange {
    type: 'registered' | 'unregistered';
    adapter: IShapeHostAdapter;
}
export interface IShapeHostAdapterRegistryChangeStream {
    subscribe(listener: (change: IShapeHostAdapterRegistryChange) => void): {
        unsubscribe(): void;
    };
}
export interface IShapeTransform {
    /** Horizontal position in host coordinates. */
    left: number;
    /** Vertical position in host coordinates. */
    top: number;
    /** Shape width in host coordinates. */
    width: number;
    /** Shape height in host coordinates. */
    height: number;
    /** Clockwise rotation in degrees. */
    rotation: number;
    /** Whether the Shape is flipped horizontally. */
    flipX: boolean;
    /** Whether the Shape is flipped vertically. */
    flipY: boolean;
}
export interface IShapeSnapshot extends IShapeRef {
    /** Current preset Shape type. */
    shapeType: ShapeTypeEnum;
    /** Current host-neutral Shape data. */
    shapeData: IShapeData;
    /** Optional user-facing Shape name. */
    name?: string;
    /** Optional user-facing Shape description. */
    description?: string;
    /** Fully resolved Shape transform. */
    transform: IShapeTransform;
    /** Whether the Shape is rendered by its host. */
    visible: boolean;
    /** Whether the Shape can be selected from its host canvas. */
    selectable: boolean;
}
export interface IShapeCreateInput {
    /** Preset type of the Shape to create. */
    shapeType: ShapeTypeEnum;
    /** Partial transform. Omitted fields use defaults supplied by the target host. */
    transform?: Partial<IShapeTransform>;
    /** Initial host-neutral Shape data. */
    shapeData?: IShapeData;
    /** Initial user-facing Shape name. */
    name?: string;
    /** Initial user-facing Shape description. */
    description?: string;
    /** Initial visibility. Defaults to `true`. */
    visible?: boolean;
    /** Initial canvas selectability. Defaults to `true`. */
    selectable?: boolean;
}
export interface IShapeUpdateInput {
    /** Replacement preset Shape type. */
    shapeType?: ShapeTypeEnum;
    /** Transform fields to update. */
    transform?: Partial<IShapeTransform>;
    /** Replacement host-neutral Shape data. */
    shapeData?: IShapeData;
    /** User-facing Shape name. Pass `undefined` explicitly to clear it. */
    name?: string;
    /** User-facing Shape description. Pass `undefined` explicitly to clear it. */
    description?: string;
    /** Visibility to update. Omit to preserve the current value. */
    visible?: boolean;
    /** Canvas selectability to update. Omit to preserve the current value. */
    selectable?: boolean;
    /** Semantic SmartArt edits resolved by the host's undoable command. */
    smartArtOperations?: readonly SmartArtOperation[];
}
/**
 * Ephemeral compare-and-set guard carried by a derived Formula last-value mutation.
 *
 * The guard is deliberately excluded from persisted Shape data. It prevents an
 * asynchronous result calculated from an older formula or External Reference
 * binding from overwriting a newer user edit.
 */
export interface IShapeFormulaLastValueGuard {
    expectedFormula: string;
    expectedReferenceRevision: number;
}
/** Revalidates a Formula Shape result immediately before its Host mutation writes. */
export declare function canApplyShapeFormulaLastValue(accessor: IAccessor, ref: IShapeRef, currentFormula: string | undefined, guard: IShapeFormulaLastValueGuard | undefined): boolean;
export interface IShapeHostAdapter {
    readonly hostType: ShapeHostType;
    /** Emits after a Shape mutation has changed this host's persisted Shape data. */
    readonly shapeChanged$?: IShapeHostChangeStream;
    getShape(ref: IShapeRef): IShapeSnapshot | null;
    listShapes(scope: IShapeScope): IShapeSnapshot[];
    /**
     * Lists Shapes from every subunit owned by one host Unit.
     * Core consumers use this optional hook to rebuild runtime projections from persisted snapshots.
     */
    listShapesInUnit?(unitId: string): IShapeSnapshot[];
    createShape(scope: IShapeScope, input: IShapeCreateInput): IShapeSnapshot | null;
    /**
     * Creates Shapes atomically and returns snapshots in input order.
     * Implementations must return `null` without retaining partial changes when any input or the host command fails.
     */
    createShapes?(scope: IShapeScope, inputs: IShapeCreateInput[]): IShapeSnapshot[] | null;
    updateShape(ref: IShapeRef, input: IShapeUpdateInput): boolean;
    /** Replaces one SmartArt composite with host-native ordinary Shapes in one undoable command. */
    convertSmartArtToShapes?(ref: IShapeRef): IShapeSnapshot[] | null;
    /**
     * Builds the Host's existing Shape mutation for a successful Formula result.
     *
     * Implementations must include `guard` in the mutation params and validate it
     * in the mutation handler before replacing `formulaBinding.lastValue`.
     */
    createFormulaLastValueMutation?(ref: IShapeRef, guard: IShapeFormulaLastValueGuard, lastValue: IFormulaLastValue): IMutationInfo | null;
    removeShape(ref: IShapeRef): boolean;
    bringToFront(ref: IShapeRef): boolean;
    bringForward(ref: IShapeRef): boolean;
    sendBackward(ref: IShapeRef): boolean;
    sendToBack(ref: IShapeRef): boolean;
    setZOrder(ref: IShapeRef, index: number): boolean;
}
export interface IShapeHostAdapterRegistry {
    readonly adapterChanged$: IShapeHostAdapterRegistryChangeStream;
    register(adapter: IShapeHostAdapter): IDisposable;
    get(hostType: UniverInstanceType): IShapeHostAdapter | null;
    list(): readonly IShapeHostAdapter[];
}
export declare const IShapeHostAdapterRegistry: import("@wendellhu/redi").IdentifierDecorator<IShapeHostAdapterRegistry>;
export declare class ShapeHostAdapterRegistry implements IShapeHostAdapterRegistry {
    private readonly _adapters;
    private readonly _adapterChangedListeners;
    readonly adapterChanged$: IShapeHostAdapterRegistryChangeStream;
    register(adapter: IShapeHostAdapter): IDisposable;
    get(hostType: UniverInstanceType): IShapeHostAdapter | null;
    list(): readonly IShapeHostAdapter[];
    private _emitAdapterChanged;
}
