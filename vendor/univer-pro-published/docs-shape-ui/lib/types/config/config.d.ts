import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_SHAPE_UI_PLUGIN_CONFIG_KEY = "docs-shape-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsShapeUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsShapeUIConfig;
