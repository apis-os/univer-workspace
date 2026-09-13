import type { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_EXCHANGE_CLIENT_PLUGIN_CONFIG_KEY = "sheets-exchange-client.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsExchangeClientConfig {
    menu?: MenuConfig;
    /**
     * The minimum number of rows in the worksheet after import.
     * @default 1
     */
    minSheetRowCount?: number;
    /**
     * The minimum number of columns in the worksheet after import.
     * @default 1
     */
    minSheetColumnCount?: number;
    /**
     * Whether to disable converting cell images to link on export.
     * If the cell image source is a URL, the default behavior is to convert the url to the cell value on export.
     * Because the server will download all the resource files, when there are many images, it will consume a lot of resources and take a long time.
     * @default true
     */
    disableCellImageConversion?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsExchangeClientConfig;
