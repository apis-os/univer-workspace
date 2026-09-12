import type { ICreateUnitOptions, IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IResourceRef, ResourceRefFile, ResourceRefPart, ResourceRefUnitType } from '../common/resource-ref';
import type { IReferencedUnitReadDataResult, ReferencedUnitDataType } from '../types/referenced-unit';
export interface IEmbedResourceRefEnsureUnitInput {
    ref: IResourceRef;
    unitType: UniverInstanceType;
    createOptions: ICreateUnitOptions;
    signal?: AbortSignal;
}
export interface IReferencedUnitLoadResult {
    unitId: string;
    unitType: UniverInstanceType;
}
export interface IEmbedResourceRefUnitProvider {
    ensureUnit: (input: IEmbedResourceRefEnsureUnitInput) => IReferencedUnitLoadResult | Promise<IReferencedUnitLoadResult>;
}
export interface IEmbedResourceRefReadDataInput {
    ref: IResourceRef;
    unitType: UniverInstanceType;
    dataType: ReferencedUnitDataType;
    selector: ResourceRefPart;
    signal?: AbortSignal;
}
export interface IEmbedResourceRefDataProvider {
    readData: (input: IEmbedResourceRefReadDataInput) => IReferencedUnitReadDataResult | Promise<IReferencedUnitReadDataResult>;
    watchData?: (input: IEmbedResourceRefReadDataInput, onChange: () => void) => IDisposable;
}
export interface IEmbedResourceRefProviderMatch {
    fileKinds?: readonly ResourceRefFile['kind'][];
    uriSchemes?: readonly string[];
    unitTypes?: readonly ResourceRefUnitType[];
    unitSelectors?: readonly string[];
}
export interface IEmbedResourceRefUnitProviderRegistration {
    registrationId: string;
    match: IEmbedResourceRefProviderMatch;
    priority?: number;
    provider: IEmbedResourceRefUnitProvider;
}
export interface IEmbedResourceRefDataProviderRegistration {
    registrationId: string;
    match: IEmbedResourceRefProviderMatch;
    priority?: number;
    provider: IEmbedResourceRefDataProvider;
}
export declare class EmbedResourceRefProviderRegistryService {
    private readonly _unitRegistrations;
    private readonly _dataRegistrations;
    registerUnitProvider(registration: IEmbedResourceRefUnitProviderRegistration): IDisposable;
    registerDataProvider(registration: IEmbedResourceRefDataProviderRegistration): IDisposable;
    getUnitProvider(ref: IResourceRef, unitType?: ResourceRefUnitType): IEmbedResourceRefUnitProviderRegistration | undefined;
    getDataProvider(ref: IResourceRef, unitType?: ResourceRefUnitType): IEmbedResourceRefDataProviderRegistration | undefined;
    listUnitProviders(): IEmbedResourceRefUnitProviderRegistration[];
    listDataProviders(): IEmbedResourceRefDataProviderRegistration[];
    private _register;
    private _get;
    private _matches;
}
