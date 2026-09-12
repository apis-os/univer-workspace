export declare const PDF_EDITOR_SESSION_SCHEMA = "univer-pdf-editor-session";
export declare const PDF_EDITOR_SESSION_SCHEMA_VERSION = 1;
/**
 * Lifecycle state for an editor session.
 *
 * Keep this separate from document collaboration status: a session can be
 * read-only or disconnected while the underlying PDF document remains valid.
 */
export declare enum PdfEditorSessionStatus {
    ACTIVE = "active",
    READONLY = "readonly",
    DISCONNECTED = "disconnected",
    CLOSED = "closed"
}
/**
 * High-level tool modes exposed by the PDF editor UI.
 *
 * These values are persisted only as session state. Durable document edits
 * should be represented by mutations, not by the active tool mode.
 */
export declare enum PdfEditorToolMode {
    VIEW = "view",
    SELECT = "select",
    TEXT = "text",
    IMAGE = "image",
    SHAPE = "shape",
    ANNOTATE = "annotate",
    HIGHLIGHT = "highlight",
    UNDERLINE = "underline",
    STRIKEOUT = "strikeout",
    INK = "ink",
    FORM = "form",
    PAGE = "page"
}
/**
 * Stable command identifiers used by PDF editor UI and API integrations.
 *
 * Command ids are not document data, but keeping them in one enum prevents
 * ribbon, context-menu, and keyboard-controller registrations from drifting.
 */
export declare enum PdfEditorActionId {
    ADD_TABLE = "pdf.editor.action.addTable",
    RESIZE_TABLE = "pdf.editor.action.resizeTable",
    UPDATE_TABLE_THEME = "pdf.editor.action.updateTableTheme",
    UPDATE_TABLE_CELL_STYLE = "pdf.editor.action.updateTableCellStyle",
    UPDATE_OBJECT_STROKE = "pdf.editor.action.updateObjectStroke",
    UPDATE_LINK_ANNOTATION = "pdf.editor.action.updateLinkAnnotation",
    ADD_PARAGRAPH = "pdf.editor.action.addParagraph",
    INSERT_PARAGRAPH_BLOCK = "pdf.editor.action.insertParagraphBlock",
    REMOVE_PARAGRAPH_BLOCK = "pdf.editor.action.removeParagraphBlock",
    UPDATE_PARAGRAPH_STYLE = "pdf.editor.action.updateParagraphStyle",
    SPLIT_PARAGRAPH = "pdf.editor.action.splitParagraph",
    MERGE_PARAGRAPH = "pdf.editor.action.mergeParagraph",
    EDIT_PARAGRAPH = "pdf.editor.action.editParagraph",
    ADD_DIVIDER = "pdf.editor.action.addDivider",
    ADD_LIST = "pdf.editor.action.addList",
    CHANGE_LIST_STYLE = "pdf.editor.action.changeListStyle",
    CONVERT_PARAGRAPH_TO_LIST = "pdf.editor.action.convertParagraphToList",
    SET_LIST_START_NUMBER = "pdf.editor.action.setListStartNumber",
    INSERT_LIST_ITEM = "pdf.editor.action.insertListItem",
    REMOVE_LIST_ITEM = "pdf.editor.action.removeListItem",
    EXIT_LIST = "pdf.editor.action.exitList",
    CHANGE_LIST_LEVEL = "pdf.editor.action.changeListLevel",
    ADD_ANNOTATION = "pdf.editor.action.addAnnotation",
    ADD_IMAGE = "pdf.editor.action.addImage",
    ADD_TEXT_BOX = "pdf.editor.action.addTextBox",
    COPY_PAGE = "pdf.editor.action.copyPage",
    CROP_IMAGE = "pdf.editor.action.cropImage",
    DELETE_OBJECTS = "pdf.editor.action.deleteObjects",
    DELETE_SELECTION = "pdf.editor.action.deleteSelection",
    EDIT_FORM_FIELD = "pdf.editor.action.editFormField",
    EDIT_TEXT = "pdf.editor.action.editText",
    FLIP_OBJECT = "pdf.editor.action.flipObject",
    INSERT_PAGE = "pdf.editor.action.insertPage",
    MOVE_OBJECT = "pdf.editor.action.moveObject",
    MOVE_OBJECTS = "pdf.editor.action.moveObjects",
    PASTE_OBJECTS = "pdf.editor.action.pasteObjects",
    PROMOTE_NATIVE_FORM_XOBJECT = "pdf.editor.action.promoteNativeFormXObject",
    PROMOTE_NATIVE_IMAGE = "pdf.editor.action.promoteNativeImage",
    PROMOTE_NATIVE_TEXT = "pdf.editor.action.promoteNativeText",
    REMOVE_MANAGED_IMAGE = "pdf.editor.action.removeManagedImage",
    REMOVE_PAGE = "pdf.editor.action.removePage",
    REMOVE_PAGES = "pdf.editor.action.removePages",
    REORDER_OBJECT = "pdf.editor.action.reorderObject",
    REORDER_PAGE = "pdf.editor.action.reorderPage",
    REORDER_PAGES = "pdf.editor.action.reorderPages",
    REPLACE_IMAGE = "pdf.editor.action.replaceImage",
    ROTATE_OBJECT = "pdf.editor.action.rotateObject",
    ROTATE_PAGES = "pdf.editor.action.rotatePages",
    SELECT_AT_POINT = "pdf.editor.action.selectAtPoint",
    SELECT_TEXT_RANGE = "pdf.editor.action.selectTextRange",
    UPDATE_MANAGED_IMAGE = "pdf.editor.action.updateManagedImage",
    UPDATE_OBJECT_APPEARANCE = "pdf.editor.action.updateObjectAppearance",
    UPDATE_OBJECT_STATE = "pdf.editor.action.updateObjectState",
    UPDATE_PAGE_GEOMETRY = "pdf.editor.action.updatePageGeometry",
    UPDATE_SELECTED_TEXT_STYLE = "pdf.editor.action.updateSelectedTextStyle",
    UPDATE_TEXT_RANGE_STYLE = "pdf.editor.action.updateTextRangeStyle",
    UPDATE_TEXT_STYLE = "pdf.editor.action.updateTextStyle"
}
/**
 * Mutation kinds that describe user intent at editor level.
 *
 * They are intentionally higher-level than PDF operators so collaboration,
 * undo/redo, and export planning can reason about meaningful document changes.
 */
