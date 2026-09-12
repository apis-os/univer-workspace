import type { IDisposable } from '@univerjs/core';
import type { IUIRuntimeScope } from '@univerjs/ui';
import { Disposable } from '@univerjs/core';
import { IUIRuntimeScopeService } from '@univerjs/ui';
/**
 * Keeps nested Embed render scopes behind one stable UI runtime registration.
 * The global UI service therefore retains its single-owner behavior while
 * fullscreen scopes can temporarily take over and restore their parent scope.
 */
export declare class EmbedUIRuntimeScopeLeaseService extends Disposable {
    private readonly _runtimeScopeService;
    private readonly _entries;
    constructor(_runtimeScopeService: IUIRuntimeScopeService);
    acquire(scope: IUIRuntimeScope): IDisposable;
    dispose(): void;
}
