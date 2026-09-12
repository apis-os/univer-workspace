import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocFormulaModel } from '../models/doc-formula-model';
export declare class DocFormulaResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _docFormulaModel;
    constructor(_resourceManagerService: IResourceManagerService, _docFormulaModel: DocFormulaModel);
}
