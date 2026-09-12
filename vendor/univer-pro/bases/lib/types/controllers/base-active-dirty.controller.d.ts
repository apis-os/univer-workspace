import { IActiveDirtyManagerService } from '@univerjs-pro/engine-formula';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
export declare class BaseActiveDirtyController extends Disposable {
    private readonly _activeDirtyManagerService;
    private readonly _univerInstanceService;
    constructor(_activeDirtyManagerService: IActiveDirtyManagerService, _univerInstanceService: IUniverInstanceService);
    private _initialize;
    private _getTable;
    private _getJson1DirtyData;
    private _getStructureDirtyTableIds;
    private _groupCellInvalidations;
    private _toDirtyRangePatch;
    private _getAllTableIds;
    private _getAllBaseDependencyTreeCacheMap;
}
