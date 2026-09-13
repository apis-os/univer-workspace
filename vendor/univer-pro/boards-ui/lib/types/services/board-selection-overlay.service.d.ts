import type { IBoardSelectionPoint } from '../utils/board-selection-interaction.util';
import { Disposable } from '@univerjs/core';
export interface IBoardSelectionDraft {
    start: IBoardSelectionPoint;
    current: IBoardSelectionPoint;
    dragSelection: boolean;
    preciseSelection: boolean;
}
export declare class BoardSelectionOverlayService extends Disposable {
    private readonly _selectionDraft$;
    readonly selectionDraft$: import("rxjs").Observable<IBoardSelectionDraft | null>;
    dispose(): void;
    getSelectionDraft(): IBoardSelectionDraft | null;
    setSelectionDraft(draft: IBoardSelectionDraft | null): void;
}
