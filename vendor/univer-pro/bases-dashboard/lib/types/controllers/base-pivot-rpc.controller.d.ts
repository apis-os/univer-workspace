import { Disposable, ICommandService } from '@univerjs/core';
import { BasePivotRPCService } from '../services/base-pivot-rpc.service';
export declare class BasePivotRPCController extends Disposable {
    constructor(commandService: ICommandService, rpcService: BasePivotRPCService);
}
