import { UniverInstanceType } from '@univerjs/core';
interface IBaseEmbedMenuOverride {
    childType?: UniverInstanceType;
    entry?: string;
    hostUnitId?: string;
}
interface IBaseEmbedFloatingActivation {
    childUnitId?: string;
    stage?: string | null;
}
export declare function shouldHideBaseRootWorkbenchForEmbedOverride(override: IBaseEmbedMenuOverride | null | undefined): boolean;
export declare function shouldHideBaseRootWorkbenchForFloatingChild(active: IBaseEmbedFloatingActivation | null | undefined, focusedUnitId: string | void | null | undefined, currentBaseUnitId: string | void | null | undefined): boolean;
export declare function isActiveBaseTableListEmbedOverride(override: IBaseEmbedMenuOverride | null | undefined, currentBaseUnitId: string | undefined): boolean;
export {};
