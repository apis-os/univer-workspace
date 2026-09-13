import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare const PRINT_MENU_ID = "sheet.menu.print";
export declare function PrintMenuFactory(accessor: IAccessor): IMenuItem<LocaleKey>;
export declare function PrintMenuItemFactory(): IMenuButtonItem<LocaleKey>;
export declare function ScreenshotMenuItemFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function PrintGridMenuItemFactory(): IMenuButtonItem<LocaleKey>;
