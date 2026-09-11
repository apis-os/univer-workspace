import type { IBaseAttachment } from '@univerjs/core';
export interface IAttachmentUploadOptions {
    accept?: string[];
    maxSize?: number;
    upload?: (file: File) => Promise<IBaseAttachment>;
}
