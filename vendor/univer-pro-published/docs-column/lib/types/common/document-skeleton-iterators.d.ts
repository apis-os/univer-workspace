import type { IDocumentSkeletonColumn, IDocumentSkeletonLine, IDocumentSkeletonPage, IDocumentSkeletonSection, IDocumentSkeletonTable } from '@univerjs/engine-render';
export interface IDocumentSkeletonLineIteratorOptions {
    docsLeft?: number;
    pageMarginTop?: number;
    tableCellInsetX?: number;
    unitId?: string;
}
export interface IDocumentSkeletonTableIteratorOptions {
    docsLeft?: number;
    docsTop?: number;
    pageMarginTop?: number;
    resolveViewport?: boolean;
    skeFooters?: HeaderFooterSkeletonMap;
    skeHeaders?: HeaderFooterSkeletonMap;
    tableCellInsetX?: number;
    unitId?: string;
}
type LineSource = 'page' | 'table' | 'column';
type TableSource = 'page' | 'column' | 'header' | 'footer';
type HeaderFooterSkeletonMap = Map<string, Map<number, IDocumentSkeletonPage>>;
export interface IDocumentSkeletonLineContext {
    clipLeft?: number;
    clipRight?: number;
    column: IDocumentSkeletonColumn;
    line: IDocumentSkeletonLine;
    lineWidth: number;
    page: IDocumentSkeletonPage;
    pageIndex: number;
    pageLeft: number;
    section: IDocumentSkeletonSection;
    sectionTop: number;
    source: LineSource;
    visualLeft?: number;
    visualWidth?: number;
}
export interface IDocumentSkeletonTableCellGeometry {
    cell: IDocumentSkeletonPage;
    cellRect: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    clipLeft: number;
    clipRight: number;
    columnIndex: number;
    pageLeft: number;
    pageTop: number;
    row: IDocumentSkeletonTable['rows'][number];
    rowIndex: number;
    visualLeft: number;
    visualWidth: number;
}
export interface IDocumentSkeletonTableContext {
    cells: IDocumentSkeletonTableCellGeometry[];
    page: IDocumentSkeletonPage;
    pageIndex: number;
    pageLeft: number;
    pageTop: number;
    rootPage: IDocumentSkeletonPage;
    source: TableSource;
    table: IDocumentSkeletonTable;
    tableId: string;
    tableRect: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
}
export declare function documentSkeletonLineIterator(pages: IDocumentSkeletonPage[], options: IDocumentSkeletonLineIteratorOptions, cb: (context: IDocumentSkeletonLineContext) => void): void;
export declare function documentSkeletonTableIterator(pages: IDocumentSkeletonPage[], options?: IDocumentSkeletonTableIteratorOptions): IDocumentSkeletonTableContext[];
export {};
