import type { ISlideBackgroundData, ISlideData, ISlidePageData, IUpdateSlidePageBackgroundCommandParams, SlidePresentationBackgroundGraphicFitEnum } from '@univerjs-pro/slides';
import { getPresentationBackgroundGraphics } from '@univerjs-pro/slides';
type TBackgroundPatch = IUpdateSlidePageBackgroundCommandParams['patches'][number];
export interface ISlideBackgroundPanelState {
    pageId: string;
    page?: ISlidePageData;
    fillType: ISlideBackgroundData['type'];
    solidColor: string;
    solidOpacity: number;
    showMasterSp: boolean;
    presentationBackgroundGraphics: ReturnType<typeof getPresentationBackgroundGraphics>;
    presentationBackgroundFit: SlidePresentationBackgroundGraphicFitEnum;
}
export interface IBuildSlideBackgroundPatchParams {
    unitId: string;
    pageId: string;
    background?: ISlideBackgroundData;
    showMasterSp: boolean;
}
export declare function resolveBackgroundPanelPage(snapshot: ISlideData, pageId: string): ISlidePageData | undefined;
export declare function resolvePresentationBackgroundGraphics(snapshot: ISlideData, page: ISlidePageData): import("@univerjs-pro/slides").ISlidePresentationBackgroundGraphic[];
export declare function resolveSolidOpacity(background?: ISlideBackgroundData): number;
export declare function resolveSlideBackgroundPanelState(snapshot: ISlideData, activeSlideId: string | undefined, fallbackPageId: string): ISlideBackgroundPanelState;
export declare function buildSlideBackgroundPatch(params: IBuildSlideBackgroundPatchParams): TBackgroundPatch;
export {};
