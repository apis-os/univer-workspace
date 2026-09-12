import type { IPermissionPoint } from '@univerjs/core';
import { PermissionStatus } from '@univerjs/core';
import { UnitAction, UnitObject } from '@univerjs/protocol';
export declare class SlidePrintPermission implements IPermissionPoint {
    readonly unitId: string;
    readonly type = UnitObject.Slide;
    readonly subType = UnitAction.Print;
    readonly status = PermissionStatus.INIT;
    readonly id: string;
    value: boolean;
    constructor(unitId: string);
}
