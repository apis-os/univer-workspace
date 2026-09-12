import type { SlideTableKeyboardAction } from '@univerjs-pro/slides-table-ui';
import { TableKeyboardServiceBase } from '@univerjs-pro/slides-table-ui';
import { IContextService } from '@univerjs/core';
export declare const FOCUSING_BOARD_TABLE = "FOCUSING_BOARD_TABLE";
export interface IBoardTableKeyboardCommandParams {
    action: SlideTableKeyboardAction;
}
export declare class BoardTableKeyboardService extends TableKeyboardServiceBase {
    private readonly _contextService;
    constructor(_contextService: IContextService);
    setFocused(focused: boolean): void;
    protected canHandleNativeInput(event: Event, options?: {
        allowDocsEditor?: boolean;
    }): boolean;
}
