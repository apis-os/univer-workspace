export interface ILiveConfigCommitScheduler {
    schedule: (commit: () => void, debounce?: boolean) => void;
    flush: () => boolean;
}
export declare function createLiveConfigCommitScheduler(delayMs?: number): ILiveConfigCommitScheduler;
export declare function useLiveConfigCommit(): ILiveConfigCommitScheduler['schedule'];
