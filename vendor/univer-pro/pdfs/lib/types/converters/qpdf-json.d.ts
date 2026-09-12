import type { IPdfDocument, PdfAssetId, PdfObjectRef, PdfSourceId } from '../types';
export interface IQpdfJsonConvertOptions {
    documentId?: string;
    documentTitle?: string;
    sourceId?: PdfSourceId;
    sourceFileName?: string;
    qpdfJsonAssetId?: PdfAssetId;
    qdfAssetId?: PdfAssetId;
    importedAt?: string;
}
export interface IQpdfJsonDocument {
    version?: number;
    parameters?: Record<string, unknown>;
    pages?: IQpdfJsonPage[];
    outlines?: IQpdfJsonOutline[];
    acroform?: Record<string, unknown>;
    attachments?: Record<string, unknown>;
    encrypt?: Record<string, unknown>;
    qpdf?: Array<Record<string, unknown>>;
}
export interface IQpdfJsonPage {
    object?: PdfObjectRef;
    contents?: PdfObjectRef[];
    label?: string | null;
    outlines?: IQpdfJsonOutline[];
    pageposfrom1?: number;
}
export interface IQpdfJsonOutline {
    object?: PdfObjectRef;
    title?: string;
    dest?: unknown[];
    destpageposfrom1?: number;
    open?: boolean;
    kids?: IQpdfJsonOutline[];
}
/**
 * Converts qpdf JSON into the first Univer PDF model shape.
 *
 * This converter intentionally preserves PDF-native content as raw groups and
 * native indexes. It does not parse content streams into semantic text yet; that
 * promotion can be layered on later using the same source/display-list ids.
 */
export declare function convertQpdfJsonToPdfDocument(input: IQpdfJsonDocument, options?: IQpdfJsonConvertOptions): IPdfDocument;
