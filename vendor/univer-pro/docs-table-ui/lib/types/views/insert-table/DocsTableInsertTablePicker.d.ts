import type { IAccessor } from '@univerjs/core';
import type { IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../../locale/types';
export declare const DOCS_UI_TABLE_MENU_ID = "doc.menu.table";
export declare const DOCS_TABLE_INSERT_TABLE_PICKER_COMPONENT = "docs-table-ui.insert-table-picker";
interface IDocsTableInsertTablePickerProps {
    onChange?: (value: string) => void;
}
export declare function DocsTableCreateTableMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function DocsTableCreateTableContextMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function DocsTableCreateTableTMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
export declare function getDocsTableInsertTableHiddenObservable(accessor: IAccessor): import("rxjs").Observable<boolean>;
export declare function DocsTableInsertTablePicker(props: IDocsTableInsertTablePickerProps): import("react").JSX.Element;
export {};
