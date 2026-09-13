import type { IFormulaReferenceDataRequest, IFormulaReferenceDataResponse, IFormulaReferenceDataService } from './formula-reference-data.service';
import { FormulaDataModel, ISuperTableService } from '@univerjs/engine-formula';
import { IFormulaReferenceDataProviderRegistry } from './formula-reference-data.service';
export declare class MainFormulaReferenceDataService implements IFormulaReferenceDataService {
    private readonly _formulaDataModel;
    private readonly _superTableService;
    private readonly _providerRegistry;
    constructor(_formulaDataModel: FormulaDataModel, _superTableService: ISuperTableService, _providerRegistry: IFormulaReferenceDataProviderRegistry);
    readData(request: IFormulaReferenceDataRequest): Promise<IFormulaReferenceDataResponse>;
    private _readLiveTables;
    private _readLiveSheets;
    private _resolveLiveRange;
}
