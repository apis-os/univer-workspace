import type { ICommand } from '@univerjs/core';
import type { IDocsCodeConfig } from '../common/type';
export interface IDocsCodeInsertCommandParams {
    unitId?: string;
    blockId?: string;
    startOffset?: number;
    endOffset?: number;
    insertionMode?: 'convert-paragraph' | 'insert-new';
    config?: Partial<IDocsCodeConfig>;
}
export interface IDocsCodeUpdateCommandParams {
    unitId?: string;
    blockId: string;
    config: Partial<IDocsCodeConfig>;
}
export interface IDocsCodeExitCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsCodeUnwrapCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsCodeRemoveCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsCodeCancelEmptyParagraphCommandParams {
    unitId?: string;
    cursorOffset?: number;
    paragraphStartIndex?: number;
}
export declare const DocsCodeInsertBelowCommand: ICommand;
export declare const DocsCodeConsumeBoundaryDeleteCommand: ICommand;
export declare const DocsCodeInsertCommand: ICommand<IDocsCodeInsertCommandParams>;
export declare const DocsCodeUpdateCommand: ICommand<IDocsCodeUpdateCommandParams>;
export declare const DocsCodeExitCommand: ICommand<IDocsCodeExitCommandParams>;
export declare const DocsCodeUnwrapCommand: ICommand<IDocsCodeUnwrapCommandParams>;
export declare const DocsCodeRemoveCommand: ICommand<IDocsCodeRemoveCommandParams>;
export declare const DocsCodeCancelEmptyParagraphCommand: ICommand<IDocsCodeCancelEmptyParagraphCommandParams>;
