import type { IEmbedDescriptor } from '@univerjs-pro/embed';
import type { IEmbedFullscreenSession } from '../types/embed-ui';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
export declare class EmbedFullscreenService extends Disposable {
    private readonly _session$;
    private readonly _exited$;
    readonly session$: import("rxjs").Observable<IEmbedFullscreenSession | null>;
    readonly exited$: import("rxjs").Observable<IEmbedFullscreenSession>;
    constructor(commandService: ICommandService, univerInstanceService: IUniverInstanceService);
    dispose(): void;
    getSession(): IEmbedFullscreenSession | null;
    enter(descriptor: IEmbedDescriptor): IEmbedFullscreenSession;
    exit(embedId?: string): void;
    notifyExited(session: IEmbedFullscreenSession): void;
}
