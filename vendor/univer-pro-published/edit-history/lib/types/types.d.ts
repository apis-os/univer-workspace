import type { IMutationInfo, UniverInstanceType } from '@univerjs/core';
import type { IChangeset } from '@univerjs/protocol';
export declare enum HistoryOrigin {
    Unspecified = 0,
    User = 1,
    Character = 2
}
export type HistoryChangeKind = 'insert' | 'delete' | 'update';
export interface IHistoryComparison {
    baseRevision: number;
    targetRevision: number;
}
export interface IHistoryVersion {
    unitId: string;
    id: string;
    startRevision: number;
    endRevision: number;
    createTime?: number;
    creatorName: string;
    creatorNames: string[];
    isAnonymous: boolean;
    commands: string[];
    mutations?: IMutationInfo[];
    recoverTime?: number;
    additionalFields?: string;
    startRevisionCreateTime?: number;
    endRevisionCreateTime?: number;
    isCurrent?: boolean;
    isDetail?: boolean;
    parentId?: string;
}
export interface IHistoryMember {
    userId: string;
    name: string;
    avatar: string;
    anonymous: boolean;
}
export interface IHistoryCreator {
    userId: string;
    name: string;
    avatar: string;
    origins: HistoryOrigin[];
}
export interface IHistoryPage {
    hasMore: boolean;
    lastLabel: string;
    versions: IHistoryVersion[];
    members: Record<string, IHistoryMember>;
}
export interface IHistoryListQuery {
    userIds?: string[];
    lastLabel?: string;
    origin?: HistoryOrigin;
}
export interface IHistoryChangesetRange {
    comparison: IHistoryComparison;
    changesets: IChangeset[];
    members: Record<string, IHistoryMember>;
}
export interface IHistorySessionDescriptor {
    unitId: string;
    type: UniverInstanceType;
}
export declare function getVersionComparison(version: Pick<IHistoryVersion, 'startRevision' | 'endRevision'>): IHistoryComparison;
