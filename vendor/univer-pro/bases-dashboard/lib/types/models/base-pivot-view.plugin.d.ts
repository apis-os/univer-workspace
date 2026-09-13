import type { IViewCorePlugin } from '@univerjs-pro/bases';
import type { IBasePivotViewConfig } from '../types';
import { IBaseProjectionService, IBaseViewRegistryService } from '@univerjs-pro/bases';
import { Disposable } from '@univerjs/core';
export declare class BasePivotViewPlugin extends Disposable {
    constructor(viewRegistry: IBaseViewRegistryService, projectionService: IBaseProjectionService);
}
export declare function createBasePivotViewPlugin(): IViewCorePlugin<IBasePivotViewConfig>;
