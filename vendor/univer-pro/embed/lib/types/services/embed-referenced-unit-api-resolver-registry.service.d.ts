import type { IDisposable, Injector } from '@univerjs/core';
import { UniverInstanceType } from '@univerjs/core';
export interface IReferencedUnitApiResolveContext {
    unitId: string;
    unitType: UniverInstanceType;
    injector: Injector;
    api: unknown;
}
export interface IReferencedUnitApiResolverRegistration<TApi = unknown> {
    registrationId: string;
    unitType: UniverInstanceType;
    resolve: (context: IReferencedUnitApiResolveContext) => TApi | null | undefined;
}
export declare class EmbedReferencedUnitApiResolverRegistryService {
    private readonly _registrations;
    register(registration: IReferencedUnitApiResolverRegistration): IDisposable;
    registerMany(registrations: readonly IReferencedUnitApiResolverRegistration[]): IDisposable[];
    resolve<TApi = unknown>(context: IReferencedUnitApiResolveContext): TApi;
    list(): IReferencedUnitApiResolverRegistration[];
}
export declare function createDefaultReferencedUnitApiResolvers(): IReferencedUnitApiResolverRegistration[];
export declare function registerReferencedUnitApiResolvers(injector: Pick<Injector, 'get' | 'has'>, registrations: readonly IReferencedUnitApiResolverRegistration[]): void;
export declare function flushPendingReferencedUnitApiResolvers(injector: Pick<Injector, 'get' | 'has'>): void;
