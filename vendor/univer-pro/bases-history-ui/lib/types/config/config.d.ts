import type { PluginCtor } from '@univerjs/core';
export declare const BASES_HISTORY_UI_PLUGIN_CONFIG_KEY = "bases-history-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverBasesHistoryUIConfig {
    univerContainerId?: string;
    historyServerUrl?: string;
    viewerPlugins?: Array<[ctor: PluginCtor, config?: object]>;
}
export declare const defaultPluginConfig: IUniverBasesHistoryUIConfig;
