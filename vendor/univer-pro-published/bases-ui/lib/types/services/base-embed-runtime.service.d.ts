import type { IDisposable, UniverInstanceType } from '@univerjs/core';
export interface IBaseEmbedTableListMountParams {
    baseUnitId: string;
    tableName: string;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType: UniverInstanceType;
}
export interface IBaseEmbedRuntimeService {
    mountTableList(params: IBaseEmbedTableListMountParams): Promise<IDisposable | undefined>;
}
export declare const IBaseEmbedRuntimeService: import("@wendellhu/redi").IdentifierDecorator<IBaseEmbedRuntimeService>;
