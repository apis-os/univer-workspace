import type { IAccessor, IDocumentData } from '@univerjs/core';
import type { IDocBlockMenuTarget } from '@univerjs/docs-ui';
import { Observable } from 'rxjs';
export interface IDocsColumnMenuContext {
    columnGroupId: string;
    columnId: string;
    column: number;
    columnCount: number;
}
export declare function createDocsColumnInsertMenuHiddenObservable(accessor: IAccessor): Observable<boolean>;
export declare function createDocsColumnStructureMenuHiddenObservable(accessor: IAccessor, options?: {
    maxColumnCount?: number;
    minColumnCount?: number;
}): Observable<boolean>;
export declare function getAddColumnMenuParamsFromAccessor(accessor: IAccessor): {
    columnGroupId: string;
    targetColumnId: string;
    position: string;
} | undefined;
export declare function getDeleteColumnMenuParamsFromAccessor(accessor: IAccessor): {
    columnGroupId: string;
    columnId: string;
} | undefined;
export declare function getDeleteColumnGroupMenuParamsFromAccessor(accessor: IAccessor): {
    columnGroupId: string;
} | undefined;
export declare function getEqualWidthColumnMenuParamsFromAccessor(accessor: IAccessor): {
    columnGroupId: string;
    widthRatios: number[];
} | undefined;
export declare function resolveActiveColumnMenuContext(documentData: IDocumentData | null | undefined, offset: number | null | undefined): IDocsColumnMenuContext | null;
export declare function getOptionalParagraphMenuTarget(accessor: IAccessor, unitId: string): IDocBlockMenuTarget | null;
