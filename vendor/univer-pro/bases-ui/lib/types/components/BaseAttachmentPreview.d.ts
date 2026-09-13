import type { IBaseAttachment } from '@univerjs/core';
export declare function useBaseAttachmentSources(items: readonly IBaseAttachment[]): {
    getImageSource: (item: IBaseAttachment) => string;
    resolveOpenSource: (item: IBaseAttachment) => Promise<string>;
};
