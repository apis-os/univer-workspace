import type { MenuConfig } from '@univerjs/ui';
export declare const BOARDS_PRINT_PLUGIN_CONFIG_KEY = "boards-print.config";
export declare const configSymbol: unique symbol;
export interface IUniverBoardsPrintConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverBoardsPrintConfig;
