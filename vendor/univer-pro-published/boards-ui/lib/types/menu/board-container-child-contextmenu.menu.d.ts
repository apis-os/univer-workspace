import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuItem } from '@univerjs/ui';
export declare const BOARD_CONTAINER_CHILD_MANAGE_MENU_ID = "board.menu.parent-container";
export declare function BoardContainerChildManageMenuFactory(): IMenuItem;
export declare function BoardContainerChildContextMenuMoveOutFactory(accessor?: IAccessor): IMenuButtonItem;
export declare function BoardContainerChildContextMenuSelectParentFactory(accessor?: IAccessor): IMenuButtonItem;
export declare function BoardContainerChildContextMenuFitParentFactory(accessor?: IAccessor): IMenuButtonItem;
