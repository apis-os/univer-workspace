import type { IDisposable, ITextRangeParam } from '@univerjs/core';
import type { IBoundRectNoAngle } from '@univerjs/engine-render';
import type { IOpenDocFormulaEditorOperationParams } from '../commands/operations/doc-formula-popup.operation';
import { DocFormulaModel } from '@univerjs-pro/docs-formula';
import { Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
export interface IDocFormulaPopupTarget {
    rangeId: string;
    segmentId?: string;
    segmentPage?: number;
    unitId: string;
}
export interface IDocFormulaEditorTarget {
    rangeId?: string;
    selection: ITextRangeParam;
    unitId: string;
}
export declare class DocFormulaPopupService extends Disposable {
    private readonly _popupManagerService;
    private readonly _selectionManagerService;
    private readonly _model;
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _renderManagerService;
    private _editorPopup;
    private _hoverPopup;
    private _lastFormulaTarget;
    private readonly _editorTarget$;
    private readonly _hoverTarget$;
    readonly editorTarget$: import("rxjs").Observable<IDocFormulaEditorTarget | null>;
    readonly hoverTarget$: import("rxjs").Observable<IDocFormulaPopupTarget | null>;
    get hasOpenPopup(): boolean;
    get hasOpenEditor(): boolean;
    constructor(_popupManagerService: DocCanvasPopManagerService, _selectionManagerService: DocSelectionManagerService, _model: DocFormulaModel, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _renderManagerService: IRenderManagerService);
    openEditor(params: IOpenDocFormulaEditorOperationParams & {
        unitId: string;
    }): IDisposable | null;
    openSelectedEditor(unitId: string): IDisposable | null;
    showHover(target: IDocFormulaPopupTarget, getAnchorRect?: () => IBoundRectNoAngle | undefined): IDisposable | null;
    showSelectedHover(unitId: string): IDisposable | null;
    getSelectedFormulaTarget(unitId: string): IDocFormulaPopupTarget | null;
    closeEditor(): void;
    closeHover(): void;
    closeAndRestoreSelection(): boolean;
    dispose(): void;
    private _resolveEditorSelection;
    private _getRange;
    private _canEditRange;
}
