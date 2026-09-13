import type { IDocumentBody, IMutationInfo } from '@univerjs/core';
import type { IDocHistoryChange, IDocHistoryDiff } from '../types';
export interface IDocHistoryMutationEntry {
    mutation: IMutationInfo;
    memberId: string;
    revision: number;
}
export declare function extractDocHistoryChanges(entries: IDocHistoryMutationEntry[]): Pick<IDocHistoryDiff, 'changes' | 'hasRevisionBarrier'>;
export declare function resolveDocHistoryAnchors(changes: IDocHistoryChange[], bodies: Record<string, IDocumentBody | undefined>): IDocHistoryChange[];
