import type { IResourceHook, UniverInstanceType } from '@univerjs/core';
import type { SlideTableModelService } from '../services/slide-table-model.service';
import type { SlideTableResourceService } from '../services/slide-table-resource.service';
import type { ISlideTableResource } from '../types';
export interface ICreateSlideTableResourceHookOptions {
    pluginName: string;
    businesses: UniverInstanceType[];
    resourceService: SlideTableResourceService;
    modelService: SlideTableModelService;
}
export declare function createSlideTableResourceHook(options: ICreateSlideTableResourceHookOptions): IResourceHook<ISlideTableResource>;
