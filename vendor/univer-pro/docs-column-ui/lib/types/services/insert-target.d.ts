import type { IAccessor } from '@univerjs/core';
export type DocsColumnInsertPlacement = 'target' | 'below';
export interface IDocsColumnInsertTargetOptions {
    explicitOffset?: number;
    placement?: DocsColumnInsertPlacement;
    consumeContentInsertRange?: boolean;
    snapToParagraphEnd?: boolean;
}
export interface IDocsColumnInsertTarget {
    offset: number;
    rawOffset: number;
    source: 'explicit' | 'contentInsertRange' | 'paragraphTarget' | 'selection';
}
export declare function resolveDocsColumnInsertTargetFromAccessor(accessor: IAccessor, options?: IDocsColumnInsertTargetOptions): IDocsColumnInsertTarget | null;
