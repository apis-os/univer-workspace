import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare const SHEETS_EXCHANGE_OPERATION_ID = "sheets-exchange-client.operation.exchange";
export declare function SheetsExchangeMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function ImportSheetMenuItemFactory(): IMenuButtonItem<LocaleKey>;
export declare function ExportSheetMenuItemFactory(): IMenuButtonItem<LocaleKey>;
