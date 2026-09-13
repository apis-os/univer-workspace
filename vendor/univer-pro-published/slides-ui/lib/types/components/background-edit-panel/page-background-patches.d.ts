import type { ISlideBackgroundData, ISlideData, IUpdateSlidePageBackgroundCommandParams } from '@univerjs-pro/slides';
type TBackgroundPatch = IUpdateSlidePageBackgroundCommandParams['patches'][number];
export declare function buildApplyBackgroundToAllPatches(snapshot: ISlideData, unitId: string, pageId: string, background?: ISlideBackgroundData): TBackgroundPatch[];
export declare function buildApplyBackgroundToAllParams(snapshot: ISlideData, unitId: string, pageId: string, background?: ISlideBackgroundData): IUpdateSlidePageBackgroundCommandParams;
export declare function buildResetBackgroundPatch(unitId: string, pageId: string): TBackgroundPatch;
export declare function buildSolidBackground(color: string, opacity: number): ISlideBackgroundData;
export {};
