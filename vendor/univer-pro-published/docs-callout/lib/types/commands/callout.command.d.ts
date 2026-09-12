import type { ICommand } from '@univerjs/core';
import type { IDocsCalloutConfig } from '../common/type';
export interface IDocsCalloutInsertCommandParams {
    unitId?: string;
    blockId?: string;
    startOffset?: number;
    endOffset?: number;
    insertionMode?: 'convert-paragraph' | 'insert-new';
    config?: Partial<IDocsCalloutConfig>;
}
export interface IDocsCalloutUpdateCommandParams {
    unitId?: string;
    blockId: string;
    config: Partial<IDocsCalloutConfig>;
}
export interface IDocsCalloutSetTextColorCommandParams {
    unitId?: string;
    blockId: string;
    /** A CSS color, or `null` to restore the inherited document text color. */
    value: string | null;
}
export interface IDocsCalloutResetColorsCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsCalloutDeleteCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsCalloutUnwrapCommandParams {
    unitId?: string;
    blockId: string;
}
export interface IDocsCalloutCancelEmptyParagraphCommandParams {
    unitId?: string;
    cursorOffset: number;
    paragraphStartIndex?: number;
}
export declare const DocsCalloutInsertBelowCommand: ICommand;
export declare const DocsCalloutConsumeBoundaryDeleteCommand: ICommand;
export declare const DocsCalloutInsertCommand: ICommand<IDocsCalloutInsertCommandParams>;
export declare const DocsCalloutUpdateCommand: ICommand<IDocsCalloutUpdateCommandParams>;
export declare const DocsCalloutSetTextColorCommand: ICommand<IDocsCalloutSetTextColorCommandParams>;
export declare const DocsCalloutResetColorsCommand: ICommand<IDocsCalloutResetColorsCommandParams>;
export declare const DocsCalloutDeleteCommand: ICommand<IDocsCalloutDeleteCommandParams>;
export declare const DocsCalloutUnwrapCommand: ICommand<IDocsCalloutUnwrapCommandParams>;
export declare const DocsCalloutCancelEmptyParagraphCommand: ICommand<IDocsCalloutCancelEmptyParagraphCommandParams>;
