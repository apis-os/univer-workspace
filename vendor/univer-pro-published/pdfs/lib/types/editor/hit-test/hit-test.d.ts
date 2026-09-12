import type { IPdfDurableEditState, IPdfEditorSelectionState } from '../types';
import type { IPdfEditorHit, IPdfEditorHitTestProvider, IPdfEditorHitTestRequest, IPdfEditorHitTestResult } from './types';
/**
 * Default overlay-object provider.
 *
 * This provider is intentionally simple: it performs bbox-level hit testing for
 * user-created or promoted editor objects. More precise providers can layer on
 * top later without changing the request/result contract.
 */
export declare const pdfOverlayObjectHitTestProvider: IPdfEditorHitTestProvider;
/**
 * Bbox-level provider for imported image XObject display operations.
 *
 * Native PDF operators are source spans until the user promotes/replaces them,
 * so hits intentionally become SOURCE_SPAN anchors rather than editable overlay
 * objects.
 */
export declare const pdfNativeImageHitTestProvider: IPdfEditorHitTestProvider;
/**
 * Bbox-level provider for imported Form XObject display operations.
 */
export declare const pdfNativeFormXObjectHitTestProvider: IPdfEditorHitTestProvider;
/**
 * Bbox-level provider for imported text display operations.
 *
 * Native text stays a source span until a promote command creates an editable
 * overlay object and records the source suppression/replacement link.
 */
export declare const pdfNativeTextHitTestProvider: IPdfEditorHitTestProvider;
/** Bbox-level provider for semantic Link annotations in selection tools. */
export declare const pdfLinkAnnotationHitTestProvider: IPdfEditorHitTestProvider;
/**
 * Bbox-level provider for AcroForm widget targets.
 *
 * Form fields are already semantic editor targets, so they do not require a
 * native-promotion step. The hit keeps both widget and field identity.
 */
export declare const pdfFormFieldHitTestProvider: IPdfEditorHitTestProvider;
export declare const defaultPdfEditorHitTestProviders: IPdfEditorHitTestProvider[];
/**
 * Run editor hit testing against the current edit state.
 *
 * The returned list is sorted so the first candidate is the default selection
 * target. A page fallback is added unless the caller disables it.
 */
export declare function hitTestPdfEditorEditState(editState: IPdfDurableEditState, request: IPdfEditorHitTestRequest, providers?: IPdfEditorHitTestProvider[]): IPdfEditorHitTestResult;
/**
 * Convert one hit result into editor selection state.
 *
 * This keeps UI event handlers small and gives selections the same shape
 * regardless of whether the hit came from object or text mode.
 */
export declare function createPdfEditorSelectionFromHit(hit: IPdfEditorHit, now: number): IPdfEditorSelectionState;
