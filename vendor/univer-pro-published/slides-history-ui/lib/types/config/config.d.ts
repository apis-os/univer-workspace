import type { PluginCtor } from '@univerjs/core';
export declare const SLIDES_HISTORY_UI_PLUGIN_CONFIG_KEY = "slides-history-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSlidesHistoryUIConfig {
    univerContainerId?: string;
    historyServerUrl?: string;
    viewerPlugins?: Array<[ctor: PluginCtor, config?: object]>;
}
export declare const defaultPluginConfig: IUniverSlidesHistoryUIConfig;
