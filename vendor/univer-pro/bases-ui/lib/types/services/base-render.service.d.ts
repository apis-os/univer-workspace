import type { BaseViewType } from '@univerjs/core';
import type { BaseViewRenderController } from '../render/base-view-render-controller';
import type { GridRenderController } from '../views/grid/grid-render-controller';
import { Disposable } from '@univerjs/core';
import { IBaseViewUIRegistryService } from './base-view-ui-registry.service';
export interface IBaseRenderService {
    createController(viewType: BaseViewType.Grid): GridRenderController;
    createController(viewType: BaseViewType): BaseViewRenderController;
}
export declare const IBaseRenderService: import("@wendellhu/redi").IdentifierDecorator<IBaseRenderService>;
export declare class BaseRenderService extends Disposable implements IBaseRenderService {
    private readonly _viewRegistry;
    constructor(_viewRegistry: IBaseViewUIRegistryService);
    createController(viewType: BaseViewType.Grid): GridRenderController;
    createController(viewType: BaseViewType): BaseViewRenderController;
}
