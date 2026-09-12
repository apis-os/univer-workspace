import type { ISlideTableCellRange, ISlideTableSnapshot } from '@univerjs-pro/slides-table';
import type { ISlideTableSelection } from '../services/slide-table-selection.service';
import type { ISlideTableMergeToolbarState, ISlideTableToolbarAction } from './slide-table-toolbar-shared-model';
import type { ISlideTableToolbarCellValues } from './slide-table-toolbar-values';
export type SlideTableMergeToolbarAction = 'merge' | 'unmerge';
export interface ISlideTableToolbarState {
    actions: ISlideTableToolbarAction[];
    mergeState: ISlideTableMergeToolbarState | null;
    values: ISlideTableToolbarCellValues;
}
export declare function resolveSlideTableToolbarActionsForSlideCommands(selection: ISlideTableSelection | null): ISlideTableToolbarAction[];
export declare function resolveSlideTableToolbarState(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): ISlideTableToolbarState;
export declare function buildSlideTableMergeToolbarCommandForSlideCommands(selection: ISlideTableSelection | null, action: SlideTableMergeToolbarAction | null, range: ISlideTableCellRange | null): {
    commandId: string;
    params: object;
} | null;
export declare function buildSlideTableDeleteToolbarCommandForSlideCommands(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): import("./slide-table-toolbar-shared-model").ISlideTableDeleteToolbarCommand | null;
