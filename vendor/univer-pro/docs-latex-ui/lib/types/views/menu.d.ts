import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { FormulaTemplateCategory } from '../common/formula-templates';
import type { LocaleKey } from '../locale/types';
export declare function DocsLatexInsertMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsLatexFloatInsertMenuFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function DocsLatexTemplateMenuFactory(category: FormulaTemplateCategory): () => IMenuSelectorItem<LocaleKey>;
