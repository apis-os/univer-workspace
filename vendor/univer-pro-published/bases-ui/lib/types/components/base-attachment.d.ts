import type { IBaseAttachment } from '@univerjs/core';
export type BaseAttachmentKind = 'image' | 'pdf' | 'archive' | 'file';
export declare function getBaseAttachmentKind(item: IBaseAttachment): BaseAttachmentKind;
export declare function isBaseAttachmentImage(item: IBaseAttachment): boolean;
export declare function getBaseAttachments(value: unknown): IBaseAttachment[];
export declare function getBaseAttachmentImageSource(item: IBaseAttachment): Required<Pick<IBaseAttachment, 'source' | 'sourceType'>> | null;
export declare function getBaseAttachmentOpenSource(item: IBaseAttachment): Required<Pick<IBaseAttachment, 'source' | 'sourceType'>> | null;
export declare function openBaseAttachmentUrl(item: IBaseAttachment, url: string): void;
