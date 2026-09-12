import type { DocumentDataModel } from '@univerjs/core';
import type { IRenderContext } from '@univerjs/engine-render';
import { ShapeTextFloatMenuRenderControllerBase, ShapeTextHyperLinkPopupService } from '@univerjs-pro/shape-editor-ui';
import { ICommandService } from '@univerjs/core';
import { DocInterceptorService, DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService, DocEventManagerService, DocRenderController, DocSelectionRenderService } from '@univerjs/docs-ui';
import { SlideTextEditingService } from '../services/slide-text-editing.service';
export declare class ShapeTextFloatMenuRenderController extends ShapeTextFloatMenuRenderControllerBase {
    constructor(context: IRenderContext<DocumentDataModel>, docSelectionManagerService: DocSelectionManagerService, docCanvasPopManagerService: DocCanvasPopManagerService, docSelectionRenderService: DocSelectionRenderService, commandService: ICommandService, eventManagerService: DocEventManagerService, popupService: ShapeTextHyperLinkPopupService, interceptorService: DocInterceptorService, renderController: DocRenderController, editingService: SlideTextEditingService);
}
