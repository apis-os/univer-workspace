import type { IDisposable } from '@univerjs/core';
import type { ResourceRefInput } from '../common/resource-ref';
import type { IReferencedUnitEnsureOptions, IReferencedUnitManagerService, IReferencedUnitReadDataOptions, IReferencedUnitReadDataResult, IReferencedUnitRuntimeRecord } from '../types/referenced-unit';
import { EmbedResourceRefProviderRegistryService } from './embed-resource-ref-provider-registry.service';
export declare class EmbedReferencedUnitManagerService implements IReferencedUnitManagerService {
    private readonly _resourceRefProviderRegistry;
    private readonly _loadStates;
    private readonly _loadStatesByRuntimeUnitId;
    private readonly _usageCounts;
    constructor(_resourceRefProviderRegistry: EmbedResourceRefProviderRegistryService);
    ensure(refInput: ResourceRefInput, options?: IReferencedUnitEnsureOptions): Promise<IReferencedUnitRuntimeRecord>;
    readData(refInput: ResourceRefInput, options?: IReferencedUnitReadDataOptions): Promise<IReferencedUnitReadDataResult>;
    watchData(refInput: ResourceRefInput, onChange: () => void): IDisposable | undefined;
    addUsage(fromUnitId: string, toUnitId: string, count?: number): IDisposable;
    releaseUnit(unitId: string): void;
    private _getUnitProvider;
    private _createLoadState;
    private _addLoadState;
    private _removeLoadState;
    private _addRuntimeUnitLoadState;
    private _withOptionalAbort;
    private _withAbort;
    private _getUnitLoadKey;
    private _getUsageKey;
    private _resolveUnitType;
    private _formatUnitRef;
}
