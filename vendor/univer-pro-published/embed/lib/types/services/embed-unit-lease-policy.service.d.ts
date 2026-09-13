export type EmbedUnitLeaseResolvedPolicy = 'none' | 'exclusive';
export declare class EmbedUnitLeasePolicyService {
    private _policy;
    getPolicy(): EmbedUnitLeaseResolvedPolicy;
    enableExclusivePolicy(): void;
}
