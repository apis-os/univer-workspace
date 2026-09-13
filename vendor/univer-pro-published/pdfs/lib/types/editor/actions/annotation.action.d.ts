import type { IPdfEditorAddAnnotationActionInput, IPdfEditorEditFormFieldActionInput, IPdfEditorPromoteNativeFormXObjectActionInput, IPdfEditorUpdateLinkAnnotationActionInput } from '../action-types';
import type { IPdfEditorAction } from '../types';
/** Add a visual annotation through the same durable overlay path as imported annotations. */
export declare const pdfAddAnnotationAction: IPdfEditorAction<IPdfEditorAddAnnotationActionInput>;
/** Action that updates a Link annotation without promoting the source object. */
export declare const pdfUpdateLinkAnnotationAction: IPdfEditorAction<IPdfEditorUpdateLinkAnnotationActionInput>;
/**
 * Action that commits a semantic AcroForm field value edit.
 */
export declare const pdfEditFormFieldAction: IPdfEditorAction<IPdfEditorEditFormFieldActionInput>;
/**
 * Action that promotes one native Form XObject paint span into a raw group.
 */
export declare const pdfPromoteNativeFormXObjectAction: IPdfEditorAction<IPdfEditorPromoteNativeFormXObjectActionInput>;
