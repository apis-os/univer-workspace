import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import { Injector } from '@univerjs/core';
import { EmbedRuntimeFocusCoordinator } from './embed-runtime-focus-coordinator.service';
export interface IEmbedChildProductPluginPrepareContext {
    injector: Injector;
    childUnitId: string;
    childType: UniverInstanceType;
    descriptor?: unknown;
}
export interface IEmbedChildProductPluginContribution {
    id?: string;
    childType: UniverInstanceType;
    order?: number;
    prepare?(context: IEmbedChildProductPluginPrepareContext): void | Promise<void>;
}
export interface IEmbedChildProductPluginPrepareOptions {
    childUnitId: string;
    childType: UniverInstanceType;
    restoreUnitId?: string;
    descriptor?: unknown;
    settleDelayMs?: number;
}
export declare function registerEmbedChildProductPluginContribution(injector: Pick<Injector, 'get' | 'has'>, contribution: IEmbedChildProductPluginContribution): IDisposable;
export declare function flushPendingEmbedChildProductPluginContributions(injector: Pick<Injector, 'get' | 'has'>): void;
export declare class EmbedChildProductPluginRegistryService {
    private readonly _injector;
    private readonly _focusCoordinator;
    private readonly _contributions;
    private _nextIndex;
    constructor(_injector: Injector, _focusCoordinator: EmbedRuntimeFocusCoordinator);
    register(contribution: IEmbedChildProductPluginContribution): IDisposable;
    getAll(childType: UniverInstanceType): readonly IEmbedChildProductPluginContribution[];
    prepare(options: IEmbedChildProductPluginPrepareOptions): Promise<void>;
    private _hasContributionId;
}
