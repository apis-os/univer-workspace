import type { FDocumentParagraph } from '@univerjs/docs/facade';
import type { IDocsListFindQuery, IDocsListInsertFacadeOptions, IDocsListInsertParagraphFacadeOptions, IDocsListItemInfo } from './types';
import { FDocument } from '@univerjs/docs/facade';
import { FDocumentList } from './f-document-list';
import { FDocumentListItem } from './f-document-list-item';
export interface IFDocumentListMixin {
    /**
     * Returns all docs lists in this document body or header/footer body by the segment id.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentList[]} An array of FDocumentList instances.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const lists = fDocument.getLists();
     * console.log(lists);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerLists = fDocument.getLists(headerSegmentId);
     * console.log(headerLists);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerLists = fDocument.getLists(footerSegmentId);
     * console.log(footerLists);
     * ```
     */
    getLists(segmentId?: string): FDocumentList[];
    /**
     * Returns a list in this document body or header/footer body by the list id and segment id.
     * @param {string} listId The list id stored on paragraph bullets.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentList | null} The FDocumentList instance, or `null` if no list with the id exists in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const list = fDocument.getList('list-id-123');
     * console.log(list);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerList = fDocument.getList('list-id-123', headerSegmentId);
     * console.log(headerList);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerList = fDocument.getList('list-id-123', footerSegmentId);
     * console.log(footerList);
     * ```
     */
    getList(listId: string, segmentId?: string): FDocumentList | null;
    /**
     * Returns all list items in this document body or header/footer body by the segment id.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentListItem[]} An array of FDocumentListItem instances, or an empty array if no list items exist in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const listItems = fDocument.getListItems();
     * console.log(listItems);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerListItems = fDocument.getListItems(headerSegmentId);
     * console.log(headerListItems);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerListItems = fDocument.getListItems(footerSegmentId);
     * console.log(footerListItems);
     * ```
     */
    getListItems(segmentId?: string): FDocumentListItem[];
    /**
     * Returns a list item in this document body or header/footer body by the paragraph start index and segment id.
     * @param {number} paragraphStartIndex The paragraph start index that identifies a list item.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentListItem | null} The FDocumentListItem instance, or `null` if no list item with the paragraph start index exists in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const listItem = fDocument.getListItem(10);
     * console.log(listItem);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerListItem = fDocument.getListItem(10, headerSegmentId);
     * console.log(headerListItem);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerListItem = fDocument.getListItem(10, footerSegmentId);
     * console.log(footerListItem);
     * ```
     */
    getListItem(paragraphStartIndex: number, segmentId?: string): FDocumentListItem | null;
    /**
     * Returns the list item in this document body or header/footer body that contains the given offset.
     * @param {number} offset The document data stream offset.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentListItem | null} The FDocumentListItem instance, or `null` if no list item contains the offset.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const listItem = fDocument.getListItemAt(150);
     * console.log(listItem);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerListItem = fDocument.getListItemAt(150, headerSegmentId);
     * console.log(headerListItem);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerListItem = fDocument.getListItemAt(150, footerSegmentId);
     * console.log(footerListItem);
     * ```
     */
    getListItemAt(offset: number, segmentId?: string): FDocumentListItem | null;
    /**
     * Finds the first list item in this document body or header/footer body that contains the given text.
     * @param {string} text Text to search inside list item content.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentListItem | null} The first matching FDocumentListItem instance, or `null` if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const listItem = fDocument.findListItemByText('Ship API');
     * console.log(listItem);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerListItem = fDocument.findListItemByText('Ship API', headerSegmentId);
     * console.log(headerListItem);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerListItem = fDocument.findListItemByText('Ship API', footerSegmentId);
     * console.log(footerListItem);
     * ```
     */
    findListItemByText(text: string, segmentId?: string): FDocumentListItem | null;
    /**
     * Finds list items in this document body or header/footer body that match the given query.
     * @param {string | IDocsListFindQuery} query A plain text query or a structured list item query.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {FDocumentListItem[]} An array of matching FDocumentListItem instances, or an empty array if no match is found.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const listItems = fDocument.findListItems({ text: 'API', nestingLevel: 2 });
     * console.log(listItems);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerListItems = fDocument.findListItems({ text: 'API', nestingLevel: 2 }, headerSegmentId);
     * console.log(headerListItems);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerListItems = fDocument.findListItems({ text: 'API', nestingLevel: 2 }, footerSegmentId);
     * console.log(footerListItems);
     * ```
     */
    findListItems(query: string | IDocsListFindQuery, segmentId?: string): FDocumentListItem[];
    /**
     * Returns agent-friendly list item descriptions in this document body or header/footer body by the segment id.
     * @param {string} [segmentId] The segment id of the body. Defaults to an empty string for the main body.
     * @returns {IDocsListItemInfo[]} An array of list item info objects, or an empty array if no list items exist in the document.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     * const listItemInfos = fDocument.describeListItems();
     * console.log(listItemInfos);
     *
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerListItemInfos = fDocument.describeListItems(headerSegmentId);
     * console.log(headerListItemInfos);
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerListItemInfos = fDocument.describeListItems(footerSegmentId);
     * console.log(footerListItemInfos);
     * ```
     */
    describeListItems(segmentId?: string): IDocsListItemInfo[];
    /**
     * Applies list formatting to a paragraph element in this document body or header/footer body.
     * The paragraph wrapper is resolved by persisted `paragraphId` before the command runs, so facade edits
     * inserted before the paragraph do not require recalculating offsets.
     * @param {FDocumentParagraph} paragraph The paragraph to convert to a list item.
     * @param {IDocsListInsertParagraphFacadeOptions} [options] Optional list type.
     * @returns {FDocumentList | null} The inserted list facade, or `null` if the insert list command failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Insert a bullet list around a paragraph with the default list type.
     * const paragraph = fDocument.appendParagraph('Ship docs facade examples');
     * const list = fDocument.insertList(paragraph, {
     *   listType: univerAPI.Enum.PresetListType.BULLET_LIST,
     *
     * });
     * console.log(list.describe());
     *
     * // Insert an ordered list around a paragraph in the header and footer with different list types.
     * const headerSegmentId = fDocument.ensurePageHeader();
     * const headerParagraph = fDocument.appendParagraph('Header list item', headerSegmentId);
     * const headerList = fDocument.insertList(headerParagraph, {
     *   listType: univerAPI.Enum.PresetListType.ORDER_LIST,
     * });
     * console.log(headerList.describe());
     *
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerParagraph = fDocument.appendParagraph('Footer list item', footerSegmentId);
     * const footerList = fDocument.insertList(footerParagraph, {
     *   listType: univerAPI.Enum.PresetListType.ORDER_LIST_2,
     * });
     * console.log(footerList.describe());
     * ```
     */
    insertList(paragraph: FDocumentParagraph, options?: IDocsListInsertParagraphFacadeOptions): FDocumentList | null;
    /**
     * Applies list formatting to a document range or the current selection in this document body or header/footer body.
     * Prefer the paragraph overload for agent-authored code.
     * @param {IDocsListInsertFacadeOptions} [options] Optional list type and range options.
     * @returns {FDocumentList | null} The inserted list facade, or `null` if the insert list command failed.
     * @example
     * ```ts
     * const fDocument = univerAPI.getActiveDocument();
     *
     * // Insert a bullet list in a table cell range with the default list type.
     * const table = fDocument.findTableByText('Revenue');
     * const range = table?.getCell(1, 0)?.getContentRange();
     * if (range) {
     *   const list = fDocument.insertList({
     *     ...range,
     *     listType: univerAPI.Enum.PresetListType.BULLET_LIST,
     *   });
     *   console.log(list.describe());
     * }
     *
     * const paragraph = fDocument.findParagraphByText('List item 1');
     * if (paragraph) {
     *   const paragraphs = fDocument.getParagraphs();
     *   const { paragraphIndex, startOffset } = paragraph.getInfo();
     *   const { endOffset } = paragraphs[paragraphIndex + 3].getInfo();
     *   const list2 = fDocument.insertList({
     *     startOffset,
     *     endOffset,
     *     listType: univerAPI.Enum.PresetListType.BULLET_LIST,
     *   });
     *   console.log(list2.describe());
     * }
     *
     * // Insert a list in the page footer by passing the footer segment id.
     * const footerSegmentId = fDocument.ensurePageFooter();
     * const footerList = fDocument.insertList({
     *   startOffset: 0,
     *   endOffset: 20,
     *   segmentId: footerSegmentId,
     *   listType: univerAPI.Enum.PresetListType.ORDER_LIST,
     * });
     * console.log(footerList.describe());
     * ```
     */
    insertList(options?: IDocsListInsertFacadeOptions): FDocumentList | null;
    /** Agent-friendly shorthand for applying a bullet list to a paragraph. */
    setBullet(paragraph: FDocumentParagraph, options?: Omit<IDocsListInsertParagraphFacadeOptions, 'listType'>): FDocumentList | null;
    /** Agent-friendly shorthand for applying an ordered list to a paragraph. */
    setOrderedList(paragraph: FDocumentParagraph, options?: Omit<IDocsListInsertParagraphFacadeOptions, 'listType'>): FDocumentList | null;
}
export declare class FDocumentListMixin extends FDocument implements IFDocumentListMixin {
    getLists(segmentId?: string): FDocumentList[];
    getList(listId: string, segmentId?: string): FDocumentList | null;
    getListItems(segmentId?: string): FDocumentListItem[];
    getListItem(paragraphStartIndex: number, segmentId?: string): FDocumentListItem | null;
    getListItemAt(offset: number, segmentId?: string): FDocumentListItem | null;
    findListItemByText(text: string, segmentId?: string): FDocumentListItem | null;
    findListItems(query: string | IDocsListFindQuery, segmentId?: string): FDocumentListItem[];
    describeListItems(segmentId?: string): IDocsListItemInfo[];
    insertList(paragraph: FDocumentParagraph, options?: IDocsListInsertParagraphFacadeOptions): FDocumentList | null;
    insertList(options?: IDocsListInsertFacadeOptions): FDocumentList | null;
    setBullet(paragraph: FDocumentParagraph, options?: Omit<IDocsListInsertParagraphFacadeOptions, 'listType'>): FDocumentList | null;
    setOrderedList(paragraph: FDocumentParagraph, options?: Omit<IDocsListInsertParagraphFacadeOptions, 'listType'>): FDocumentList | null;
    private _createFDocumentList;
    private _createFDocumentListItem;
}
declare module '@univerjs/docs/facade' {
    interface FDocument extends IFDocumentListMixin {
    }
}
