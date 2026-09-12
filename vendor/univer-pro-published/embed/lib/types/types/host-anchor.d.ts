import type { UniverInstanceType } from '@univerjs/core';
import type { EmbedHostEntry, EmbedHostEntryEnum } from './embed';
export type EmbedHostAnchorKind = typeof EmbedHostEntryEnum[keyof typeof EmbedHostEntryEnum];
export interface IEmbedHostAnchorRecord {
    hostAnchorId: string;
    embedId: string;
    hostUnitId: string;
    hostType: UniverInstanceType;
    entry: EmbedHostEntry;
    kind: EmbedHostAnchorKind;
    hostContext?: Record<string, unknown>;
    lifecycle?: 'active' | 'removed';
    createdAt?: number;
    updatedAt?: number;
}
