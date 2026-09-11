import type { ExchangeFormat, ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { IBaseSnapshot } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
/** @ignore */
export interface IFUniverBasesExchangeClientMixin {
    /**
     * Import an XLSX, XLS, CSV, or TSV file into a persisted Base unit.
     * @param {string | File} file File object or URL of the file to import
     * @returns {Promise<string | undefined>} A promise that resolves to the imported unit ID, or `undefined` when the import does not produce a unit
     *
     * @example
     * ```typescript
     * // Accepts a File object
     * const unitId = await univerAPI.importBaseToUnitIdAsync(file);
     * // Or accepts a URL to a remote file
     * // const unitId = await univerAPI.importBaseToUnitIdAsync('https://example.com/database.xlsx');
     * ```
     */
    importBaseToUnitIdAsync(file: File | string): Promise<string | undefined>;
    /**
     * Import an XLSX, XLS, CSV, or TSV file into Base snapshot data.
     * @param {string | File} file File object or URL of the file to import
     * @returns {Promise<IBaseSnapshot | undefined>} A promise that resolves to Base data, or `undefined` when the import does not produce a snapshot
     *
     * @example
     * ```typescript
     * // Accepts a File object
     * const baseData = await univerAPI.importBaseToSnapshotAsync(file);
     * // Or accepts a URL to a remote file
     * // const baseData = await univerAPI.importBaseToSnapshotAsync('https://example.com/database.csv');
     * ```
     */
    importBaseToSnapshotAsync(file: File | string): Promise<IBaseSnapshot | undefined>;
    /**
     * Export a persisted Base unit as an XLSX, CSV, or TSV file.
     * @param {string} unitId ID of the Base unit to export
     * @param {ExchangeFormat} [format=ExchangeFormat.XLSX] Output format
     * @param {string} [tableId] Base table ID to export when the format is CSV or TSV
     * @returns {Promise<File | undefined>} A promise that resolves to the exported file, or `undefined` when the export does not produce a file
     *
     * @example
     * ```typescript
     * import { ExchangeFormat } from '@univerjs-pro/exchange-client';
     *
     * const file = await univerAPI.exportBaseByUnitIdAsync(unitId, ExchangeFormat.XLSX);
     * if (file) {
     *     univerAPI.downloadFile(file, 'database', ExchangeFormat.XLSX);
     * }
     * ```
     */
    exportBaseByUnitIdAsync(unitId: string, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    /**
     * Export Base snapshot data as an XLSX, CSV, or TSV file.
     * @param {IBaseSnapshot} snapshot Base data to export
     * @param {ExchangeFormat} [format=ExchangeFormat.XLSX] Output format
     * @param {string} [tableId] Base table ID to export when the format is CSV or TSV
     * @returns {Promise<File | undefined>} A promise that resolves to the exported file, or `undefined` when the export does not produce a file
     *
     * @example
     * ```typescript
     * import { ExchangeFormat } from '@univerjs-pro/exchange-client';
     *
     * const base = univerAPI.getActiveBase();
     * if (base) {
     *     const file = await univerAPI.exportBaseBySnapshotAsync(base.save(), ExchangeFormat.CSV);
     *     if (file) {
     *         univerAPI.downloadFile(file, 'table', ExchangeFormat.CSV);
     *     }
     * }
     * ```
     */
    exportBaseBySnapshotAsync(snapshot: IBaseSnapshot, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    /**
     * Convert Base snapshot JSON returned by the exchange service into Base data.
     * @param {ISnapshotBlockJsonResponse} json Snapshot JSON and Sheet blocks returned by the exchange service
     * @returns {Promise<IBaseSnapshot>} A promise that resolves to Base data
     *
     * @example
     * ```typescript
     * const baseData = await univerAPI.transformSnapshotJsonToBaseDataAsync(snapshotJson);
     * ```
     */
    transformSnapshotJsonToBaseDataAsync(json: ISnapshotBlockJsonResponse): Promise<IBaseSnapshot>;
    /**
     * Convert Base data into snapshot JSON accepted by the exchange service.
     * @param {IBaseSnapshot} baseData Base data to convert
     * @returns {Promise<ISnapshotBlockJson>} A promise that resolves to Snapshot JSON containing Base metadata and encoded Sheet blocks
     *
     * @example
     * ```typescript
     * const base = univerAPI.getActiveBase();
     * if (base) {
     *     const snapshotJson = await univerAPI.transformBaseDataToSnapshotJsonAsync(base.save());
     * }
     * ```
     */
    transformBaseDataToSnapshotJsonAsync(baseData: IBaseSnapshot): Promise<ISnapshotBlockJson>;
}
export declare class FUniverBasesExchangeClientMixin extends FUniver implements IFUniverBasesExchangeClientMixin {
    importBaseToUnitIdAsync(file: File | string): Promise<string | undefined>;
    importBaseToSnapshotAsync(file: File | string): Promise<IBaseSnapshot | undefined>;
    exportBaseByUnitIdAsync(unitId: string, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    exportBaseBySnapshotAsync(snapshot: IBaseSnapshot, format?: ExchangeFormat, tableId?: string): Promise<File | undefined>;
    transformSnapshotJsonToBaseDataAsync(json: ISnapshotBlockJsonResponse): Promise<IBaseSnapshot>;
    transformBaseDataToSnapshotJsonAsync(baseData: IBaseSnapshot): Promise<ISnapshotBlockJson>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverBasesExchangeClientMixin {
    }
}
