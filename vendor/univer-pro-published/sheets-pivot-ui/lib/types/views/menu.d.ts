import type { PivotDateGroupFieldDateTypeEnum } from '@univerjs-pro/engine-pivot';
import type { IAccessor } from '@univerjs/core';
import type { IMenuItem } from '@univerjs/ui';
import type { IPivotShowDataAsRule } from '../commands/operations/set-pivot-show-data-as.operation';
import type { LocaleKey } from '../locale/types';
import { PivotShowAsTypeEnum } from '@univerjs-pro/engine-pivot';
export declare const PIVOT_DATE_GROUP_MENU_ID = "sheet.pivot.context-menu.date-group";
export declare const PIVOT_DATE_GROUP_MENU_ITEM_PREFIX = "sheet.pivot.context-menu.date-group.";
export declare const PIVOT_SHOW_DATA_AS_MENU_ID = "sheet.pivot.context-menu.show-data-as";
export declare const PIVOT_SHOW_DATA_AS_MENU_ITEM_PREFIX = "sheet.pivot.context-menu.show-data-as.";
export declare const PIVOT_VALUE_FILTER_MENU_ID = "sheet.pivot.context-menu.value-filter";
export declare function sheetsPivotTableToolbarMenuFactory(accessor: IAccessor): IMenuItem<LocaleKey>;
export declare function sheetsPivotDateGroupContextMenuFactory(accessor: IAccessor): IMenuItem<LocaleKey>;
export declare function sheetsPivotDateGroupItemMenuFactory(dateType: PivotDateGroupFieldDateTypeEnum): (accessor: IAccessor) => IMenuItem<LocaleKey>;
export declare function getPivotDateGroupMenuItemId(dateType: PivotDateGroupFieldDateTypeEnum): string;
export declare const PIVOT_DATE_GROUP_MENU_FACTORIES: {
    dateType: PivotDateGroupFieldDateTypeEnum;
    id: string;
    menuItemFactory: (accessor: IAccessor) => IMenuItem<LocaleKey>;
}[];
export declare function sheetsPivotShowDataAsContextMenuFactory(accessor: IAccessor): IMenuItem<LocaleKey>;
export declare function sheetsPivotShowDataAsItemMenuFactory(rule: IPivotShowDataAsRule): (accessor: IAccessor) => IMenuItem<LocaleKey>;
export declare function getPivotShowDataAsMenuItemId(type: PivotShowAsTypeEnum): string;
export declare const PIVOT_SHOW_DATA_AS_MENU_FACTORIES: {
    rule: IPivotShowDataAsRule;
    id: string;
    menuItemFactory: (accessor: IAccessor) => IMenuItem<LocaleKey>;
}[];
export declare function sheetsPivotValueFilterContextMenuFactory(accessor: IAccessor): IMenuItem<LocaleKey>;
