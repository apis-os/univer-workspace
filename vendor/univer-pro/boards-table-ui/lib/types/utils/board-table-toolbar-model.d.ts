import type { ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { ISlideTableMergeToolbarState, ISlideTableSelection, ISlideTableToolbarAction, ISlideTableToolbarCellValues } from '@univerjs-pro/slides-table-ui';
export interface IBoardTableDeleteToolbarCommand {
    commandId: string;
    params: object;
    kind: 'row' | 'column';
}
export interface IBoardTableToolbarState {
    actions: ISlideTableToolbarAction[];
    mergeState: ISlideTableMergeToolbarState | null;
    values: ISlideTableToolbarCellValues;
}
export declare function resolveBoardTableToolbarActions(selection: ISlideTableSelection | null): ISlideTableToolbarAction[];
export declare function resolveBoardTableToolbarState(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): IBoardTableToolbarState;
export declare function buildBoardTableMergeToolbarCommand(selection: ISlideTableSelection | null, state: ISlideTableMergeToolbarState | null): {
    commandId: string;
    params: object;
} | null;
export declare function buildBoardTableDeleteToolbarCommand(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): IBoardTableDeleteToolbarCommand | null;
