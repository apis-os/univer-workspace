import type { IOpenDocChartEditorDialogOperationParams, IOpenDocChartInsertDialogOperationParams } from '../commands/operations/chart-dialog.operation';
import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { DocContentInsertService, DocSelectionManagerService } from '@univerjs/docs';
import { IDialogService, IMenuManagerService } from '@univerjs/ui';
export declare const DOC_CHART_INSERT_DIALOG_ID = "doc-chart.dialog.insert";
export declare class DocChartUIController extends Disposable {
    private readonly _dialogService;
    private readonly _localeService;
    private readonly _instanceService;
    private readonly _docSelectionManagerService;
    private readonly _docContentInsertService;
    private readonly _menuManagerService;
    private readonly _commandService;
    constructor(_dialogService: IDialogService, _localeService: LocaleService, _instanceService: IUniverInstanceService, _docSelectionManagerService: DocSelectionManagerService, _docContentInsertService: DocContentInsertService, _menuManagerService: IMenuManagerService, _commandService: ICommandService);
    openInsertDialog(params?: IOpenDocChartInsertDialogOperationParams): boolean;
    openEditorDialog(params: IOpenDocChartEditorDialogOperationParams): boolean;
    private _initMenus;
    private _registerDialogOperations;
    private _captureInsertRange;
}
