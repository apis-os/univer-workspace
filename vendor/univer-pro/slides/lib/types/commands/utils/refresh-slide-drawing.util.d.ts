import type { SlideModel } from '../../models/slide-model';
import type { ISlideDrawingService } from '../../services/slide-drawing.service';
/**
 * Rebuilds the runtime drawing subunit for a normal slide from the snapshot.
 *
 * Slide pages are rendered as a resolved master/layout/slide view. Any slide
 * element mutation can affect inheritance filtering, especially placeholder
 * overrides, so a full subunit refresh is safer than patching one drawing.
 */
export declare function refreshResolvedSlideDrawing(slideDrawingService: ISlideDrawingService, slideModel: SlideModel, unitId: string, slideId: string): boolean;
