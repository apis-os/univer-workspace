import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare const SLIDES_EXCHANGE_OPERATION_ID = "slides-exchange-client.operation.exchange";
export declare function SlidesExchangeMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function ImportSlideMenuItemFactory(): IMenuButtonItem<LocaleKey>;
export declare function ExportSlideMenuItemFactory(): IMenuButtonItem<LocaleKey>;
