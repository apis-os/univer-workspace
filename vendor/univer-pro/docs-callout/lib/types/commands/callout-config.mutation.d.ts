import type { IMutation } from '@univerjs/core';
import type { IDocsCalloutConfig } from '../common/type';
export interface ISetDocsCalloutConfigMutationParams {
    unitId: string;
    blockId: string;
    config: IDocsCalloutConfig;
}
export interface IRemoveDocsCalloutConfigMutationParams {
    unitId: string;
    blockId: string;
}
export declare const SetDocsCalloutConfigMutation: IMutation<ISetDocsCalloutConfigMutationParams>;
export declare const RemoveDocsCalloutConfigMutation: IMutation<IRemoveDocsCalloutConfigMutationParams>;
