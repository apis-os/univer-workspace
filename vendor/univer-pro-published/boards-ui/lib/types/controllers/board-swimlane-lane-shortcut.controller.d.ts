import type { BoardSwimlaneLaneShortcutAction } from '../common/board-shortcuts';
import type { BoardShortcutRuntimeService } from '../services/board-shortcut-runtime.service';
import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_SWIMLANE_LANE_SHORTCUT_OPERATION_ID = "board.operation.swimlane-lane-shortcut";
export declare function handleSwimlaneLaneShortcut(runtime: BoardShortcutRuntimeService, action: BoardSwimlaneLaneShortcutAction | undefined): Promise<boolean>;
export declare class BoardSwimlaneLaneShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
