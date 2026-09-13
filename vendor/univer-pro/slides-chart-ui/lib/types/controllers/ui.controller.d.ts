import type { ISlidePlaceholderActionOperationParams } from '@univerjs-pro/slides-ui';
import type { ISlideChartPanelOperationParams } from '../commands/operations/chart-panel.operation';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { Disposable, ICommandService, LocaleService } from '@univerjs/core';
import { IDialogService, ISidebarService } from '@univerjs/ui';
import { SlideChartDataEditService } from '../services/slide-chart-data-edit.service';
import { SlideChartEditSessionService } from '../services/slide-chart-edit-session.service';
import { ISlideChartUIService } from '../services/slide-chart-ui.service';
export declare const SLIDE_CHART_INSERT_PLACEHOLDER_DIALOG_ID = "slide-chart.dialog.insert-placeholder";
export declare class SlideChartUIController extends Disposable {
    private readonly _sidebarService;
    private readonly _dialogService;
    private readonly _slideDrawingService;
    private readonly _dataEditService;
    private readonly _editSessionService;
    private readonly _chartUIService;
    private readonly _localeService;
    private readonly _commandService;
    private _sidebarDisposable;
    constructor(_sidebarService: ISidebarService, _dialogService: IDialogService, _slideDrawingService: ISlideDrawingService, _dataEditService: SlideChartDataEditService, _editSessionService: SlideChartEditSessionService, _chartUIService: ISlideChartUIService, _localeService: LocaleService, _commandService: ICommandService);
    openChartPanel(unitId: string, subUnitId: string, drawingId: string, route?: ISlideChartPanelOperationParams['route']): boolean;
    closeChartPanel(): void;
    openDataEditorDialog(unitId: string, chartId: string): boolean;
    openChartInsertDialogForPlaceholder(params: ISlidePlaceholderActionOperationParams): boolean;
    private _registerPanelOperations;
    private _listenFocusChanges;
    private _openPanel;
}
