import type { Injector, ListGlyphType } from '@univerjs/core';
import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsListItemInfo, IDocsListOperationOptions, IDocsListStartNumberOptions } from './types';
import { DocsListSelectionMode } from '@univerjs-pro/docs-list';
/**
 * Facade object for a single docs list item.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const item = fDocument.findListItemByText('Ship API');
 * item?.setGlyphType(univerAPI.Enum.ListGlyphType.UPPER_LETTER, { mode: univerAPI.Enum.DocsListSelectionMode.Level });
 * item?.demote();
 * ```
 */
export declare class FDocumentListItem {
    private readonly _document;
    private readonly _paragraphStartIndex;
    private readonly _segmentId;
    private readonly _injector;
    private readonly _unitId;
    constructor(_document: FDocument, _paragraphStartIndex: number, _segmentId: string | undefined, _injector: Injector);
    /**
     * Returns the paragraph start index that identifies this list item.
     * @returns {number} The paragraph start index.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument.findListItemByText('Ship API');
     * console.log(item?.getParagraphStartIndex());
     * ```
     */
    getParagraphStartIndex(): number;
    /**
     * Get the segment id of this list item.
     * The main body list item have an empty string segment id.
     * The header and footer list item have a non-empty string segment id.
     * @returns {string} The segment id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument.findListItemByText('Ship API');
     * console.log(item?.getSegmentId());
     * ```
     */
    getSegmentId(): string;
    /**
     * Returns an agent-friendly description of this list item.
     * @returns {IDocsListItemInfo | null} The list item info, or `null` if the paragraph is no longer a list item.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument.findListItemByText('Ship API');
     * console.log(item?.describe());
     * ```
     */
    describe(): IDocsListItemInfo | null;
    /**
     * Returns plain text in this list item.
     * @returns {string} The list item text.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument.findListItemByText('Ship API');
     * console.log(item?.getText());
     * ```
     */
    getText(): string;
    /**
     * Returns whether this list item is rendered as an ordered marker.
     *
     * This is the recommended guard before calling ordered-list-only APIs such as
     * `setPrefixSuffix()` or `setStartNumber()`.
     * @returns {boolean} `true` when this item uses an ordered marker.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument.findListItemByText('Step 1');
     *
     * if (item?.isOrdered()) {
     *   item.setPrefixSuffix('Step ', ':');
     * }
     * ```
     */
    isOrdered(): boolean;
    /**
     * Returns whether this list item is rendered as an unordered bullet marker.
     *
     * This is the recommended guard before calling bullet-list-oriented APIs such as
     * `setGlyphSymbol()`.
     * @returns {boolean} `true` when this item exists and uses an unordered marker.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const item = fDocument.findListItemByText('Todo');
     *
     * if (item?.isUnordered()) {
     *   item.setGlyphSymbol('•');
     * }
     * ```
     */
    isUnordered(): boolean;
    /**
     * Selects this item, its current level, or its whole list.
     * @param {DocsListSelectionMode} [mode] Selection scope. Defaults to `item`.
     * @returns {boolean} Whether the selection command succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Select just the item.
     * const item = fDocument.findListItemByText('Ship API');
     * item?.select();
     *
     * // Select the whole list.
     * const item2 = fDocument.findListItemByText('Todo');
     * item2?.select(univerAPI.Enum.DocsListSelectionMode.List);
     *
     * // Select the current level.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * item3?.select(univerAPI.Enum.DocsListSelectionMode.Level);
     * ```
     */
    select(mode?: DocsListSelectionMode): boolean;
    /**
     * Changes the list marker glyph type for this item, level, or whole list.
     *
     * `glyphType` controls the marker value style, such as decimal numbers, upper-case letters,
     * lower-case letters, or Roman numerals. It does not change marker punctuation or wrapping;
     * use `setPrefixSuffix()` to change formats such as `1.`, `(1)`, or `Step 1:`.
     *
     * For unordered bullet lists, setting an ordered glyph type such as `DECIMAL` removes the
     * bullet symbol and renders the marker as an ordered value. For ordered lists, setting the
     * same glyph type as the current level may succeed without a visible change. For example,
     * the default first level of `PresetListType.ORDER_LIST` is already `DECIMAL`.
     * @param {ListGlyphType} glyphType The marker glyph type to apply.
     * @param {IDocsListOperationOptions} [options] Scope options. Defaults to `mode: 'list'` in command behavior.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Change glyph type for the whole list.
     * const item = fDocument.findListItemByText('Todo');
     * item?.setGlyphType(univerAPI.Enum.ListGlyphType.UPPER_LETTER, { mode: univerAPI.Enum.DocsListSelectionMode.List });
     *
     * // Change glyph type for the current level.
     * const item2 = fDocument.findListItemByText('Subtask 1');
     * item2?.setGlyphType(univerAPI.Enum.ListGlyphType.LOWER_ROMAN, { mode: univerAPI.Enum.DocsListSelectionMode.Level });
     *
     * // Change glyph type for just the item.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * item3?.setGlyphType(univerAPI.Enum.ListGlyphType.UPPER_LETTER, { mode: univerAPI.Enum.DocsListSelectionMode.Item });
     * ```
     */
    setGlyphType(glyphType: ListGlyphType, options?: IDocsListOperationOptions): boolean;
    /**
     * Changes the bullet symbol for this item, level, or whole list.
     * @param {string} symbol The bullet symbol to apply.
     * @param {IDocsListOperationOptions} [options] Scope options. Defaults to `mode: 'list'` in command behavior.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Change bullet symbol for the whole list.
     * const item = fDocument.findListItemByText('Todo');
     * item?.setGlyphSymbol('•', { mode: univerAPI.Enum.DocsListSelectionMode.List });
     *
     * // Change bullet symbol for the current level.
     * const item2 = fDocument.findListItemByText('Subtask 1');
     * item2?.setGlyphSymbol('◦', { mode: univerAPI.Enum.DocsListSelectionMode.Level });
     *
     * // Change bullet symbol for just the item.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * item3?.setGlyphSymbol('▪', { mode: univerAPI.Enum.DocsListSelectionMode.Item });
     * ```
     */
    setGlyphSymbol(symbol: string, options?: IDocsListOperationOptions): boolean;
    /**
     * Sets ordered-list prefix and suffix for this item, level, or whole list.
     *
     * This changes the ordered marker format around the number placeholder. For example,
     * `prefix: '('` and `suffix: ')'` renders markers like `(1)`, while `prefix: 'Step '`
     * and `suffix: ':'` renders markers like `Step 1:`.
     *
     * In `mode: Item`, the item receives a custom list definition, but it keeps the same
     * `listId` so ordered-list numbering stays continuous with the surrounding list. Because
     * ordered marker rendering also depends on that shared numbering context, prefix/suffix
     * changes may appear to affect adjacent items in the same continuous list. Use `mode: Level`
     * or `mode: List` when formatting ordered-list markers for a stable visual result.
     * No-op for unordered bullet lists.
     * @param {string} prefix Prefix before the number token.
     * @param {string} suffix Suffix after the number token.
     * @param {IDocsListOperationOptions} [options] Scope options. Defaults to `mode: 'list'` in command behavior.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Set prefix/suffix for the whole list.
     * const item = fDocument.findListItemByText('Todo');
     * if (item?.isOrdered()) {
     *   item.setPrefixSuffix('(', ')', { mode: univerAPI.Enum.DocsListSelectionMode.List });
     * }
     *
     * // Set prefix/suffix for the current level.
     * const item2 = fDocument.findListItemByText('Subtask 1');
     * if (item2?.isOrdered()) {
     *   item2.setPrefixSuffix('<', '>', { mode: univerAPI.Enum.DocsListSelectionMode.Level });
     * }
     *
     * // Set prefix/suffix for just the item.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * if (item3?.isOrdered()) {
     *   item3.setPrefixSuffix('[', ']', { mode: univerAPI.Enum.DocsListSelectionMode.Item });
     * }
     * ```
     */
    setPrefixSuffix(prefix: string, suffix: string, options?: IDocsListOperationOptions): boolean;
    /**
     * Starts ordered-list numbering from the provided number at this item.
     *
     * This only applies to ordered list items. Calling it on an unordered bullet list is a no-op.
     * The current implementation restarts numbering from this item and may affect following
     * continuous ordered-list items, regardless of `mode`.
     * @param {number} startNumber The visible number to start from.
     * @param {IDocsListStartNumberOptions} [options] Scope and restart options.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Start numbering from 5 for the whole list.
     * const item = fDocument.findListItemByText('Todo');
     * if (item?.isOrdered()) {
     *   item.setStartNumber(5, { mode: univerAPI.Enum.DocsListSelectionMode.List });
     * }
     *
     * // Start numbering from 3 for the current level.
     * const item2 = fDocument.findListItemByText('Subtask 1');
     * if (item2?.isOrdered()) {
     *   item2.setStartNumber(3, { mode: univerAPI.Enum.DocsListSelectionMode.Level });
     * }
     *
     * // Start numbering from 10 for just the item.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * if (item3?.isOrdered()) {
     *   item3.setStartNumber(10, { mode: univerAPI.Enum.DocsListSelectionMode.Item });
     * }
     * ```
     */
    setStartNumber(startNumber: number, options?: IDocsListStartNumberOptions): boolean;
    /**
     * Continues numbering from the previous same-level ordered list segment.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Start a new list segment that continues numbering from the previous segment.
     * const item = fDocument.findListItemByText('New Segment');
     * item?.continueNumbering();
     * ```
     */
    continueNumbering(): boolean;
    /**
     * Promotes this item, level, or whole list by one nesting level.
     *
     * `mode: Item` only changes this item's nesting level. It works for both ordered and
     * unordered list items. Promoting an item that is already at the top level is a no-op,
     * so it may succeed without a visible change.
     * @param {IDocsListOperationOptions} [options] Scope options. Defaults to `mode: 'list'` in command behavior.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Promote the whole list.
     * const item = fDocument.findListItemByText('Todo');
     * item?.promote({ mode: univerAPI.Enum.DocsListSelectionMode.List });
     *
     * // Promote the current level.
     * const item2 = fDocument.findListItemByText('Subtask 1');
     * item2?.promote({ mode: univerAPI.Enum.DocsListSelectionMode.Level });
     *
     * // Promote just the item.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * item3?.promote({ mode: univerAPI.Enum.DocsListSelectionMode.Item });
     * ```
     */
    promote(options?: IDocsListOperationOptions): boolean;
    /**
     * Demotes this item, level, or whole list by one nesting level.
     *
     * `mode: Item` only changes this item's nesting level. It works for both ordered and
     * unordered list items. Demoting an item that is already at the maximum nesting level is
     * a no-op, so it may succeed without a visible change.
     * @param {IDocsListOperationOptions} [options] Scope options. Defaults to `mode: 'list'` in command behavior.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Demote the whole list.
     * const item = fDocument.findListItemByText('Todo');
     * item?.demote({ mode: univerAPI.Enum.DocsListSelectionMode.List });
     *
     * // Demote the current level.
     * const item2 = fDocument.findListItemByText('Subtask 1');
     * item2?.demote({ mode: univerAPI.Enum.DocsListSelectionMode.Level });
     *
     * // Demote just the item.
     * const item3 = fDocument.findListItemByText('Subtask 1');
     * item3?.demote({ mode: univerAPI.Enum.DocsListSelectionMode.Item });
     * ```
     */
    demote(options?: IDocsListOperationOptions): boolean;
    private _info;
}
