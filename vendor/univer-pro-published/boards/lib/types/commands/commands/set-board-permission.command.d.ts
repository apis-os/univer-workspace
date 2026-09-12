import type { ICommand } from '@univerjs/core';
import type { BoardUnitPermissionAction } from '../../services/board-permission.service';
export interface ISetBoardPermissionCommandParams {
    unitId: string;
    objectId: string;
    action: BoardUnitPermissionAction;
    value: boolean;
}
export declare const SetBoardPermissionCommand: ICommand<ISetBoardPermissionCommandParams>;
