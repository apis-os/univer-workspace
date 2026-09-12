export declare function extractClipboardFiles(clipboardData: {
    files: ArrayLike<File>;
    items: ArrayLike<DataTransferItem>;
}): File[];
export declare function readClipboardItemFiles(item: ClipboardItem): Promise<File[]>;
export declare function createClipboardFileName(mimeType: string, timestamp?: number): string;
