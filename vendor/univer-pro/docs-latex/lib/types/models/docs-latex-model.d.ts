import type { IDocsLatexFormulaConfig, IDocsLatexMetadataResource } from '../common/type';
import { Disposable } from '@univerjs/core';
export declare class DocsLatexModel extends Disposable {
    private readonly _resources;
    private readonly _change$;
    readonly change$: import("rxjs").Observable<{
        unitId: string;
        rangeId?: string;
    }>;
    getFormula(unitId: string, rangeId: string): IDocsLatexFormulaConfig | undefined;
    setFormula(unitId: string, rangeId: string, config: Partial<IDocsLatexFormulaConfig>): void;
    removeFormula(unitId: string, rangeId: string): void;
    serialize(unitId: string): IDocsLatexMetadataResource;
    deserialize(unitId: string, resource: IDocsLatexMetadataResource): void;
    removeUnit(unitId: string): void;
    dispose(): void;
    private _setResource;
}
