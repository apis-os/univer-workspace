import { UniverInstanceType } from '@univerjs/core';
export declare const DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
export declare const DOC = "application/msword";
export declare const XLS = "application/vnd.ms-excel";
export declare const XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
export declare const CSV = "text/csv";
export declare const TSV = "text/tab-separated-values";
export declare const PPT = "application/vnd.ms-powerpoint";
export declare const PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
export declare const PDF = "application/pdf";
export declare const UNIT_CONTENT_TYPE: Record<UniverInstanceType, string[]>;
export declare const CONTENT_TYPE_EXTNAME: {
    [key: string]: string;
};
export declare const UNIT_FILE_EXTENSIONS: Record<UniverInstanceType, string[]>;
