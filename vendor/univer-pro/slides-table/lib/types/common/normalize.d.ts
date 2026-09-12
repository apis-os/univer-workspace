import type { ISlideTableResource, ISlideTableSnapshot } from '../types';
export interface INormalizeSlideTableSnapshotOptions {
    id?: string;
    rowCount?: number;
    columnCount?: number;
    rowHeights?: unknown;
    columnWidths?: unknown;
    defaultRowHeight?: number;
    defaultColumnWidth?: number;
}
export declare function normalizeSlideTableResource(resource: unknown): ISlideTableResource;
export declare function normalizeSlideTableSnapshot(source: unknown, options?: INormalizeSlideTableSnapshotOptions): ISlideTableSnapshot | undefined;
