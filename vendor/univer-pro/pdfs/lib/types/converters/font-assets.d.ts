import type { IPdfFontAsset, IPdfFontCIDToGIDMap, IPdfFontCIDVerticalMetricEntry, IPdfFontCIDWidthEntry, IPdfFontDefaultVerticalMetrics, PdfObjectRef } from '../types';
export interface IQpdfFontObjectRecord {
    objectRef: PdfObjectRef;
    value?: unknown;
    stream?: {
        data?: string;
        dict?: Record<string, unknown>;
    };
}
export interface IQpdfFontObjectIndex {
    objects: Record<string, IQpdfFontObjectRecord>;
}
export interface ICreateQpdfFontAssetInput {
    record: IQpdfFontObjectRecord;
    objectIndex: IQpdfFontObjectIndex;
}
export declare function createQpdfFontAsset(input: ICreateQpdfFontAssetInput): IPdfFontAsset;
export declare function resolveQpdfCIDWidths(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): IPdfFontCIDWidthEntry[] | undefined;
export declare function resolveQpdfDefaultFontWidth(fontValue: Record<string, unknown>, fontDescriptorValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): number | undefined;
export declare function resolveQpdfCIDToGIDMap(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): IPdfFontCIDToGIDMap | undefined;
export declare function resolveQpdfCIDVerticalMetrics(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): IPdfFontCIDVerticalMetricEntry[] | undefined;
export declare function resolveQpdfDefaultVerticalMetrics(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): IPdfFontDefaultVerticalMetrics | undefined;
export declare function inferQpdfFontWritingMode(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): 'vertical-rl' | undefined;
export declare function resolveQpdfFontDescriptorValue(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): Record<string, unknown>;
export declare function parseQpdfToUnicodeCMap(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): Record<number, string> | undefined;
export declare function parseQpdfToUnicodeCMapCodeSpaceRanges(fontValue: Record<string, unknown>, objectIndex: IQpdfFontObjectIndex): import("..").IPdfFontCMapCodeSpaceRange[] | undefined;
