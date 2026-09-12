import type { IPdfFontCMapCodeSpaceRange, IPdfFontUnicodeMapEntry } from '../types';
/**
 * Parses the subset of ToUnicode CMap syntax that is needed to map PDF source
 * character codes to Unicode strings.
 */
export declare function parseToUnicodeCMapFromText(cmap: string | undefined): Record<number, string> | undefined;
/**
 * Parses CMap code-space ranges. These ranges decide how raw PDF string bytes
 * are grouped before ToUnicode, CID widths, or embedded font cmap lookup.
 */
export declare function parseToUnicodeCMapCodeSpaceRangesFromText(cmap: string | undefined): IPdfFontCMapCodeSpaceRange[] | undefined;
export declare function toUnicodeMapEntries(map: Record<number, string> | undefined): IPdfFontUnicodeMapEntry[] | undefined;
