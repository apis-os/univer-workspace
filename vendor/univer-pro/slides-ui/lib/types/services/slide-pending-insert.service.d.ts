import type { ISlideInsertShapeOptions, ISlideInsertTextBoxOptions } from '@univerjs-pro/slides';
import type { ISlidePendingInsert } from '../utils/slide-pending-insert.util';
import { Disposable } from '@univerjs/core';
export declare class SlidePendingInsertService extends Disposable {
    private readonly _pendingInsert$;
    readonly pendingInsert$: import("rxjs").Observable<ISlidePendingInsert | null>;
    getPendingInsert(): ISlidePendingInsert | null;
    beginShapeInsert(options: ISlideInsertShapeOptions): void;
    beginTextInsert(options?: ISlideInsertTextBoxOptions): void;
    cancelPendingInsert(): boolean;
    dispose(): void;
}
