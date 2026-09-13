import type { IBaseHistoryChange } from '@univerjs-pro/bases-history';
import { IBaseCanvasRootResolverService } from '@univerjs-pro/bases-ui';
import { HistoryCanvasHighlightService } from '@univerjs-pro/edit-history-ui';
import { Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ICanvasPopupService } from '@univerjs/ui';
export declare class BasesHistoryHighlightService extends Disposable {
    private readonly _renderManagerService;
    private readonly _highlightService;
    private readonly _canvasRootResolverService;
    private readonly _canvasPopupService;
    private readonly _generations;
    private readonly _badgeDisposables;
    constructor(_renderManagerService: IRenderManagerService, _highlightService: HistoryCanvasHighlightService, _canvasRootResolverService: IBaseCanvasRootResolverService, _canvasPopupService: ICanvasPopupService);
    show(unitId: string, changes: IBaseHistoryChange[]): Promise<void>;
    clear(unitId: string): void;
    dispose(): void;
    private _getCanvasComponent;
    private _showDeletionBadges;
    private _clearDeletionBadges;
}
