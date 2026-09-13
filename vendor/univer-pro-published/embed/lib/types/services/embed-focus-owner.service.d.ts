import type { IEmbeddedFocusOwner } from '../types/embed';
export declare class EmbedFocusOwnerService {
    private readonly _focusOwner$;
    readonly focusOwner$: import("rxjs").Observable<IEmbeddedFocusOwner | null>;
    getFocusOwner(): IEmbeddedFocusOwner | null;
    setFocusOwner(owner: IEmbeddedFocusOwner): void;
    clearFocusOwner(embedId?: string): void;
}
