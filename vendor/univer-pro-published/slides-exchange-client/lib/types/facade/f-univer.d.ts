import type { ISnapshotBlockJson, ISnapshotBlockJsonResponse } from '@univerjs-pro/exchange-client';
import type { ISlideData } from '@univerjs-pro/slides';
import { FUniver } from '@univerjs/core/facade';
/** @ignore */
export interface IFUniverSlidesExchangeClientMixin {
    /**
     * Import a PPTX file into a persisted Slide unit.
     * @param {string | File} file File object or URL of the PPTX file to import
     * @returns {Promise<string | undefined>} A promise that resolves to the imported unit ID, or `undefined` when the import does not produce a unit
     *
     * @example
     * ```typescript
     * // Accepts a File object
     * const unitId = await univerAPI.importSlideToUnitIdAsync(file);
     * // Or accepts a URL to a remote file
     * // const unitId = await univerAPI.importSlideToUnitIdAsync('https://example.com/presentation.pptx');
     * ```
     */
    importSlideToUnitIdAsync(file: File | string): Promise<string | undefined>;
    /**
     * Import a PPTX file into Slide snapshot data.
     * @param {string | File} file File object or URL of the PPTX file to import
     * @returns {Promise<ISlideData | undefined>} A promise that resolves to Slide data, or `undefined` when the import does not produce a snapshot
     *
     * @example
     * ```typescript
     * // Accepts a File object
     * const slideData = await univerAPI.importSlideToSnapshotAsync(file);
     * // Or accepts a URL to a remote file
     * // const slideData = await univerAPI.importSlideToSnapshotAsync('https://example.com/presentation.pptx');
     * ```
     */
    importSlideToSnapshotAsync(file: File | string): Promise<ISlideData | undefined>;
    /**
     * Export a persisted Slide unit as a PPTX file.
     * @param {string} unitId ID of the Slide unit to export
     * @returns {Promise<File | undefined>} A promise that resolves to the exported PPTX file, or `undefined` when the export does not produce a file
     *
     * @example
     * ```typescript
     * const file = await univerAPI.exportSlideByUnitIdAsync(unitId);
     * if (file) {
     *     univerAPI.downloadFile(file, 'presentation', 'pptx');
     * }
     * ```
     */
    exportSlideByUnitIdAsync(unitId: string): Promise<File | undefined>;
    /**
     * Export Slide snapshot data as a PPTX file.
     * @param {ISlideData} snapshot Slide data to export
     * @returns {Promise<File | undefined>} A promise that resolves to the exported PPTX file, or `undefined` when the export does not produce a file
     *
     * @example
     * ```typescript
     * const presentation = univerAPI.getActivePresentation();
     * if (presentation) {
     *     const file = await univerAPI.exportSlideBySnapshotAsync(presentation.save());
     *     if (file) {
     *         univerAPI.downloadFile(file, 'presentation', 'pptx');
     *     }
     * }
     * ```
     */
    exportSlideBySnapshotAsync(snapshot: ISlideData): Promise<File | undefined>;
    /**
     * Convert Slide snapshot JSON returned by the exchange service into Slide data.
     * @param {ISnapshotBlockJsonResponse} json Snapshot JSON returned by the exchange service
     * @returns {Promise<ISlideData>} A promise that resolves to Slide data
     *
     * @example
     * ```typescript
     * const slideData = await univerAPI.transformSnapshotJsonToSlideDataAsync(snapshotJson);
     * ```
     */
    transformSnapshotJsonToSlideDataAsync(json: ISnapshotBlockJsonResponse): Promise<ISlideData>;
    /**
     * Convert Slide data into snapshot JSON accepted by the exchange service.
     * @param {ISlideData} slideData Slide data to convert
     * @returns {Promise<ISnapshotBlockJson>} A promise that resolves to encoded Snapshot JSON
     *
     * @example
     * ```typescript
     * const presentation = univerAPI.getActivePresentation();
     * if (presentation) {
     *     const snapshotJson = await univerAPI.transformSlideDataToSnapshotJsonAsync(presentation.save());
     * }
     * ```
     */
    transformSlideDataToSnapshotJsonAsync(slideData: ISlideData): Promise<ISnapshotBlockJson>;
}
export declare class FUniverSlidesExchangeClientMixin extends FUniver implements IFUniverSlidesExchangeClientMixin {
    importSlideToUnitIdAsync(file: File | string): Promise<string | undefined>;
    importSlideToSnapshotAsync(file: File | string): Promise<ISlideData | undefined>;
    exportSlideByUnitIdAsync(unitId: string): Promise<File | undefined>;
    exportSlideBySnapshotAsync(snapshot: ISlideData): Promise<File | undefined>;
    transformSnapshotJsonToSlideDataAsync(json: ISnapshotBlockJsonResponse): Promise<ISlideData>;
    transformSlideDataToSnapshotJsonAsync(slideData: ISlideData): Promise<ISnapshotBlockJson>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSlidesExchangeClientMixin {
    }
}
