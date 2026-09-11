import type { IChangeset, RevisionService } from '@univerjs-pro/collaboration';
import type { IMutationInfo, IUniverInstanceService, UserManagerService } from '@univerjs/core';
import type { Observable } from 'rxjs';
export interface IAssembledChangeset {
    changeset: IChangeset;
    pendingMutations: IMutationInfo[];
}
/**
 * Check if a mutation is marked as a split chunk.
 * Split chunk mutations should be sent in a separate changeset.
 */
export declare function isSplitChunkMutation(mutation: IMutationInfo): boolean;
/**
 * Mutations those should be assembled into a single changeset.
 */
export declare const SINGLE_CHANGESET_MUTATIONS: Set<string>;
export declare const SLIDE_SINGLE_CHANGESET_MUTATIONS: Set<string>;
export declare function takeMutationsForChangeset(pendingMutations: IMutationInfo[], singleChangesetMutations?: Set<string>): IMutationInfo[];
export declare function assembleMutationChangeset(pendingMutations: IMutationInfo[], unitID: string, univerInstanceService: IUniverInstanceService, revisionService: RevisionService, userManagerService: UserManagerService): IAssembledChangeset;
export declare const assembleSheetChangeset: typeof assembleMutationChangeset;
export declare const assembleBoardChangeset: typeof assembleMutationChangeset;
export declare const assemblePdfChangeset: typeof assembleMutationChangeset;
export declare function assembleBaseChangeset(pendingMutations: IMutationInfo[], unitID: string, univerInstanceService: IUniverInstanceService, revisionService: RevisionService, userManagerService: UserManagerService): IAssembledChangeset;
export declare function assembleSlideChangeset(pendingMutations: IMutationInfo[], unitID: string, univerInstanceService: IUniverInstanceService, revisionService: RevisionService, userManagerService: UserManagerService): IAssembledChangeset;
export declare function assembleDocChangeset(pendingMutations: IMutationInfo[], unitID: string, univerInstanceService: IUniverInstanceService, revisionService: RevisionService, userManagerService: UserManagerService): IAssembledChangeset;
export declare function createTimerObservable$<T>(ms: number, options: T): Observable<T>;
