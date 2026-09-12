import type { ICommand } from '@univerjs/core';
export interface IDocsQuoteInsertCommandParams {
    unitId?: string;
    blockId?: string;
    startOffset?: number;
    endOffset?: number;
    insertionMode?: 'convert-paragraph' | 'insert-new';
}
export interface IDocsQuoteExitCommandParams {
    unitId?: string;
    cursorOffset?: number;
}
export interface IDocsQuoteUnwrapCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsQuoteRemoveCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsQuoteCancelEmptyParagraphCommandParams {
    unitId?: string;
    cursorOffset?: number;
    paragraphStartIndex?: number;
}
export interface IDocsQuoteUpdateStyleCommandParams {
    unitId?: string;
    blockId: string;
    lineColor?: string;
    textColor?: string;
}
export declare const DocsQuoteInsertBelowCommand: ICommand;
export declare const DocsQuoteInsertCommand: ICommand<IDocsQuoteInsertCommandParams>;
export declare const DocsQuoteExitCommand: ICommand<IDocsQuoteExitCommandParams>;
export declare const DocsQuoteUnwrapCommand: ICommand<IDocsQuoteUnwrapCommandParams>;
export declare const DocsQuoteUpdateStyleCommand: ICommand<IDocsQuoteUpdateStyleCommandParams>;
export declare const DocsQuoteRemoveCommand: ICommand<IDocsQuoteRemoveCommandParams>;
export declare const DocsQuoteCancelEmptyParagraphCommand: ICommand<IDocsQuoteCancelEmptyParagraphCommandParams>;
