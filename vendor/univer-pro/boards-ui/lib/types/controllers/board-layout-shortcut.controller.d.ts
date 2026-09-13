import type { IBoardElementData, IUpdateBoardElementsCommandItem } from '@univerjs-pro/boards';
import type { BoardLayoutShortcutAction } from '../common/board-shortcuts';
import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_LAYOUT_SHORTCUT_OPERATION_ID = "board.operation.layout-shortcut";
export declare function resolveBoardLayoutShortcutUpdates(elementData: Record<string, IBoardElementData>, selectedIds: string[], action: BoardLayoutShortcutAction): IUpdateBoardElementsCommandItem[];
export declare class BoardLayoutShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
