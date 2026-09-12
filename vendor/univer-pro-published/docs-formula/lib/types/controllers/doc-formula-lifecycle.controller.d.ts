import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocFormulaModel } from '../models/doc-formula-model';
import { DocFormulaService } from '../services/doc-formula.service';
export declare class DocFormulaLifecycleController extends Disposable {
    private readonly _instanceService;
    private readonly _commandService;
    private readonly _model;
    private readonly _service;
    private readonly _pendingUnitIds;
    private _syncScheduled;
    private _isDisposed;
    constructor(_instanceService: IUniverInstanceService, _commandService: ICommandService, _model: DocFormulaModel, _service: DocFormulaService);
    dispose(): void;
    private _queueSync;
    private _syncUnit;
}
