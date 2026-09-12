import type { IPdfTableThemePreset, IPdfUnitData } from '@univerjs-pro/pdfs';
import type { ICreateUnitOptions } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { FPdf } from './f-pdf';
export interface IFUniverPdfsMixin {
    /**
     * Create a PDF unit and return its Facade.
     *
     * @param {Partial<IPdfUnitData>} [data] The PDF Unit data. Assign an existing PDF document to `data.document`. Omit it or pass an empty object to create a blank PDF.
     * @param {ICreateUnitOptions} [options] Optional unit creation settings.
     * @returns {FPdf} The created PDF Facade.
     *
     * @example
     * ```ts
     * const pdf = univerAPI.createPdf({});
     * console.log(pdf.getId());
     * ```
     */
    createPdf(data?: Partial<IPdfUnitData>, options?: ICreateUnitOptions): FPdf;
    /**
     * Return the active PDF unit.
     *
     * @returns {FPdf | null} The active PDF Facade, or `null` when no PDF is active.
     *
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getName());
     * ```
     */
    getActivePdf(): FPdf | null;
    /**
     * Return a PDF unit by ID.
     *
     * @param {string} id The PDF unit ID.
     * @returns {FPdf | null} The matching PDF Facade, or `null` when it does not exist.
     *
     * @example
     * ```ts
     * const pdf = univerAPI.getPdf('pdf-unit-id');
     * console.log(pdf?.getPages());
     * ```
     */
    getPdf(id: string): FPdf | null;
    /**
     * Return the built-in PDF table-theme presets.
     *
     * @returns {ReadonlyArray<Readonly<IPdfTableThemePreset>>} Detached preset descriptors.
     * @example
     * ```ts
     * const presets = univerAPI.getPdfTableThemePresets();
     * console.log(presets);
     * ```
     */
    getPdfTableThemePresets(): ReadonlyArray<Readonly<IPdfTableThemePreset>>;
}
/**
 * PDF model APIs mixed into {@link FUniver}.
 *
 * @hideconstructor
 */
export declare class FUniverPdfsMixin extends FUniver implements IFUniverPdfsMixin {
    createPdf(data?: Partial<IPdfUnitData>, options?: ICreateUnitOptions): FPdf;
    getActivePdf(): FPdf | null;
    getPdf(id: string): FPdf | null;
    getPdfTableThemePresets(): ReadonlyArray<Readonly<IPdfTableThemePreset>>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverPdfsMixin {
    }
}
