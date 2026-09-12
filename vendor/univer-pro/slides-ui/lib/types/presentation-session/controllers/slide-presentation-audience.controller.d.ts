import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { ISlidePresentationSessionService } from '../services/slide-presentation-session.service';
export declare class SlidePresentationAudienceController extends Disposable {
    private readonly _instanceService;
    private readonly _sessionService;
    constructor(_instanceService: IUniverInstanceService, _sessionService: ISlidePresentationSessionService);
    private _init;
    private _startWithRetry;
    private _start;
}
