import type { IBasePivotCalculationRequest, IBasePivotCalculationResult } from '../types';
import { Disposable, ICommandService } from '@univerjs/core';
export declare class BasePivotRPCService extends Disposable {
    private readonly _commandService;
    private readonly _pending;
    constructor(_commandService: ICommandService);
    calculate(params: Omit<IBasePivotCalculationRequest, 'requestId'>): Promise<IBasePivotCalculationResult>;
    handleResponse(result: IBasePivotCalculationResult): void;
    dispose(): void;
    private _reject;
}
