export declare class WordCloudFailureCache {
    private readonly _limit;
    private readonly _entries;
    constructor(limit: number);
    get(key: string, size: number): Uint8Array | undefined;
}
