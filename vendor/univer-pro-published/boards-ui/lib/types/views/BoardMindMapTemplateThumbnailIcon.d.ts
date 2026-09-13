import type { SVGProps } from 'react';
export declare const BOARD_MIND_MAP_TEMPLATE_THUMBNAIL_VARIANTS: readonly ["mindmap-right", "mindmap-left", "mindmap-vertical", "mindmap-horizontal", "tree-right", "tree-left", "tree-alternate", "timeline-horizontal", "timeline-vertical"];
export type BoardMindMapTemplateThumbnailVariant = typeof BOARD_MIND_MAP_TEMPLATE_THUMBNAIL_VARIANTS[number];
interface IBoardMindMapTemplateThumbnailIconProps extends SVGProps<SVGSVGElement> {
    variant: BoardMindMapTemplateThumbnailVariant;
}
export declare function BoardMindMapTemplateThumbnailIcon(props: IBoardMindMapTemplateThumbnailIconProps): import("react").JSX.Element;
export {};
