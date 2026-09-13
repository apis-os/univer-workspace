import type { ICommand } from '@univerjs/core';
import type { IEmbedDescriptor } from '../../types/embed';
export interface ISetEmbedDescriptorMutationParams {
    unitId: string;
    descriptor: IEmbedDescriptor;
}
export interface ISoftDeleteEmbedDescriptorMutationParams {
    unitId: string;
    embedId: string;
}
export declare const SetEmbedDescriptorMutation: ICommand<ISetEmbedDescriptorMutationParams>;
export declare const SoftDeleteEmbedDescriptorMutation: ICommand<ISoftDeleteEmbedDescriptorMutationParams>;
