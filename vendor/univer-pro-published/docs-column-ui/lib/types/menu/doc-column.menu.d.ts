import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare function DocsColumnInsertMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function DocsColumnInsertBelowMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function DocsColumnAddColumnMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsColumnDeleteColumnMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsColumnDeleteColumnGroupMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsColumnEqualWidthMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
