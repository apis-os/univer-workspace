import type { IPdfEditorAddListActionInput, IPdfEditorAddParagraphActionInput, IPdfEditorAddTextBoxActionInput, IPdfEditorChangeListLevelActionInput, IPdfEditorChangeListStyleActionInput, IPdfEditorConvertParagraphToListActionInput, IPdfEditorEditParagraphActionInput, IPdfEditorEditTextActionInput, IPdfEditorExitListActionInput, IPdfEditorInsertListItemActionInput, IPdfEditorInsertParagraphBlockActionInput, IPdfEditorMergeParagraphActionInput, IPdfEditorPromoteNativeTextActionInput, IPdfEditorRemoveListItemActionInput, IPdfEditorRemoveParagraphBlockActionInput, IPdfEditorSelectTextRangeActionInput, IPdfEditorSetListStartNumberActionInput, IPdfEditorSplitParagraphActionInput, IPdfEditorUpdateParagraphStyleActionInput, IPdfEditorUpdateSelectedTextStyleActionInput, IPdfEditorUpdateTextRangeStyleActionInput, IPdfEditorUpdateTextStyleActionInput } from '../action-types';
import type { IPdfEditorAction } from '../types';
/**
 * Action that inserts a new editable text-box overlay.
 */
export declare const pdfAddTextBoxAction: IPdfEditorAction<IPdfEditorAddTextBoxActionInput>;
/** Action that atomically inserts a paragraph story and auto-fit text frame. */
export declare const pdfAddParagraphAction: IPdfEditorAction<IPdfEditorAddParagraphActionInput>;
/** Action that inserts one ordinary paragraph block and its first run. */
export declare const pdfInsertParagraphBlockAction: IPdfEditorAction<IPdfEditorInsertParagraphBlockActionInput>;
/** Action that removes one paragraph block with complete inverse data. */
export declare const pdfRemoveParagraphBlockAction: IPdfEditorAction<IPdfEditorRemoveParagraphBlockActionInput>;
/** Action that updates paragraph-level layout properties. */
export declare const pdfUpdateParagraphStyleAction: IPdfEditorAction<IPdfEditorUpdateParagraphStyleActionInput>;
/** Action that atomically commits paragraph text and its auto-fit bbox. */
export declare const pdfEditParagraphAction: IPdfEditorAction<IPdfEditorEditParagraphActionInput>;
/** Action that atomically splits one paragraph at a local text range. */
export declare const pdfSplitParagraphAction: IPdfEditorAction<IPdfEditorSplitParagraphActionInput>;
/** Action that atomically merges a paragraph into its previous block. */
export declare const pdfMergeParagraphAction: IPdfEditorAction<IPdfEditorMergeParagraphActionInput>;
/** Action that atomically inserts a semantic list story and text-box object. */
export declare const pdfAddListAction: IPdfEditorAction<IPdfEditorAddListActionInput>;
/** Action that replaces a list definition with a PDF-owned preset. */
export declare const pdfChangeListStyleAction: IPdfEditorAction<IPdfEditorChangeListStyleActionInput>;
/** Action that gives an existing paragraph block a new single-item list definition. */
export declare const pdfConvertParagraphToListAction: IPdfEditorAction<IPdfEditorConvertParagraphToListActionInput>;
/** Action that changes the first ordinal for one list level. */
export declare const pdfSetListStartNumberAction: IPdfEditorAction<IPdfEditorSetListStartNumberActionInput>;
/** Action that inserts one list block and body run. */
export declare const pdfInsertListItemAction: IPdfEditorAction<IPdfEditorInsertListItemActionInput>;
/** Action that removes one list block while retaining its list definition for later insertions. */
export declare const pdfRemoveListItemAction: IPdfEditorAction<IPdfEditorRemoveListItemActionInput>;
/** Action that converts one list item to a normal paragraph. */
export declare const pdfExitListAction: IPdfEditorAction<IPdfEditorExitListActionInput>;
/** Action that changes one list item's nesting level. */
export declare const pdfChangeListLevelAction: IPdfEditorAction<IPdfEditorChangeListLevelActionInput>;
/**
 * Action that commits text content for an editable object.
 */
export declare const pdfEditTextAction: IPdfEditorAction<IPdfEditorEditTextActionInput>;
/**
 * Action that commits visual text style changes for an editable text object.
 */
export declare const pdfUpdateTextStyleAction: IPdfEditorAction<IPdfEditorUpdateTextStyleActionInput>;
/**
 * Action that commits rich text style changes for a selected text range.
 */
export declare const pdfUpdateTextRangeStyleAction: IPdfEditorAction<IPdfEditorUpdateTextRangeStyleActionInput>;
/**
 * Action that updates local text range selection without document mutation.
 */
export declare const pdfSelectTextRangeAction: IPdfEditorAction<IPdfEditorSelectTextRangeActionInput>;
/**
 * Action that promotes one native text display span into an editable text box.
 */
export declare const pdfPromoteNativeTextAction: IPdfEditorAction<IPdfEditorPromoteNativeTextActionInput>;
/**
 * Action that applies a partial text style to the current primary selection.
 *
 * Native text is promoted only when the user performs a real formatting action.
 */
export declare const pdfUpdateSelectedTextStyleAction: IPdfEditorAction<IPdfEditorUpdateSelectedTextStyleActionInput>;
