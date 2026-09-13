import type { IDisposable } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
import { IContextMenuHostService } from '@univerjs/ui';
/** Coordinates mutually exclusive Board interaction surfaces. */
export declare class BoardInteractionSurfaceService extends Disposable {
    private readonly _contextMenuHostService;
    private readonly _interactionSurfaceActive$;
    private _exclusiveSurfaceId;
    private readonly _exclusiveSurfaceIds;
    readonly interactionSurfaceActive$: import("rxjs").Observable<boolean>;
    constructor(_contextMenuHostService: IContextMenuHostService);
    get isInteractionSurfaceActive(): boolean;
    acquireExclusiveSurface(): IDisposable;
    dispose(): void;
    private _updateActiveState;
}
