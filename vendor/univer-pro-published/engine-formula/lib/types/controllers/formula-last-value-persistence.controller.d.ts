import { Disposable, ICommandService } from '@univerjs/core';
import { FormulaCalculationSessionService } from '@univerjs/engine-formula';
import { FormulaLastValuePersistenceService } from '../services/formula-last-value-persistence.service';
export declare class FormulaLastValuePersistenceController extends Disposable {
    private readonly _commandService;
    private readonly _sessionService;
    private _lastPersistedSessionId;
    constructor(_commandService: ICommandService, _sessionService: FormulaCalculationSessionService, _persistenceService: FormulaLastValuePersistenceService);
}
