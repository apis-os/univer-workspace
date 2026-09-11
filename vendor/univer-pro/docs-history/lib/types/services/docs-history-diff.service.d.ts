import type { IHistoryComparison } from '@univerjs-pro/edit-history';
import type { IDocHistoryDiff } from '../types';
import { ITransformService } from '@univerjs-pro/collaboration';
import { HistoryGatewayService } from '@univerjs-pro/edit-history';
export declare class DocsHistoryDiffService {
    private readonly _gateway;
    private readonly _transformService;
    constructor(_gateway: HistoryGatewayService, _transformService: ITransformService);
    compare(unitId: string, comparison: IHistoryComparison): Promise<IDocHistoryDiff>;
    private _transformAfterLastRevisionBarrier;
    private _transformEntry;
}
