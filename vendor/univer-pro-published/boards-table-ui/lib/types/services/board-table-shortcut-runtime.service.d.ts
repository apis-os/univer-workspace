import type { BoardModel } from '@univerjs-pro/boards';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { BoardTableKeyboardService } from './board-table-keyboard.service';
export declare class BoardTableShortcutRuntimeService extends Disposable implements IRenderModule {
    readonly renderContext: IRenderContext<BoardModel>;
    readonly keyboardService: BoardTableKeyboardService;
    constructor(renderContext: IRenderContext<BoardModel>, keyboardService: BoardTableKeyboardService);
}
