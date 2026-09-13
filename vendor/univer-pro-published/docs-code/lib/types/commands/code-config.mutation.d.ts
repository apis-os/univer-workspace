import type { IMutation } from '@univerjs/core';
import type { IDocsCodeConfig } from '../common/type';
export interface ISetDocsCodeConfigMutationParams {
    unitId: string;
    blockId: string;
    config: IDocsCodeConfig;
}
export interface IRemoveDocsCodeConfigMutationParams {
    unitId: string;
    blockId: string;
}
export declare const SetDocsCodeConfigMutation: IMutation<ISetDocsCodeConfigMutationParams>;
export declare const RemoveDocsCodeConfigMutation: IMutation<IRemoveDocsCodeConfigMutationParams>;
