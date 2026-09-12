import { IBoardToolbarContributionService } from '@univerjs-pro/boards-ui';
import { Disposable, ICommandService, IPermissionService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class BoardsThreadCommentUIController extends Disposable {
    constructor(commandService: ICommandService, menuManagerService: IMenuManagerService, toolbarContributionService: IBoardToolbarContributionService, localeService: LocaleService, permissionService: IPermissionService, instanceService: IUniverInstanceService);
}
