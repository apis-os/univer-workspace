import type { IShapeFormulaLastValueGuard, IShapeHostAdapter, IShapeHostChange, IShapeRef, IShapeScope, IShapeSnapshot, IShapeUpdateInput } from '@univerjs-pro/engine-shape';
import type { IMutationInfo } from '@univerjs/core';
import type { Observable } from 'rxjs';
import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { Disposable, ICommandService, IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { BaseDashboardResourceService } from '../services/base-dashboard-resource.service';
export declare class BaseDashboardShapeHostAdapter extends Disposable implements IShapeHostAdapter {
    private readonly _commandService;
    private readonly _instanceService;
    private readonly _resourceService;
    readonly hostType = UniverInstanceType.UNIVER_BASE;
    readonly shapeChanged$: Observable<IShapeHostChange>;
    constructor(_commandService: ICommandService, shapeHostAdapterRegistry: IShapeHostAdapterRegistry, _instanceService: IUniverInstanceService, _resourceService: BaseDashboardResourceService);
    getShape(ref: IShapeRef): IShapeSnapshot | null;
    listShapes(scope: IShapeScope): IShapeSnapshot[];
    listShapesInUnit(unitId: string): IShapeSnapshot[];
    createShape(scope: IShapeScope, input: Parameters<IShapeHostAdapter['createShape']>[1]): IShapeSnapshot | null;
    updateShape(ref: IShapeRef, input: IShapeUpdateInput): boolean;
    createFormulaLastValueMutation(ref: IShapeRef, guard: IShapeFormulaLastValueGuard, lastValue: Parameters<NonNullable<IShapeHostAdapter['createFormulaLastValueMutation']>>[2]): IMutationInfo | null;
    removeShape(ref: IShapeRef): boolean;
    bringToFront(ref: IShapeRef): boolean;
    bringForward(ref: IShapeRef): boolean;
    sendBackward(ref: IShapeRef): boolean;
    sendToBack(ref: IShapeRef): boolean;
    setZOrder(ref: IShapeRef, index: number): boolean;
    private _move;
    private _getWidget;
    private _toSnapshot;
}
