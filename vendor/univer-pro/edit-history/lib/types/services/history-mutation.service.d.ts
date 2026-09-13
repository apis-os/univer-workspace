import type { IMutationInfo } from '@univerjs/core';
import type { IHistoryComparison } from '../types';
import { HistoryGatewayService } from './history-gateway.service';
export interface IHistoryMutationEntry {
    mutation: IMutationInfo;
    memberId: string;
    revision: number;
}
export declare class HistoryMutationService {
    private readonly _gateway;
    constructor(_gateway: HistoryGatewayService);
    load(unitId: string, comparison: IHistoryComparison): Promise<IHistoryMutationEntry[]>;
}
