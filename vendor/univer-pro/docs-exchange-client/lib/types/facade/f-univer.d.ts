import type { IExchangeDocImportOption, ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { IDocumentData } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
/** @ignore */
export interface IFUniverDocsExchangeClientMixin {
    /**
     * Import a DOCX file into a persisted Document unit.
     * @param {string | File} file File object or URL of the DOCX file to import
     * @param {IExchangeDocImportOption} [options] Document type to use for the imported document
     * @returns {Promise<string | undefined>} A promise that resolves to the imported unit ID, or `undefined`
     * @example
     * ```typescript
     * import { ExchangeDocType } from '@univerjs-pro/exchange-client';
     *
     * const unitId = await univerAPI.importDocToUnitIdAsync(file, { docType: ExchangeDocType.MODERN });
     * // const unitId = await univerAPI.importDocToUnitIdAsync('https://example.com/document.docx');
     * ```
     */
    importDocToUnitIdAsync(file: File | string, options?: IExchangeDocImportOption): Promise<string | undefined>;
    /**
     * Import a DOCX file into Document snapshot data.
     * @param {string | File} file File object or URL of the DOCX file to import
     * @param {IExchangeDocImportOption} [options] Document type to use for the imported document
     * @returns {Promise<IDocumentData | undefined>} A promise that resolves to Document data, or `undefined`
     * @example
     * ```typescript
     * import { ExchangeDocType } from '@univerjs-pro/exchange-client';
     *
     * const snapshot = await univerAPI.importDocToSnapshotAsync(file, { docType: ExchangeDocType.TRADITIONAL });
     * // const snapshot = await univerAPI.importDocToSnapshotAsync('https://example.com/document.docx');
     * ```
     */
    importDocToSnapshotAsync(file: File | string, options?: IExchangeDocImportOption): Promise<IDocumentData | undefined>;
    /**
     * Export a persisted Document unit as DOCX.
     * @param {string} unitId Document unit ID
     * @returns {Promise<File | undefined>} A promise that resolves to the DOCX file, or `undefined`
     * @example
     * ```typescript
     * const file = await univerAPI.exportDocByUnitIdAsync(unitId);
     * if (file) univerAPI.downloadFile(file, 'document', 'docx');
     * ```
     */
    exportDocByUnitIdAsync(unitId: string): Promise<File | undefined>;
    /**
     * Export Document snapshot data as DOCX.
     * @param {IDocumentData} snapshot Document data to export
     * @returns {Promise<File | undefined>} A promise that resolves to the DOCX file, or `undefined`
     * @example
     * ```typescript
     * const snapshot = univerAPI.getActiveDocument().save();
     * const file = await univerAPI.exportDocBySnapshotAsync(snapshot);
     * if (file) univerAPI.downloadFile(file, 'document', 'docx');
     * ```
     */
    exportDocBySnapshotAsync(snapshot: IDocumentData): Promise<File | undefined>;
    /**
     * Convert exchange Snapshot JSON into Document data.
     * @param {ISnapshotBlockJsonResponse} json Snapshot JSON returned by the exchange service
     * @returns {Promise<IDocumentData>} A promise that resolves to Document data
     * @example
     * ```typescript
     * const documentData = await univerAPI.transformSnapshotJsonToDocumentDataAsync(snapshotJson);
     * ```
     */
    transformSnapshotJsonToDocumentDataAsync(json: ISnapshotBlockJsonResponse): Promise<IDocumentData>;
    /**
     * Convert Document data into exchange Snapshot JSON.
     * @param {IDocumentData} documentData Document data to convert
     * @returns {Promise<ISnapshotBlockJson>} A promise that resolves to Snapshot JSON
     * @example
     * ```typescript
     * const snapshotJson = await univerAPI.transformDocumentDataToSnapshotJsonAsync(documentData);
     * ```
     */
    transformDocumentDataToSnapshotJsonAsync(documentData: IDocumentData): Promise<ISnapshotBlockJson>;
}
export declare class FUniverDocsExchangeClientMixin extends FUniver implements IFUniverDocsExchangeClientMixin {
    importDocToUnitIdAsync(file: File | string, options?: IExchangeDocImportOption): Promise<string | undefined>;
    importDocToSnapshotAsync(file: File | string, options?: IExchangeDocImportOption): Promise<IDocumentData | undefined>;
    exportDocByUnitIdAsync(unitId: string): Promise<File | undefined>;
    exportDocBySnapshotAsync(snapshot: IDocumentData): Promise<File | undefined>;
    transformSnapshotJsonToDocumentDataAsync(json: ISnapshotBlockJsonResponse): Promise<IDocumentData>;
    transformDocumentDataToSnapshotJsonAsync(documentData: IDocumentData): Promise<ISnapshotBlockJson>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverDocsExchangeClientMixin {
    }
}
