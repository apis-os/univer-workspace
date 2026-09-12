import type { DocumentDataModel, ICommandService } from '@univerjs/core';
import type { DocInterceptorService, DocSelectionManagerService } from '@univerjs/docs';
import type { DocCanvasPopManagerService, DocEventManagerService, DocRenderController, DocSelectionRenderService } from '@univerjs/docs-ui';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import type { ShapeTextHyperLinkPopupService } from '../../services/shape-text-hyper-link-popup.service';
import type { IShapeTextEditingService } from './types';
import { Disposable } from '@univerjs/core';
export interface IShapeTextFloatMenuRenderControllerConfig {
    componentKey: string;
    editorUnitId: string;
}
export declare class ShapeTextFloatMenuRenderControllerBase extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSelectionManagerService;
    private readonly _docCanvasPopManagerService;
    private readonly _docSelectionRenderService;
    private readonly _commandService;
    private readonly _eventManagerService;
    private readonly _popupService;
    private readonly _interceptorService;
    private readonly _renderController;
    private readonly _editingService;
    private readonly _config;
    private _floatMenu;
    private _editingVisible;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSelectionManagerService: DocSelectionManagerService, _docCanvasPopManagerService: DocCanvasPopManagerService, _docSelectionRenderService: DocSelectionRenderService, _commandService: ICommandService, _eventManagerService: DocEventManagerService, _popupService: ShapeTextHyperLinkPopupService, _interceptorService: DocInterceptorService, _renderController: DocRenderController, _editingService: IShapeTextEditingService, _config: IShapeTextFloatMenuRenderControllerConfig);
    dispose(): void;
    private _initHyperLinkInteraction;
    private _initHyperLinkRendering;
    private _initSelectionChange;
    private _initEditingLifecycle;
    private _hideFloatMenu;
    private _showFloatMenu;
}
