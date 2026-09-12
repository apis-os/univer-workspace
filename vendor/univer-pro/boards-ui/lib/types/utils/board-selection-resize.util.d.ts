import type { IBoardElementData } from '@univerjs-pro/boards';
export interface IBoardElementSelectionResizeResult {
    elementId: string;
    element: IBoardElementData['element'];
    transform: IBoardElementData['transform'];
}
