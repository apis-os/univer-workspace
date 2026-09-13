import type { ISlideData, ISlideImageElement, ISlidePageData, ISlidePageElement, ISlidePageSize, ISlidePresentationBackgroundGraphic } from '../slide.type';
export declare const PRESENTATION_BACKGROUND_GRAPHIC_ROLE = "backgroundGraphic";
export declare const PRESENTATION_BACKGROUND_GRAPHIC_MANAGED_BY = "presentationBackground";
export declare enum SlidePresentationBackgroundGraphicsTargetEnum {
    AllMasters = "allMasters",
    ActiveMaster = "activeMaster"
}
export declare function isPresentationBackgroundGraphic(element: ISlidePageElement): boolean;
export declare function buildPresentationBackgroundGraphicElement(graphic: ISlidePresentationBackgroundGraphic, pageSize: ISlidePageSize, index: number): ISlideImageElement;
export declare function replacePresentationBackgroundGraphics<T extends Pick<ISlidePageData, 'elementOrder' | 'elements'>>(page: T, pageSize: ISlidePageSize, graphics: ISlidePresentationBackgroundGraphic[]): T;
export declare function getPresentationBackgroundGraphics(page: Pick<ISlidePageData, 'elementOrder' | 'elements'>): ISlidePresentationBackgroundGraphic[];
export declare function resolvePresentationBackgroundTargetMasterIds(snapshot: ISlideData, target?: SlidePresentationBackgroundGraphicsTargetEnum, explicitMasterPageIds?: string[]): string[];
