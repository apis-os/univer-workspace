import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocsTableModel } from '../models/docs-table-model';
export declare class DocsTableResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _docsTableModel;
    constructor(_resourceManagerService: IResourceManagerService, _docsTableModel: DocsTableModel);
    private _initResource;
}
