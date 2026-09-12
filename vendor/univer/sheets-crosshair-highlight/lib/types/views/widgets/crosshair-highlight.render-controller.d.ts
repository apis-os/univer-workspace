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
import type { IRange, Workbook, Worksheet } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable, IContextService } from '@univerjs/core';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { SheetSkeletonManagerService } from '@univerjs/sheets-ui';
import { SheetsCrosshairHighlightService } from '../../services/crosshair.service';
export declare class SheetCrosshairHighlightRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _sheetsSelectionsService;
    private readonly _sheetsCrosshairHighlightService;
    private readonly _contextService;
    private readonly _refSelectionsService;
    private _shapes;
    private _rangeCollection;
    private _color;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _sheetsSelectionsService: SheetsSelectionsService, _sheetsCrosshairHighlightService: SheetsCrosshairHighlightService, _contextService: IContextService, _refSelectionsService: SheetsSelectionsService);
    private _transformSelection;
    private _initRenderListener;
    addSelection(range: IRange, sheet: Worksheet): void;
    private _clear;
    private _addShapes;
    render(ranges: IRange[]): void;
    dispose(): Promise<void>;
}
