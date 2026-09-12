import type { IAttachmentIoService, IAttachmentUploadOptions } from '@univerjs-pro/collaboration-client';
import type { IBaseAttachment } from '@univerjs/core';
import { IConfigService, ImageSourceType, Injector } from '@univerjs/core';
export declare class AttachmentIoService implements IAttachmentIoService {
    private readonly _configService;
    private readonly _imageIoService;
    constructor(_configService: IConfigService, injector: Injector);
    getUploadOptions(): IAttachmentUploadOptions;
    saveAttachment(file: File): Promise<IBaseAttachment>;
    getAttachmentUrl(source: string, sourceType: ImageSourceType): Promise<string>;
    private _trySaveWithImageIo;
}
