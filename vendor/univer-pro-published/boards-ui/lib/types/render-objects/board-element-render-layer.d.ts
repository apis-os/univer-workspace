/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Scene, UniverRenderingContext } from '@univerjs/engine-render';
import { BaseObject, Layer } from '@univerjs/engine-render';
export interface IBoardElementRenderLayerMetrics {
    cacheHits: number;
    directRenders: number;
    fullCacheRenders: number;
    incrementalCacheRenders: number;
    zoomPreviews: number;
}
/**
 * Board-specific cache for the persistent element layer. Render objects stay as direct layer
 * children, so object ordering and hit testing continue to use the engine's normal paths.
 */
export declare class BoardElementRenderLayer extends Layer {
    private readonly _elementCacheCanvas;
    private readonly _cacheProxy;
    private readonly _metrics;
    private _cacheState;
    private _cacheContentValid;
    private _rebuildRequested;
    private _quietRevision;
    private _quietFrame;
    private _settleFrame;
    constructor(scene: Scene, zIndex: number);
    getMetrics(): Readonly<IBoardElementRenderLayerMetrics>;
    addObject(object: BaseObject): this;
    removeObject(object: BaseObject | string): void;
    removeObjects(objects: BaseObject[] | string[]): void;
    render(parentCtx?: UniverRenderingContext, isMaxLayer?: boolean): this;
    private _paint;
    private _canCache;
    private _createCacheState;
    private _refreshCache;
    private _recenterCache;
    private _getNewAreaBounds;
    private _renderObjectsToCache;
    private _renderDirect;
    private _drawElementCache;
    private _filterObjects;
    private _shouldRecenter;
    private _isSameScale;
    private _markObjectsClean;
    private _clearCanvas;
    private _invalidateContent;
    private _scheduleQuietRebuild;
    private _cancelQuietFrames;
    private _cancelQuietRebuild;
    private _resetCache;
    dispose(): void;
}
