import type { HistoryManagerService } from '../viewer/services/history-manager.service';
export type HistoryVersionParam = Parameters<HistoryManagerService['triggerCustomVersions']>[2];
export declare function isHistoryVersionParam(value: unknown): value is HistoryVersionParam;
