import type { PdfObjectId } from '../types';
import type { IPdfDurableEditState, IPdfEditorClipboardPayload } from './types';
/** Capture selected overlays and every durable dependency needed to paste them later. */
export declare function createPdfEditorClipboardPayload(editState: IPdfDurableEditState, objectIds: PdfObjectId[]): IPdfEditorClipboardPayload;