export declare enum PdfEditorMutationKind {
    ADD_OBJECT = "addObject",
    REMOVE_OBJECT = "removeObject",
    ADD_TEXT_STORY = "addTextStory",
    REMOVE_TEXT_STORY = "removeTextStory",
    ADD_DISPLAY_LIST = "addDisplayList",
    REMOVE_DISPLAY_LIST = "removeDisplayList",
    INSERT_TEXT_BLOCK = "insertTextBlock",
    UPDATE_TEXT_BLOCK = "updateTextBlock",
    REMOVE_TEXT_BLOCK = "removeTextBlock",
    UPSERT_TEXT_LIST_DEFINITION = "upsertTextListDefinition",
    REMOVE_TEXT_LIST_DEFINITION = "removeTextListDefinition",
    UPDATE_OBJECT_TRANSFORM = "updateObjectTransform",
    UPDATE_OBJECT_STYLE = "updateObjectStyle",
    UPDATE_TABLE_GEOMETRY = "updateTableGeometry",
    UPDATE_TABLE_CELL_STYLE = "updateTableCellStyle",
    UPDATE_TEXT_CONTENT = "updateTextContent",
    REPLACE_IMAGE = "replaceImage",
    CROP_IMAGE = "cropImage",
    REORDER_OBJECT = "reorderObject",
    ADD_ANNOTATION = "addAnnotation",
    UPDATE_ANNOTATION = "updateAnnotation",
    REMOVE_ANNOTATION = "removeAnnotation",
    UPDATE_FORM_FIELD = "updateFormField",
    INSERT_PAGE = "insertPage",
    REMOVE_PAGE = "removePage",
    REORDER_PAGE = "reorderPage",
    UPDATE_PAGE_GEOMETRY = "updatePageGeometry",
    SET_SOURCE_SUPPRESSION = "setSourceSuppression",
    SET_REPLACEMENT_LINK = "setReplacementLink",
    COMMIT_NATIVE_PATCH = "commitNativePatch",
    REGISTER_RESOURCE = "registerResource",
    UNREGISTER_RESOURCE = "unregisterResource"
}
/**
 * Origin of a mutation envelope.
 *
 * Reducers should apply the same deterministic payload regardless of source,
 * while sync and history layers can use this value for routing and telemetry.
 */
