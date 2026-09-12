import type { IEmbedHostAnchorRecord } from '../types/host-anchor';
export declare class EmbedHostAnchorModelService {
    private readonly _records;
    clearUnit(hostUnitId: string): void;
    setAnchor(record: IEmbedHostAnchorRecord): void;
    removeAnchor(hostUnitId: string, hostAnchorId: string): void;
    getAnchor(hostUnitId: string, hostAnchorId: string): IEmbedHostAnchorRecord | undefined;
    listAnchors(hostUnitId: string): IEmbedHostAnchorRecord[];
    private _ensureRecords;
}
