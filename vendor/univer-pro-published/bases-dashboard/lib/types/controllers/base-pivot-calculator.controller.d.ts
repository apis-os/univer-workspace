import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
export declare class BasePivotCalculatorController extends Disposable {
    private readonly _commandService;
    private readonly _instanceService;
    constructor(_commandService: ICommandService, _instanceService: IUniverInstanceService);
}
