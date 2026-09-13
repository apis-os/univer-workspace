import { Disposable, ICommandService, IConfigService } from '@univerjs/core';
export declare class HistoryReadOnlyController extends Disposable {
    constructor(commandService: ICommandService, configService: IConfigService);
}
