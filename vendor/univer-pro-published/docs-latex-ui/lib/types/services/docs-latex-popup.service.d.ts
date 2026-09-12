import type { IDisposable } from '@univerjs/core';
import type { IOpenDocsLatexFormulaPopupOperationParams } from '../commands/operations/formula-popup.operation';
import type { IFormulaTemplate } from '../common/formula-templates';
import { DocsLatexModel } from '@univerjs-pro/docs-latex';
import { Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class DocsLatexPopupService extends Disposable {
    private readonly _docCanvasPopManagerService;
    private readonly _docSelectionManagerService;
    private readonly _docsLatexModel;
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _renderManagerService;
    private _formulaPopup;
    private _selectionAtOpen;
    private _activeFormulaTarget;
    private readonly _formulaPopupOpen$;
    private readonly _templateInsert$;
    readonly formulaPopupOpen$: import("rxjs").Observable<boolean>;
    readonly templateInsert$: import("rxjs").Observable<IFormulaTemplate>;
    constructor(_docCanvasPopManagerService: DocCanvasPopManagerService, _docSelectionManagerService: DocSelectionManagerService, _docsLatexModel: DocsLatexModel, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _renderManagerService: IRenderManagerService);
    openFormulaPopup(params: IOpenDocsLatexFormulaPopupOperationParams): IDisposable | null;
    requestTemplateInsert(template: IFormulaTemplate): boolean;
    activateFormulaTarget(params: IOpenDocsLatexFormulaPopupOperationParams & {
        unitId: string;
    }): void;
    closeFormulaPopup(): void;
    dispose(): void;
    private _getAnchorSelection;
    private _normalizeFormulaParams;
    private _getSelectedText;
    private _getSelectedFormula;
    private _canEditRange;
}
