import type { BaseCellValue, IBaseAttachment, IBaseSnapshot, IGridProjection, ITableSnapshot } from '@univerjs/core';
import type { IBaseKeyboardOperationParams } from '../../commands/operations/keyboard.operation';
import type { IBasePeopleOption } from '../../components/panels/field-config/field-config-model';
import React from 'react';
interface IHierarchyChildrenGridProps {
    unitId: string;
    snapshot: IBaseSnapshot;
    table: ITableSnapshot;
    viewId: string;
    sourceProjection: IGridProjection;
    childIds: string[];
    query: string;
    hierarchyFieldId: string;
    rowHeight: number;
    onCellChange: (recordId: string, fieldId: string, value: BaseCellValue) => void | Promise<unknown>;
    uploadAttachment: (file: File) => Promise<IBaseAttachment>;
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
    registerCommit: (commit: (() => Promise<boolean>) | null) => void;
}
interface IGridCellAddress {
    recordId: string;
    fieldId: string;
}
interface IGridSize {
    width: number;
    height: number;
}
interface IGridScroll {
    x: number;
    y: number;
}
export declare function createHierarchyChildrenGridProjection(sourceProjection: IGridProjection, table: ITableSnapshot, childIds: readonly string[], query?: string): IGridProjection;
export declare function getHierarchyChildrenGridCellRect(projection: IGridProjection, recordId: string, fieldId: string, scroll: IGridScroll, rowHeight: number): {
    left: number;
    top: number;
    width: number;
    height: number;
} | null;
export declare function getHierarchyChildrenGridEditorStyle(rect: {
    left: number;
    top: number;
    width: number;
    height: number;
}, size: IGridSize): React.CSSProperties;
export declare function resolveHierarchyChildrenGridScroll(projection: IGridProjection, size: IGridSize, scroll: IGridScroll, rowHeight: number): IGridScroll;
export declare function revealHierarchyChildrenGridCell(projection: IGridProjection, size: IGridSize, scroll: IGridScroll, rowHeight: number, cell: IGridCellAddress): IGridScroll;
export declare function getHierarchyChildrenGridNextCell(projection: IGridProjection, cell: IGridCellAddress, action: Extract<IBaseKeyboardOperationParams['action'], 'move-left' | 'move-right' | 'move-up' | 'move-down' | 'tab-backward' | 'tab-forward'>): IGridCellAddress;
export declare function HierarchyChildrenGrid({ unitId, snapshot, table, viewId, sourceProjection, childIds, query, hierarchyFieldId, rowHeight, onCellChange, uploadAttachment, personOptions, groupOptions, registerCommit, }: IHierarchyChildrenGridProps): React.JSX.Element;
export {};
