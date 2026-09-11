import type { IUniverConfig, LocaleService } from '@univerjs/core';
type IHistoryLocaleService = Pick<LocaleService, 'getCurrentLocale' | 'getDirection' | 'getLocales'>;
export declare function getHistoryUniverLocaleConfig(localeService: IHistoryLocaleService): Pick<IUniverConfig, 'direction' | 'locale' | 'locales'>;
export declare function syncHistoryContainerDirection(container: HTMLElement, localeService: IHistoryLocaleService): void;
export {};
