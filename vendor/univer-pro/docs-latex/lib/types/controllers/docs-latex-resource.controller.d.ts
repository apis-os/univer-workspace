import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocsLatexModel } from '../models/docs-latex-model';
export declare class DocsLatexResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _docsLatexModel;
    constructor(_resourceManagerService: IResourceManagerService, _docsLatexModel: DocsLatexModel);
    private _initResource;
}
