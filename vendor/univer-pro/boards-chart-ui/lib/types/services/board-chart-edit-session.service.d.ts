import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IBoardElementStateService } from '@univerjs-pro/boards-ui';
import { Disposable } from '@univerjs/core';
export interface IBoardChartEditSession {
    chartId: string;
    elementId: string;
    source: BoardChartEditSessionSource;
    subUnitId: string;
    unitId: string;
    route?: IChartEditPanelRoute;
}
export type BoardChartEditSessionSource = 'doubleClick' | 'programmatic' | 'quickToolbar';
export type BoardChartEditSessionCloseReason = 'dispose' | 'elementRemoved' | 'manual' | 'pageChange' | 'selectionChange' | 'transformStart';
export interface IBoardChartEditSessionOpenParams {
    chartId: string;
    elementId: string;
    source: BoardChartEditSessionSource;
    subUnitId: string;
    unitId: string;
    route?: IChartEditPanelRoute;
}
export declare class BoardChartEditSessionService extends Disposable {
    private readonly _elementStateService;
    private readonly _boardElementService;
    private readonly _activeSession$;
    readonly activeSession$: import("rxjs").Observable<IBoardChartEditSession | null>;
    constructor(_elementStateService: IBoardElementStateService, _boardElementService: IBoardElementService);
    dispose(): void;
    getActiveSession(): IBoardChartEditSession | null;
    open(params: IBoardChartEditSessionOpenParams): void;
    close(_reason?: BoardChartEditSessionCloseReason): void;
    private _syncSelectionState;
}
