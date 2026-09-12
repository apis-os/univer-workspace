import type { IPdfDocument, IPdfPage, PdfDisplayListId, PdfPageId } from '../types';
import type { IPdfEditorNativeFormXObjectHitTarget, IPdfEditorNativeImageHitTarget, IPdfEditorNativeTextHitTarget } from './hit-test/types';
export interface IPdfNativeTargetBuildOptions {
    /** Materialized page geometry to use while keeping source data indexed by document identity. */
    page?: IPdfPage;
    /**
     * Maximum Form XObject nesting depth to walk while building targets.
     *
     * Real PDFs can contain recursive or deeply nested resources. A small cap
     * keeps hit-target building bounded for large documents while covering the
     * normal page -> form -> text cases.
     */
    maxFormDepth?: number;
    /** Explicit page roots avoid treating nested same-page Form lists as roots. */
    rootDisplayListIds?: readonly PdfDisplayListId[];
}
/**
 * Build bbox-level hit targets for native PDF text display operations.
 *
 * The returned targets are already mapped into the containing page's model
 * coordinate system (EMU, top-left origin). Form XObject targets include an
 * operationPath so edit suppression can address one painted instance instead
 * of every reuse of the same inner display operation.
 */
export declare function createPdfNativeTextHitTargets(document: IPdfDocument, pageId: PdfPageId, options?: IPdfNativeTargetBuildOptions): IPdfEditorNativeTextHitTarget[];
/**
 * Build bbox-level hit targets for native PDF image display operations.
 *
 * Images are painted from a unit square through their PDF transform. Nested
 * Form XObject transforms are folded into the containing page coordinates.
 */
export declare function createPdfNativeImageHitTargets(document: IPdfDocument, pageId: PdfPageId, options?: IPdfNativeTargetBuildOptions): IPdfEditorNativeImageHitTarget[];
/**
 * Build bbox-level hit targets for native Form XObject paint operations.
 *
 * These targets represent one painted instance of a form, not the reusable form
 * asset globally. The operationPath is therefore required for source
 * suppression so editing one reuse does not hide every reuse of the same form.
 */
export declare function createPdfNativeFormXObjectHitTargets(document: IPdfDocument, pageId: PdfPageId, options?: IPdfNativeTargetBuildOptions): IPdfEditorNativeFormXObjectHitTarget[];
