import type { IHistoryVersion } from '@univerjs-pro/edit-history';
import type { IDisposable, IMutationInfo, UniverInstanceType } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface IHistoryActionContext {
    version: IHistoryVersion;
    commandIds: ReadonlySet<string>;
    mutations: readonly IMutationInfo[];
}
export interface IHistoryActionResolver {
    resolve(context: IHistoryActionContext): string[];
}
export declare class HistoryActionSummaryService extends Disposable {
    private readonly _resolvers;
    register(type: UniverInstanceType, resolver: IHistoryActionResolver): IDisposable;
    resolve(type: UniverInstanceType | undefined, version: IHistoryVersion): string[];
    dispose(): void;
}
