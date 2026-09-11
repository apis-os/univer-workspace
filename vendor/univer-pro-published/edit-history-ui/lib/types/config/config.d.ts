import type { IHistorySessionDescriptor } from '@univerjs-pro/edit-history';
export declare const EDIT_HISTORY_UI_PLUGIN_CONFIG_KEY = "edit-history-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverEditHistoryUIConfig {
    viewerMode?: boolean;
    descriptor?: IHistorySessionDescriptor;
    canRestore?: boolean;
    onClose?: () => void;
    onRestore?: (revision: number) => void | Promise<void>;
}
export declare const defaultPluginConfig: IUniverEditHistoryUIConfig;
