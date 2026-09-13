import type { IBoardElementData, IBoardPageElement } from '@univerjs-pro/boards';
export interface IBoardObjectListItem {
    id: string;
    name: string;
    visible: boolean;
    selectable: boolean;
    disabled: boolean;
    isGroup: boolean;
    elementOrderIndex: number;
    parentId?: string;
    children: IBoardObjectListItem[];
}
export interface IBoardObjectListSelectionResult {
    selectedIds: string[];
    focusedId: string | null;
}
export declare function resolveBoardObjectListItems(map: {
    data: Record<string, IBoardElementData>;
    order: string[];
} | null | undefined): IBoardObjectListItem[];
export declare function collectBoardObjectListItemIds(items: IBoardObjectListItem[]): string[];
export declare function resolveBoardObjectListVisibilityChangeIds(items: IBoardObjectListItem[], itemIds: string[], visible: boolean): string[];
export declare function resolveBoardObjectListSelectionTargetId(items: IBoardObjectListItem[], itemId: string | null | undefined): string | null;
export declare function resolveBoardObjectListSelectedIds(items: IBoardObjectListItem[], selectedIds: string[]): string[];
export declare function resolveBoardObjectListFocusedId(items: IBoardObjectListItem[], focusedId: string | null | undefined, selectedIds?: string[]): string | null;
export declare function resolveBoardObjectListNextSelection(items: IBoardObjectListItem[], selectedIds: string[], itemId: string, multiSelect: boolean): IBoardObjectListSelectionResult;
export declare function getBoardElementDisplayName(element: IBoardPageElement): string;
