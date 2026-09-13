import { Disposable, ICommandService, IContextService } from '@univerjs/core';
import { IUIRuntimeScopeService } from '@univerjs/ui';
import { SlideClipboardService } from '../services/slide-clipboard.service';
import { ISlideDrawingStateService } from '../services/slide-drawing-state.service';
import { SlideInsertService } from '../services/slide-insert.service';
export declare class SlideClipboardController extends Disposable {
    private readonly _commandService;
    private readonly _contextService;
    private readonly _clipboardService;
    private readonly _insertService;
    private readonly _drawingStateService;
    private readonly _runtimeScopeService;
    constructor(_commandService: ICommandService, _contextService: IContextService, _clipboardService: SlideClipboardService, _insertService: SlideInsertService, _drawingStateService: ISlideDrawingStateService, _runtimeScopeService: IUIRuntimeScopeService);
    private readonly _handleCopy;
    private readonly _handleCut;
    private readonly _handlePaste;
    private _resolveRuntime;
    private _canHandle;
    private _pasteFromClipboardData;
    private _pastePlainText;
    private _insertImageFiles;
}
export declare function isPowerPointPreviewClipboardHtml(html: string): boolean;
