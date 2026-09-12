import type { BaseDataModel, IBaseSnapshot, IMutationInfo, ITableSnapshot, UniverInstanceType } from '@univerjs/core';
import type { IApplyBaseJson1MutationParams } from './commands/mutations/apply-base-json1.mutation';
interface IEmbedDescriptor {
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export declare const EMBED_BASES_TABLE_RESOURCE_KEY = "UNIVER_EMBED_BASES_TABLE";
export interface IEmbedBasesTableCustomData {
    version: 1;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export interface IEmbedBasesTableParams {
    embedId: string;
    hostAnchorId: string;
    name?: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export declare function createEmbedBasesTable(params: IEmbedBasesTableParams): ITableSnapshot;
export declare function createEmbedBasesTableFromDescriptor(descriptor: IEmbedDescriptor, name?: string): ITableSnapshot;
export declare function createEmbedBasesTableAddMutation(params: {
    unitId: string;
    snapshot: IBaseSnapshot;
    table: ITableSnapshot;
    index?: number;
}): IMutationInfo<IApplyBaseJson1MutationParams>;
export declare function createEmbedBasesTableRemoveMutation(params: {
    unitId: string;
    snapshot: IBaseSnapshot;
    tableId: string;
}): IMutationInfo<IApplyBaseJson1MutationParams> | undefined;
export declare function getEmbedBasesTableCustomData(table: Pick<ITableSnapshot, 'resources'>): IEmbedBasesTableCustomData | undefined;
export declare function isEmbedBasesTable(table: Pick<ITableSnapshot, 'resources'>): boolean;
export declare function getBaseSnapshot(base: Pick<BaseDataModel, 'getSnapshot'> | undefined): IBaseSnapshot | undefined;
export declare function createEmbedBasesTableCustomData(params: {
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}): IEmbedBasesTableCustomData;
export {};
