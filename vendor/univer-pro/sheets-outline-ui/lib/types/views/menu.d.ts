import type { IAccessor } from '@univerjs/core';
import type { IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
import { DimensionOutlineAxis } from '@univerjs-pro/sheets-outline';
export declare const SHEET_OUTLINE_TOOLBAR_GROUP_MENU_ID = "sheet.toolbar.dimension-outline.group";
export declare function SheetOutlineToolbarGroupMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey, OutlineMenuAction, OutlineMenuAction>;
export declare const SHEET_OUTLINE_CONTEXT_MENU_ID = "sheet.contextMenu.dimension-outline";
export declare function SheetOutlineRowContextMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey, DimensionOutlineAxis, DimensionOutlineAxis>;
export declare function SheetOutlineColumnContextMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey, DimensionOutlineAxis, DimensionOutlineAxis>;
declare enum OutlineMenuAction {
    GROUP = "group",
    UNGROUP = "ungroup"
}
export {};
