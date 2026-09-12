import { DocsShapeService } from '@univerjs-pro/docs-shape';
import { Disposable, DrawingTypeEnum, ICommandService, IContextService, IPermissionService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService, ISidebarService } from '@univerjs/ui';
import { ShapeTextEditingService } from '../services/shape-text-editing.service';
export declare class DocsShapeUIController extends Disposable {
    private readonly _univerInstanceService;
    private _sidebarService;
    protected readonly _menuManagerService: IMenuManagerService;
    private _docsShapeService;
    private readonly _localeService;
    private readonly _commandService;
    private _drawingManagerService;
    private readonly _docCanvasPopManagerService;
    private readonly _renderManagerService;
    private readonly _contextService;
    private readonly _shapeTextEditingService;
    private readonly _permissionService;
    private _sidebarDisposable;
    private _activeShapeInfo;
    private _isOpenedShapeEditPanel;
    private _shapeEditPanelVersion;
    private _disposePopupsByUnit;
    private _popupTargetKeys;
    constructor(_univerInstanceService: IUniverInstanceService, _sidebarService: ISidebarService, _menuManagerService: IMenuManagerService, _docsShapeService: DocsShapeService, _localeService: LocaleService, _commandService: ICommandService, _drawingManagerService: IDrawingManagerService, _docCanvasPopManagerService: DocCanvasPopManagerService, _renderManagerService: IRenderManagerService, _contextService: IContextService, _shapeTextEditingService: ShapeTextEditingService, _permissionService: IPermissionService);
    private _initMenu;
    getShapePopupMenus(unitId: string, subUnitId: string, drawingId: string, drawingType: DrawingTypeEnum): ({
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
            }[];
            subUnitId?: undefined;
            drawingId?: undefined;
        };
        disable: boolean;
    })[];
    private _getShapeInfo;
    private _clearPopups;
    private _getDisposePopups;
    private _popupMenuListener;
    private _handleCreateControl;
    private _canEditShape;
    private _registerOperations;
    private _openShapeEditPanel;
    private _closeShapeEditPanel;
}
