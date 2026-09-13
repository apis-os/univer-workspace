import type { IAccessor, IDocumentBody } from '@univerjs/core';
export declare const stringifyDT: (createTimestamp: number) => string;
export declare function parseCommentContent(content: string | undefined): IDocumentBody | null;
export declare const syncUsers: (accessor: IAccessor, relativeUsers: Set<string>) => Promise<void>;
