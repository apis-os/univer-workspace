import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocsCodeModel } from '../models/docs-code-model';
export declare class DocsCodeResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _docsCodeModel;
    constructor(_resourceManagerService: IResourceManagerService, _docsCodeModel: DocsCodeModel);
    private _initResource;
}
