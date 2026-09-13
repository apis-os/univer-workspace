import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface IBoardInkEditingTarget {
    unitId: string;
    subUnitId: string;
    elementId: string;
}
export type BoardInkEditSource = 'stage2' | 'shapeFloatingToolbar' | 'doubleClick';
export type BoardInkEditReturnTo = 'stage2' | 'select';
export interface IBoardInkBeginEditingOptions {
    source?: BoardInkEditSource;
    returnTo?: BoardInkEditReturnTo;
}
export interface IBoardInkEditState {
    editingTarget: IBoardInkEditingTarget | null;
    source: BoardInkEditSource | null;
    returnTo: BoardInkEditReturnTo;
}
export interface IBoardInkEditService {
    readonly state$: Observable<IBoardInkEditState>;
    getState(): IBoardInkEditState;
    beginEditing(target: IBoardInkEditingTarget, options?: IBoardInkBeginEditingOptions): void;
    endEditing(): void;
}
export declare const IBoardInkEditService: import("@wendellhu/redi").IdentifierDecorator<IBoardInkEditService>;
export declare class BoardInkEditService extends Disposable implements IBoardInkEditService {
    private readonly _state$;
    readonly state$: Observable<IBoardInkEditState>;
    dispose(): void;
    getState(): IBoardInkEditState;
    beginEditing(target: IBoardInkEditingTarget, options?: IBoardInkBeginEditingOptions): void;
    endEditing(): void;
}
