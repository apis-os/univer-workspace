import type { IOpenMindMapPanelOperationParams } from '../commands/operations/open-mind-map-panel.operation';
import { IBoardElementService } from '@univerjs-pro/boards';
import { Disposable, ICommandService, LocaleService } from '@univerjs/core';
import { ISidebarService } from '@univerjs/ui';
export declare class BoardMindMapPanelController extends Disposable {
    private readonly _commandService;
    private readonly _localeService;
    private readonly _sidebarService;
    private readonly _boardElementService;
    private _sidebarDisposable;
    constructor(_commandService: ICommandService, _localeService: LocaleService, _sidebarService: ISidebarService, _boardElementService: IBoardElementService);
    dispose(): void;
    open(params: IOpenMindMapPanelOperationParams): void;
}
