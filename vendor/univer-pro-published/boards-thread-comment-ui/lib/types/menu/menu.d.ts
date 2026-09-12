import { getMenuHiddenObservable, MenuItemType } from '@univerjs/ui';
type MenuAccessor = Parameters<typeof getMenuHiddenObservable>[0];
export declare function AddBoardElementCommentMenuFactory(accessor: MenuAccessor): {
    id: string;
    type: MenuItemType;
    icon: string;
    title: string;
    tooltip: string;
    hidden$: import("rxjs").Observable<boolean>;
    disabled$: import("rxjs").Observable<boolean>;
};
export {};
