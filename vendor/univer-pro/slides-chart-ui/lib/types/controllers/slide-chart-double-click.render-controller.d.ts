import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SlideChartModelService } from '@univerjs-pro/slides-chart';
import { SlideHitTestService } from '@univerjs-pro/slides-ui';
import { ICommandService, RxDisposable } from '@univerjs/core';
export declare class SlideChartDoubleClickRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _hitTestService;
    private readonly _modelService;
    private readonly _commandService;
    constructor(_renderContext: IRenderContext<UnitModel>, _hitTestService: SlideHitTestService, _modelService: SlideChartModelService, _commandService: ICommandService);
    private _init;
}
