import type { IDocsTableColumnTypeConfig, IDocsTableMetadata, IDocsTableMetadataResource } from '../common/type';
import { Disposable } from '@univerjs/core';
export declare class DocsTableModel extends Disposable {
    private readonly _resources;
    private readonly _change$;
    readonly change$: import("rxjs").Observable<{
        unitId: string;
        tableId?: string;
    }>;
    getTableMetadata(unitId: string, tableId: string): IDocsTableMetadata | undefined;
    setHeaderRowCount(unitId: string, tableId: string, headerRowCount: number): void;
    setTitleRow(unitId: string, tableId: string, titleRow: boolean): void;
    setColumnType(unitId: string, tableId: string, column: number, config: IDocsTableColumnTypeConfig): void;
    serialize(unitId: string): IDocsTableMetadataResource;
    deserialize(unitId: string, resource: IDocsTableMetadataResource): void;
    removeUnit(unitId: string): void;
    dispose(): void;
    private _setResource;
}
