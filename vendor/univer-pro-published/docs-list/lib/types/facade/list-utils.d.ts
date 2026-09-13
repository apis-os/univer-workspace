import type { IDocumentData, IListData, INestingLevel, IParagraph } from '@univerjs/core';
import type { IDocsListItemInfo } from './types';
export declare function getListItemInfos(documentData: IDocumentData): IDocsListItemInfo[];
export declare function getListData(documentData: IDocumentData, listType: string): IListData | undefined;
export declare function getListLevel(documentData: IDocumentData, paragraph: IParagraph): INestingLevel | undefined;
export declare function getParagraphText(documentData: IDocumentData, paragraphStartIndex: number): string;
export declare function getParagraphAtOffset(documentData: IDocumentData, offset: number): IParagraph | undefined;
