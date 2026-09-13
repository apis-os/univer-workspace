import type { IHostExternalReference } from '@univerjs-pro/engine-formula';
export declare const SHAPE_EDITOR_UI_PLUGIN_CONFIG_KEY = "shape-editor-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverShapeEditorUIConfig {
    /** Sets the initial visibility of Shape floating toolbars in supporting editors. */
    floatingToolbar?: boolean;
}
export interface IFormulaBindingHost {
    unitId: string;
    subUnitId?: string;
}
export interface IFormulaBindingEditorValue {
    formula: string;
    numberFormat?: {
        pattern: string;
    };
}
export interface IFormulaBindingEditorResult extends IFormulaBindingEditorValue {
    externalReferences: readonly IHostExternalReference[];
}
export declare const defaultPluginConfig: IUniverShapeEditorUIConfig;
