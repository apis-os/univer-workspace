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
import type { Workbook } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ICommandService, RxDisposable, ThemeService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ThreadCommentModel } from '@univerjs/thread-comment';
import { ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
export declare class SheetsThreadCommentDrawingRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _commandService;
    private readonly _drawingManagerService;
    private readonly _commentModel;
    private readonly _panelService;
    private readonly _themeService;
    private readonly _overlay;
    constructor(_context: IRenderContext<Workbook>, _commandService: ICommandService, _drawingManagerService: IDrawingManagerService, _commentModel: ThreadCommentModel, _panelService: ThreadCommentPanelService, _themeService: ThemeService);
    private _onOverlayPointerDown;
    private _syncOverlay;
    private _getDrawingOutline;
    private _getColors;
}
