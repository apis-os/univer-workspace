import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare const SHEET_SHAPE_FLIP_HORIZONTAL_MENU_ID = "sheet.menu.shape.flip-horizontal";
export declare const SHEET_SHAPE_FLIP_VERTICAL_MENU_ID = "sheet.menu.shape.flip-vertical";
export declare function SheetShapeFlipHorizontalMenuItemFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function SheetShapeFlipVerticalMenuItemFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
