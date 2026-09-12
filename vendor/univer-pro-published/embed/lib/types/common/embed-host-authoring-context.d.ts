import type { EmbedHostEntry } from '../types/embed';
export declare function assertEmbedHostAuthoringContext(input: {
    hostUnitId: string;
    entry: EmbedHostEntry;
    hostContext: unknown;
    maxIndex?: number;
}): void;
