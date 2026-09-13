import type { ISlidePage } from '@univerjs-pro/slides';
export interface ISlideObjectListItem {
    id: string;
    name: string;
    description?: string;
    visible: boolean;
    disabled: boolean;
    isGroup: boolean;
    elementOrderIndex: number;
    parentId?: string;
    children: ISlideObjectListItem[];
}
export interface ISlideObjectListSelectionResult {
    selectedIds: string[];
    focusedId: string | null;
}
export declare function resolveSlideObjectListItems(page: Pick<ISlidePage, 'elementOrder' | 'elements'> | null | undefined): ISlideObjectListItem[];
export declare function collectSlideObjectListItemIds(items: ISlideObjectListItem[]): string[];
export declare function resolveSlideObjectListVisibilityChangeIds(items: ISlideObjectListItem[], itemIds: string[], visible: boolean): string[];
export declare function resolveSlideObjectListSelectionTargetId(items: ISlideObjectListItem[], itemId: string | null | undefined): string | null;
export declare function resolveSlideObjectListSelectedIds(items: ISlideObjectListItem[], selectedIds: string[]): string[];
export declare function resolveSlideObjectListFocusedId(items: ISlideObjectListItem[], focusedId: string | null | undefined, selectedIds?: string[]): string | null;
export declare function resolveSlideObjectListNextSelection(items: ISlideObjectListItem[], selectedIds: string[], itemId: string, multiSelect: boolean): ISlideObjectListSelectionResult;
