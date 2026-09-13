import type { IHistoryComparison, IHistoryMember } from '@univerjs-pro/edit-history';
import type { DocumentBlockRangeType, IDocumentBody, JSONXPath } from '@univerjs/core';
export type DocHistoryChangeKind = 'insert' | 'delete' | 'modify' | 'restore';
export type DocHistoryChangeCategory = 'text' | 'style' | 'paragraph' | 'section' | 'custom-range' | 'block-range' | 'table' | 'drawing' | 'custom-block' | 'column-group' | 'metadata';
export interface IDocHistoryAnchor {
    segmentId: string;
    sectionId?: string;
    paragraphId?: string;
    offsetInParagraph: number;
    absoluteOffset: number;
    affinity?: 'forward' | 'backward';
    previousParagraphId?: string;
    nextParagraphId?: string;
}
export interface IDocHistoryTableCell {
    row: number;
    column: number;
}
export interface IDocHistoryTableEdit {
    path: JSONXPath;
    previousValue?: unknown;
    nextValue?: unknown;
}
export interface IDocHistoryChange {
    id: string;
    kind: DocHistoryChangeKind;
    category: DocHistoryChangeCategory;
    anchor: IDocHistoryAnchor;
    endOffset: number;
    memberId: string;
    revision: number;
    text?: string;
    rangeId?: string;
    rangeType?: number;
    blockId?: string;
    blockType?: DocumentBlockRangeType;
    structuralPath?: JSONXPath;
    tableId?: string;
    tableRows?: number[];
    tableColumns?: number[];
    tableCells?: IDocHistoryTableCell[];
    tableEdits?: IDocHistoryTableEdit[];
    drawingId?: string;
    columnGroupId?: string;
    restoredRevision?: number;
    body?: IDocumentBody;
}
export interface IDocHistoryDiff {
    comparison: IHistoryComparison;
    changes: IDocHistoryChange[];
    members: Record<string, IHistoryMember>;
    hasRevisionBarrier: boolean;
}
export interface IDocHistoryLocation extends IDocHistoryAnchor {
    endOffsetInParagraph?: number;
}
