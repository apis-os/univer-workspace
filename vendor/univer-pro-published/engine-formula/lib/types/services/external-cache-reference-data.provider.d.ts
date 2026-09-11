import type { IFormulaReferenceDataProvider, IFormulaReferenceDataRequest, IFormulaReferenceDataResponse } from './formula-reference-data.service';
import { ExternalReferenceModel } from '../models/external-reference.model';
export declare class ExternalCacheReferenceDataProvider implements IFormulaReferenceDataProvider {
    private readonly _externalReferenceModel;
    readonly id = "ooxml-external-cache";
    readonly priority = -100;
    constructor(_externalReferenceModel: ExternalReferenceModel);
    canRead(request: IFormulaReferenceDataRequest): boolean;
    readData(request: IFormulaReferenceDataRequest): Promise<IFormulaReferenceDataResponse | undefined>;
}
