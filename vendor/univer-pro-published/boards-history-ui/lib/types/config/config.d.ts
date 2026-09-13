import type { PluginCtor } from '@univerjs/core';
export declare const BOARDS_HISTORY_UI_PLUGIN_CONFIG_KEY = "boards-history-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverBoardsHistoryUIConfig {
    univerContainerId?: string;
    historyServerUrl?: string;
    viewerPlugins?: Array<[ctor: PluginCtor, config?: object]>;
}
export declare const defaultPluginConfig: IUniverBoardsHistoryUIConfig;
