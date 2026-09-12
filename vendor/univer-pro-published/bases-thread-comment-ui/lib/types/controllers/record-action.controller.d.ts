import { IBaseRecordActionService } from '@univerjs-pro/bases-ui';
import { Disposable, ICommandService, IPermissionService } from '@univerjs/core';
import { ThreadCommentModel } from '@univerjs/thread-comment';
import { ThreadCommentDraftService, ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
import { ISidebarService } from '@univerjs/ui';
export declare class BaseRecordCommentActionController extends Disposable {
    constructor(commandService: ICommandService, actionService: IBaseRecordActionService, commentModel: ThreadCommentModel, draftService: ThreadCommentDraftService, panelService: ThreadCommentPanelService, permissionService: IPermissionService, sidebarService: ISidebarService);
}
