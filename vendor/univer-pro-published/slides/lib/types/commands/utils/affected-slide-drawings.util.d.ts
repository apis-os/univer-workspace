import type { SlideModel } from '../../models/slide-model';
import type { ISlideDrawingService } from '../../services/slide-drawing.service';
export declare function getAffectedSlideIds(slideModel: SlideModel, pageId: string): string[];
export declare function refreshAffectedSlideDrawings(slideDrawingService: ISlideDrawingService, slideModel: SlideModel, unitId: string, pageId: string): void;
