import type { ColumnLayoutType, ColumnResponsiveType, INumberUnit } from '@univerjs/core';
export declare enum ColumnPosition {
    LEFT = "left",
    RIGHT = "right"
}
export declare const ColumnDataStreamTreeTokenType: {
    readonly COLUMN_GROUP_START: "\u0012";
    readonly COLUMN_START: "\u0013";
    readonly COLUMN_END: "\u0014";
    readonly COLUMN_GROUP_END: "\u0015";
};
export interface IColumn {
    columnId: string;
    widthRatio: number;
    minWidth?: INumberUnit;
}
export interface ICustomColumnGroup {
    /** Inclusive index of `COLUMN_GROUP_START`. */
    startIndex: number;
    /** Inclusive index of the matching `COLUMN_GROUP_END`. */
    endIndex: number;
    columnGroupId: string;
    columns?: IColumn[];
    gap?: INumberUnit;
    layout?: ColumnLayoutType;
    responsive?: ColumnResponsiveType;
    version?: number;
}
declare module '@univerjs/core' {
    interface IDocumentBody {
        columnGroups?: ICustomColumnGroup[];
    }
}
export interface IColumnGroup {
    columnGroupId: string;
    columns: IColumn[];
    gap: INumberUnit;
    layout: ColumnLayoutType;
    responsive: ColumnResponsiveType;
    version?: number;
}
