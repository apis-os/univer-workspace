import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import type { IDrawingParam } from '@univerjs/core';
import { ChartModelService } from '@univerjs-pro/sheets-chart';
import { Disposable, DrawingTypeEnum, ICommandService, IConfigService, IContextService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { SheetCanvasFloatDomManagerService, SheetDrawingHitTestService } from '@univerjs/sheets-drawing-ui';
import { SheetCanvasPopManagerService } from '@univerjs/sheets-ui';
import { IMenuManagerService, ISidebarService } from '@univerjs/ui';
import { ChartRenderService } from '../services/chart-render.service';
import { ISheetsChartUIService } from '../services/sheets-chart-ui.service';
export declare function isSingleStandaloneChartSelection(params: readonly IDrawingParam[]): boolean;
export declare class SheetsChartUIController extends Disposable {
    private _drawingManagerService;
    private readonly _univerInstanceService;
    private readonly _chartModelService;
    private readonly _chartRenderService;
    private readonly _sheetDrawingHitTestService;
    private _sidebarService;
    protected readonly _menuManagerService: IMenuManagerService;
    private readonly _sheetCanvasFloatDomManagerService;
    private readonly _sheetCanvasPopManagerService;
    private readonly _commandService;
    private readonly _sheetsChartUIService;
    private readonly _contextService;
    private readonly _localeService;
    private _sidebarDisposable;
    private readonly _isChartElementEditEnabled;
    constructor(_drawingManagerService: IDrawingManagerService, _univerInstanceService: IUniverInstanceService, _chartModelService: ChartModelService, _chartRenderService: ChartRenderService, _sheetDrawingHitTestService: SheetDrawingHitTestService, _sidebarService: ISidebarService, _menuManagerService: IMenuManagerService, _sheetCanvasFloatDomManagerService: SheetCanvasFloatDomManagerService, _sheetCanvasPopManagerService: SheetCanvasPopManagerService, _commandService: ICommandService, _sheetsChartUIService: ISheetsChartUIService, _contextService: IContextService, _localeService: LocaleService, configService: IConfigService);
    private _openPanel;
    hidePanel(): void;
    initPanel(): void;
    private _handleDrawingDoubleClick;
    private _openEditPanelByDoubleClick;
    openChartPanelById(chartId: string, route?: IChartEditPanelRoute): void;
    private _activateEditPanelState;
    private _deactivateEditPanelState;
    private _syncActiveEditChart;
    private _initMenus;
    private _shouldEnableChartElementEdit;
    getChartPopupMenus(unitId: string, subUnitId: string, drawingId: string, drawingType: DrawingTypeEnum): ({
        label: string;
        index: number;
        commandId: string;
        commandParams: {
            unitId: string;
            subUnitId: string;
            drawingId: string;
            drawings?: undefined;
        };
        disable: boolean;
    } | {
        label: string;
        index: number;
        commandId: string;
        commandParams: {
            unitId: string;
            drawings: {
                unitId: string;
                subUnitId: string;
                drawingId: string;
                drawingType: DrawingTypeEnum;
            }[];
            subUnitId?: undefined;
            drawingId?: undefined;
        };
        disable: boolean;
    })[];
}
