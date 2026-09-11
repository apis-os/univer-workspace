import type { MenuConfig } from '@univerjs/ui';
import { ExchangeBaseExportMode, ExchangeBaseFormulaPolicy, ExchangeBaseImportMode } from '@univerjs-pro/exchange-client';
export declare const BASES_EXCHANGE_CLIENT_PLUGIN_CONFIG_KEY = "bases-exchange-client.config";
export declare const configSymbol: unique symbol;
export interface IUniverBasesExchangeClientConfig {
    menu?: MenuConfig;
    /**
     * Controls which regions of an imported Excel workbook become Base tables.
     * See {@link ExchangeBaseImportMode} for the behavior of each mode.
     * @default ExchangeBaseImportMode.AUTO
     */
    importSourceMode?: ExchangeBaseImportMode;
    /**
     * Controls how Excel formulas are handled when importing into Base.
     * See {@link ExchangeBaseFormulaPolicy} for the behavior of each policy.
     * @default ExchangeBaseFormulaPolicy.CONVERT_THEN_VALUES
     */
    importFormulaPolicy?: ExchangeBaseFormulaPolicy;
    /**
     * Controls whether Base data is exported as native Excel tables or ordinary worksheet ranges.
     * See {@link ExchangeBaseExportMode} for the behavior of each mode.
     * @default ExchangeBaseExportMode.TABLES
     */
    exportStructureMode?: ExchangeBaseExportMode;
    /**
     * Controls how Base formulas are handled when exporting to Excel.
     * See {@link ExchangeBaseFormulaPolicy} for the behavior of each policy.
     * @default ExchangeBaseFormulaPolicy.FAIL
     */
    exportFormulaPolicy?: ExchangeBaseFormulaPolicy;
}
export declare const defaultPluginConfig: IUniverBasesExchangeClientConfig;
