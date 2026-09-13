import type { IBaseAttachment } from '@univerjs/core';
import type { IAttachmentUploadOptions } from './types';
import { IConfigService, ImageSourceType, IUniverInstanceService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
export interface IAttachmentIoService {
    getUploadOptions(): IAttachmentUploadOptions;
    saveAttachment(file: File): Promise<IBaseAttachment>;
    getAttachmentUrl(source: string, sourceType: ImageSourceType): Promise<string>;
}
export declare const IAttachmentIoService: import("@wendellhu/redi").IdentifierDecorator<IAttachmentIoService>;
export declare class CollaborationAttachmentIoService implements IAttachmentIoService {
    private readonly _httpService;
    private readonly _configService;
    private readonly _univerInstanceService;
    constructor(_httpService: HTTPService, _configService: IConfigService, _univerInstanceService: IUniverInstanceService);
    getUploadOptions(): IAttachmentUploadOptions;
    saveAttachment(file: File): Promise<IBaseAttachment>;
    getAttachmentUrl(source: string, sourceType: ImageSourceType): Promise<string>;
    private _upload;
    private _getUploadFileURL;
    private _getSignURL;
    private _getDownloadEndpointURL;
    private _getConfig;
}
