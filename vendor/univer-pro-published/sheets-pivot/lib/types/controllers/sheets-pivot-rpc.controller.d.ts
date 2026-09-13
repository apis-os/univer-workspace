import { Disposable, ICommandService } from '@univerjs/core';
import { IActiveDirtyManagerService } from '@univerjs/engine-formula';
import { SheetsPivotTableConfigModel } from '../models/sheets-pivot-config-model';
import { SheetsPivotTableAdaptorModel } from '../models/sheets-pivot-table-adaptor-model';
import { SheetsPivotRPCService } from '../services/sheets-pivot-rpc.service';
export declare class SheetsPivotRPCController extends Disposable {
    private readonly _commandService;
    private readonly _sheetsPivotRpcService;
    private readonly _sheetsPivotTableAdaptorModel;
    private readonly _sheetsPivotTableConfigModel;
    readonly _activeDirtyManagerService: IActiveDirtyManagerService;
    constructor(_commandService: ICommandService, _sheetsPivotRpcService: SheetsPivotRPCService, _sheetsPivotTableAdaptorModel: SheetsPivotTableAdaptorModel, _sheetsPivotTableConfigModel: SheetsPivotTableConfigModel, _activeDirtyManagerService: IActiveDirtyManagerService);
    private _initDataSendListener;
    /**
     * - register dirty service, used to mark the pivot table view dirty
     * @returns {void}
     */
    registerDirtyService(): void;
}
