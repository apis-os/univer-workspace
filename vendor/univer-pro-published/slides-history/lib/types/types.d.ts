import type { HistoryChangeKind } from '@univerjs-pro/edit-history';
export interface ISlideHistoryLocation {
    slideId?: string;
}
export interface ISlideHistoryChange {
    id: string;
    kind: HistoryChangeKind;
    label: string;
    memberId: string;
    slideId: string;
    drawingId?: string;
}
