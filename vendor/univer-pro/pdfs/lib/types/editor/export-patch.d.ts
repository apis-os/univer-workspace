import type { IPdfDocument, PdfJsonValue } from '../types';
import type { IPdfEditorExportPatch, IPdfEditorSession } from './types';
export interface IBuildPdfEditorExportPatchOptions {
    /** Base document used to resolve imported or patched text stories. */
    document?: IPdfDocument;
    id?: string;
    createdAt?: number;
    sourceDocumentRevision?: number;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Derive a compact writer handoff patch from the current editor session.
 *
 * This does not mutate the PDF. It gives exporters a deterministic list of
 * source suppressions, replacement links, overlay objects, and object patches
 * that can later be translated to append-overlay or native rewrite strategies.
 */
export declare function buildPdfEditorExportPatch(session: IPdfEditorSession, options?: IBuildPdfEditorExportPatchOptions): IPdfEditorExportPatch;
