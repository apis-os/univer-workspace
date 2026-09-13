import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
import { MenuItemType } from '@univerjs/ui';
export declare const SHEET_SPARKLINE_CONTEXT_MENU_ID = "sheet.sparkline.context-menu-id";
export declare function SheetSparklineMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function SheetSparklineContextMenu(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function SheetRemoveSparklineContextMenuFactory(accessor: IAccessor): {
    id: string;
    type: MenuItemType;
    title: string;
    tooltip: string;
    disabled$: import("rxjs").Observable<boolean>;
};
export declare function SheetSparklinePanelMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
