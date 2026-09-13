import type { ICommand } from '@univerjs/core';
import type { IEmbedHostAnchorRecord } from '../../types/host-anchor';
export interface ISetEmbedHostAnchorMutationParams {
    record: IEmbedHostAnchorRecord;
}
export interface IRemoveEmbedHostAnchorMutationParams {
    hostUnitId: string;
    hostAnchorId: string;
}
export declare const SetEmbedHostAnchorRecordMutation: ICommand<ISetEmbedHostAnchorMutationParams>;
export declare const RemoveEmbedHostAnchorRecordMutation: ICommand<IRemoveEmbedHostAnchorMutationParams>;
