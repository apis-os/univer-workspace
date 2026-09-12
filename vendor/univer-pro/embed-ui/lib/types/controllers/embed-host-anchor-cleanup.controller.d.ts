import { EmbedHostAnchorModelService } from '@univerjs-pro/embed';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
export declare class EmbedHostAnchorCleanupController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _anchorModelService;
    constructor(_univerInstanceService: IUniverInstanceService, _anchorModelService: EmbedHostAnchorModelService);
}
