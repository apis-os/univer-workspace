import type { ICommand, UniverInstanceType } from '@univerjs/core';
import type { EmbedHostEntry } from '../../types/embed';
export interface IEmbedHostAnchorMutationParams {
    embedId: string;
    hostUnitId: string;
    hostType: UniverInstanceType;
    entry: EmbedHostEntry;
    hostAnchorId: string;
}
export declare const CreateEmbedHostAnchorMutation: ICommand<IEmbedHostAnchorMutationParams>;
export declare const RemoveEmbedHostAnchorMutation: ICommand<IEmbedHostAnchorMutationParams>;
