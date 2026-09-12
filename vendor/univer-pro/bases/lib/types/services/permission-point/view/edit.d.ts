import type { IPermissionPoint } from '@univerjs/core';
import { PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class BaseViewEditPermission implements IPermissionPoint {
    readonly unitId: string;
    readonly objectId: string;
    readonly type = UnitObject.BaseView;
    readonly subType = UnitAction.Edit;
    readonly status = PermissionStatus.INIT;
    readonly id: string;
    value: boolean;
    constructor(unitId: string, objectId: string);
}
