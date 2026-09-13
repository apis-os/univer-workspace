import type { IFormulaLastValuePersistenceProvider } from '@univerjs-pro/engine-formula';
import type { IMutationInfo } from '@univerjs/core';
import { FormulaCacheEligibilityService, FormulaLastValuePersistenceService } from '@univerjs-pro/engine-formula';
import { IShapeHostAdapterRegistry } from '@univerjs-pro/engine-shape';
import { Disposable } from '@univerjs/core';
import { ShapeFormulaService } from './shape-formula.service';
/**
 * Contributes one existing Host Shape mutation per changed Formula Shape.
 *
 * The provider only projects successful, non-volatile scalar results. Each Host
 * mutation carries the formula and External Reference revision captured by the
 * calculation registration and revalidates both immediately before writing.
 */
export declare class ShapeFormulaLastValuePersistenceProvider extends Disposable implements IFormulaLastValuePersistenceProvider {
    private readonly _formulaService;
    private readonly _cacheEligibilityService;
    private readonly _shapeHostAdapterRegistry;
    constructor(_formulaService: ShapeFormulaService, _cacheEligibilityService: FormulaCacheEligibilityService, _shapeHostAdapterRegistry: IShapeHostAdapterRegistry, persistenceService: FormulaLastValuePersistenceService);
    collectMutations(_sessionId: number): IMutationInfo[];
}
