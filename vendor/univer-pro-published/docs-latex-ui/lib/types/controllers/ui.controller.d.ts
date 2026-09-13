import { Disposable, ICommandService } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class DocsLatexUIController extends Disposable {
    private readonly _commandService;
    private readonly _menuManagerService;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService);
}
