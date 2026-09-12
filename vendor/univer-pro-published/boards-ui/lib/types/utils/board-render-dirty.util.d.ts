import type { IBoardElementData, IBoardElementSearch } from '@univerjs-pro/boards';
export interface IResolveBoardRenderDirtyElementIdsOptions {
    unitId: string;
    subUnitId: string;
    elementData: Record<string, IBoardElementData>;
    updates: readonly IBoardElementSearch[];
}
export declare function resolveBoardRenderDirtyElementIds({ unitId, subUnitId, elementData, updates, }: IResolveBoardRenderDirtyElementIdsOptions): string[];
