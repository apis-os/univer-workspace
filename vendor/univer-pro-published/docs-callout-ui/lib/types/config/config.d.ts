import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_CALLOUT_UI_PLUGIN_CONFIG_KEY = "docs-callout-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsCalloutUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsCalloutUIConfig;
