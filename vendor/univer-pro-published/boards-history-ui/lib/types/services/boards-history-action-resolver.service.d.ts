import type { IHistoryActionContext, IHistoryActionResolver } from '@univerjs-pro/edit-history-ui';
import { HistoryActionSummaryService } from '@univerjs-pro/edit-history-ui';
import { Disposable, LocaleService } from '@univerjs/core';
export declare class BoardsHistoryActionResolverService extends Disposable implements IHistoryActionResolver {
    private readonly _localeService;
    constructor(actionSummaryService: HistoryActionSummaryService, _localeService: LocaleService);
    resolve(context: IHistoryActionContext): string[];
}
