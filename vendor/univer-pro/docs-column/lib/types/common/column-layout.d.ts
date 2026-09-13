import type { IColumnGroup } from './column-types';
export interface IDocsColumnLayoutOptions {
    source: IColumnGroup;
    availableWidth: number;
    columnHeights?: number[];
}
export interface IDocsColumnLayoutColumn {
    columnId: string;
    left: number;
    width: number;
}
export interface IDocsColumnLayoutResult {
    mode: 'horizontal' | 'stack';
    width: number;
    height: number;
    columns: IDocsColumnLayoutColumn[];
}
export declare function calculateColumnLayout(options: IDocsColumnLayoutOptions): IDocsColumnLayoutResult;
