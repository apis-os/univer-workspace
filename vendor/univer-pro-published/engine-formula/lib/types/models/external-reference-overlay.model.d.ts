import type { IRange, IUnitRange } from '@univerjs/core';
import type { IFormulaDatasetConfig } from '@univerjs/engine-formula';
import type { IFormulaReferenceDataRequest, IFormulaReferenceDataResponse } from '../services/formula-reference-data.service';
import { Disposable } from '@univerjs/core';
import { ISuperTableService } from '@univerjs/engine-formula';
import { ExternalReferenceModel } from './external-reference.model';
export interface IExternalOverlayCellState {
    covered: boolean;
    value: unknown;
}
export declare class ExternalReferenceOverlayModel extends Disposable {
    private readonly _externalReferenceModel;
    private readonly _superTableService;
    private readonly _units;
    private readonly _pendingDirtyRanges;
    constructor(_externalReferenceModel: ExternalReferenceModel, _superTableService: ISuperTableService);
    apply(request: IFormulaReferenceDataRequest, response: IFormulaReferenceDataResponse): Array<{
        sheetId: string;
        range: IRange;
    }>;
    materialize(config: IFormulaDatasetConfig): void;
    getCellState(unitId: string, sheetId: string, row: number, column: number): IExternalOverlayCellState;
    isRangeCovered(unitId: string, sheetNameOrId: string | undefined, range: IRange): boolean;
    enforceLimits(maxCells: number, maxBytes: number): number;
    invalidateHost(hostUnitId: string): IUnitRange[];
    invalidateSyntheticUnit(unitId: string): IUnitRange[];
    invalidateSourceRange(targetUnitIdOrName: string, sheetNameOrId: string, range: IRange): IUnitRange[];
    invalidateSourceMetadata(targetUnitIdOrName: string): IUnitRange[];
    drainDirtyRanges(): IUnitRange[];
    getUnitCount(): number;
    dispose(): void;
    private _unitRanges;
    private _queueDirty;
    private _mergeSheet;
    private _oldestCoverage;
    private _coveredCellCount;
    private _estimatedBytes;
    private _writeCoverageMisses;
    private _createUnavailableSheets;
    private _registerTables;
}
