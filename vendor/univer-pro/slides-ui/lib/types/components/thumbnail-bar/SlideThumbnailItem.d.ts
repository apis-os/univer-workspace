import type { ObjectProvider } from '../../views/render';
import * as Slides from '@univerjs-pro/slides';
import { UniverInstanceType } from '@univerjs/core';
export type TDropPosition = 'before' | 'after';
export interface IThumbnailDragState {
    draggedPageId: string | null;
    overPageId: string | null;
    dropPosition: TDropPosition | null;
}
export interface ISlideThumbnailItemProps {
    pageId: string;
    index: number;
    isActive: boolean;
    slideModel: Slides.SlideModel;
    objectProvider: ObjectProvider;
    setActivePage: (pageId: string) => void;
    variant?: 'editor' | 'presentation' | 'preview';
    renderIdSuffix?: string;
    ariaLabel?: string;
    focusable?: boolean;
    dragState?: IThumbnailDragState;
    onDragStart?: (pageId: string) => void;
    onDragOver?: (pageId: string, index: number, position: TDropPosition) => void;
    onDrop?: (pageId: string, index: number, position: TDropPosition) => void;
    onDragEnd?: () => void;
    shouldSuppressClick?: () => boolean;
    onContextMenu?: (pageId: string, index: number, left: number, top: number) => void;
    darkMode: boolean;
}
export interface IEmbedFloatingThumbnailPreviewItem {
    embedId: string;
    hostAnchorId: string;
    childType?: UniverInstanceType;
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function resolveEmbedFloatingThumbnailPreviewItems(elements: Record<string, unknown> | undefined, pageWidth: number, pageHeight: number, containerWidth: number, containerHeight: number): IEmbedFloatingThumbnailPreviewItem[];
export declare function resolveSlideThumbnailPixelRatio(devicePixelRatio?: number): number;
export declare function SlideThumbnailItem(props: ISlideThumbnailItemProps): import("react").JSX.Element;
