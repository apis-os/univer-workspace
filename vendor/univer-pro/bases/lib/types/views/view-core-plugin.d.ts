import type { BaseViewProjection, ITableSnapshot, IValidationResult, IViewSnapshot, ViewSpecificConfig } from '@univerjs/core';
import { BaseViewType } from '@univerjs/core';
export interface IProjectionContext {
    now: number;
}
export interface IViewRepairResult {
    repaired: boolean;
    view: IViewSnapshot;
}
export interface IViewCorePlugin<TConfig extends ViewSpecificConfig = ViewSpecificConfig> {
    type: BaseViewType;
    i18nKey: string;
    createDefaultConfig(table: ITableSnapshot): TConfig;
    validateConfig(table: ITableSnapshot, view: IViewSnapshot<TConfig>): IValidationResult;
    buildProjection(table: ITableSnapshot, view: IViewSnapshot<TConfig>, context: IProjectionContext): BaseViewProjection;
    repairConfig?(table: ITableSnapshot, view: IViewSnapshot<TConfig>): IViewRepairResult;
}
export declare function resolveDefaultBaseCardTitleFieldId(table: ITableSnapshot): string;
export declare function resolveDefaultBaseCardFieldIds(table: ITableSnapshot, excludedFieldIds?: Array<string | null | undefined>, limit?: number): string[];
export declare function createCoreViewPlugins(): IViewCorePlugin[];
export type ViewCorePlugin<TConfig extends ViewSpecificConfig = ViewSpecificConfig> = IViewCorePlugin<TConfig>;
