import type { IPermissionPoint } from '@univerjs/core';
import { PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class BaseCommentPermission implements IPermissionPoint {
    readonly unitId: string;
    readonly type = UnitObject.Base;
    readonly subType = UnitAction.Comment;
    readonly status = PermissionStatus.INIT;
    readonly id: string;
    value: boolean;
    constructor(unitId: string);
}
