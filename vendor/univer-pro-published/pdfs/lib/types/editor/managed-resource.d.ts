import type { PdfAssetId } from '../types';
import type { IPdfEditorManagedImageResource } from './types';
/** Return whether a source is a stable ASCII UUID/resource key. */
export declare function isPdfEditorManagedResourceSource(source: unknown): source is string;
/** Validate and detach one durable managed image descriptor. */
export declare function normalizePdfEditorManagedImageResource(input: unknown, expectedAssetId?: PdfAssetId): IPdfEditorManagedImageResource;
/** Return whether a value is a complete durable managed image descriptor. */
export declare function isPdfEditorManagedImageResource(input: unknown, expectedAssetId?: PdfAssetId): input is IPdfEditorManagedImageResource;
