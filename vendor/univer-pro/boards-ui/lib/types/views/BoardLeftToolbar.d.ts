import type { BoardModel } from '@univerjs-pro/boards';
import type { Nullable } from '@univerjs/core';
import { IPermissionService } from '@univerjs/core';
export declare function canEditCurrentBoardFromToolbar(permissionService: IPermissionService, board: Nullable<BoardModel>): boolean;
export declare function BoardLeftToolbar(): import("react").JSX.Element | null;
