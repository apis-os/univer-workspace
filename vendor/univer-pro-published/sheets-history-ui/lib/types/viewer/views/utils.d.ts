import type { LocaleService, Nullable } from '@univerjs/core';
import type { IHistoryVersion } from '../services/history-fetch.service';
import type { IVersionWitDate } from './VersionListPanel';
export declare const parseDateWithLocale: (date: Nullable<number>, localeService: LocaleService) => {
    date: string;
    time: string;
};
export declare const parseAction: (version: IHistoryVersion, localeService: LocaleService) => string;
export declare function extractMainMutation(version: IHistoryVersion): string[];
export declare function parseDateDayWithLocale(dateString: string, localeService: LocaleService): string;
export declare function transformVersionsToDateGroup(versions?: IHistoryVersion[]): IVersionWitDate[];
