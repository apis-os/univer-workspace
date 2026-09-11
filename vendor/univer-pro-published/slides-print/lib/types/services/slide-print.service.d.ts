import type { ISlidePrintOptions } from '../common/types';
import { IPrintPreparationService } from '@univerjs-pro/print';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class SlidePrintService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _injector;
    private readonly _slideDrawingService;
    private readonly _renderManagerService;
    private readonly _printPreparationService;
    private _printing;
    constructor(_univerInstanceService: IUniverInstanceService, _injector: Injector, _slideDrawingService: ISlideDrawingService, _renderManagerService: IRenderManagerService, _printPreparationService: IPrintPreparationService);
    print(unitId: string, options?: ISlidePrintOptions): Promise<boolean>;
    private _preparePrintResources;
    private _printPreparedPages;
    private _createPrintFrame;
    private _restoreThumbnailRenders;
}
