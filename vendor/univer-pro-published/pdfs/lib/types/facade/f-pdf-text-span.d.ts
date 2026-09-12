import type { IPdfEditorNativeTextHitTarget, IPdfTextRun, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { IPdfFacadeBounds } from './types';
import { Injector } from '@univerjs/core';
import { FPdfTextBox } from './f-pdf-text-box';
/**
 * Snapshot Facade for one visible native PDF text display operation.
 *
 * @hideconstructor
 * @example
 * ```ts
 * const pdf = univerAPI.getActivePdf();
 * console.log(pdf?.getPageByIndex(0)?.getTextSpans()[0]?.getText());
 * ```
 */
export declare class FPdfTextSpan {
    private readonly _model;
    private readonly _pageId;
    private readonly _target;
    private readonly _rootDisplayListIds;
    private readonly _injector;
    private readonly _identity;
    private readonly _id;
    private readonly _text;
    private readonly _runs;
    private readonly _bounds;
    constructor(_model: PdfDocumentModel, _pageId: string, _target: IPdfEditorNativeTextHitTarget, _rootDisplayListIds: readonly string[], _injector: Injector);
    /**
     * Return an opaque deterministic native-span ID.
     *
     * @returns {string} The native-span ID.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getPageByIndex(0)?.getTextSpans()[0]?.getId());
     * ```
     */
    getId(): string;
    /**
     * Return the text snapshot captured during enumeration.
     *
     * @returns {string} The captured native text.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getPageByIndex(0)?.getTextSpans()[0]?.getText());
     * ```
     */
    getText(): string;
    /**
     * Return detached text-run snapshots captured during enumeration.
     *
     * @returns {readonly IPdfTextRun[]} The captured text-run snapshots.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getPageByIndex(0)?.getTextSpans()[0]?.getTextRuns());
     * ```
     */
    getTextRuns(): readonly IPdfTextRun[];
    /**
     * Return the captured axis-aligned bounds in PDF points.
     *
     * @returns {IPdfFacadeBounds} The captured bounds in points.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * console.log(pdf?.getPageByIndex(0)?.getTextSpans()[0]?.getBounds());
     * ```
     */
    getBounds(): IPdfFacadeBounds;
    /**
     * Atomically suppress this native span and replace it with an editable text box.
     *
     * @param {string} text The replacement text, including an empty string.
     * @returns {FPdfTextBox} The promoted editable text-box Facade.
     * @throws {Error} If the native span is stale, already replaced, or the durable command is rejected.
     * @example
     * ```ts
     * const pdf = univerAPI.getActivePdf();
     * const span = pdf?.getPageByIndex(0)?.getTextSpans()[0];
     * const textBox = span ? span.replaceText('Editable text') : null;
     * ```
     */
    replaceText(text: string): FPdfTextBox;
    private _resolveCurrentTarget;
}
export declare function isPdfNativeTextTargetSuppressed(model: PdfDocumentModel, target: IPdfEditorNativeTextHitTarget): boolean;
export declare function getNativeTextTargetIdentity(target: IPdfEditorNativeTextHitTarget): string;
