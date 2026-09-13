import type { UniverInstanceType } from '@univerjs/core';
import type { Observable } from 'rxjs';
/**
 * Optional host-side bridge supplied by Embed UI.
 *
 * Boards UI stays independent of Embed UI while allowing the embed runtime to
 * prevent the host canvas from reclaiming focus for a child-owned pointer event.
 */
export interface IBoardEmbedRuntimeFocusCoordinator {
    readonly runtimeSessionChanged$?: Observable<void>;
    resolveRuntimeScopeByChildUnitId?(childUnitId: string | undefined): {
        embedId: string;
        hostUnitId?: string;
        childUnitId?: string;
        childType?: UniverInstanceType;
    } | undefined;
    shouldSuppressHostInteraction(unitId: string | undefined, target?: EventTarget | null, event?: Event): boolean;
}
export declare const IBoardEmbedRuntimeFocusCoordinator: import("@wendellhu/redi").IdentifierDecorator<IBoardEmbedRuntimeFocusCoordinator>;
