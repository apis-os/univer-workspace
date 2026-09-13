import type { IPdfEditorCopyPageActionInput, IPdfEditorInsertPageActionInput, IPdfEditorRemovePageActionInput, IPdfEditorRemovePagesActionInput, IPdfEditorReorderPageActionInput, IPdfEditorReorderPagesActionInput, IPdfEditorRotatePagesActionInput, IPdfEditorUpdatePageGeometryActionInput } from '../action-types';
import type { IPdfEditorAction } from '../types';
/**
 * Action that inserts a normalized PDF page into document order.
 */
export declare const pdfInsertPageAction: IPdfEditorAction<IPdfEditorInsertPageActionInput>;
/**
 * Action that removes a page while preserving an undo tombstone.
 */
export declare const pdfRemovePageAction: IPdfEditorAction<IPdfEditorRemovePageActionInput>;
/**
 * Action that copies a page by inserting a cloned page record.
 */
export declare const pdfCopyPageAction: IPdfEditorAction<IPdfEditorCopyPageActionInput>;
/**
 * Action that moves a page to a different document order index.
 */
export declare const pdfReorderPageAction: IPdfEditorAction<IPdfEditorReorderPageActionInput>;
/** Remove multiple pages while preserving tombstones and original indices. */
export declare const pdfRemovePagesAction: IPdfEditorAction<IPdfEditorRemovePagesActionInput>;
/** Move multiple pages while preserving their document order in one history batch. */
export declare const pdfReorderPagesAction: IPdfEditorAction<IPdfEditorReorderPagesActionInput>;
/**
 * Action that updates page geometry such as rotation, size, or crop box.
 */
export declare const pdfUpdatePageGeometryAction: IPdfEditorAction<IPdfEditorUpdatePageGeometryActionInput>;
/** Rotate multiple pages in one history batch. */
export declare const pdfRotatePagesAction: IPdfEditorAction<IPdfEditorRotatePagesActionInput>;
