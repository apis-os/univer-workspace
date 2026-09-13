import type { IHistoryComparison } from '@univerjs-pro/edit-history';
import type { IBoardHistoryChange } from '../types';
import { HistoryMutationService } from '@univerjs-pro/edit-history';
export declare class BoardsHistoryDiffService {
    private readonly _mutationService;
    constructor(_mutationService: HistoryMutationService);
    compare(unitId: string, comparison: IHistoryComparison): Promise<IBoardHistoryChange[]>;
}
