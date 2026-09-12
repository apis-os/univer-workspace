import type { IDocumentData } from '@univerjs/core';
/**
 * Clones rich document data and applies Board host defaults without mutating either input.
 *
 * Board element packages use this at the model boundary before storing document data. Facade packages remain
 * responsible for converting public `RichTextValue` inputs into `IDocumentData`.
 * Board text defaults are merged below rich-document defaults, while explicit text runs keep the Doc model's normal
 * highest precedence.
 */
export declare function mergeBoardRichTextDocument(defaultDocument: IDocumentData | undefined, documentData: IDocumentData): IDocumentData;
