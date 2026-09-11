import type { IDisposable, IOperationInfo } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export declare class LiveShareService extends Disposable {
    private readonly _sharedOperations;
    private readonly _reporters;
    registerSharedOperation(operation: string): IDisposable;
    /**
     * Register a reported that should report a view part's current state
     * by returning an operation.
     * @param reporter
     * @returns
     */
    registerInitialStateReporter(reporter: (unitID: string) => IOperationInfo): IDisposable;
    shouldShareOperation(operation: string): boolean;
    getInitialStates(unitID: string): IOperationInfo[];
}
