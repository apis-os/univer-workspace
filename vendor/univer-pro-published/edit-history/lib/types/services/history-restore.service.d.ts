import type { UniverInstanceType } from '@univerjs/core';
import { ICommandService } from '@univerjs/core';
export declare class HistoryRestoreService {
    private readonly _commandService;
    constructor(_commandService: ICommandService);
    restore(unitId: string, type: UniverInstanceType, revision: number): Promise<boolean>;
}
