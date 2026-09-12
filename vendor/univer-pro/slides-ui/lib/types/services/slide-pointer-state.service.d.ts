import type { IUnitPresencePoint } from '@univerjs/ui';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
export interface ISlidePointerStateSnapshot {
    unitId: string;
    subUnitId: string;
    pointer: IUnitPresencePoint | null;
}
export interface ISlidePointerStateService {
    readonly state$: Observable<ISlidePointerStateSnapshot | null>;
    getSnapshot(): ISlidePointerStateSnapshot | null;
    setPointer(state: ISlidePointerStateSnapshot): void;
}
export declare const ISlidePointerStateService: import("@wendellhu/redi").IdentifierDecorator<ISlidePointerStateService>;
export declare class SlidePointerStateService extends Disposable implements ISlidePointerStateService {
    private readonly _state$;
    readonly state$: Observable<ISlidePointerStateSnapshot | null>;
    dispose(): void;
    getSnapshot(): ISlidePointerStateSnapshot | null;
    setPointer(state: ISlidePointerStateSnapshot): void;
}
