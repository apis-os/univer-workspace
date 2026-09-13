/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { INumberUnit, ITable, Nullable } from '@univerjs/core';
import type { IDocumentSkeletonPage, IDocumentSkeletonRow, IDocumentSkeletonTable, IParagraphList } from '../../../../basics/i-document-skeleton-cached';
import type { ISectionBreakConfig } from '../../../../basics/interfaces';
import type { DataStreamTreeNode } from '../../view-model/data-stream-tree-node';
import type { DocumentViewModel } from '../../view-model/document-view-model';
import type { ICellSkeletonBuildState } from '../model/page';
import type { ILayoutContext } from '../tools';
import { TableAlignmentType } from '@univerjs/core';
export interface ITableSkeletonBuildState {
    ctx: ILayoutContext;
    curPage: IDocumentSkeletonPage;
    viewModel: DocumentViewModel;
    tableNode: DataStreamTreeNode;
    sectionBreakConfig: ISectionBreakConfig;
    table: ITable;
    tableSkeleton: IDocumentSkeletonTable;
    rowIndex: number;
    rowTop: number;
    tableWidth: number;
    complete: boolean;
    currentRowNode: Nullable<DataStreamTreeNode>;
    currentRowSkeleton: Nullable<IDocumentSkeletonRow>;
    currentColumnIndex: number;
    currentRowLeft: number;
    currentRowHeight: number;
    currentCellBuild: Nullable<ICellSkeletonBuildState>;
}
export declare function startTableSkeletonBuild(ctx: ILayoutContext, curPage: IDocumentSkeletonPage, viewModel: DocumentViewModel, tableNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig): Nullable<ITableSkeletonBuildState>;
export declare function stepTableSkeletonBuild(state: ITableSkeletonBuildState): boolean;
export declare function cachePrecomputedTableSkeleton(ctx: ILayoutContext, tableStartIndex: number, tableSkeleton: IDocumentSkeletonTable): void;
export declare function createTableSkeleton(ctx: ILayoutContext, curPage: IDocumentSkeletonPage, viewModel: DocumentViewModel, tableNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig): Nullable<IDocumentSkeletonTable>;
export declare function rollbackListCache(listLevel: Map<string, IParagraphList[][]>, table: DataStreamTreeNode): void;
export interface ISlicedTableSkeletonParams {
    skeTables: IDocumentSkeletonTable[];
    fromCurrentPage: boolean;
}
export interface ISlicedTableSkeletonBuildState {
    ctx: ILayoutContext;
    curPage: IDocumentSkeletonPage;
    viewModel: DocumentViewModel;
    tableNode: DataStreamTreeNode;
    sectionBreakConfig: ISectionBreakConfig;
    availableHeight: number;
    table: ITable;
    skeTables: IDocumentSkeletonTable[];
    createCache: ICreateTableCache;
    rowIndex: number;
    columnIndex: number;
    preparedCellPages: Map<number, IDocumentSkeletonPage[]>;
    pendingCellBuild: Nullable<ICellSkeletonBuildState>;
    complete: boolean;
    result: Nullable<ISlicedTableSkeletonParams>;
}
interface ICreateTableCache {
    rowTop: number;
    tableWidth: number;
    remainHeight: number;
    repeatRows: DataStreamTreeNode[];
    repeatRowsHeight: number;
}
export declare function startTableSkeletonsBuild(ctx: ILayoutContext, curPage: IDocumentSkeletonPage, viewModel: DocumentViewModel, tableNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, availableHeight: number): Nullable<ISlicedTableSkeletonBuildState>;
export declare function stepTableSkeletonsBuild(state: ISlicedTableSkeletonBuildState): boolean;
export declare function cachePrecomputedSlicedTableSkeletons(ctx: ILayoutContext, tableStartIndex: number, availableHeight: number, result: ISlicedTableSkeletonParams): void;
export declare function createTableSkeletons(ctx: ILayoutContext, curPage: IDocumentSkeletonPage, viewModel: DocumentViewModel, tableNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, availableHeight: number): ISlicedTableSkeletonParams;
export declare function getTableLeft(pageWidth: number, tableWidth: number, align: TableAlignmentType, indent?: INumberUnit): number;
export declare function getNullTableSkeleton(st: number, ed: number, table: ITable): IDocumentSkeletonTable;
export declare function getTableSliceId(tableId: string, sliceIndex: number): string;
export declare function getTableIdAndSliceIndex(tableSliceId: string): {
    tableId: string;
    sliceIndex: number;
};
export {};
