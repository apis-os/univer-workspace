import { ICommandService, IContextService, IPermissionService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_CLIPBOARD_SHORTCUT_OPERATION_ID = "board.operation.clipboard-shortcut";
export declare class BoardClipboardShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    private readonly _contextService;
    private readonly _permissionService;
    private readonly _instanceService;
    private readonly _renderManagerService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService, _contextService: IContextService, _permissionService: IPermissionService, _instanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    private readonly _handleCopy;
    private readonly _handleCut;
    private readonly _handlePaste;
    private _resolveClipboardContext;
    private _canCopyBoard;
    private _pasteFromClipboardData;
    private _pasteExternalHtml;
}
export declare function isPowerPointPreviewClipboardHtml(html: string): boolean;
