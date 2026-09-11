import type { IRange } from '@univerjs/core';
import type { IFormulaExternalReferenceDataLoader, IFormulaExternalReferenceLoadInput } from '@univerjs/engine-formula';
import { ErrorType, IFormulaCurrentConfigService, ISuperTableService } from '@univerjs/engine-formula';
import { ExternalReferenceModel } from '../models/external-reference.model';
import { IFormulaReferenceDataService } from './formula-reference-data.service';
export declare class HostExternalReferenceDataLoader implements IFormulaExternalReferenceDataLoader {
    private readonly _currentConfigService;
    private readonly _referenceDataService;
    private readonly _excelExternalReferenceModel;
    private readonly _superTableService;
    private _requestCounter;
    private _generation;
    private readonly _inflight;
    private readonly _completed;
    constructor(_currentConfigService: IFormulaCurrentConfigService, _referenceDataService: IFormulaReferenceDataService, _excelExternalReferenceModel: ExternalReferenceModel, _superTableService: ISuperTableService);
    load(input: IFormulaExternalReferenceLoadInput): Promise<ErrorType | void>;
    loadRuntimeRange(input: {
        hostUnitId: string;
        unitId: string;
        sheetId: string;
        sheetName?: string;
        range: IRange;
    }): Promise<ErrorType | boolean | void>;
    private _resolveRuntimeRange;
    private _runtimeRangeSheetName;
    private _createRequest;
    private _createA1RangeRequest;
    private _loadRequest;
    private _materialize;
    private _materializeSheet;
}
