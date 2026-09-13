import type { IResizeDocColumnGroupCommandParams } from '@univerjs-pro/docs-column';
import type { IDocumentSkeletonColumnGroup } from '@univerjs/engine-render';
export interface IDocsColumnResizeHandle {
    columnGroupId: string;
    separatorIndex: number;
    left: number;
    top: number;
    height: number;
}
export declare const DOCS_COLUMN_GROUP_MIN_VISIBLE_HEIGHT = 72;
export declare function getColumnGroupVisibleHeight(columnGroup: IDocumentSkeletonColumnGroup): number;
export declare function getColumnResizeHandles(columnGroup: IDocumentSkeletonColumnGroup): IDocsColumnResizeHandle[];
export declare function getColumnResizeDragCommandParams(columnGroup: IDocumentSkeletonColumnGroup, separatorIndex: number, delta: number): IResizeDocColumnGroupCommandParams | null;
