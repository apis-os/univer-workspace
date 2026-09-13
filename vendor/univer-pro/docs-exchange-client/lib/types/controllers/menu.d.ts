import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare const DOCS_EXCHANGE_OPERATION_ID = "docs-exchange-client.operation.exchange";
export declare function DocsExchangeMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function ImportDocMenuItemFactory(): IMenuButtonItem<LocaleKey>;
export declare function ExportDocMenuItemFactory(): IMenuButtonItem<LocaleKey>;
