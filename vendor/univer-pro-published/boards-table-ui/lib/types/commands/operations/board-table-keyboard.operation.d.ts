import type { ICommand } from '@univerjs/core';
import type { IShortcutItem } from '@univerjs/ui';
import type { IBoardTableKeyboardCommandParams } from '../../services/board-table-keyboard.service';
export declare const BoardTableKeyboardOperation: ICommand<IBoardTableKeyboardCommandParams>;
export declare const BOARD_TABLE_KEYBOARD_OPERATIONS: ICommand<IBoardTableKeyboardCommandParams, boolean>[];
export declare const BOARD_TABLE_KEYBOARD_SHORTCUTS: IShortcutItem<IBoardTableKeyboardCommandParams>[];
