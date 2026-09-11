import type { MenuConfig } from '@univerjs/ui';
export declare const SLIDES_PRINT_PLUGIN_CONFIG_KEY = "slides-print.config";
export declare const configSymbol: unique symbol;
export interface IUniverSlidesPrintConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverSlidesPrintConfig;
