import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_CODE_UI_PLUGIN_CONFIG_KEY = "docs-code-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsCodeUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsCodeUIConfig;
