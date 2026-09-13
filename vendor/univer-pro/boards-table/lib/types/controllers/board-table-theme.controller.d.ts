import { SlideTableModelService, SlideTableResourceService } from '@univerjs-pro/slides-table';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
export declare class BoardTableThemeController extends Disposable {
    private readonly _commandService;
    private readonly _instanceService;
    private readonly _resourceService;
    private readonly _modelService;
    constructor(_commandService: ICommandService, _instanceService: IUniverInstanceService, _resourceService: SlideTableResourceService, _modelService: SlideTableModelService);
    private _initThemeListener;
    private _refreshERDTables;
}
