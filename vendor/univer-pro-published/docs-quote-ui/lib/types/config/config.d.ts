import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_QUOTE_UI_PLUGIN_CONFIG_KEY = "docs-quote-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsQuoteUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsQuoteUIConfig;
