import type { IFormulaDatasetConfig } from '@univerjs/engine-formula';
import type { IFormulaReferenceDataRangeRequest, IFormulaReferenceDataRequest } from './formula-reference-data.service';
import { ExternalReferenceModel } from '../models/external-reference.model';
export declare class ExternalReferencePrefetchPlanner {
    private readonly _externalReferenceModel;
    private _calculationCounter;
    private _requestCounter;
    constructor(_externalReferenceModel: ExternalReferenceModel);
    plan(config: IFormulaDatasetConfig): IFormulaReferenceDataRequest[];
    planDynamic(hostUnitId: string, references: Array<{
        unitId: string;
        sheetName: string;
        range: IFormulaReferenceDataRangeRequest['range'];
    }>): IFormulaReferenceDataRequest[];
    private _collectA1;
    private _collectTables;
    private _addRange;
}
