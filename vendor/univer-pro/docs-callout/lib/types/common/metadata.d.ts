import type { IDocsCalloutConfig, IDocsCalloutMetadataResource } from './type';
export declare const DEFAULT_CALLOUT_CONFIG: IDocsCalloutConfig;
export declare function normalizeDocsCalloutMetadataResource(resource?: Partial<IDocsCalloutMetadataResource> | null): IDocsCalloutMetadataResource;
export declare function normalizeDocsCalloutConfig(config?: Partial<IDocsCalloutConfig> | null): IDocsCalloutConfig;
export declare function setCalloutConfigInMetadata(resource: IDocsCalloutMetadataResource | undefined, blockId: string, config: Partial<IDocsCalloutConfig>): IDocsCalloutMetadataResource;
export declare function removeCalloutConfigFromMetadata(resource: IDocsCalloutMetadataResource | undefined, blockId: string): IDocsCalloutMetadataResource;
