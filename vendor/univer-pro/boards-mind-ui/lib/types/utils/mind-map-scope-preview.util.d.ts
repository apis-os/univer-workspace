import type { IBoardConnectorElement, IBoardElementData } from '@univerjs-pro/boards';
import { resolveBoardElementWorldBounds } from '@univerjs-pro/boards';
export interface IMindMapRootScopePreviewBounds {
    left: number;
    top: number;
}
export interface IResolveMindMapRootScopePreviewOptions {
    elementData: Record<string, IBoardElementData>;
    scopeId: string;
    rootNodeId: string;
    rootStartBounds: IMindMapRootScopePreviewBounds;
    liveRootBounds: IMindMapRootScopePreviewBounds;
}
export type MindMapRootScopePreviewItem = {
    kind: 'bounds';
    elementId: string;
    bounds: NonNullable<ReturnType<typeof resolveBoardElementWorldBounds>>;
} | {
    kind: 'connector';
    elementId: string;
    element: IBoardConnectorElement;
};
export interface IMindMapRootScopePreview {
    deltaX: number;
    deltaY: number;
    elementData: Record<string, IBoardElementData>;
    items: MindMapRootScopePreviewItem[];
}
export declare function resolveMindMapRootScopePreview(options: IResolveMindMapRootScopePreviewOptions): IMindMapRootScopePreview | null;
