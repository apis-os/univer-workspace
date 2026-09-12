import type { IEmbedResourceRefDataProviderRegistration, IEmbedResourceRefUnitProviderRegistration } from '../services/embed-resource-ref-provider-registry.service';
import type { IReferencedUnitSource } from '../services/referenced-unit-catalog.service';
export declare const EMBED_PLUGIN_CONFIG_KEY = "embed.config";
export declare const configSymbol: unique symbol;
export interface IUniverEmbedPluginConfig {
    referencedUnitSources?: readonly IReferencedUnitSource[];
    resourceRefUnitProviderRegistrations?: readonly IEmbedResourceRefUnitProviderRegistration[];
    resourceRefDataProviderRegistrations?: readonly IEmbedResourceRefDataProviderRegistration[];
}
export type EmbedProductPluginConfig = Partial<IUniverEmbedPluginConfig>;
export declare const defaultPluginConfig: IUniverEmbedPluginConfig;
