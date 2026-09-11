import type { MenuConfig } from '@univerjs/ui';
export declare const SLIDES_EXCHANGE_CLIENT_PLUGIN_CONFIG_KEY = "slides-exchange-client.config";
export declare const configSymbol: unique symbol;
export interface IUniverSlidesExchangeClientConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverSlidesExchangeClientConfig;
