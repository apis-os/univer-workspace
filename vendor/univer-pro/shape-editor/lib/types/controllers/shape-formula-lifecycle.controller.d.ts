import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { ShapeFormulaService } from '../services/shape-formula.service';
/** Rebuilds Formula Shape runtime registrations from persisted host snapshots. */
export declare class ShapeFormulaLifecycleController extends Disposable {
    private readonly _instanceService;
    private readonly _shapeHostAdapterRegistry;
    private readonly _shapeFormulaService;
    private _isDisposed;
    private readonly _pendingUnitIds;
    private readonly _adapterBindings;
    private _syncScheduled;
    constructor(_instanceService: IUniverInstanceService, _shapeHostAdapterRegistry: IShapeHostAdapterRegistry, _shapeFormulaService: ShapeFormulaService);
    private _handleAdapterChange;
    private _bindAdapter;
    private _unbindAdapter;
    private _queueSync;
    private _syncUnit;
    dispose(): void;
}
