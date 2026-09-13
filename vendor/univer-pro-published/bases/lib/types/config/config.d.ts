export declare const BASES_PLUGIN_CONFIG_KEY = "bases.config";
export declare const configSymbol: unique symbol;
export interface IUniverBasesConfig {
    embed?: Record<string, unknown>;
}
export declare const defaultPluginConfig: IUniverBasesConfig;
export declare const REMOTE_BASES_PLUGIN_CONFIG_KEY = "bases.remote.config";
export declare const configSymbolRemote: unique symbol;
export interface IUniverRemoteBasesConfig {
}
export declare const defaultRemotePluginConfig: IUniverRemoteBasesConfig;
