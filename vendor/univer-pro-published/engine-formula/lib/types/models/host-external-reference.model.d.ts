import type { FormulaUnitType } from '@univerjs/engine-formula';
import { Disposable } from '@univerjs/core';
/**
 * Snapshot resource key shared by Sheet, Document, Slide, Board, and Base Hosts.
 * The resource stores identity mappings only; it never stores Source formula data.
 */
export declare const UNIVER_EXTERNAL_REFERENCE_PLUGIN = "UNIVER_EXTERNAL_REFERENCE_PLUGIN";
export declare const HOST_EXTERNAL_REFERENCE_SCHEMA_VERSION: 1;
/** One Host-owned mapping from a public formula qualifier to a stable Source Unit. */
export interface IHostExternalReference {
    /** Source name used in formula text, without brackets or quotes. */
    qualifier: string;
    /** Stable Source Unit ID used for external data reads. */
    sourceUnitId: string;
    /** Sheet or Base Source type. */
    sourceUnitType: FormulaUnitType;
}
/**
 * Value persisted under {@link UNIVER_EXTERNAL_REFERENCE_PLUGIN}.
 *
 * `references` is keyed by an opaque Host-local reference ID. Callers should use
 * Facade/command APIs for runtime writes instead of constructing those IDs.
 */
export interface IHostExternalReferenceResource {
    schemaVersion: typeof HOST_EXTERNAL_REFERENCE_SCHEMA_VERSION;
    references: Record<string, IHostExternalReference>;
}
export type HostExternalReferenceBindingResult = {
    status: 'resolved';
    referenceId: string;
    reference: IHostExternalReference;
} | {
    status: 'missing' | 'ambiguous';
};
export type HostExternalReferenceLoadError = 'invalid-resource' | 'unsupported-version';
export declare function createEmptyHostExternalReferenceResource(): IHostExternalReferenceResource;
export declare function isReservedExternalReferenceQualifier(qualifier: string): boolean;
export declare function normalizeHostExternalReferenceQualifier(qualifier: string): string;
export declare function isHostExternalReference(value: unknown): value is IHostExternalReference;
export declare class HostExternalReferenceModel extends Disposable {
    private readonly _resources;
    private readonly _rawResources;
    private readonly _loadErrors;
    private readonly _revisions;
    load(hostUnitId: string, value: unknown): boolean;
    set(hostUnitId: string, resource: IHostExternalReferenceResource): boolean;
    serialize(hostUnitId: string): unknown;
    get(hostUnitId: string): IHostExternalReferenceResource | undefined;
    getAll(): Record<string, IHostExternalReferenceResource>;
    getLoadError(hostUnitId: string): HostExternalReferenceLoadError | undefined;
    /**
     * Runtime revision used by derived Formula cache compare-and-set mutations.
     * It is intentionally not serialized into the Host resource.
     */
    getRevision(hostUnitId: string): number;
    resolveBinding(hostUnitId: string, qualifier: string): HostExternalReferenceBindingResult;
    remove(hostUnitId: string): void;
    dispose(): void;
    private _preserveInvalid;
    private _bumpRevision;
}
