import type { IBeginInkModeParams, InkToolType } from '@univerjs-pro/ink';
import { Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export interface IInkUISession {
    unitId: string;
    subUnitId: string;
}
export interface IInkUIState {
    active: boolean;
    toolbarVisible: boolean;
    tool: InkToolType;
    color: string;
    width: number;
    opacity: number;
    session: IInkUISession | null;
}
export interface IInkUIStateService {
    readonly state$: ReturnType<BehaviorSubject<IInkUIState>['asObservable']>;
    getState(): IInkUIState;
    beginInkMode(params: IBeginInkModeParams): void;
    cancelInkMode(): void;
    selectTool(tool: InkToolType): void;
    setWidth(width: number): void;
    setColor(color: string): void;
}
export declare const IInkUIStateService: import("@wendellhu/redi").IdentifierDecorator<IInkUIStateService>;
export declare class InkUIStateService extends Disposable implements IInkUIStateService {
    private readonly _state$;
    readonly state$: import("rxjs").Observable<IInkUIState>;
    dispose(): void;
    getState(): IInkUIState;
    beginInkMode(params: IBeginInkModeParams): void;
    cancelInkMode(): void;
    selectTool(tool: InkToolType): void;
    setWidth(width: number): void;
    setColor(color: string): void;
}
