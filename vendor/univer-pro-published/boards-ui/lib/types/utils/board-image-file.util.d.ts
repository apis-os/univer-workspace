export interface IBoardImageLikeFile {
    type?: string;
}
export interface IBoardDataTransferLikeItem {
    kind?: string;
    type?: string;
    getAsFile?: () => IBoardImageLikeFile | null;
}
export declare function isBoardImageFile(file: IBoardImageLikeFile | null | undefined): file is IBoardImageLikeFile;
export declare function getFirstBoardImageFile<T extends IBoardImageLikeFile>(files: Iterable<T | null | undefined>): T | null;
export declare function getFirstBoardImageFileFromItems<T extends IBoardImageLikeFile = IBoardImageLikeFile>(items: Iterable<IBoardDataTransferLikeItem>): T | null;
