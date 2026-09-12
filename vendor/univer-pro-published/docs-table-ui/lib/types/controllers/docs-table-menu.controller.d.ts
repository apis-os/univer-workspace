import { DocsTableSelectionService } from '@univerjs-pro/docs-table';
import { Disposable } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class DocsTableMenuController extends Disposable {
    private readonly _menuManagerService;
    private readonly _selectionService;
    constructor(_menuManagerService: IMenuManagerService, _selectionService: DocsTableSelectionService);
}
