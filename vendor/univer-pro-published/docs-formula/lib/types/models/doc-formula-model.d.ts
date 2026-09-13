import type { DocFormulaResourceLoadError, IDocFormulaConfig, IDocFormulaResource } from '../common/type';
import { Disposable } from '@univerjs/core';
export declare class DocFormulaModel extends Disposable {
    private readonly _resources;
    private readonly _rawResources;
    private readonly _loadErrors;
    private readonly _change$;
    readonly change$: import("rxjs").Observable<{
        unitId: string;
        rangeIds?: readonly string[];
    }>;
    getFormula(unitId: string, rangeId: string): IDocFormulaConfig | undefined;
    getFormulas(unitId: string): Record<string, IDocFormulaConfig>;
    getResource(unitId: string): IDocFormulaResource | undefined;
    setFormula(unitId: string, rangeId: string, config: IDocFormulaConfig): boolean;
    setResource(unitId: string, resource: IDocFormulaResource): boolean;
    setFormulas(unitId: string, configs: Record<string, IDocFormulaConfig>): boolean;
    removeFormula(unitId: string, rangeId: string): boolean;
    load(unitId: string, value: unknown): boolean;
    serialize(unitId: string): unknown;
    getLoadError(unitId: string): DocFormulaResourceLoadError | undefined;
    removeUnit(unitId: string): void;
    dispose(): void;
    private _preserveInvalid;
}
