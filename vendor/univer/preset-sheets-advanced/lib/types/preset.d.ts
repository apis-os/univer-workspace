import type { IUniverEngineFormulaConfig } from '@univerjs-pro/engine-formula';
import type { IUniverSheetsExchangeClientConfig } from '@univerjs-pro/sheets-exchange-client';
import type { IUniverSheetsPivotConfig } from '@univerjs-pro/sheets-pivot';
import type { IUniverSheetsPrintConfig } from '@univerjs-pro/sheets-print';
import type { IPreset } from '@univerjs/presets';
import '@univerjs-pro/engine-shape/facade';
import '@univerjs-pro/engine-chart/facade';
import '@univerjs-pro/sheets-pivot/facade';
import '@univerjs-pro/engine-formula/facade';
import '@univerjs-pro/sheets-print/facade';
import '@univerjs-pro/sheets-chart/facade';
import '@univerjs-pro/chart-ui/facade';
import '@univerjs-pro/sheets-outline/facade';
import '@univerjs-pro/sheets-shape/facade';
import '@univerjs-pro/sheets-sparkline/facade';
import '@univerjs-pro/exchange-client/facade';
import '@univerjs-pro/sheets-exchange-client/facade';
export type * from '@univerjs-pro/engine-chart/facade';
export type * from '@univerjs-pro/engine-formula/facade';
export type * from '@univerjs-pro/engine-shape/facade';
export type * from '@univerjs-pro/exchange-client/facade';
export type * from '@univerjs-pro/sheets-chart/facade';
export type * from '@univerjs-pro/sheets-exchange-client/facade';
export type * from '@univerjs-pro/sheets-outline/facade';
export type * from '@univerjs-pro/sheets-pivot/facade';
export type * from '@univerjs-pro/sheets-print/facade';
export type * from '@univerjs-pro/sheets-shape/facade';
export type * from '@univerjs-pro/sheets-sparkline/facade';
export interface IUniverSheetsAdvancedPresetConfig {
    universerEndpoint?: string;
    license?: string;
    useWorker?: boolean;
    formula?: Pick<IUniverEngineFormulaConfig, 'function'>;
    exchangeClientOptions?: Partial<IUniverSheetsExchangeClientConfig>;
    print?: Partial<IUniverSheetsPrintConfig>;
    pivot?: Pick<IUniverSheetsPivotConfig, 'maxLimitItemCount'>;
}
/**
 * This preset helps you create Univer Sheets with advanced features.
 */
export declare function UniverSheetsAdvancedPreset(config?: Partial<IUniverSheetsAdvancedPresetConfig>): IPreset;
