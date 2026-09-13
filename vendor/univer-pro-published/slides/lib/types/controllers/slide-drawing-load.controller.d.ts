import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { ISlideDrawingService } from '../services/slide-drawing.service';
export declare const SLIDE_DRAWING_PLUGIN = "DOC_SLIDE_DRAWING_PLUGIN";
/**
 * Loads slide snapshot data into {@link ISlideDrawingService} so that the
 * render layer can consume per-slide drawing maps.
 *
 * Design notes
 * ------------
 * Slide data has a three-layer inheritance model: master → layout → slide.
 * Rather than storing each layer as a separate subUnit (which would force the
 * renderer to merge on every draw), we resolve the layers here at load time
 * using {@link SlidePage.resolveElements} and store the **merged** element
 * list as a single subUnit keyed by the slide's own page ID.
 *
 * This means:
 * - `subUnitId` = slide page ID  (NOT master or layout page ID)
 * - `drawingId` = element ID (prefixed for master/layout to avoid collisions)
 * - The renderer simply reads `getDrawingData(unitId, activeSlideId)`
 *
 * Coordinate mapping
 * ------------------
 * | Drawing framework | Slide concept                            |
 * |-------------------|-----------------------------------------|
 * | `unitId`          | Presentation ID                         |
 * | `subUnitId`       | Slide page ID (merged view)             |
 * | `drawingId`       | Element ID within the merged page       |
 */
export declare class SlideDrawingLoadController extends Disposable {
    private readonly _instanceSrv;
    private readonly _slideDrawingService;
    constructor(_instanceSrv: IUniverInstanceService, _slideDrawingService: ISlideDrawingService);
    private _initUnitListener;
    private _loadUnit;
}
