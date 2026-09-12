import type { IDocsTableSelection } from '@univerjs-pro/docs-table';
import type { IDocumentData, Nullable } from '@univerjs/core';
import type { ITextRangeWithStyle } from '@univerjs/engine-render';
export interface IDocsTableFloatingTextStyleState {
    icon: string;
    value: string | number;
}
export declare function getDocsTableFloatingTextStyleState(documentData: Nullable<IDocumentData>, selection: Nullable<Pick<IDocsTableSelection, 'endColumn' | 'endRow' | 'startColumn' | 'startRow' | 'tableId'>>): IDocsTableFloatingTextStyleState;
export declare function getDocsTableSelectionTextRanges(documentData: Nullable<IDocumentData>, selection: Nullable<Pick<IDocsTableSelection, 'endColumn' | 'endRow' | 'segmentId' | 'startColumn' | 'startRow' | 'tableId'>>): ITextRangeWithStyle[];
export declare function getDocsTableTopLeftTextRanges(documentData: Nullable<IDocumentData>, selection: Nullable<Pick<IDocsTableSelection, 'endColumn' | 'endRow' | 'segmentId' | 'startColumn' | 'startRow' | 'tableId'>>): ITextRangeWithStyle[];
