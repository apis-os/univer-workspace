import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardSelectionRect } from './board-selection-geometry.util';
export interface IBoardElementSelectionOverlayItem {
    elementId: string;
    rect: IBoardSelectionRect;
}
export interface IBoardElementSelectionOverlay {
    items: IBoardElementSelectionOverlayItem[];
    bounds: IBoardSelectionRect;
}
export interface IResolveBoardElementSelectionOverlayOptions {
    selectedIds: string[];
    elementData: Record<string, IBoardElementData>;
}
export declare function resolveBoardElementSelectionOverlay(options: IResolveBoardElementSelectionOverlayOptions): IBoardElementSelectionOverlay | null;
