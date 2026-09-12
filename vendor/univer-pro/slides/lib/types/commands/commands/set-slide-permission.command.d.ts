import type { ICommand } from '@univerjs/core';
import type { SlideUnitPermissionAction } from '../../services/slide-permission.service';
export interface ISetSlidePermissionCommandParams {
    unitId: string;
    objectId: string;
    action: SlideUnitPermissionAction;
    value: boolean;
}
export declare const SetSlidePermissionCommand: ICommand<ISetSlidePermissionCommandParams>;
