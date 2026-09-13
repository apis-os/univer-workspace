import type { IHistoryChangesetRange, IHistoryCreator, IHistoryListQuery, IHistoryPage, IHistoryVersion } from '../types';
import { IConfigService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
export declare class HistoryGatewayService {
    private readonly _configService;
    private readonly _httpService;
    constructor(_configService: IConfigService, _httpService: HTTPService);
    fetchVersions(unitId: string, query?: IHistoryListQuery): Promise<IHistoryPage>;
    fetchCreators(unitId: string): Promise<IHistoryCreator[]>;
    fetchVersionDetails(unitId: string, version: IHistoryVersion): Promise<IHistoryVersion[]>;
    fetchChangesets(unitId: string, comparison: IHistoryChangesetRange['comparison']): Promise<IHistoryChangesetRange>;
    private _getApiPrefix;
    private _getPageSize;
    private _assertOk;
}
