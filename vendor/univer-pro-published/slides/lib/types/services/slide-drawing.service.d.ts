import type { IDrawingGroupNestedParam, IDrawingParam, IDrawingSearch } from '@univerjs/core';
import type { IDrawingJsonUndo1, IUnitDrawingService } from '@univerjs/drawing';
import type { IResolvedPageLayers } from '../models/slide-page';
import type { ISlidePageElement, ISlidePageSize, ISlideThemeData } from '../slide.type';
import { DrawingTypeEnum } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { PageElementTypeEnum, PageTypeEnum } from '../slide.enum';
/**
 * The slide-specific extension of {@link IDrawingParam}.
 *
 * `unitId`    = presentation ID (matches `ISlideData.id`)
 * `subUnitId` = page ID — may be a slide page, master page, or layout page
 * `drawingId` = element ID within the page (matches `ISlideElementBase.id`)
 *
 * The `sourcePageType` field records which kind of page the element lives on
 * so that consumers can decide whether to inherit master/layout elements onto
 * a slide page's rendering layer.
 */
export interface ISlideDrawing extends IDrawingParam {
    /**
     * Original slide element data snapshot — kept for downstream renderers
     * that need type-specific fields (shapeData, source, text, etc.).
     */
    element: ISlidePageElement;
    /** Which kind of page this element belongs to. */
    sourcePageType: PageTypeEnum;
}
/**
 * Converts a {@link PageElementTypeEnum} to the closest {@link DrawingTypeEnum}.
 * Used so the generic drawing framework can filter / group elements by type.
 */
export declare function pageElementTypeToDrawingType(type: PageElementTypeEnum): DrawingTypeEnum;
/**
 * Constructs an {@link ISlideDrawing} from a page element.
 *
 * @param unitId      Presentation ID
 * @param subUnitId   Page ID
 * @param element     The raw page element
 * @param sourcePageType  Which kind of page the element belongs to
 */
export declare function slideElementToDrawing(unitId: string, subUnitId: string, element: ISlidePageElement, sourcePageType: PageTypeEnum, themeData?: ISlideThemeData): ISlideDrawing;
export interface ISlideResolvedDrawingMap {
    data: Record<string, ISlideDrawing>;
    order: string[];
}
export interface ISlideResolvedDrawingMapOptions {
    pageSize?: {
        target?: ISlidePageSize;
        master?: ISlidePageSize;
        layout?: ISlidePageSize;
    };
}
/**
 * Builds the flattened drawing map for a slide page after master/layout/slide
 * inheritance has been resolved. Inherited drawing ids are prefixed so they can
 * coexist with editable slide-owned element ids in the same subUnit.
 */
export declare function resolvedSlideLayersToDrawingMap(unitId: string, pageId: string, resolved: IResolvedPageLayers, themeData?: ISlideThemeData, options?: ISlideResolvedDrawingMapOptions): ISlideResolvedDrawingMap;
export declare function resolveSlideGroupEffectiveHidden(drawingData: Record<string, ISlideDrawing>, drawingOrder?: string[]): Record<string, ISlideDrawing>;
export declare class SlideDrawingService extends UnitDrawingService<ISlideDrawing> {
    removeDrawingsWithoutGroupExpansion(removeParams: IDrawingSearch[]): IDrawingSearch[];
    getDrawingsByGroup(groupParam: IDrawingSearch): ISlideDrawing[];
    getDrawingsByGroupNested(groupSearch: IDrawingSearch): IDrawingGroupNestedParam | null;
}
export interface ISlideDrawingService extends IUnitDrawingService<ISlideDrawing> {
    getBatchUpdateOp(updateParams: ISlideDrawing[]): IDrawingJsonUndo1<IDrawingSearch[]>;
}
export declare const ISlideDrawingService: import("@wendellhu/redi").IdentifierDecorator<ISlideDrawingService>;
