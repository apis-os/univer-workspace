import type { ISlideTableBorder, ISlideTableCellRange, ISlideTableCellStyle, ISlideTableSnapshot, SlideTableBorderPresetEnum } from '@univerjs-pro/slides-table';
import type { ISlideTableSelection } from '../services/slide-table-selection.service';
export declare const SLIDE_TABLE_TOOLBAR_ACTIONS: {
    readonly MergeCells: "merge-cells";
    readonly UnmergeCells: "unmerge-cells";
    readonly SetCellStyle: "set-cell-style";
    readonly SetBorderPreset: "set-border-preset";
};
export type SlideTableToolbarActionId = typeof SLIDE_TABLE_TOOLBAR_ACTIONS[keyof typeof SLIDE_TABLE_TOOLBAR_ACTIONS];
export interface ISlideTableToolbarCommandIds {
    mergeCells: string;
    unmergeCells: string;
    setCellStyle: string;
    setBorderPreset: string;
    deleteRows?: string;
    deleteColumns?: string;
}
export interface ISlideTableToolbarAction {
    id: SlideTableToolbarActionId;
    commandId: string;
    enabled: boolean;
}
export type SlideTableMergeToolbarAction = 'merge' | 'unmerge';
export interface ISlideTableMergeToolbarState {
    action: SlideTableMergeToolbarAction;
    range: ISlideTableCellRange;
}
export interface ISlideTableMergeToolbarCommandIds {
    mergeCells: string;
    unmergeCells: string;
}
export interface ISlideTableToolbarCommand {
    commandId: string;
    params: object;
}
export interface ISlideTableDeleteToolbarCommand extends ISlideTableToolbarCommand {
    kind: 'row' | 'column';
}
export declare function resolveSlideTableToolbarActions(selection: ISlideTableSelection | null, commandIds: ISlideTableToolbarCommandIds): ISlideTableToolbarAction[];
export declare function buildSlideTableMergeCellsCommandParams(selection: ISlideTableSelection | null): {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
} | null;
export declare function buildSlideTableUnmergeCellsCommandParams(selection: ISlideTableSelection | null): {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
} | null;
export declare function buildSlideTableMergeToolbarCommand(selection: ISlideTableSelection | null, state: ISlideTableMergeToolbarState | null, commandIds: ISlideTableMergeToolbarCommandIds): ISlideTableToolbarCommand | null;
export declare function buildSlideTableDeleteToolbarCommand(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null, commandIds: {
    deleteRows: string;
    deleteColumns: string;
}): ISlideTableDeleteToolbarCommand | null;
export declare function buildSlideTableCellStyleCommandParams(selection: ISlideTableSelection | null, style: ISlideTableCellStyle): {
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
    style: ISlideTableCellStyle;
} | null;
export declare function buildSlideTableBorderPresetCommandParams(selection: ISlideTableSelection | null, preset: SlideTableBorderPresetEnum, border?: ISlideTableBorder): {
    border?: ISlideTableBorder | undefined;
    unitId: string;
    tableId: string;
    range: ISlideTableCellRange;
    preset: SlideTableBorderPresetEnum;
} | null;
export declare function resolveSlideTableMergeToolbarAction(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): ISlideTableMergeToolbarState | null;
export declare function findSlideTableMergeRangeInSelection(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange): ISlideTableCellRange | null;
