import type { Observable } from 'rxjs';
import type { IBoardViewportPoint } from '../utils/board-viewport.util';
import { Disposable } from '@univerjs/core';
export interface IBoardPointerStateSnapshot {
    unitId: string;
    subUnitId: string;
    pointer: IBoardViewportPoint | null;
}
export interface IBoardPointerStateService {
    readonly state$: Observable<IBoardPointerStateSnapshot | null>;
    getSnapshot(): IBoardPointerStateSnapshot | null;
    setPointer(state: IBoardPointerStateSnapshot): void;
}
export declare const IBoardPointerStateService: import("@wendellhu/redi").IdentifierDecorator<IBoardPointerStateService>;
export declare class BoardPointerStateService extends Disposable implements IBoardPointerStateService {
    private readonly _state$;
    readonly state$: Observable<IBoardPointerStateSnapshot | null>;
    dispose(): void;
    getSnapshot(): IBoardPointerStateSnapshot | null;
    setPointer(state: IBoardPointerStateSnapshot): void;
}
