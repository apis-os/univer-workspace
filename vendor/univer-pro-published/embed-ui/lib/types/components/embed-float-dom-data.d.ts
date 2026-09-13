import type { UniverInstanceType } from '@univerjs/core';
export interface IEmbedFloatDomData {
    childType?: UniverInstanceType;
    childUnitId?: string;
    embedId: string;
    hostAnchorId: string;
    hostUnitId?: string;
    version: 1;
}
export declare function normalizeEmbedFloatDomData(data: unknown): IEmbedFloatDomData | undefined;
