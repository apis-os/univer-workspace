import type { ICommandInfo, IMutationInfo, UniverInstanceType } from '@univerjs/core';
import type { ICommand, IMutation, IChangeset as IProtocolChangeset } from '@univerjs/protocol';
export interface IFetchMissingCSResult {
    changesets: IChangeset[];
    lastRevision?: number;
}
export interface IChangeset {
    unitID: string;
    type: UniverInstanceType;
    baseRev: number;
    revision: number;
    userID: string;
    mutations: IMutationInfo[];
    memberID: string;
    /** sid works with reqId, represent the id of a unit edit session */
    sid?: string;
    /** reqId works with sid, should be monotonically increasing and begin with 1 in the same edit session */
    reqId?: number;
    mutationSize?: number | undefined;
    /** json string of { runId?: string } */
    additionalFields?: string;
    createTime?: number | undefined;
}
export declare function parseProtocolChangeset(protocolChangeset: IProtocolChangeset): IChangeset;
export declare function parseProtocolCommand(protocolCommands: ICommand[]): ICommandInfo[];
export declare function parseChangesetToProtocol(changeset: IChangeset): IProtocolChangeset;
export declare function parseProtocolMutation(mutation: IMutation): IMutationInfo;
export declare function parseMutationToProtocol(mutation: IMutationInfo): IMutation;
