import type { BoardModel } from '@univerjs-pro/boards';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IMindMapClipboardService } from '@univerjs-pro/boards-mind';
import { BoardTextEditingService, IBoardElementStateService, IBoardUIStateService } from '@univerjs-pro/boards-ui';
import { Disposable, ICommandService, LocaleService } from '@univerjs/core';
import { IDialogService } from '@univerjs/ui';
export declare class BoardMindMapShortcutRuntimeService extends Disposable implements IRenderModule {
    readonly renderContext: IRenderContext<BoardModel>;
    readonly commandService: ICommandService;
    readonly elementService: IBoardElementService;
    readonly elementStateService: IBoardElementStateService;
    readonly uiStateService: IBoardUIStateService;
    readonly clipboardService: IMindMapClipboardService;
    readonly dialogService: IDialogService;
    readonly localeService: LocaleService;
    readonly textEditingService: BoardTextEditingService;
    constructor(renderContext: IRenderContext<BoardModel>, commandService: ICommandService, elementService: IBoardElementService, elementStateService: IBoardElementStateService, uiStateService: IBoardUIStateService, clipboardService: IMindMapClipboardService, dialogService: IDialogService, localeService: LocaleService, textEditingService: BoardTextEditingService);
}
