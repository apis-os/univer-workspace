import type { IUnitRange } from '@univerjs/core';
import type { IFormulaDatasetConfig } from '@univerjs/engine-formula';
import type { IFormulaReferenceDataRequest, IFormulaReferenceDataResponse } from './formula-reference-data.service';
import { Disposable } from '@univerjs/core';
import { FormulaDataModel } from '@univerjs/engine-formula';
import { ExternalReferenceOverlayModel } from '../models/external-reference-overlay.model';
import { IFormulaReferenceDataService } from './formula-reference-data.service';
export interface IExternalReferencePrefetchLimits {
    maxCells: number;
    maxBytes: number;
    concurrency: number;
    timeoutMs: number;
}
export interface IExternalReferencePrefetchResult {
    responses: IFormulaReferenceDataResponse[];
    dirtyRanges: Array<{
        unitId: string;
        sheetId: string;
        range: NonNullable<IFormulaReferenceDataRequest['ranges'][number]['range']>;
    }>;
    discarded: number;
}
export declare class ExternalReferencePrefetchService extends Disposable {
    private readonly _referenceDataService;
    private readonly _overlayModel;
    private readonly _formulaDataModel;
    private readonly _inflight;
    private readonly _latestCalculation;
    constructor(_referenceDataService: IFormulaReferenceDataService, _overlayModel: ExternalReferenceOverlayModel, _formulaDataModel: FormulaDataModel);
    prefetch(requests: IFormulaReferenceDataRequest[], config: IFormulaDatasetConfig, limits?: Partial<IExternalReferencePrefetchLimits>): Promise<IExternalReferencePrefetchResult>;
    cancelHost(hostUnitId: string, nextCalculationId: string): void;
    getInflightCount(): number;
    drainDirtyRanges(): IUnitRange[];
    dispose(): void;
    private _hydrateLiveUnits;
    private _hasWorkerLiveUnit;
    private _readWithInflight;
}
