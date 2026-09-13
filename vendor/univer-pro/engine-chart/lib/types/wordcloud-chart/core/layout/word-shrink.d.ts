export interface IWordShrinkCandidate {
    readonly designSize: number;
    readonly actualSize: number;
    readonly ratio: number;
    readonly isDynamicShrink: boolean;
}
export interface IWordShrinkStats {
    readonly initialRatio: number;
    readonly finalDynamicRatio: number;
    readonly dynamicShrinkCount: number;
}
export interface IWordShrinkSessionOptions {
    readonly initialRatio: number;
    readonly fontSizeLimitMin: number;
    readonly maxProbeCount?: number;
}
export declare const MAX_DYNAMIC_SHRINK_PROBE_COUNT = 16;
export declare class WordShrinkSession {
    private readonly _initialRatio;
    private readonly _fontSizeLimitMin;
    private readonly _maxProbeCount;
    private _dynamicRatio;
    private _previousPlacedDesignSize;
    private _previousPlacedActualSize;
    private _dynamicShrinkCount;
    constructor(options: IWordShrinkSessionOptions);
    resolveInitialCandidate(designSize: number): IWordShrinkCandidate;
    iterDynamicCandidates(params: {
        readonly designSize: number;
        readonly currentActualSize: number;
    }): IterableIterator<IWordShrinkCandidate>;
    commitPlaced(candidate: IWordShrinkCandidate): void;
    getDynamicRatio(): number;
    getStats(): IWordShrinkStats;
}
export declare function resolveMinShrinkRatio(value: unknown, fallback: number): number;
