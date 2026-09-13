import type { IColumnGroup } from './column-types';
export interface IDocsColumnResizeDragOptions {
    source: IColumnGroup;
    availableWidth: number;
    separatorIndex: number;
    delta: number;
}
export declare function calculateResizeDragWidthRatios(options: IDocsColumnResizeDragOptions): number[] | null;
