import type { ISlideTableBorder, ISlideTableCellRange, ISlideTableFill, ISlideTableSnapshot, SlideTableBorderPresetEnum } from '@univerjs-pro/slides-table';
import type { HorizontalAlign, IDocTextFill } from '@univerjs/core';
import type { ISlideTableSelection } from '../services/slide-table-selection.service';
import { PresetListType, VerticalAlign } from '@univerjs/core';
export type SlideTableDistributeAxis = 'row' | 'column';
export type SlideTableTextAlignPreset = {
    axis: 'horizontal';
    value: HorizontalAlign;
} | {
    axis: 'vertical';
    value: VerticalAlign;
};
export declare const SLIDE_TABLE_CONTEXT_MENU_ACTIONS: {
    readonly InsertRowAbove: "insert-row-above";
    readonly InsertRowBelow: "insert-row-below";
    readonly InsertColumnLeft: "insert-column-left";
    readonly InsertColumnRight: "insert-column-right";
    readonly DeleteRows: "delete-rows";
    readonly DeleteColumns: "delete-columns";
    readonly MergeCells: "merge-cells";
    readonly UnmergeCells: "unmerge-cells";
    readonly DistributeRows: "distribute-rows";
    readonly DistributeColumns: "distribute-columns";
};
export type SlideTableContextMenuActionId = typeof SLIDE_TABLE_CONTEXT_MENU_ACTIONS[keyof typeof SLIDE_TABLE_CONTEXT_MENU_ACTIONS];
export interface ISlideTableContextMenuCommandIds {
    insertRows: string;
    insertColumns: string;
    deleteRows: string;
    deleteColumns: string;
    mergeCells: string;
    unmergeCells: string;
    updateTable: string;
}
export interface ISlideTableContextMenuAction {
    id: SlideTableContextMenuActionId;
    commandId: string;
    enabled: boolean;
}
export interface ISlideTableContextMenuCommand {
    commandId: string;
    params: object;
}
export declare function getSlideTableSelectionContext(selection: ISlideTableSelection | null): {
    elementId: string;
    range: ISlideTableCellRange;
    subUnitId: string;
    tableId: string;
    unitId: string;
} | null;
export declare function resolveSlideTableContextMenuActions(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null, commandIds: ISlideTableContextMenuCommandIds): ISlideTableContextMenuAction[];
export declare function buildSlideTableContextMenuCommand(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null, actionId: SlideTableContextMenuActionId, commandIds: ISlideTableContextMenuCommandIds): ISlideTableContextMenuCommand | null;
export declare function buildSlideTableDistributePatch(table: ISlideTableSnapshot, axis: SlideTableDistributeAxis, sourceRange?: ISlideTableCellRange): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableTextAlignPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, preset: SlideTableTextAlignPreset): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableListPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, listType: PresetListType | null): Partial<ISlideTableSnapshot>;
export declare function resolveSlideTableListState(table: ISlideTableSnapshot | null | undefined, sourceRange: ISlideTableCellRange | undefined, family: PresetListType.ORDER_LIST | PresetListType.BULLET_LIST): {
    active: boolean;
    mixed: boolean;
    value?: PresetListType;
};
export declare function buildSlideTableBackgroundColorPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, color: string | undefined): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableBackgroundFillPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, fill: ISlideTableFill | undefined): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableTextColorPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, color: string | undefined): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableTextFillPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, fill: IDocTextFill | undefined): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableBorderStylePatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, borderPatch: Partial<ISlideTableBorder>): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableBorderPresetPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, preset: SlideTableBorderPresetEnum, border?: ISlideTableBorder): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableFontFamilyPatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, fontFamily: string): Partial<ISlideTableSnapshot>;
export declare function buildSlideTableFontSizePatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, fontSize: number): Partial<ISlideTableSnapshot>;
export declare function canMergeSlideTableSelection(selection: ISlideTableSelection | null, table?: ISlideTableSnapshot | null): boolean;
export declare function canUnmergeSlideTableSelection(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): boolean;
export declare function canDeleteSlideTableRows(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): boolean;
export declare function canDeleteSlideTableColumns(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): boolean;
export declare function canDistributeSlideTableRows(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): boolean;
export declare function canDistributeSlideTableColumns(table: ISlideTableSnapshot | null | undefined, selection: ISlideTableSelection | null): boolean;
export declare function buildSlideTableTextStylePatch(table: ISlideTableSnapshot, sourceRange: ISlideTableCellRange, textStylePatch: Record<string, unknown>): Partial<ISlideTableSnapshot>;
