import type { IEmbedDescriptor } from '@univerjs-pro/embed';
import type { IDisposable } from '@univerjs/core';
import type { IEmbedMountSession } from '../types/embed-ui';
import { EmbedMountService } from './embed-mount.service';
export interface IEmbedRuntimeHostLease extends IDisposable {
    readonly session: IEmbedMountSession;
    readonly ownsSession: boolean;
}
/**
 * Temporarily lends a single Embed runtime to another DOM host without creating
 * a duplicate child session. Only Embed-owned runtime slots are relocated: the
 * outer host can belong to React and must remain under its original parent.
 *
 * If passive runtime hosting becomes common outside presentation, promote the
 * capability into EmbedMountService instead of adding more DOM relocation paths.
 */
export declare class EmbedRuntimeHostLeaseService {
    private readonly _mountService;
    private readonly _leases;
    constructor(_mountService: EmbedMountService);
    acquire(descriptor: IEmbedDescriptor, targetHost: HTMLElement): IEmbedRuntimeHostLease;
    private _relocateExistingSession;
    private _mountOwnedSession;
}
