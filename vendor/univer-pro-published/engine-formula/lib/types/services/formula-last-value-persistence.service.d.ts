import type { IDisposable, IMutationInfo } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
/**
 * A Formula host contributes compare-and-set mutations for successful scalar results.
 *
 * Providers omit unavailable, failed, non-scalar, and volatile results. Every returned
 * mutation revalidates its captured Formula source before writing, so a late result cannot
 * overwrite a newer edit.
 */
export interface IFormulaLastValuePersistenceProvider {
    collectMutations(sessionId: number): readonly IMutationInfo[];
}
export declare class FormulaLastValuePersistenceService extends Disposable {
    private readonly _providers;
    registerProvider(provider: IFormulaLastValuePersistenceProvider): IDisposable;
    collectMutations(sessionId: number): IMutationInfo[];
    dispose(): void;
}
