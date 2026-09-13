export declare const EDIT_HISTORY_PLUGIN_CONFIG_KEY = "edit-history.config";
export declare const configSymbol: unique symbol;
export interface IUniverEditHistoryConfig {
    historyServerUrl?: string;
    pageSize?: number;
}
export declare const defaultPluginConfig: IUniverEditHistoryConfig;
