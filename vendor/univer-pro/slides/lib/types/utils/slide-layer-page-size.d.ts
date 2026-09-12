import type { SlideModel } from '../models/slide-model';
import type { SlidePage } from '../models/slide-page';
import type { ISlideResolvedDrawingMap, ISlideResolvedDrawingMapOptions } from '../services/slide-drawing.service';
/**
 * Resolve the source and target page sizes used when flattening inherited
 * master/layout elements into a concrete slide drawing layer.
 */
export declare function resolveSlideLayerPageSizeOptions(slideModel: SlideModel, slideId: string): ISlideResolvedDrawingMapOptions;
/**
 * Build the runtime drawing map for one slide from its resolved
 * master/layout/slide layers and their respective page sizes.
 */
export declare function buildResolvedSlideDrawingMap(slideModel: SlideModel, slide: SlidePage): ISlideResolvedDrawingMap;
