import type { IDocumentBody } from '@univerjs/core';
export declare const DocsTableColumnDataStreamTreeTokenType: {
    readonly COLUMN_GROUP_START: "\u0012";
    readonly COLUMN_START: "\u0013";
    readonly COLUMN_END: "\u0014";
    readonly COLUMN_GROUP_END: "\u0015";
};
export interface IDocsTableColumnGroupRange {
    columnGroupId: string;
    columns?: Array<{
        columnId: string;
        widthRatio: number;
    }>;
    endIndex: number;
    startIndex: number;
}
export type IDocumentBodyWithColumnGroups = IDocumentBody & {
    columnGroups?: IDocsTableColumnGroupRange[];
};
export declare function asDocumentBodyWithColumnGroups(body: IDocumentBody): IDocumentBodyWithColumnGroups;
