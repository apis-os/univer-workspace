import type { IUniverInstanceService } from '@univerjs/core';
import type { SlideModel } from '../../models/slide-model';
import type { SlidePage } from '../../models/slide-page';
interface IResult {
    presentation: SlideModel;
    slide: SlidePage;
    unitId: string;
    subUnitId: string;
}
export declare function getSlideCommandTarget(univerInstanceService: IUniverInstanceService, params?: {
    unitId?: string;
    subUnitId?: string;
}): IResult | null;
export {};
