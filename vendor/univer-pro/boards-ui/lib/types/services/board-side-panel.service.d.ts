import type { IDisposable } from '@univerjs/core';
import type { ReactNode } from 'react';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
import { IBoardUIStateService } from './board-ui-state.service';
export type BoardSidePanelCloseReason = 'api' | 'manual' | 'replace' | 'dispose';
export interface IBoardSidePanelComponentDescriptor {
    label: string;
    [key: string]: unknown;
}
export interface IBoardSidePanelDescriptor {
    id: string;
    header?: ReactNode | IBoardSidePanelComponentDescriptor | {
        title?: ReactNode;
    };
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    children?: ReactNode | IBoardSidePanelComponentDescriptor;
    onClose?: (reason: BoardSidePanelCloseReason) => void;
}
export interface IBoardSidePanelService {
    open(panel: IBoardSidePanelDescriptor): IDisposable;
    close(panelId?: string, reason?: BoardSidePanelCloseReason): void;
    readonly activePanel$: Observable<IBoardSidePanelDescriptor | null>;
}
export declare const IBoardSidePanelService: import("@wendellhu/redi").IdentifierDecorator<IBoardSidePanelService>;
export declare class BoardSidePanelService extends Disposable implements IBoardSidePanelService {
    private readonly _stateService;
    private readonly _activePanel$;
    readonly activePanel$: Observable<IBoardSidePanelDescriptor | null>;
    constructor(_stateService: IBoardUIStateService);
    dispose(): void;
    open(panel: IBoardSidePanelDescriptor): IDisposable;
    close(panelId?: string, reason?: BoardSidePanelCloseReason): void;
    private _closeActivePanel;
}
