import type { IPermissionPoint } from '@univerjs/core';
import { PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class BoardCopyPermission implements IPermissionPoint {
    readonly unitId: string;
    readonly type = UnitObject.Board;
    readonly subType = UnitAction.Copy;
    readonly status = PermissionStatus.INIT;
    readonly id: string;
    value: boolean;
    constructor(unitId: string);
}
