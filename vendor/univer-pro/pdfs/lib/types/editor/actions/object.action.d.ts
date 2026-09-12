import type { IPdfEditorAddDividerActionInput, IPdfEditorDeleteObjectsActionInput, IPdfEditorDeleteSelectionActionInput, IPdfEditorFlipObjectActionInput, IPdfEditorMoveObjectActionInput, IPdfEditorMoveObjectsActionInput, IPdfEditorPasteObjectsActionInput, IPdfEditorReorderObjectActionInput, IPdfEditorRotateObjectActionInput, IPdfEditorSelectAtPointActionInput, IPdfEditorUpdateObjectAppearanceActionInput, IPdfEditorUpdateObjectStateActionInput, IPdfEditorUpdateObjectStrokeActionInput } from '../action-types';
import type { IPdfEditorAction } from '../types';
/** Action that inserts a vector divider backed by `IPdfPathObject`. */
export declare const pdfAddDividerAction: IPdfEditorAction<IPdfEditorAddDividerActionInput>;
/** Action that applies an invertible stroke change to an editable object. */
export declare const pdfUpdateObjectStrokeAction: IPdfEditorAction<IPdfEditorUpdateObjectStrokeActionInput>;
/** Action that changes visibility or locking on an editable overlay object. */
export declare const pdfUpdateObjectStateAction: IPdfEditorAction<IPdfEditorUpdateObjectStateActionInput>;
/** Action that changes sparse model-supported object appearance fields. */
export declare const pdfUpdateObjectAppearanceAction: IPdfEditorAction<IPdfEditorUpdateObjectAppearanceActionInput>;
/**
 * Action that commits an object placement change.
 */
export declare const pdfMoveObjectAction: IPdfEditorAction<IPdfEditorMoveObjectActionInput>;
/**
 * Action that commits placement changes for multiple selected objects.
 */
export declare const pdfMoveObjectsAction: IPdfEditorAction<IPdfEditorMoveObjectsActionInput>;
/**
 * Action that mirrors an object around its untransformed bbox center.
 */
export declare const pdfFlipObjectAction: IPdfEditorAction<IPdfEditorFlipObjectActionInput>;
export declare const pdfRotateObjectAction: IPdfEditorAction<IPdfEditorRotateObjectActionInput>;
/**
 * Action that deletes editable overlay objects.
 */
export declare const pdfDeleteObjectsAction: IPdfEditorAction<IPdfEditorDeleteObjectsActionInput>;
/**
 * Action that deletes the current mixed overlay/native selection atomically.
 */
export declare const pdfDeleteSelectionAction: IPdfEditorAction<IPdfEditorDeleteSelectionActionInput>;
/**
 * Action that changes one editable object's page-layer order.
 */
export declare const pdfReorderObjectAction: IPdfEditorAction<IPdfEditorReorderObjectActionInput>;
/**
 * Action that pastes editable overlay objects as new user-created overlays.
 */
export declare const pdfPasteObjectsAction: IPdfEditorAction<IPdfEditorPasteObjectsActionInput>;
/**
 * Action that runs hit testing and converts the primary hit into selection.
 *
 * This action intentionally produces no mutation batch. Selection is local UI
 * state and should not dirty the PDF.
 */
export declare const pdfSelectAtPointAction: IPdfEditorAction<IPdfEditorSelectAtPointActionInput>;
