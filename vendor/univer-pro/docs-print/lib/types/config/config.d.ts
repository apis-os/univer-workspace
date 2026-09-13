import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_PRINT_PLUGIN_CONFIG_KEY = "UNIVER_DOCS_PRINT";
export declare const configSymbol: unique symbol;
export interface IUniverDocsPrintConfig {
    menu?: MenuConfig[];
}
export declare const defaultPluginConfig: IUniverDocsPrintConfig;
