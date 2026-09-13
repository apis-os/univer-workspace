import type { ISlideThumbnailOverlayProps } from '@univerjs-pro/slides-ui';
import { ThreadCommentModel } from '@univerjs/thread-comment';
export declare function getUnresolvedSlideCommentCount(commentModel: ThreadCommentModel, unitId: string, pageId: string): number;
export declare function SlideCommentCountBadge({ unitId, pageId, setActivePage }: ISlideThumbnailOverlayProps): import("react").JSX.Element | null;
