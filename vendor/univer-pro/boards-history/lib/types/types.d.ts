import type { HistoryChangeKind } from '@univerjs-pro/edit-history';
export interface IBoardHistoryLocation {
    pageId?: string;
}
export interface IBoardHistoryChange {
    id: string;
    kind: HistoryChangeKind;
    label: string;
    memberId: string;
    pageId: string;
    elementId?: string;
}
