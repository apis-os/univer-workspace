import type { ISlideTableResource, ISlideTableSnapshot, ISlideTableStyleOptions, ISlideTableThemeSnapshot } from '../types';
import { Disposable } from '@univerjs/core';
export interface ICreateSlideTableOptions {
    id?: string;
    rows: number;
    columns: number;
    name?: string;
    description?: string;
    styleId?: string | null;
    columnWidth?: number;
    rowHeight?: number;
    options?: ISlideTableStyleOptions;
}
export interface IUpdateSlideTablePatch {
    name?: string | null;
    description?: string | null;
    styleId?: string | null;
    options?: ISlideTableStyleOptions;
    columns?: ISlideTableSnapshot['columns'];
    rows?: ISlideTableSnapshot['rows'];
    custom?: Record<string, unknown> | null;
}
type IUpdateSlideTableSnapshotPatch = IUpdateSlideTablePatch & {
    themeId?: string | null;
};
export declare function buildUpdatedSlideTableSnapshot(current: ISlideTableSnapshot, patch: IUpdateSlideTableSnapshotPatch): ISlideTableSnapshot;
export declare class SlideTableResourceService extends Disposable {
    private readonly _resources;
    ensureUnitResource(unitId: string): ISlideTableResource;
    loadUnit(unitId: string, resource: Partial<ISlideTableResource> | string | null | undefined): ISlideTableResource;
    unloadUnit(unitId: string): void;
    serializeUnit(unitId: string): string;
    getResource(unitId: string): ISlideTableResource;
    getTable(unitId: string, tableId: string): ISlideTableSnapshot | undefined;
    getTheme(unitId: string, themeId: string): ISlideTableThemeSnapshot | undefined;
    getThemes(unitId: string): Record<string, ISlideTableThemeSnapshot>;
    buildTable(options: ICreateSlideTableOptions): ISlideTableSnapshot;
    createTable(unitId: string, options: ICreateSlideTableOptions): ISlideTableSnapshot;
    setTable(unitId: string, table: ISlideTableSnapshot, theme?: ISlideTableThemeSnapshot): ISlideTableSnapshot;
    updateTable(unitId: string, tableId: string, patch: IUpdateSlideTablePatch): ISlideTableSnapshot | undefined;
    removeTable(unitId: string, tableId: string): ISlideTableSnapshot | undefined;
    dispose(): void;
    private _clone;
    private _deleteThemeIfUnused;
}
export {};
