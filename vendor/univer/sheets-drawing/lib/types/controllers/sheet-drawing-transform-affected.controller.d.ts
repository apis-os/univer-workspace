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
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { SheetInterceptorService, SheetSkeletonService, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetDrawingTransformPlanService } from '../services/sheet-drawing-transform-plan.service';
import { ISheetDrawingService } from '../services/sheet-drawing.service';
export declare class SheetDrawingTransformAffectedController extends Disposable {
    private readonly _commandService;
    private readonly _sheetSkeletonService;
    private readonly _sheetInterceptorService;
    private readonly _selectionManagerService;
    private readonly _sheetDrawingService;
    private readonly _drawingManagerService;
    private readonly _univerInstanceService;
    private readonly _transformPlanService;
    private _currentCommand;
    constructor(_commandService: ICommandService, _sheetSkeletonService: SheetSkeletonService, _sheetInterceptorService: SheetInterceptorService, _selectionManagerService: SheetsSelectionsService, _sheetDrawingService: ISheetDrawingService, _drawingManagerService: IDrawingManagerService, _univerInstanceService: IUniverInstanceService, _transformPlanService: SheetDrawingTransformPlanService);
    private _sheetInterceptorListener;
    private _finalizePlan;
    private _getCalculatedSkeletonParam;
    private _createPlanMutations;
    private _getRangeMoveUndo;
    private _getUpdateOrDeleteDrawings;
    private _remainDrawingSize;
    private _getDrawingUndoForColVisible;
    private _createUndoAndRedoMutation;
    private _getDrawingUndoForRowVisible;
    private _getDrawingUndoForRowAndColSize;
    private _getUnitIdAndSubUnitId;
    private _moveRangeInterceptor;
    private _moveRowInterceptor;
    private _moveColInterceptor;
    private _expandCol;
    private _shrinkCol;
    private _expandRow;
    private _shrinkRow;
    private _sheetRefreshListener;
    private _refreshDrawingTransform;
}
