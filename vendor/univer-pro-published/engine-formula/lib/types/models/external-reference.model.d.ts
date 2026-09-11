import type { FormulaUnitType } from '@univerjs/engine-formula';
import { Disposable } from '@univerjs/core';
export declare const SHEET_EXTERNAL_DATA_PLUGIN = "SHEET_EXTERNAL_DATA_PLUGIN";
export declare const EXTERNAL_REFERENCE_SCHEMA_VERSION: 1;
export interface IExternalReferenceCoverage {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
}
export interface IExternalReferenceCachedCell {
    row: number;
    column: number;
    value: unknown;
    valueType?: number;
}
export interface IExternalReferenceCachedSheet {
    name: string;
    sheetId?: string;
    rowCount?: number;
    columnCount?: number;
    coverage: IExternalReferenceCoverage[];
    cells: IExternalReferenceCachedCell[];
}
export interface IExternalReferenceTableColumn {
    id?: string;
    name: string;
}
export interface IExternalReferenceTable {
    id?: string;
    name: string;
    sheetName?: string;
    columns: IExternalReferenceTableColumn[];
    range?: IExternalReferenceCoverage;
    /** Base virtual tables start with records at row 0; Sheet tables default to a physical header. */
    showHeader?: boolean;
}
export interface IExternalReferenceLink {
    /** Host-local OOXML slot. Slots are one-based and order is preserved. */
    slot: number;
    name: string;
    target: {
        name: string;
        unitType: FormulaUnitType;
        uri?: string;
        liveUnitId?: string;
    };
    sheetNames: Array<{
        name: string;
        sheetId?: string;
    }>;
    definedNames: Array<{
        name: string;
        formulaOrRefString: string;
    }>;
    tables: IExternalReferenceTable[];
    cache?: {
        revision?: string;
        freshness: 'fresh' | 'stale';
        complete: boolean;
        sheets: IExternalReferenceCachedSheet[];
    };
}
export interface IExternalReferenceResource {
    schemaVersion: typeof EXTERNAL_REFERENCE_SCHEMA_VERSION;
    links: IExternalReferenceLink[];
}
export type ExternalReferenceBindingResult = {
    status: 'resolved';
    link: IExternalReferenceLink;
} | {
    status: 'missing' | 'ambiguous';
};
export declare function createEmptyExternalReferenceResource(): IExternalReferenceResource;
export declare function createExternalSyntheticUnitId(hostUnitId: string, slot: number): string;
export declare class ExternalReferenceModel extends Disposable {
    private readonly _resources;
    private readonly _loadErrors;
    load(hostUnitId: string, value: unknown): boolean;
    set(hostUnitId: string, resource: IExternalReferenceResource): boolean;
    serialize(hostUnitId: string): IExternalReferenceResource;
    get(hostUnitId: string): IExternalReferenceResource | undefined;
    getLoadError(hostUnitId: string): 'invalid-resource' | 'unsupported-version' | undefined;
    resolveBinding(hostUnitId: string, qualifier: string): ExternalReferenceBindingResult;
    renameLiveTarget(unitId: string, oldName: string, newName: string): Array<{
        hostUnitId: string;
        slot: number;
    }>;
    remove(hostUnitId: string): void;
    dispose(): void;
}
