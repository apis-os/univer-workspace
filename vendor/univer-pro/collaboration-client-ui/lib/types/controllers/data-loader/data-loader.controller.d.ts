import { DataLoaderService } from '@univerjs-pro/collaboration-client';
import { ICommandService, ILogService, RxDisposable } from '@univerjs/core';
import { IURLService } from '../../services/url/url.service';
/**
 * This controller loads data when URL changes.
 */
export declare class CollaborationDataLoaderController extends RxDisposable {
    private readonly _urlService;
    private readonly _logService;
    private readonly _commandService;
    private readonly _dataLoaderService;
    constructor(_urlService: IURLService, _logService: ILogService, _commandService: ICommandService, _dataLoaderService: DataLoaderService);
    private _init;
    private _setupSubUnitSync;
    private _updateURLWithCurrentState;
    private _updateSubUnitFromURLParams;
}
