import { FormulaCalculationTriggerService } from '@univerjs-pro/engine-formula';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { FormulaCalculationSessionService } from '@univerjs/engine-formula';
export declare class BaseFormulaCalculationController extends Disposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    protected readonly _formulaCalculationTriggerService: FormulaCalculationTriggerService;
    private readonly _formulaCalculationSessionService;
    private readonly _formulaService;
    private readonly _registeredSuperTableNames;
    private readonly _scheduledSuperTableSyncs;
    private _formulaSyncQueue;
    private _applyingFormulaResults;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _formulaCalculationTriggerService: FormulaCalculationTriggerService, _formulaCalculationSessionService: FormulaCalculationSessionService);
    private _initialize;
    private _onCommandExecuted;
    private _scheduleSuperTableSync;
    private _syncSuperTables;
    private _removeSuperTables;
    private _executeSuperTableMutationWhileActive;
    private _enqueueFormulaSync;
    private _applyFormulaResult;
}
