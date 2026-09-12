import type { PdfObject } from '../types';
import type { IPdfEditorNativeTextHitTarget } from './hit-test/types';
import type { IPdfEditorSourceSpanSelectionAnchor } from './types';
export declare const PDF_EDITOR_NATIVE_TEXT_VISUAL_EDIT_METADATA: {
    readonly univerEditorNativeTextVisualEdit: true;
};
/** Whether promoted native text already contains a user-visible edit. */
export declare function isPdfEditorNativeTextVisuallyEdited(object: PdfObject): boolean;
/** Match a native text target without confusing repeated nested operators. */
export declare function isPdfEditorNativeTextTargetForSelection(selection: Pick<IPdfEditorSourceSpanSelectionAnchor, 'displayOperationIds' | 'pageId' | 'source'>, target: IPdfEditorNativeTextHitTarget): boolean;
