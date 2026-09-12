import type { ICommand } from '@univerjs/core';
import type { BaseUnitPermissionAction } from '../../services/base-permission-point';
export interface ISetBasePermissionCommandParams {
    unitId: string;
    objectId: string;
    action: BaseUnitPermissionAction;
    value: boolean;
}
export declare const SetBasePermissionCommand: ICommand<ISetBasePermissionCommandParams>;
