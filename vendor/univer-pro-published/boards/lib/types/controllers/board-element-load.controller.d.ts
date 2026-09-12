import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { IBoardElementService } from '../services/board-element.service';
export declare class BoardElementLoadController extends Disposable {
    private readonly _instanceSrv;
    private readonly _boardElementService;
    constructor(_instanceSrv: IUniverInstanceService, _boardElementService: IBoardElementService);
    private _initUnitListener;
    private _loadUnit;
}
