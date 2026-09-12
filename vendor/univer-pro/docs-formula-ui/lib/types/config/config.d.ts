import type { IUniverShapeEditorUIConfig } from '@univerjs-pro/shape-editor-ui';
import type { MenuConfig } from '@univerjs/ui';
export declare const DOCS_FORMULA_UI_PLUGIN_CONFIG_KEY = "docs-formula-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsFormulaUIConfig extends IUniverShapeEditorUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsFormulaUIConfig;
