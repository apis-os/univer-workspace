import { HistoryUnitAdapterRegistryService } from '@univerjs-pro/edit-history';
import { Disposable, ICommandService, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { RangeProtectionRuleModel, SheetsSelectionsService } from '@univerjs/sheets';
export declare class SheetsHistoryController extends Disposable {
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _univerInstanceService;
    private readonly _selectionService;
    private readonly _rangeProtectionRuleModel;
    constructor(_commandService: ICommandService, registry: HistoryUnitAdapterRegistryService, _permissionService: IPermissionService, _univerInstanceService: IUniverInstanceService, _selectionService: SheetsSelectionsService, _rangeProtectionRuleModel: RangeProtectionRuleModel);
    private _captureLocation;
    private _restoreLocation;
    private _hasPermission;
    private _canRevert;
}
