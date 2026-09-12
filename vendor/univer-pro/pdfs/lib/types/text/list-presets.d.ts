import type { IPdfTextListDefinition, PdfTextListId } from '../types';
/**
 * PDF editor list presets used by menus and insertion commands.
 *
 * Preset IDs are UI factories, not persisted list semantics. A command expands
 * the selected preset into a complete `IPdfTextListDefinition` before storage.
 */
export declare enum PdfListPresetId {
    UNORDERED_DISC = "unorderedDisc",
    UNORDERED_CIRCLE = "unorderedCircle",
    UNORDERED_SQUARE = "unorderedSquare",
    UNORDERED_DIAMOND = "unorderedDiamond",
    UNORDERED_CHECK = "unorderedCheck",
    UNORDERED_ARROW = "unorderedArrow",
    ORDERED_DECIMAL_DOT = "orderedDecimalDot",
    ORDERED_DECIMAL_PAREN = "orderedDecimalParen",
    ORDERED_MULTILEVEL = "orderedMultilevel",
    ORDERED_ALPHA = "orderedAlpha",
    ORDERED_NUMBER_ALPHA = "orderedNumberAlpha",
    ORDERED_DECIMAL_ZERO = "orderedDecimalZero"
}
/** Expand one editor preset into a self-contained persisted list definition. */
export declare function createPdfListDefinitionFromPreset(presetId: PdfListPresetId, listId: PdfTextListId): IPdfTextListDefinition;
