import type { DataField } from '../field/data-field';
import type { IDimensionMapItem, IMeasuresMapItem, IPivotSummaryLevelPool, IPivotTableQueryData, IPivotTableValueFieldQueryData, IPivotTableValueFilter, IPivotTableValueSortInfo, ITupleItem, IValueFilterInfoItem, PivotErrorTypeEnum, PivotSubtotalTypeEnum } from '../types';
import type { TupleGroup } from './tuple-group';
import { PivotDataFieldSortOperatorEnum } from '../types';
import { NodeTree } from './node-tree';
export declare class SummaryManager {
    counter: number;
    rowDimOrder: number[];
    colDimOrder: number[];
    rowTableIdList: string[];
    colTableIdList: string[];
    rowDeep: number;
    colDeep: number;
    measureCount: number;
    leafCount: number;
    measuresMap: Record<string, IMeasuresMapItem>;
    /**
     * @property The tuples of the pivot table, it contains the path, indexes, and save the measure value of each tuple.
     */
    tuples: ITupleItem[];
    /**
     * @property The map of tuple, it is used to quickly find the tuple by the path of tuple. the key is the path of tuple, the value is the index of tuple in tuples.
     */
    tupleMap: Record<string, number>;
    /**
     * @property The dimensionIdList, it contains the id of dimension fields.Only the the row and col fields are dimension fields.
     */
    dimensionIdList: string[];
    dimensionTableIdList: string[];
    /**
     * @property The measureIdList, it contains the id of measure fields.It used to quickly find the measure field.
     */
    measureIdList: string[];
    _rowLevelPool: IPivotSummaryLevelPool;
    _colLevelPool: IPivotSummaryLevelPool;
    rowNodeTree: NodeTree;
    colNodeTree: NodeTree;
    dimensionMap: Record<string, IDimensionMapItem>;
    /**
     * fist Record key is combinePathMap
     */
    combinePathMap: Record<string, Record<string, number>>;
    collapseInfo: Record<string, boolean | Record<string, boolean>>;
    dimensionSortInfo: Record<string, {
        type: PivotDataFieldSortOperatorEnum;
        sortMap: Record<string, number>;
    }>;
    valueSortInfo: Record<string, IPivotTableValueSortInfo>;
    valueFilterInfo: IValueFilterInfoItem[];
    subtotalMap: Record<string, {
        subTotal: PivotSubtotalTypeEnum;
        dataFieldId: string;
    }>;
    private _showDataAsResolver;
    private _defaultSortLocale;
    private _sortCompareCache;
    constructor(queryData: IPivotTableQueryData, tupleGroup: TupleGroup, defaultSortLocale?: string);
    createSummaryLabelSortedMap(queryData: IPivotTableQueryData): void;
    getCellValue(index: number, valueInfo: IPivotTableValueFieldQueryData): number | {
        errorType: PivotErrorTypeEnum;
    } | undefined;
    prepareShowDataAs(queryData: IPivotTableQueryData): void;
    clearShowDataAsCache(): void;
    getSortedMap(tableFieldId: string, dataField: DataField, sortLocale?: string): Record<string, number>;
    doSummary(): void;
    resort(queryData: IPivotTableQueryData, defaultSortLocale?: string): void;
    private _applyLabelSorts;
    private _applyValueSorts;
    private _getSortCompare;
    private _getIndex;
    buildNodeTree(activeLeafMask: Uint8Array): void;
    private _createValueFilterLevelPool;
    createTupleWithoutCheck(paths: string[], nodeIndex: number, tupleKey: string): void;
    _buildNodeTreeImp(dimOrder: number[], tableIdList: string[], levelPool: IPivotSummaryLevelPool, nodePathStr: string, activeLeafMask: Uint8Array): NodeTree;
    combinePathMapList(colPathMapList: Record<string, number>[], basePath: string): Record<string, number>;
    calculateListSubtotal(tupleItem: ITupleItem, indexes: number[]): void;
    calculateSubtotal(activeLeafMask: Uint8Array): void;
    getPathKeyWithFiledId(paths: string[], tableIdList: string[]): string;
    ensureTupleItem(index: number, paths: string[], tableIdList: string[]): void;
    ensureTupleItemByString(index: number, pathString: string): void;
    /**
     * - create tuple if not exist
     * @param {string[]} paths the path of tuple
     * @param {string} [pathsStr] the joined path string of tuple
     * @returns {void}
     */
    createTuple(paths: string[], pathsStr?: string, nodeIndex?: number): void;
    _calculateValueFilter(): Uint8Array<ArrayBuffer>;
    _doValueFilter(fieldId: string, valueFieldId: string, filterInfo: IPivotTableValueFilter, activeLeafMask: Uint8Array, rowLevelPool: IPivotSummaryLevelPool, colLevelPool: IPivotSummaryLevelPool): void;
    /**
     * get the filter tree by fieldId, if the fieldId is in rowTableIdList, return rowNodeTree, if the fieldId is in colTableIdList, return colNodeTree
     * @param fieldId The base field id of the value filter.
     */
    _getValueFilterTree(fieldId: string, rowLevelPool: IPivotSummaryLevelPool, colLevelPool: IPivotSummaryLevelPool): {
        pool: IPivotSummaryLevelPool;
        fieldIdList: string[];
    } | null;
    _calculateSubtotalImp(levelPool: IPivotSummaryLevelPool, activeLeafMask: Uint8Array): void;
}
