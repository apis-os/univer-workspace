import type { IDocsTableColumnTypeConfig, IDocsTableMetadataResource } from './type';
export declare function normalizeDocsTableMetadataResource(resource?: Partial<IDocsTableMetadataResource> | null): IDocsTableMetadataResource;
export declare function setHeaderRowCountInMetadata(resource: Partial<IDocsTableMetadataResource> | undefined, tableId: string, headerRowCount: number): IDocsTableMetadataResource;
export declare function setTitleRowInMetadata(resource: Partial<IDocsTableMetadataResource> | undefined, tableId: string, titleRow: boolean): IDocsTableMetadataResource;
export declare function setColumnTypeInMetadata(resource: Partial<IDocsTableMetadataResource> | undefined, tableId: string, column: number, config: IDocsTableColumnTypeConfig): IDocsTableMetadataResource;
