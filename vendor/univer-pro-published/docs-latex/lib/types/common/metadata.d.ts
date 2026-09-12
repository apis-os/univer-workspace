import type { IDocsLatexFormulaConfig, IDocsLatexFormulaProperties, IDocsLatexMetadataResource } from './type';
export declare const DEFAULT_LATEX_FORMULA_PROPERTIES: IDocsLatexFormulaProperties;
export declare function normalizeDocsLatexFormulaConfig(config?: Partial<IDocsLatexFormulaConfig> | null): IDocsLatexFormulaConfig;
export declare function normalizeDocsLatexMetadataResource(resource?: Partial<IDocsLatexMetadataResource> | null): IDocsLatexMetadataResource;
export declare function setLatexFormulaInMetadata(resource: IDocsLatexMetadataResource | undefined, rangeId: string, config: Partial<IDocsLatexFormulaConfig>): IDocsLatexMetadataResource;
export declare function removeLatexFormulaFromMetadata(resource: IDocsLatexMetadataResource | undefined, rangeId: string): IDocsLatexMetadataResource;
