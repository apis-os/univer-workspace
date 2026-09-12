import type { IDrawingSearch } from '@univerjs/core';
import type { IDrawingGroupUpdateParam, IDrawingOrderMapParam } from '@univerjs/drawing';
import * as Slides from '@univerjs-pro/slides';
export declare function muteSlideRenderObjects(objects: Iterable<unknown>): void;
export declare function isThumbnailRenderableDrawing(drawing: Slides.ISlideDrawing | null | undefined): boolean;
export declare function isSlideThumbnailDrawingChange(change: IDrawingSearch | IDrawingOrderMapParam | IDrawingGroupUpdateParam | Array<IDrawingSearch | IDrawingGroupUpdateParam> | null | undefined, unitId: string, pageId: string): boolean;
