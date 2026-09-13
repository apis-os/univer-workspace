import type { IPdfEditorAddTableActionInput, IPdfEditorResizeTableActionInput, IPdfEditorUpdateTableCellStyleActionInput, IPdfEditorUpdateTableThemeActionInput } from '../action-types';
import type { IPdfEditorAction } from '../types';
/** Action that atomically inserts a structured table and one story per cell. */
export declare const pdfAddTableAction: IPdfEditorAction<IPdfEditorAddTableActionInput>;
/** Action that changes one table cell's container and whole-cell text styling. */
export declare const pdfUpdateTableCellStyleAction: IPdfEditorAction<IPdfEditorUpdateTableCellStyleActionInput>;
/** Action that atomically changes table bounds, grid structure, and cell stories. */
export declare const pdfResizeTableAction: IPdfEditorAction<IPdfEditorResizeTableActionInput>;
/** Action that changes a table theme without materializing styles into cells. */
export declare const pdfUpdateTableThemeAction: IPdfEditorAction<IPdfEditorUpdateTableThemeActionInput>;
