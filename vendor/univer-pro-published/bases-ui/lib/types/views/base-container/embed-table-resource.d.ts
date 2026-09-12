import type { ITableSnapshot, UniverInstanceType } from '@univerjs/core';
export interface IEmbedBaseTableResource {
    version: 1;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
}
export declare function getEmbedBaseTableResource(table: Pick<ITableSnapshot, 'resources'>): IEmbedBaseTableResource | undefined;
