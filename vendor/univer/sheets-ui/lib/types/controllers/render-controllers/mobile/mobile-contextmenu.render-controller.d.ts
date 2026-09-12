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
import type { IRange, Workbook } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import type { ISelectionWithStyle } from '@univerjs/sheets';
import { Disposable, IContextService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { IContextMenuService, ILayoutService } from '@univerjs/ui';
import { SheetSkeletonManagerService } from '../../../services/sheet-skeleton-manager.service';
export declare function shouldKeepCurrentSelectionForMobileContextMenu(currentSelections: Array<IRange | ISelectionWithStyle>, targetRange: IRange): boolean;
/**
 * On mobile devices, tapping inside the current selection a second time opens
 * the context menu. Tapping elsewhere remains a normal selection gesture.
 *
 * @ignore
 */
export declare class SheetContextMenuMobileRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _layoutService;
    private readonly _contextMenuService;
    private readonly _contextService;
    private readonly _renderManagerService;
    private readonly _selectionManagerService;
    private readonly _sheetSkeletonManagerService;
    constructor(_context: IRenderContext<Workbook>, _layoutService: ILayoutService, _contextMenuService: IContextMenuService, _contextService: IContextService, _renderManagerService: IRenderManagerService, _selectionManagerService: SheetsSelectionsService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _init;
    private _createTapState;
    private _resetTapState;
    private _cancelPendingMenu;
    private _getPointerOffset;
    private _getMainAreaViewport;
    private _getTargetCellByOffset;
    private _getCurrentRenderSelections;
    private _cloneSelections;
    private _getSelectionSnapshot;
    private _openMenu;
    private _handlePointerDown;
    private _handlePointerMove;
    private _handlePointerUp;
}
