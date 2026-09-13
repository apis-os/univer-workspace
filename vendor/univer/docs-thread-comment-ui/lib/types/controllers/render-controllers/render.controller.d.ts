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
import type { DocumentDataModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable, ICommandService, IUniverInstanceService, ThemeService } from '@univerjs/core';
import { DocInterceptorService } from '@univerjs/docs';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ThreadCommentModel } from '@univerjs/thread-comment';
import { ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
export declare class DocThreadCommentRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docInterceptorService;
    private readonly _threadCommentPanelService;
    private readonly _univerInstanceService;
    private readonly _threadCommentModel;
    private readonly _commandService;
    private readonly _drawingManagerService;
    private readonly _themeService;
    private readonly _drawingOverlay;
    private readonly _drawingCommentSubUnits;
    constructor(_context: IRenderContext<DocumentDataModel>, _docInterceptorService: DocInterceptorService, _threadCommentPanelService: ThreadCommentPanelService, _univerInstanceService: IUniverInstanceService, _threadCommentModel: ThreadCommentModel, _commandService: ICommandService, _drawingManagerService: IDrawingManagerService, _themeService: ThemeService);
    private _initReRender;
    private _initDrawingOverlay;
    private _syncDrawingOverlay;
    private _getDrawingOutline;
    private _getDrawingOverlayColors;
    private _interceptorViewModel;
    private _initSyncComments;
}
