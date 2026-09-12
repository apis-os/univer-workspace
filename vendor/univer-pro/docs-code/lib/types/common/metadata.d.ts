import type { IDocsCodeConfig, IDocsCodeMetadataResource } from './type';
export declare const DEFAULT_CODE_CONFIG: IDocsCodeConfig;
export declare function normalizeDocsCodeConfig(config?: Partial<IDocsCodeConfig> | null): IDocsCodeConfig;
export declare function normalizeDocsCodeMetadataResource(resource?: Partial<IDocsCodeMetadataResource> | null): IDocsCodeMetadataResource;
export declare function setCodeConfigInMetadata(resource: IDocsCodeMetadataResource | undefined, blockId: string, config: Partial<IDocsCodeConfig>): IDocsCodeMetadataResource;
export declare function removeCodeConfigFromMetadata(resource: IDocsCodeMetadataResource | undefined, blockId: string): IDocsCodeMetadataResource;
