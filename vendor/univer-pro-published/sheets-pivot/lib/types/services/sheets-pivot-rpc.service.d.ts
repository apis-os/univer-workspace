import { Disposable, ICommandService } from '@univerjs/core';
import type { IGetPivotDataLocalMutationParams, ISendPivotDataLocalMutationParams } from '../const/type';
export declare class SheetsPivotRPCService extends Disposable {
    private readonly _commandService;
    private _requestResolvers;
    constructor(_commandService: ICommandService);
    handleAsyncResponse(data: ISendPivotDataLocalMutationParams): void;
    getPivotDisplayConfig(params: Omit<IGetPivotDataLocalMutationParams, 'version'>): Promise<ISendPivotDataLocalMutationParams>;
    dispose(): void;
    private _rejectRequest;
    private _generateUniqueVersion;
}