export declare enum PdfEditorMutationSource {
    USER = "user",
    API = "api",
    IMPORTER = "importer",
    REMOTE = "remote",
    UNDO = "undo",
    REDO = "redo"
}
/**
 * User-facing reason for a mutation batch.
 *
 * History grouping, audit UI, and collaboration summaries should use this
 * value instead of inferring intent from the first mutation kind in a batch.
 */
export declare enum PdfEditorMutationReason {
    INSERT_TEXT = "insertText",
    INSERT_TABLE = "insertTable",
    INSERT_PARAGRAPH = "insertParagraph",
    EDIT_PARAGRAPH = "editParagraph",
    INSERT_IMAGE = "insertImage",
    INSERT_DIVIDER = "insertDivider",
    INSERT_LIST = "insertList",
    EDIT_LIST = "editList",
    PROMOTE_NATIVE_TEXT = "promoteNativeText",
    PROMOTE_NATIVE_IMAGE = "promoteNativeImage",
    PROMOTE_NATIVE_FORM_XOBJECT = "promoteNativeFormXObject",
    EDIT_TEXT = "editText",
    TRANSFORM_OBJECT = "transformObject",
    EDIT_STYLE = "editStyle",
    REPLACE_IMAGE = "replaceImage",
    CROP_IMAGE = "cropImage",
    ARRANGE_OBJECT = "arrangeObject",
    DRAW_SHAPE = "drawShape",
    EDIT_ANNOTATION = "editAnnotation",
    EDIT_FORM_FIELD = "editFormField",
    EDIT_PAGE = "editPage",
    DELETE = "delete",
    PASTE = "paste",
    REMOTE_SYNC = "remoteSync",
    HISTORY = "history"
}
/**
 * Selection anchor categories used by hit testing and local editor state.
 *
 * Reducers should not treat selection changes as durable document edits by
 * default.
 */
export declare enum PdfEditorSelectionKind {
    PAGE = "page",
    OBJECT = "object",
    TABLE_CELL = "tableCell",
    TEXT_RANGE = "textRange",
    SOURCE_SPAN = "sourceSpan",
    FORM_FIELD = "formField",
    CONTROL_HANDLE = "controlHandle"
}
/**
 * In-progress interaction categories.
 *
 * Drafts are local-first previews. Only committed mutations should alter the
 * collaborative document state.
 */
export declare enum PdfEditorDraftKind {
    MOVE = "move",
    RESIZE = "resize",
    ROTATE = "rotate",
    TEXT_COMPOSITION = "textComposition",
    IMAGE_CROP = "imageCrop",
    PAGE_CROP = "pageCrop",
    DRAW_SHAPE = "drawShape",
    MARQUEE_SELECTION = "marqueeSelection"
}
/**
 * Delivery status for mutations that are traveling through collaboration.
 *
 * This is session bookkeeping rather than document content. A rejected
 * mutation should usually be compensated by an inverse batch or conflict UI.
 */
export declare enum PdfEditorMutationDeliveryState {
    PENDING = "pending",
    ACKNOWLEDGED = "acknowledged",
    REJECTED = "rejected"
}
/**
 * Export patch entry categories produced from editor state.
 *
 * The patch layer lets early exporters append overlays first and later promote
 * selected edits to native PDF rewrites without changing mutation history.
 */
export declare enum PdfEditorExportPatchKind {
    OVERLAY_OBJECT = "overlayObject",
    OBJECT_PATCH = "objectPatch",
    TEXT_PATCH = "textPatch",
    IMAGE_PATCH = "imagePatch",
    FORM_FIELD_PATCH = "formFieldPatch",
    SOURCE_SUPPRESSION = "sourceSuppression",
    REPLACEMENT_LINK = "replacementLink",
    PAGE_PATCH = "pagePatch",
    NATIVE_PATCH = "nativePatch"
}
