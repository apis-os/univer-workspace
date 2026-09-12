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
import type { ITransformState, Nullable } from '@univerjs/core';
import type { IDocFloatDomDataBase } from '@univerjs/drawing';
import type { IBoundRectNoAngle, IDocsCustomBlockRenderViewport, Scene } from '@univerjs/engine-render';
import type { IFloatDomLayout } from '@univerjs/ui';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DrawingRenderService } from '@univerjs/drawing-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
import { CanvasFloatDomService } from '@univerjs/ui';
import { DocRefreshDrawingsService } from '../services/doc-refresh-drawings.service';
export declare function calcDocFloatDomPositionByRect(rect: IBoundRectNoAngle, scene: Scene, opacity?: number, angle?: number): IFloatDomLayout;
interface IDocFloatDomParams extends IDocFloatDomDataBase {
}
type IDocFloatDomRuntimeViewport = Partial<Pick<IDocsCustomBlockRenderViewport, 'bleedLeft' | 'bleedWidth' | 'contentHeight' | 'contentWidth' | 'height' | 'pageContentWidth' | 'viewScale' | 'viewportHeight'>>;
interface IDocFloatDomRuntimeGeometry {
    customBlockRenderViewport?: IDocFloatDomRuntimeViewport;
    hidden?: boolean;
    transform?: Nullable<ITransformState>;
    transforms?: Nullable<ITransformState[]>;
}
export declare function mergeDocFloatDomRuntimeProps(existingProps: Record<string, unknown> | undefined, param: IDocFloatDomRuntimeGeometry): Record<string, unknown> | undefined;
export declare class DocFloatDomController extends Disposable {
    private readonly _renderManagerService;
    private readonly _drawingManagerService;
    private readonly _drawingRenderService;
    private readonly _canvasFloatDomService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _docRefreshDrawingsService;
    private _domLayerInfoMap;
    private _pendingRuntimeGeometry;
    private _pendingRuntimeGeometryInsert;
    private _pendingRuntimeGeometryRefresh;
    constructor(_renderManagerService: IRenderManagerService, _drawingManagerService: IDrawingManagerService, _drawingRenderService: DrawingRenderService, _canvasFloatDomService: CanvasFloatDomService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _docRefreshDrawingsService: DocRefreshDrawingsService);
    dispose(): void;
    private _initialize;
    private _renderLifecycleListener;
    private _getSceneAndTransformerByDrawingSearch;
    private _drawingAddRemoveListener;
    private _refreshDrawingsFromCurrentLayout;
    private _hasPendingRuntimeGeometryForUnit;
    private _disposePendingRuntimeGeometryRefresh;
    private _insertRects;
    private _drawingRuntimePropsListener;
    private _addHoverForRect;
    private _removeDom;
    private _initScrollAndZoomEvent;
    insertFloatDom(floatDom: IDocFloatDomParams, opts: {
        width?: number;
        height: number;
        drawingId?: string;
    }): string | false;
}
export {};
