import type { IPdfTextBlock, IPdfTextListLevel, IPdfTextStory, PdfId, PdfTextListId } from '../types';
import { PdfListMarkerStyle } from '../enums';
/** Generated marker and counter state for one semantic list block. */
export interface IPdfResolvedListMarker {
    /** Source text block that owns this marker. */
    blockId: PdfId;
    /** List definition used to generate the marker. */
    listId: PdfTextListId;
    /** Normalized zero-based level used during layout. */
    level: number;
    /** Effective ordinal displayed by this item. */
    ordinal: number;
    /** Visible marker text or glyph; it is not part of the body runs. */
    marker: string;
    /** Resolved level definition used by renderers and exporters. */
    levelDefinition: IPdfTextListLevel;
}
/**
 * Resolve every valid semantic list block in story order.
 *
 * Counter state is isolated per list id. Invalid or dangling list references
 * are ignored so callers can render the remaining story as normal paragraphs.
 */
export declare function resolvePdfListMarkers(story: IPdfTextStory): IPdfResolvedListMarker[];
/** Format one positive ordinal using a supported ordered-list marker family. */
export declare function formatPdfListOrdinal(value: number, style: PdfListMarkerStyle): string;
/** Return the list item associated with a resolved marker. */
export declare function findPdfListBlock(story: IPdfTextStory, marker: IPdfResolvedListMarker): IPdfTextBlock | undefined;
