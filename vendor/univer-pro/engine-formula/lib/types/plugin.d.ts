import type { Dependency } from '@univerjs/core';
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
export declare class UniverProFormulaEnginePlugin extends UniverFormulaEnginePlugin {
    static packageName: string;
    static version: string;
    /**
     * Allows execution backends to replace individual formula services before
     * they are registered. Keeping one registration pass avoids duplicate DI
     * bindings when a backend only swaps the calculator.
     */
    protected _extendFormulaExecutionDependencies(_dependencies: Dependency[]): void;
    protected _initializeWithOverride(): void;
    onReady(): void;
}
