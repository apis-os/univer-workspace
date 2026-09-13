import type { IDisposable } from '@univerjs/core';
import type { IReferencedUnitReadDataResult } from '../types/referenced-unit';
import type { IEmbedResourceRefDataProvider, IEmbedResourceRefDataProviderRegistration, IEmbedResourceRefEnsureUnitInput, IEmbedResourceRefReadDataInput, IEmbedResourceRefUnitProvider, IEmbedResourceRefUnitProviderRegistration, IReferencedUnitLoadResult } from './embed-resource-ref-provider-registry.service';
import { ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IReferencedUnitManagerService } from '../types/referenced-unit';
export declare const LOCAL_RUNTIME_RESOURCE_REF_UNIT_PROVIDER_ID = "local-runtime-resource-ref-unit-provider";
export declare const LOCAL_RUNTIME_RESOURCE_REF_DATA_PROVIDER_ID = "local-runtime-resource-ref-data-provider";
export declare const LOCAL_RUNTIME_RESOURCE_REF_PROVIDER_PRIORITY = -100;
export declare class EmbedLocalRuntimeResourceRefUnitProvider implements IEmbedResourceRefUnitProvider {
    private readonly _univerInstanceService;
    constructor(_univerInstanceService: IUniverInstanceService);
    ensureUnit(input: IEmbedResourceRefEnsureUnitInput): IReferencedUnitLoadResult;
}
export declare class EmbedLocalRuntimeResourceRefDataProvider implements IEmbedResourceRefDataProvider {
    private readonly _referencedUnitManager;
    private readonly _univerInstanceService;
    private readonly _commandService;
    constructor(_referencedUnitManager: IReferencedUnitManagerService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    readData(input: IEmbedResourceRefReadDataInput): Promise<IReferencedUnitReadDataResult>;
    watchData(input: IEmbedResourceRefReadDataInput, onChange: () => void): IDisposable;
    private _watchSheetRange;
    private _watchBaseTable;
    private _readSheetRange;
    private _readBaseTable;
}
export declare function createLocalRuntimeResourceRefUnitProviderRegistration(provider: IEmbedResourceRefUnitProvider): IEmbedResourceRefUnitProviderRegistration;
export declare function createLocalRuntimeResourceRefDataProviderRegistration(provider: IEmbedResourceRefDataProvider): IEmbedResourceRefDataProviderRegistration;
