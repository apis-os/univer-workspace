import type { ICommand } from '@univerjs/core';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IBaseUIStateService } from '../../services/base-ui-state.service';
type BaseKeyboardAction = 'move-left' | 'move-right' | 'move-up' | 'move-down' | 'extend-left' | 'extend-right' | 'extend-up' | 'extend-down' | 'tab-forward' | 'tab-backward' | 'select-all' | 'edit-cell' | 'input-cell' | 'clear-cells';
export interface IBaseKeyboardOperationParams {
    action: BaseKeyboardAction;
    text?: string;
    autoFocus?: boolean;
}
export interface IBaseKeyboardOperationServices {
    commandService: ICommandService;
    instanceService: IUniverInstanceService;
    projectionService: IBaseProjectionService;
    stateService: IBaseUIStateService;
}
export declare const BaseKeyboardOperation: ICommand<IBaseKeyboardOperationParams>;
export declare const BASE_KEYBOARD_OPERATIONS: ICommand<IBaseKeyboardOperationParams, boolean>[];
export declare function executeBaseKeyboardOperation(services: IBaseKeyboardOperationServices, params?: unknown): boolean;
export {};
