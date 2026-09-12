import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_LATEX_UI_PLUGIN_CONFIG_KEY = "docs-latex-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsLatexUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsLatexUIConfig;
