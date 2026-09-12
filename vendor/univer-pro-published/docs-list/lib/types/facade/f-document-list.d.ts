import type { Injector, ListGlyphType } from '@univerjs/core';
import type { FDocument } from '@univerjs/docs/facade';
import type { IDocsListInfo } from './types';
import { FDocumentListItem } from './f-document-list-item';
/**
 * Facade object for a docs list identified by `listId`.
 * @example
 * ```ts
 * const fDocument = univerAPI.getActiveDocument();
 *
 * const lists = fDocument.getLists();
 * console.log(lists.map(list => list.describe()));
 *
 * const list = fDocument.getList('list-a');
 * list?.setGlyphType(univerAPI.Enum.ListGlyphType.UPPER_LETTER);
 * list?.setPrefixSuffix('Step ', ':');
 * list?.promote();
 * ```
 */
export declare class FDocumentList {
    private readonly _document;
    private readonly _listId;
    private readonly _segmentId;
    private readonly _injector;
    constructor(_document: FDocument, _listId: string, _segmentId: string | undefined, _injector: Injector);
    /**
     * Returns the list id shared by all items in this list.
     * @returns {string} The list id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const lists = fDocument.getLists();
     *
     * // Get the id of the first list.
     * if (lists.length > 0) {
     *   const list = lists[0];
     *   console.log(list.getId());
     * }
     * ```
     */
    getId(): string;
    /**
     * Get the segment id of this list.
     * The main body lists have an empty string segment id.
     * The header and footer lists have a non-empty string segment id.
     * @returns {string} The segment id.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const lists = fDocument.getLists();
     *
     * // Get the segment id of the first list.
     * if (lists.length > 0) {
     *   const list = lists[0];
     *   console.log(list.getSegmentId());
     * }
     * ```
     */
    getSegmentId(): string;
    /**
     * Returns all item facades in this list.
     * @returns {FDocumentListItem[]} The list item facades.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const lists = fDocument.getLists();
     *
     * // Get the items of the first list.
     * if (lists.length > 0) {
     *   const list = lists[0];
     *   const items = list.getItems();
     *   items.forEach(item => console.log(item.describe()));
     * }
     * ```
     */
    getItems(): FDocumentListItem[];
    /**
     * Returns a compact description of this list for agents.
     * @returns {IDocsListInfo} The list id, item count, and item descriptions.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const lists = fDocument.getLists();
     *
     * // Get a description of the first list.
     * if (lists.length > 0) {
     *   const list = lists[0];
     *   console.log(list.describe());
     * }
     * ```
     */
    describe(): IDocsListInfo;
    /**
     * Returns whether this list contains at least one ordered item.
     *
     * Lists can mix ordered and unordered items at different nesting levels, so this method
     * answers "does any item support ordered-list-only operations?" rather than "is the whole
     * list ordered?".
     * @returns {boolean} `true` when at least one item in this list is ordered.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const list = fDocument.getList('list-a');
     *
     * if (list?.hasOrderedItems()) {
     *   list.setPrefixSuffix('Step ', ':');
     * }
     * ```
     */
    hasOrderedItems(): boolean;
    /**
     * Returns whether this list contains at least one unordered bullet item.
     *
     * Lists can mix ordered and unordered items at different nesting levels.
     * @returns {boolean} `true` when at least one item in this list is unordered.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const list = fDocument.getList('list-a');
     *
     * if (list?.hasUnorderedItems()) {
     *   list.setGlyphSymbol('•');
     * }
     * ```
     */
    hasUnorderedItems(): boolean;
    /**
     * Returns whether this list contains both ordered and unordered items.
     *
     * Mixed lists are valid. Agents should prefer item-level guards when applying APIs that
     * only make sense for ordered or unordered markers.
     * @returns {boolean} `true` when this list has both ordered and unordered items.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const list = fDocument.getList('list-a');
     *
     * if (list?.isMixed()) {
     *   console.log('Use item-level isOrdered/isUnordered checks for precise edits.');
     * }
     * ```
     */
    isMixed(): boolean;
    /**
     * Changes the list marker glyph type for the whole list.
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
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Change the whole list to use upper-case letters.
     * const list = fDocument.getList('list-a');
     * list?.setGlyphType(univerAPI.Enum.ListGlyphType.UPPER_LETTER);
     * ```
     */
    setGlyphType(glyphType: ListGlyphType): boolean;
    /**
     * Changes the bullet symbol for the whole list.
     * @param {string} symbol The bullet symbol to apply.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Change the whole list to use '•' as the bullet symbol for unordered lists.
     * const list = fDocument.getList('list-a');
     * list?.setGlyphSymbol('•');
     * ```
     */
    setGlyphSymbol(symbol: string): boolean;
    /**
     * Sets ordered-list prefix and suffix for the whole list.
     *
     * This changes the ordered marker format around the number placeholder. For example,
     * `prefix: '('` and `suffix: ')'` renders markers like `(1)`, while `prefix: 'Step '`
     * and `suffix: ':'` renders markers like `Step 1:`.
     * No-op for unordered bullet lists.
     * @param {string} prefix Prefix before the number token.
     * @param {string} suffix Suffix after the number token.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Change the whole list to use 'Step ' as prefix and ':' as suffix for ordered items.
     * const list = fDocument.getList('list-a');
     * if (list?.hasOrderedItems()) {
     *   list.setPrefixSuffix('Step ', ':');
     * }
     * ```
     */
    setPrefixSuffix(prefix: string, suffix: string): boolean;
    /**
     * Starts ordered-list numbering from the provided number at the first item in this list.
     *
     * This only applies to ordered lists. Calling it on an unordered bullet list is a no-op.
     * @param {number} startNumber The visible number to start from.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Start the ordered items in the whole list from number 3.
     * const list = fDocument.getList('list-a');
     * if (list?.hasOrderedItems()) {
     *   list.setStartNumber(3);
     * }
     * ```
     */
    setStartNumber(startNumber: number): boolean;
    /**
     * Promotes the whole list by one nesting level.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Promote the whole list by one level.
     * const list = fDocument.getList('list-a');
     * list?.promote();
     * ```
     */
    promote(): boolean;
    /**
     * Demotes the whole list by one nesting level.
     * @returns {boolean} Whether the mutation succeeded.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Demote the whole list by one level.
     * const list = fDocument.getList('list-a');
     * list?.demote();
     * ```
     */
    demote(): boolean;
    private _getListItemInfos;
    private _firstItem;
}
