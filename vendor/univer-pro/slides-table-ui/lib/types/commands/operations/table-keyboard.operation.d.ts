import type { ICommand } from '@univerjs/core';
import type { IShortcutItem } from '@univerjs/ui';
import type { ISlideTableKeyboardCommandParams } from '../../services/slide-table-keyboard.service';
export declare const SlideTableKeyboardOperation: ICommand<ISlideTableKeyboardCommandParams>;
export declare const SLIDE_TABLE_KEYBOARD_OPERATIONS: ICommand<ISlideTableKeyboardCommandParams, boolean>[];
export declare const SLIDE_TABLE_KEYBOARD_SHORTCUTS: IShortcutItem<ISlideTableKeyboardCommandParams>[];
export declare const SLIDE_TABLE_OBJECT_SHORTCUTS: IShortcutItem[];
