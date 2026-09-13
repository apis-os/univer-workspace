import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardSelectionContext } from '../services/board-element-state.service';
export interface IResolveSelectedBoardConnectorDataOptions {
    currentUnitId: string | null | undefined;
    context: IBoardSelectionContext | null;
    selectedIds: readonly string[];
    focusedId: string | null;
    getElementById: (unitId: string, subUnitId: string, elementId: string) => IBoardElementData | null | undefined;
}
export declare function resolveSelectedBoardConnectorData(options: IResolveSelectedBoardConnectorDataOptions): IBoardElementData | null;
