import type { PluginCtor } from '@univerjs/core';
export declare const DOCS_HISTORY_UI_PLUGIN_CONFIG_KEY = "docs-history-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsHistoryUIConfig {
    univerContainerId?: string;
    historyServerUrl?: string;
    viewerPlugins?: Array<[ctor: PluginCtor, config?: object]>;
}
export declare const defaultPluginConfig: IUniverDocsHistoryUIConfig;
