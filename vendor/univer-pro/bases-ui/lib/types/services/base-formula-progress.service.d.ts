import { Disposable, ICommandService } from '@univerjs/core';
export interface IBaseFormulaCalculationProgress {
    done: number;
    count: number;
    label?: string;
}
export declare class BaseFormulaCalculationProgressService extends Disposable {
    private readonly _commandService;
    private readonly _progress$;
    readonly progress$: import("rxjs").Observable<IBaseFormulaCalculationProgress>;
    private _processCount;
    private _startTimer;
    private _stageInfo;
    constructor(_commandService: ICommandService);
    getProgress(): IBaseFormulaCalculationProgress;
    clear(): void;
    private _onCommandExecuted;
    private _update;
    private _emitStageProgress;
}
