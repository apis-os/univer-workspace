import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IShapeTextHostSizeUpdateParams, IShapeTextUpdateParams } from '@univerjs-pro/shape-editor-ui';
import type { IDisposable } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface IBoardShapeIntrinsicSizeTextUpdateContext {
    elementData: IBoardElementData;
    params: IShapeTextUpdateParams;
}
export interface IBoardShapeIntrinsicSizeHostUpdateContext {
    elementData: IBoardElementData;
    params: IShapeTextHostSizeUpdateParams;
}
export interface IBoardShapeIntrinsicSizeProvider {
    match: (elementData: IBoardElementData) => boolean;
    updateShapeText?: (context: IBoardShapeIntrinsicSizeTextUpdateContext) => boolean;
    updateHostSize?: (context: IBoardShapeIntrinsicSizeHostUpdateContext) => boolean;
    previewHostSize?: (context: IBoardShapeIntrinsicSizeHostUpdateContext) => boolean;
    resolveHostSize?: (context: IBoardShapeIntrinsicSizeHostUpdateContext) => {
        width: number;
        height: number;
    } | null;
}
export declare class BoardShapeIntrinsicSizeService extends Disposable {
    private readonly _providers;
    registerProvider(provider: IBoardShapeIntrinsicSizeProvider): IDisposable;
    handleShapeTextUpdate(context: IBoardShapeIntrinsicSizeTextUpdateContext): boolean;
    handleHostSizeUpdate(context: IBoardShapeIntrinsicSizeHostUpdateContext): boolean;
    previewHostSize(context: IBoardShapeIntrinsicSizeHostUpdateContext): boolean;
    resolveHostSize(context: IBoardShapeIntrinsicSizeHostUpdateContext): {
        width: number;
        height: number;
    } | null;
    private _resolveProvider;
}
