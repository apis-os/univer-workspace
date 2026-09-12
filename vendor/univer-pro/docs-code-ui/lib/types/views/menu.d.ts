import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuItem } from '@univerjs/ui';
import type { IDocsCodeLanguageOption } from '../common/languages';
import type { LocaleKey } from '../locale/types';
export declare const DOCS_CODE_LANGUAGE_MENU_ID = "docs-code-ui.menu.language";
export declare function DocsCodeInsertMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsCodeFloatInsertMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsCodeInsertBelowMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsCodeLanguageMenuFactory(accessor: IAccessor): IMenuItem<LocaleKey>;
export declare function createDocsCodeLanguageOptionMenuFactory(option: IDocsCodeLanguageOption): (accessor: IAccessor) => IMenuButtonItem<LocaleKey>;
export declare const DOCS_CODE_LANGUAGE_MENU_ITEMS: Record<string, {
    order: number;
    menuItemFactory: ReturnType<typeof createDocsCodeLanguageOptionMenuFactory>;
}>;
