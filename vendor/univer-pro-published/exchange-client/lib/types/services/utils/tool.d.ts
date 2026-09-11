import type { HTTPService } from '@univerjs/network';
import { UniverInstanceType } from '@univerjs/core';
export declare function downloadFileByURL(url: string, filename: string, fileExt: string): void;
/**
 * Get the UniverInstanceType of a file based on its content type and extension.
 * @param file
 * @returns
 */
export declare function getUniverInstanceTypeByFile(file: File): UniverInstanceType.UNIVER_UNKNOWN;
export declare function isSupportedFileType(file: File, univerType: UniverInstanceType): boolean;
export declare function getUploadFile(types: UniverInstanceType[], multiple?: boolean): Promise<FileList | null>;
export declare function getFileByURL(url: string, httpService: HTTPService): Promise<File | undefined>;
/** Fetch a signed file URL and reject when an optional cancellation signal aborts. */
export declare function fetchFileByURL(url: string, httpService: HTTPService, signal?: AbortSignal): Promise<File>;
export declare function getFileNameFromURL(url: string): string | undefined;
export declare function blobToString(blob: Blob): Promise<string>;
export declare function bufferToFile(buffer: Uint8Array): File;
export declare function replaceType(path: string, type: string): string;
export declare function replaceUnitId(path: string, type: string): string;
export declare function replaceTaskID(path: string, taskID: string): string;
export declare function replaceFileID(path: string, fileID: string): string;
