import type { RefObject } from 'react';
export interface IBoardPanelOutsidePointerDownOptions {
    ignoreSelectors?: string[];
}
export declare function useBoardPanelOutsidePointerDown(panelRef: RefObject<HTMLElement | null>, enabled: boolean, onOutsidePointerDown: () => void, options?: IBoardPanelOutsidePointerDownOptions): void;
