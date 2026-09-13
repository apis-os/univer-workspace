import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocsCalloutModel } from '../models/docs-callout-model';
export declare class DocsCalloutResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _docsCalloutModel;
    constructor(_resourceManagerService: IResourceManagerService, _docsCalloutModel: DocsCalloutModel);
    private _initResource;
}
