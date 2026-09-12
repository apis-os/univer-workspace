import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_TABLE_UI_PLUGIN_CONFIG_KEY = "docs-table-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsTableUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsTableUIConfig;
