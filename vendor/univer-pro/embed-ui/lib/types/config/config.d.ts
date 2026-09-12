export declare const EMBED_UI_PLUGIN_CONFIG_KEY = "embed-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverEmbedUIDefaultsConfig {
    floatingMenus?: boolean;
    hostToolbar?: boolean;
}
export interface IUniverEmbedUIPluginConfig {
    defaults?: IUniverEmbedUIDefaultsConfig;
}
export declare const defaultPluginConfig: IUniverEmbedUIPluginConfig;
