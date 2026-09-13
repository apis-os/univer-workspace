import type { ICellData, Injector, IRange, IRTreeItem, Nullable, Workbook } from '@univerjs/core';
import type { ITableJsonWidthData } from './type';
import { ResponseDataMode } from './type';
interface IReasoningTableColumnLink {
    tableId: string;
    columnId: string;
    linkType: string;
}
interface IReasoningTableColumn {
    id: string;
    Name: string;
    Type: string;
    Description: string;
    isCoded: boolean;
    isMeasure: boolean;
    isOpinionText: boolean;
    isBigText: boolean;
    isLink: boolean;
    isTitleRepeat: boolean;
    isUnique: boolean;
    links: IReasoningTableColumnLink[];
}
interface IReasoningTable {
    id: string;
    sheetId: string;
    range: IRange;
    name: string;
    description: string;
    rowTitleCount: number;
    mergeRowTitleCount: number;
    startStatisticRowCount: number;
    endStatisticRowCount: number;
    rowMergeTitleCountMap: Map<number, IRTreeItem[]>;
    rowMergeTitleState: boolean;
    columnMergeTitleState: boolean;
    columnMergeTitleCountMap: Map<number, IRTreeItem[]>;
    isMatchEnd: boolean;
    isMatchContinue: boolean;
    isTimeSeries: boolean;
    isTestTable: boolean;
    isUpdateTable: boolean;
    columns: IReasoningTableColumn[];
}
export declare class ReasoningTable {
    id: string;
    sheetId: string;
    range: IRange;
    name: string;
    description: string;
    rowTitleCount: number;
    mergeRowTitleCount: number;
    startStatisticRowCount: number;
    endStatisticRowCount: number;
    rowMergeTitleCountMap: Map<number, IRTreeItem[]>;
    rowMergeTitleState: boolean;
    columnMergeTitleState: boolean;
    columnMergeTitleCountMap: Map<number, IRTreeItem[]>;
    isMatchEnd: boolean;
    isMatchContinue: boolean;
    isTimeSeries: boolean;
    isTestTable: boolean;
    isUpdateTable: boolean;
    columns: IReasoningTableColumn[];
    constructor(args?: Partial<IReasoningTable>);
    private _isRowContinuous;
    intersectWithPreTables(reasoningTables: ReasoningTable[]): ReasoningTable[];
    intersectWithColumns(reasoningTable: ReasoningTable): boolean;
    saveTableToCache(cacheReasoningTables: ReasoningTable[]): ReasoningTable;
    insertCellData(r: number, c: number, cell: Nullable<ICellData>, endColumn?: number | null): void;
    dispose(): void;
}
export interface ITableOutputJsonFields {
    Description: string;
    IsCoded: boolean;
    IsMeasure: boolean;
    IsOpinionText: boolean;
    IsDate: boolean;
    OriginName: string;
}
export interface ITableOutputJson {
    TableName: string;
    Description: string;
    DataTypes: string[];
    FieldsCount: number;
    Fields: ITableOutputJsonFields[];
}
export declare function deduplicateReasoningTableKeys(resultReasoningTables: Record<string, ReasoningTable[]>): Set<string>;
export declare function handleUniverRecognizeTableAlg(workbook: Workbook, inject: Injector, responseDataMode?: ResponseDataMode | string): Record<string, ITableJsonWidthData[]>;
export declare function getCellValueRaw(cell: ICellData): import("@univerjs/core").CellValue | undefined;
export declare function getCellValue(cell: ICellData): string | undefined;
export declare function getRowsAfterTitle(data: (string | number | true)[][], rowTitleCount: number, count?: number): (string | number | true)[][];
export {};
