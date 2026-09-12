import type { IOperation } from '@univerjs/core';
export interface IChangeSlideThemeOperationParams {
    unitId?: string;
    themeId: string;
}
export declare const ChangeSlideThemeOperation: IOperation<IChangeSlideThemeOperationParams>;
