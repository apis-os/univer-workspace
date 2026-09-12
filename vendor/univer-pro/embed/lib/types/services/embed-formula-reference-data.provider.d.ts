import type { IFormulaReferenceDataProvider, IFormulaReferenceDataRequest, IFormulaReferenceDataResponse } from '@univerjs-pro/engine-formula';
import { IReferencedUnitManagerService } from '../types/referenced-unit';
export declare class EmbedFormulaReferenceDataProvider implements IFormulaReferenceDataProvider {
    private readonly _referencedUnitManager;
    readonly id = "embed-resource-ref-formula-data";
    readonly priority = 100;
    constructor(_referencedUnitManager: IReferencedUnitManagerService);
    canRead(request: IFormulaReferenceDataRequest): boolean;
    readData(request: IFormulaReferenceDataRequest): Promise<IFormulaReferenceDataResponse | undefined>;
}
