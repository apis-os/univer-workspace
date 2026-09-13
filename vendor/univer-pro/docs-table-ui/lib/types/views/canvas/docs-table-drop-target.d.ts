export interface IDocsTableDropParagraph {
    paragraphEnd: number;
    paragraphStart: number;
    rect: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
}
export interface IDocsTableDropTarget {
    targetOffset: number;
    width: number;
    x: number;
    y: number;
}
export declare function getDocsTableDropTargetFromParagraphs(paragraphs: IDocsTableDropParagraph[], point: {
    x: number;
    y: number;
}): IDocsTableDropTarget | null;
