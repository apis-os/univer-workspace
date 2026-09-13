import type { Nullable } from '@univerjs/core';
import type { Observable } from 'rxjs';
import { IBoardElementService } from '@univerjs-pro/boards';
import * as ShapeEditorUI from '@univerjs-pro/shape-editor-ui';
import { Disposable, IPermissionService } from '@univerjs/core';
import { BoardElementEditService } from './board-element-edit.service';
import { BoardShapeIntrinsicSizeService } from './board-shape-intrinsic-size.service';
import { IBoardUIStateService } from './board-ui-state.service';
export interface IBoardTextEditingParams extends ShapeEditorUI.IShapeTextEditingParams {
    unitId: string;
    subUnitId: string;
    shapeId: string;
    shapeKey: string;
    visible: boolean;
    /** Stable connector-label id. Omitted for non-connector elements and legacy primary-label editing. */
    labelId?: string;
}
type IBoardTextEditingKeyParams = Pick<IBoardTextEditingParams, 'labelId' | 'shapeId' | 'subUnitId' | 'unitId'>;
export declare class BoardTextEditingService extends Disposable {
    private readonly _boardElementService;
    private readonly _editService;
    private readonly _permissionService;
    private readonly _intrinsicSizeService;
    private readonly _uiStateService;
    private readonly _editingParams$;
    readonly editingParams$: Observable<Nullable<IBoardTextEditingParams>>;
    private readonly _onSavingEditorData$;
    readonly onSavingEditorData$: Observable<Nullable<boolean>>;
    private _ignoreExternalFocusChangesUntil;
    private _discardEditingKey;
    private _externalCompletionPointerDownEvent;
    private _connectorLabelHistory;
    constructor(_boardElementService: IBoardElementService, _editService: BoardElementEditService, _permissionService: IPermissionService, _intrinsicSizeService: BoardShapeIntrinsicSizeService, _uiStateService: IBoardUIStateService);
    dispose(): void;
    setEditing(params: Nullable<IBoardTextEditingParams>): void;
    setOnSavingEditorData(params: Nullable<boolean>): void;
    getEditing(): Nullable<IBoardTextEditingParams>;
    private _canEdit;
    markConnectorLabelInsertion(params: IBoardTextEditingKeyParams, historyId: string): void;
    ignoreExternalFocusChanges(duration?: number): void;
    shouldIgnoreExternalFocusChanges(): boolean;
    completeEditing(event?: PointerEvent): void;
    shouldIgnoreSelectionPointerDown(evt: Event): boolean;
    cancelEditing(): void;
    updateShapeText(params: ShapeEditorUI.IShapeTextUpdateParams): boolean;
    updatePlainTextShapeHostSize(params: ShapeEditorUI.IShapeTextHostSizeUpdateParams): boolean;
    private _updateConnectorLabelText;
    private _resolveHostSize;
    private _updateConnectorLabelElement;
    private _ensureConnectorLabel;
    private _getEditingConnectorLabel;
    private _shouldDiscardEditorUpdate;
}
export declare function areBoardShapeTextValuesEquivalent(first: unknown, second: unknown): boolean;
export {};
