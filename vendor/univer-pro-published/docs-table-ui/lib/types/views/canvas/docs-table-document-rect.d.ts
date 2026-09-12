export interface IDocsTableDocumentPageRectInput {
    marginLeft: number;
    marginTop: number;
    pageHeight: number;
}
export interface IDocsTableDocumentTableRectInput {
    height: number;
    left: number;
    top: number;
    width: number;
}
export interface IDocsTableDocumentOffsetInput {
    docsLeft: number;
    docsTop: number;
    pageMarginTop: number;
}
export interface IDocsTableDocumentRect {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export declare function getDocsTableDocumentRect(page: IDocsTableDocumentPageRectInput, pageIndex: number, table: IDocsTableDocumentTableRectInput, offset: IDocsTableDocumentOffsetInput): IDocsTableDocumentRect;
