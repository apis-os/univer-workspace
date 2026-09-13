import type { IDocumentData, Injector } from '@univerjs/core';
import type { IDocFormulaInsertFacadeOptions } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentFormula } from './f-document-formula';
/**
 * Doc Formula methods added to `FDocument` after importing
 * `@univerjs-pro/docs-formula/facade`.
 */
export interface IFDocumentFormulaMixin {
    /**
     * Lists complete Formula custom-range/Resource pairs in the main body.
     *
     * Incomplete or unsupported persisted data remains preserved by the core
     * plugin but is intentionally omitted from calculation and this list.
     *
     * @returns Formula handles in document order, or an empty array.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function listDocFormulas(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   return document.getFormulas().map((formula) => formula.describe());
     * }
     * ```
     */
    getFormulas(): FDocumentFormula[];
    /**
     * Resolves one complete Doc Formula by stable `rangeId`.
     *
     * @param rangeId Identity returned by insertion or `FDocumentFormula.getId`.
     * @returns A handle, or `null` when either the range or Resource entry is absent.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function getDocFormula(univerAPI: FUniver, rangeId: string) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const formula = document.getFormula(rangeId);
     *   if (!formula) throw new Error(`Doc Formula ${rangeId} was not found`);
     *   return formula;
     * }
     * ```
     */
    getFormula(rangeId: string): FDocumentFormula | null;
    /**
     * Resolves the whole-entity Doc Formula containing a main-body offset.
     *
     * @param offset Document data-stream offset.
     * @returns A handle, or `null` when the offset is not a complete Doc Formula.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function getDocFormulaAt(univerAPI: FUniver, offset: number) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   return document.getFormulaAt(offset);
     * }
     * ```
     */
    getFormulaAt(offset: number): FDocumentFormula | null;
    /**
     * Saves a detached external-format projection of this document.
     *
     * Native `save()` preserves Formula custom ranges and Resource entries.
     * This method instead replaces every main-body Doc Formula object with its
     * persisted `lastValue` display text and removes the Doc Formula Resource from
     * the returned snapshot. It never mutates the live document and is intended
     * for Markdown, HTML, TXT, DOCX, and other non-native exporters.
     *
     * Export never triggers calculation, waits for a result, or reads the
     * current in-memory presentation. The last successful persisted value is
     * emitted with its inherited or explicit number format. A missing or empty
     * `lastValue` becomes an empty string; U+FFFC is never returned.
     *
     * @returns A detached `IDocumentData` projection safe for external export.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function saveForExternalExporter(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const snapshot = document.saveFormulaDisplayTextSnapshot();
     *   if (snapshot.body?.dataStream.includes('\uFFFC')) {
     *     throw new Error('External snapshot contains an object token');
     *   }
     *   return snapshot;
     * }
     * ```
     */
    saveFormulaDisplayTextSnapshot(): IDocumentData;
    /**
     * Replaces an explicit main-body range with one inline Doc Formula.
     *
     * The offsets are snapshot-relative and resolved immediately. This API is
     * suitable when the caller already owns a current range in the same
     * synchronous workflow. Agent and delayed headless workflows should prefer
     * a stable `FDocumentParagraph` handle with `insertFormula()` or
     * `appendFormula()`.
     *
     * The Command validates the range, formula syntax, and complete external
     * Source bindings before it commits TextX, Host External Reference, and Doc
     * Formula Resource mutations as one undoable user action.
     *
     * @param options Formula, half-open replacement range, number format, and
     * any stable external Source bindings.
     * @returns The inserted handle, or `null` if validation or a mutation fails.
     * @example
     * ```ts
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function insertConstantFormula(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const formula = document.insertFormula({
     *     formula: '=1+2',
     *     startOffset: 0,
     *     endOffset: 0,
     *     numberFormat: { pattern: '0.00' },
     *   });
     *   if (!formula) throw new Error('Doc Formula insertion failed');
     *   return formula.getId();
     * }
     * ```
     * @example
     * ```ts
     * import { UniverInstanceType } from '@univerjs/core';
     * import type { FUniver } from '@univerjs/core/facade';
     * import '@univerjs-pro/docs-formula/facade';
     *
     * export function insertBoundFormula(univerAPI: FUniver) {
     *   const document = univerAPI.getActiveDocument();
     *   if (!document) throw new Error('No active document');
     *   const formula = document.insertFormula({
     *     formula: "='[Sales Source]Data'!A1",
     *     startOffset: 0,
     *     endOffset: 0,
     *     externalReferences: [{
     *       qualifier: 'Sales Source',
     *       sourceUnitId: 'sales-source-v1',
     *       sourceUnitType: UniverInstanceType.UNIVER_SHEET,
     *     }],
     *   });
     *   if (!formula) throw new Error('Source binding or range was invalid');
     *   return formula.getId();
     * }
     * ```
     */
    insertFormula(options: IDocFormulaInsertFacadeOptions): FDocumentFormula | null;
}
export declare class FDocumentFormulaMixin extends FDocument implements IFDocumentFormulaMixin {
    private _docsFormulaCommandService;
    private _docsFormulaDisplayTextService;
    private _docsFormulaModel;
    private _docsFormulaResourceLoaderService;
    _initialize(injector: Injector): void;
    getFormulas(): FDocumentFormula[];
    getFormula(rangeId: string): FDocumentFormula | null;
    getFormulaAt(offset: number): FDocumentFormula | null;
    saveFormulaDisplayTextSnapshot(): IDocumentData;
    insertFormula(options: IDocFormulaInsertFacadeOptions): FDocumentFormula | null;
    private _insert;
    private _getCompleteRanges;
    private _createFormula;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentFormulaMixin {
    }
}
