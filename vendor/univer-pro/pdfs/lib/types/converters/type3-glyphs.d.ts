import type { IPdfContentStreamType3Glyph, IPdfContentStreamType3GlyphResources } from './content-stream-parser';
export interface IQpdfType3ObjectRecord {
    value?: unknown;
    stream?: {
        data?: string;
        dict?: Record<string, unknown>;
    };
}
export interface IQpdfType3ObjectIndex {
    objects: Record<string, IQpdfType3ObjectRecord>;
}
export interface IExtractType3GlyphsInput {
    fontValue: Record<string, unknown>;
    objectIndex: IQpdfType3ObjectIndex;
    createResources?: (resourceOwner: Record<string, unknown>) => IPdfContentStreamType3GlyphResources | undefined;
}
export declare function extractType3GlyphsFromQpdfFont(input: IExtractType3GlyphsInput): Record<number, IPdfContentStreamType3Glyph> | undefined;
export declare function getType3GlyphNamesByCode(fontValue: Record<string, unknown>, objectIndex: IQpdfType3ObjectIndex): Record<number, string>;
