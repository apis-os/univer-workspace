import type { IBoardImageElement } from '@univerjs-pro/boards';
import type { IImageIoService } from '@univerjs/core';
import type { IImageProps, IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { ImageSourceType } from '@univerjs/core';
import { Image } from '@univerjs/engine-render';
export interface IBoardImageObjectProps extends IImageProps {
    element: IBoardImageElement;
    imageSourceType: ImageSourceType;
}
export declare class BoardImageObject extends Image {
    private _element;
    private _pendingImage;
    private _stopWaitingForImage?;
    constructor(key: string, props: IBoardImageObjectProps);
    updateElement(element: IBoardImageElement): void;
    getElement(): IBoardImageElement;
    render(ctx: UniverRenderingContext, bounds?: IViewportInfo): this;
    dispose(): void;
    loadSource(imageIoService: IImageIoService): Promise<void>;
}
