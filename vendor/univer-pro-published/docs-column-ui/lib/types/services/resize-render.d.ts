import type { IDocumentSkeletonColumnGroup, UniverRenderingContext } from '@univerjs/engine-render';
import type { IDocsColumnResizeHandle } from './resize-handle';
export interface IDocsColumnResizeRenderOptions {
    activeDrag?: {
        columnGroup?: IDocumentSkeletonColumnGroup | null;
        delta: number;
        handle: IDocsColumnResizeHandle;
    } | null;
    hoveredHandle?: IDocsColumnResizeHandle | null;
}
export declare function drawColumnGroupBackgrounds(ctx: UniverRenderingContext, columnGroups: IDocumentSkeletonColumnGroup[]): void;
export declare function drawHoveredColumnGroupBackgrounds(ctx: UniverRenderingContext, columnGroups: IDocumentSkeletonColumnGroup[]): void;
export declare function drawColumnResizeHandles(ctx: UniverRenderingContext, options?: IDocsColumnResizeRenderOptions): void;
