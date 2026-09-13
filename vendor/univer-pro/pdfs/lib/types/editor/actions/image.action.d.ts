import type { IPdfEditorAddImageActionInput, IPdfEditorCropImageActionInput, IPdfEditorPromoteNativeImageActionInput, IPdfEditorRemoveManagedImageActionInput, IPdfEditorReplaceImageActionInput, IPdfEditorUpdateManagedImageActionInput } from '../action-types';
import type { IPdfEditorAction } from '../types';
/**
 * Action that atomically registers a managed image resource and places it as
 * an editable overlay. The resource always precedes the placement because the
 * object depends on its asset descriptor.
 */
export declare const pdfAddImageAction: IPdfEditorAction<IPdfEditorAddImageActionInput>;
/** Atomically update a managed image descriptor and all editable placement fields. */
export declare const pdfUpdateManagedImageAction: IPdfEditorAction<IPdfEditorUpdateManagedImageActionInput>;
/** Atomically remove one managed image placement and release its resource when unreferenced. */
export declare const pdfRemoveManagedImageAction: IPdfEditorAction<IPdfEditorRemoveManagedImageActionInput>;
/**
 * Action that swaps the asset backing an editable image overlay.
 */
export declare const pdfReplaceImageAction: IPdfEditorAction<IPdfEditorReplaceImageActionInput>;
/**
 * Action that updates the visible crop window of an editable image overlay.
 */
export declare const pdfCropImageAction: IPdfEditorAction<IPdfEditorCropImageActionInput>;
/**
 * Action that promotes one native image display span into an editable image.
 */
export declare const pdfPromoteNativeImageAction: IPdfEditorAction<IPdfEditorPromoteNativeImageActionInput>;
