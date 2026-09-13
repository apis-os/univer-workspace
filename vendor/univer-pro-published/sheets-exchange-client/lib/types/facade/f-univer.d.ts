import type { ExchangeFormat, ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { IWorkbookData } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
/** @ignore */
export interface IFUniverSheetsExchangeClientMixin {
    /**
     * Import an XLSX, XLS, CSV, or TSV file into a persisted Sheet unit.
     * @param {string | File} file File object or URL of the file to import
     * @returns {Promise<string | undefined>} A promise that resolves to the imported unit ID, or `undefined` when the import does not produce a unit
     *
     * @example
     * ```typescript
     * // Accepts a File object
     * const unitId = await univerAPI.importSheetToUnitIdAsync(file);
     * // Or accepts a URL to a remote file
     * // const unitId = await univerAPI.importSheetToUnitIdAsync('https://example.com/budget.xlsx');
     *
     * if (unitId) {
     *     console.log('Imported Sheet unit:', unitId);
     * }
     * ```
     */
    importSheetToUnitIdAsync(file: File | string): Promise<string | undefined>;
    /**
     * Import an XLSX, XLS, CSV, or TSV file into workbook snapshot data.
     * @param {string | File} file File object or URL of the file to import
     * @returns {Promise<IWorkbookData | undefined>} A promise that resolves to the imported workbook data, or `undefined` when the import does not produce a snapshot
     *
     * @example
     * ```typescript
     * // Accepts a File object
     * const workbookData = await univerAPI.importSheetToSnapshotAsync(file);
     * // Or accepts a URL to a remote file
     * // const workbookData = await univerAPI.importSheetToSnapshotAsync('https://example.com/report.csv');
     *
     * if (workbookData) {
     *     univerAPI.createWorkbook(workbookData);
     * }
     * ```
     */
    importSheetToSnapshotAsync(file: File | string): Promise<IWorkbookData | undefined>;
    /**
     * Export a persisted Sheet unit as an XLSX, CSV, or TSV file.
     * @param {string} unitId ID of the Sheet unit to export
     * @param {ExchangeFormat} [format=ExchangeFormat.XLSX] Output format
     * @param {string} [sheetId] Sheet ID to export when the format is CSV or TSV
     * @returns {Promise<File | undefined>} A promise that resolves to the exported file, or `undefined` when the export does not produce a file
     *
     * @example
     * ```typescript
     * import { ExchangeFormat } from '@univerjs-pro/exchange-client';
     *
     * const workbook = univerAPI.getActiveWorkbook();
     * if (workbook) {
     *     const file = await univerAPI.exportSheetByUnitIdAsync(
     *         workbook.getId(),
     *         ExchangeFormat.XLSX
     *     );
     *
     *     if (file) {
     *         univerAPI.downloadFile(file, 'budget', ExchangeFormat.XLSX);
     *     }
     * }
     * ```
     */
    exportSheetByUnitIdAsync(unitId: string, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    /**
     * Export workbook snapshot data as an XLSX, CSV, or TSV file.
     * @param {IWorkbookData} snapshot Workbook data to export
     * @param {ExchangeFormat} [format=ExchangeFormat.XLSX] Output format
     * @param {string} [sheetId] Sheet ID to export when the format is CSV or TSV
     * @returns {Promise<File | undefined>} A promise that resolves to the exported file, or `undefined` when the export does not produce a file
     *
     * @example
     * ```typescript
     * import { ExchangeFormat } from '@univerjs-pro/exchange-client';
     *
     * const workbook = univerAPI.getActiveWorkbook();
     * if (workbook) {
     *     const snapshot = workbook.save();
     *     const file = await univerAPI.exportSheetBySnapshotAsync(
     *         snapshot,
     *         ExchangeFormat.CSV,
     *         workbook.getActiveSheet().getSheetId()
     *     );
     *
     *     if (file) {
     *         univerAPI.downloadFile(file, 'active-sheet', ExchangeFormat.CSV);
     *     }
     * }
     * ```
     */
    exportSheetBySnapshotAsync(snapshot: IWorkbookData, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    /**
     * Convert Sheet snapshot JSON returned by the exchange service into workbook data.
     * @param {ISnapshotBlockJsonResponse} json Snapshot JSON and Sheet blocks returned by the exchange service
     * @returns {Promise<IWorkbookData>} A promise that resolves to workbook data that can be passed to `createWorkbook`
     *
     * @example
     * ```typescript
     * import type { ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
     *
     * const response = await fetch('/api/sheet-snapshot');
     * const snapshotJson = await response.json() as ISnapshotBlockJsonResponse;
     * const workbookData = await univerAPI.transformSnapshotJsonToWorkbookDataAsync(snapshotJson);
     * univerAPI.createWorkbook(workbookData);
     * ```
     */
    transformSnapshotJsonToWorkbookDataAsync(json: ISnapshotBlockJsonResponse): Promise<IWorkbookData>;
    /**
     * Convert workbook data into snapshot JSON accepted by the exchange service.
     * @param {IWorkbookData} workbookData Workbook data to convert
     * @returns {Promise<ISnapshotBlockJson>} A promise that resolves to Snapshot JSON containing the workbook metadata and encoded Sheet blocks
     *
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * if (workbook) {
     *     const workbookData = workbook.save();
     *     const snapshotJson = await univerAPI.transformWorkbookDataToSnapshotJsonAsync(workbookData);
     *     console.log('Sheet snapshot JSON:', snapshotJson);
     * }
     * ```
     */
    transformWorkbookDataToSnapshotJsonAsync(workbookData: IWorkbookData): Promise<ISnapshotBlockJson>;
}
export declare class FUniverSheetsExchangeClientMixin extends FUniver implements IFUniverSheetsExchangeClientMixin {
    importSheetToUnitIdAsync(file: File | string): Promise<string | undefined>;
    importSheetToSnapshotAsync(file: File | string): Promise<IWorkbookData | undefined>;
    exportSheetByUnitIdAsync(unitId: string, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    exportSheetBySnapshotAsync(snapshot: IWorkbookData, format?: ExchangeFormat, sheetId?: string): Promise<File | undefined>;
    transformSnapshotJsonToWorkbookDataAsync(json: ISnapshotBlockJsonResponse): Promise<IWorkbookData>;
    transformWorkbookDataToSnapshotJsonAsync(workbookData: IWorkbookData): Promise<ISnapshotBlockJson>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSheetsExchangeClientMixin {
    }
}
