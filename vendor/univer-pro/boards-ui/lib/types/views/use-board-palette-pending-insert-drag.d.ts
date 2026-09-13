import type { MouseEvent, PointerEvent } from 'react';
export interface IUseBoardPalettePendingInsertDragOptions {
    beginDrag: () => void;
    cancelDrag: () => void;
}
export declare function useBoardPalettePendingInsertDrag(options: IUseBoardPalettePendingInsertDragOptions): {
    onClickCapture: (event: MouseEvent<HTMLElement>) => void;
    onPointerDown: (event: PointerEvent<HTMLElement>) => void;
};
