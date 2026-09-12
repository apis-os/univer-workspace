import type { IFormulaLastValuePersistenceProvider } from '@univerjs-pro/engine-formula';
import type { IMutationInfo } from '@univerjs/core';
import type { ISetDocFormulaLastValuesMutationParams } from '../commands/doc-formula.mutation';
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService } from '@univerjs-pro/engine-formula';
import { Disposable } from '@univerjs/core';
import { DocFormulaService } from './doc-formula.service';
export declare class DocFormulaLastValuePersistenceProvider extends Disposable implements IFormulaLastValuePersistenceProvider {
    private readonly _formulaService;
    private readonly _cacheEligibilityService;
    constructor(_formulaService: DocFormulaService, _cacheEligibilityService: FormulaCacheEligibilityService, persistenceService: FormulaLastValuePersistenceService);
    collectMutations(_sessionId: number): IMutationInfo<ISetDocFormulaLastValuesMutationParams>[];
}
